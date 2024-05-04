// apply

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
  try {
    const payloadData = req.body;
    if (!Object.keys(payloadData)?.length) {
      res.status(400).json({
        message: `Missing payload`,
      });
      return;
    }
    const embed = {
      embeds: [
        {
          title: "Collaboration request",
          description: `${payloadData?.name} wants to collaborate with us.`,
          color: 3447003,
          author: {
            name: payloadData?.fName,
          },
          fields: [
            {
              name: "Name",
              value: payloadData?.name,
              inline: true,
            },
            {
              name: "Email",
              value: payloadData?.email,
              inline: true,
            },
            {
              name: "Mobile Number",
              value: payloadData?.mobile,
              inline: true,
            },
            {
              name: "Company",
              value: payloadData?.company || "None",
              inline: true,
            },
            {
              name: "Company Size",
              value: payloadData?.companySize || "None",
              inline: true,
            },
            {
              name: "Location",
              value: payloadData?.location,
              inline: true,
            },
            {
              name: "Website URL",
              value: payloadData?.websiteURL,
              inline: true,
            },
            {
              name: "Job Title",
              value: payloadData?.jobTitle,
              inline: true,
            },
            {
              name: "Hear about us",
              value: payloadData?.hearAboutUS,
              inline: true,
            },
            {
              name: "Seeks benefit",
              value: payloadData?.jobTitle,
              inline: false,
            },
            {
              name: "Collaboration will bring to us",
              value: payloadData?.questionTwo,
              inline: false,
            },
          ],
        },
      ],
    };
    if (!process.env.WEBHOOK_URL) {
      res.status(400).json({
        message: "Webhook URL is not configured",
      });
      return;
    }

    if (process.env.WEBHOOK_URL) {
      const response = await axios.post(process.env.WEBHOOK_URL, embed);
      if(response.status === 204) {
        res.status(200).json({
          message: `Successfully sent`,
        });
      }else{
        res.status(400).json({
          message: `Unable to send data`,
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      message: `Unable to post data, ERROR:${error.message}`,
    });
  }
};

export default handler;
