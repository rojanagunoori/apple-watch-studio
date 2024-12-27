import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), 'public/assets/series_10/band/nike-sport/normal');

  try {
    const imageFiles = fs.readdirSync(directoryPath);

    // Filter out only .jpg and .png files (if needed)
    const images = imageFiles.filter((file) => file.endsWith('.jpg') || file.endsWith('.png')).map((file) => `/assets/series_10/band/nike-sport/normal/${file}`);

    // Set cache-control headers to prevent caching
    res.setHeader('Cache-Control', 'no-store');

    res.status(200).json({ images });
  }  catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error reading directory', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred', error: 'Unknown error' });
    }
  }
}
