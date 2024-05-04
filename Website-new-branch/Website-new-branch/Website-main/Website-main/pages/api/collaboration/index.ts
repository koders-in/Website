// apply

import { NextApiRequest, NextApiResponse } from "next";
import { axiosClient } from "../../../helper/api";

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
  try {
    const response = await axiosClient.post("collaboration", {
      headers: {
        "Content-type": "application/json",
        "x-hasura-admin-secret": process.env.XH_API_KEY,
        "Accept-Encoding": "*",
      },
      data: {...req.body }
    });
    res.status(200).json(response?.data);
    // TODO=> need to add discord webhook here
  } catch (error) {
    res.status(400).json({
      message: `Unable to send request, ERROR:${error.message}`,
    });
  }
};

export default handler;
