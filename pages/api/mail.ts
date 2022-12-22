import { NextApiRequest, NextApiResponse } from "next";
// const nodemailer = require("nodemailer");

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
) => {
  const { email, name, message } = req.headers;
  console.log(email, name, message);
  res.status(200).send("OK");

  //   async function main() {
  //     let testAccount = await nodemailer.createTestAccount();

  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: testAccount.user,
  //     pass: testAccount.pass,
  //   },
  // });
  // let info = await transporter.sendMail({
  //   from: "dev.bdt.testing@gmail.com",
  //   to: "sakshamchauhan79@gmail.com",
  //   subject: "Get new contact mail from:" + name,
  //   text: message,
  //   //   html: "<b>Hello world?</b>",
  // });
  // console.log("Message sent: %s", info.messageId);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // res.status(200).send("OK");
  //   }
  //   main().catch((e) => {
  //     console.log(e);
  //     res.status(400).send(e);
  //   });
};

export default handler;
