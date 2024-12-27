import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), 'public/assets/hermes_series_10/cases');

  try {
    const imageFiles = fs.readdirSync(directoryPath);

    const images = imageFiles
      .filter((file) => file.endsWith('.jpg') || file.endsWith('.png'))
      .map((file) => {
        //const customName = `hermes-cases-${index + 1}-${file}`;
        return `/assets/hermes_series_10/cases/${file}`;
        //return `/assets/hermes_series_10/cases/${customName}`;
      });

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ message: 'Error reading directory', error: error.message });
  }
}
