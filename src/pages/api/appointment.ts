import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { APPOINTMENT_URL } from '@lib/api-urls'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const response = await axios.post(APPOINTMENT_URL, req.body)
      res.status(200).json(response.data)
      return
    }

    let url = APPOINTMENT_URL
    if (req.query.id) {
      url += `/${req.query.id}`
    }

    const response = await axios.get(url)
    res.status(200).json(response.data)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    res.status(200).json({ message: e.message })
  }
}
