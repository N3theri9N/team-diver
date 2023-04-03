// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result: string;
  message: string;
  image?: string;
};


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    res.status(200).json({ result: "200 success", message: "Image Output Generated", image: BASE_64_IMAGE });
  } else {
    res.status(403).json({ result: "403 error", message: "Not allowed method" });
  }
  return;
}