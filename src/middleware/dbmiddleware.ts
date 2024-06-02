// src/middleware/dbMiddleware.ts

import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ?? 'Test';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Function to connect to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState !== 1) { // 1 means connected
    const options: ConnectOptions = {
      bufferCommands: false,
    };
    await mongoose.connect(MONGODB_URI, options);
  }
};

const dbMiddleware = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  return handler(req, res);
};

export default dbMiddleware;

