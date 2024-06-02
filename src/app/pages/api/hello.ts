// pages/api/hello.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import dbMiddleware from '../../../middleware/dbmiddleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Perform your database operations here
  res.status(200).json({ message: 'Connected to database' });
};

export default dbMiddleware(handler);
