import { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios");

const hasura = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
  try {
    if (req?.headers?.method === "get") {
      const response = await axios.get(req?.headers?.url, {
        headers: {
          "Content-type": "application/json",
          "x-hasura-admin-secret": process.env.XH_API_KEY,
          "Accept-Encoding": "*",
        },
      });
      res.status(200).json(response?.data || {});
    } else {
      const rawPayload: any = req.headers.payload;
      const payload = JSON.parse(rawPayload);
      const response = await axios({
        method: "post",
        url: req?.headers?.url,
        headers: {
          "Content-type": "application/json",
          "x-hasura-admin-secret": process.env.XH_API_KEY,
        },
        data: {
          ...payload,
        },
      });
      res.status(200).send({
        data:response.data
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

export default hasura;
