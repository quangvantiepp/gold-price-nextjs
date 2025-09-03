import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('🔍 Environment Variables Debug:');
  console.log('DB_URL exists:', !!process.env.DB_URL);
  console.log('ADMIN_USERNAME exists:', !!process.env.ADMIN_USERNAME);
  console.log('ADMIN_PASSWORD exists:', !!process.env.ADMIN_PASSWORD);
  console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
  
  if (process.env.DB_URL) {
    console.log('DB_URL value (first 50 chars):', process.env.DB_URL.substring(0, 50) + '...');
  }

  res.status(200).json({
    success: true,
    message: 'Environment variables check',
    env: {
      DB_URL: process.env.DB_URL ? 'SET' : 'NOT SET',
      ADMIN_USERNAME: process.env.ADMIN_USERNAME ? 'SET' : 'NOT SET', 
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? 'SET' : 'NOT SET',
      JWT_SECRET: process.env.JWT_SECRET ? 'SET' : 'NOT SET',
      NODE_ENV: process.env.NODE_ENV
    }
  });
}
