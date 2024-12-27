import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), 'public/assets/series_10/cases');

  try {
    const imageFiles = fs.readdirSync(directoryPath);

    const images = imageFiles
      .filter((file) => file.endsWith('.jpg') || file.endsWith('.png'))
      .map((file) => {
      //  const customName = `series-cases-${index + 1}-${file}`;
        //return `/assets/series_10/cases/${customName}`;
        return `/assets/series_10/cases/${file}`;
      });

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
