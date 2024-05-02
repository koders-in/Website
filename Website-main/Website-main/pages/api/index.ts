import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { Storage } from "megajs";
import fs from "fs";
import path from "path";
import { getReview } from "./scrapper";



let flag = false;



function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<any> {
  try {
    return new Promise((resolve, reject) => {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve(result);
      });
    });
  } catch (error) {
    return new Promise((resolve, reject) => {
      return reject(error);
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
  if (req.method.toLowerCase() === "get") {
    const isMemorizesReviews = await readFromFile();
    // console.log("main ...--------->",flag)
    if (req.headers.home && !flag) {
      flag = true;
      // console.log("called...--------->",flag)
      setTimeout(startInterval,43200000);
    }
    if (
      isMemorizesReviews === null ||
      Object.keys(isMemorizesReviews).length < 2
    ) {
      // console.log("no old reviews");
      const reviewList = await getReview();
      // console.log("reviewList-->",reviewList);
      writeInFile(reviewList);
      res.status(201).json(reviewList);
    } else res.status(201).json(isMemorizesReviews);
  } else {
    let storage=null;
    try {
      const multerUpload = multer({
        dest: "./public/uploads/",
        preservePath: true,
      });
      await runMiddleware(req, res, multerUpload.single("file"));
      const file = req.file;
      const handleRemove = (file: any) => {
        try {
          if (file?.path === undefined) return;
          fs.unlink(file?.path, (err) => {
            if (err) throw err;
          });
        } catch (error) {
          console.log(error);
        }
      };
      const dataObj = { msg: "", result: "" };
      let code = 200;
      fs.readFile(
        file.path,
        async (err: NodeJS.ErrnoException, data: Buffer) => {
          if (err) {
            handleRemove(file);
            return res
              .status(404)
              .json({ msg: "Error during uploading file", result: null });
          }

          try {
             storage = await new Storage({
              email: process.env.M_USERNAME,
              password: process.env.M_PASSWORD,
            }).ready;
            const link: any = await storage.upload(file.originalname, data)
              .complete;
            const url = await link.link();
            code = 200;
            dataObj["msg"] = "done";
            dataObj["result"] = url;
            if(storage){
              storage?.close();
            }
          } catch (error) {
            code = 400;
            dataObj["msg"] = error?.response;
            dataObj["result"] = null;
            if(storage){
              storage?.close();
            }
          }
          if (file) handleRemove(file);
          res.status(code).json(dataObj);
        }
      );
    } catch (error) {
      if(storage){
        storage?.close();
      }
      res.status(400).json({});
      console.log(error);
    }
  }
};

export default handler;

const writeInFile = (data) => {
  if(!data) return
  const filePath = path.join(__dirname, "review.json");
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) console.log(err);
        resolve(true);
      });
    } catch (error) {
      console.log(error)
      resolve(false);
    }
  });
};

const readFromFile = () => {
  const filePath = path.join(__dirname, "review.json");
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(filePath, "utf8", async (err, jsonString) => {
        if (err) {
          return resolve(null);
        }
        if (jsonString) {
          const data = JSON.parse(jsonString);
          return resolve(data);
        } else resolve(null);
      });
    } catch (error) {
      resolve(null);
    }
  });
};

const startInterval = async () => {
  // console.log("Interval has been started-------------->");
  await writeInFile({ jhone: "doe" });
  const res: any = await readFromFile();
  if (res?.jhone) {
    setInterval(async () => {
      const reviewList = await getReview();
      if (reviewList) writeInFile(reviewList);
    }, 43200000);
  }
};


// setTimeout(startInterval,10*1000);
