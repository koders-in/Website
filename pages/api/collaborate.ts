import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
) => {
console.log(process.env);
}

export default handler;