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
          title: "Client request",
          description: `${payloadData?.fName} is requested for project`,
          color: 3447003,
          author: {
            name: payloadData?.fName,
          },
          fields: [
            {
              name: "First Name",
              value: payloadData?.fName,
              inline: true,
            },
            {
              name: "Last Name",
              value: payloadData?.lName,
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
              name: "Company Name",
              value: payloadData?.company || "Not Provided",
              inline: true,
            },
            {
              name: "Role",
              value: payloadData?.role || "Not Provided",
              inline: true,
            },
            {
              name: "Technologies",
              value: payloadData?.technologies.toString(),
              inline: true,
            },
            {
              name: "About Project",
              value: payloadData?.aboutProject || "None",
              inline: true,
            },
            {
              name: "Client Budget",
              value: payloadData?.budget || "None",
              inline: true,
            },
            {
              name: "Timeline of Project",
              value: payloadData?.timeline,
              inline: true,
            },
            {
              name: "Pricing Plan",
              value: payloadData?.pricingPlan,
              inline: true,
            },
          ],
        },
      ],
    };

    if (process.env.WEBHOOK_URL) {
      const response =  await axios.post(process.env.WEBHOOK_URL, embed);
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
