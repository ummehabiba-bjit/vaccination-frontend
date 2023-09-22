import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { REGISTRATION_URL } from '@lib/api-urls'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.post(REGISTRATION_URL, req.body)
  res.status(200).json(response.data)
}
