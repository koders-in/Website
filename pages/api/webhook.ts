import { NextApiRequest, NextApiResponse } from "next";

const job = process.env.JOB;
const collaborate = process.env.COLLABORATE;
const projectRequest = process.env.PROJECT_REQUEST;

const webhook = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
    try {
        if(req?.headers?.job){
            res.status(200).json({webhook:job});
        }else if (req?.headers?.collaborate){
            res.status(200).json({webhook:collaborate});
        } else if(req?.headers?.projectrequest){
            res.status(200).json({webhook:projectRequest});
        }else{
            res.status(200).send({});
        }
    } catch (error) {
        res.status(400).send({});
    }
}

export default webhook;