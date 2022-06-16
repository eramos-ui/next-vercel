// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import { NextApiRequest } from "next";
import {NextApiRequest, NextApiResponse } from "../../node_modules/next/dist/shared/lib/utils";

type Data = {
  name: string
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })// probar con http://localhost:3000/api/hello
}
