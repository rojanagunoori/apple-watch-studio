
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), 'public/assets/hermes_series_10/band/normal');

  try {
    const imageFiles = fs.readdirSync(directoryPath);

    const images = imageFiles
      .filter((file) => file.endsWith('.jpg') || file.endsWith('.png'))
      .map((file) => `/assets/hermes_series_10/band/normal/${file}`);

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ images });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error reading directory', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred', error: 'Unknown error' });
    }
  }
}




/*import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = path.join(process.cwd(), 'public/assets/hermes_series_10/band/normal');
 //  const directoryPath = path.join(process.cwd(), 'public/assets/series_10/band/nike-sport/normal');

  try {
   // const imageFiles = fs.readdirSync(directoryPath);
     const imageFiles = fs.readdirSync(directoryPath);

  /*  const images = imageFiles
      .filter((file) => file.endsWith('.jpg') || file.endsWith('.png'))
      .map((file, index) => {
        const customName = `hermes-band-${index + 1}-${file}`;
        return `/assets/hermes_series_10/band/normal/${customName}`;
      });
      end/

      const images = imageFiles
      .filter((file) => file.endsWith('.jpg') || file.endsWith('.png'))
      .map((file) => `/assets/hermes_series_10/band/normal/${file}`); // No renaming here
     // .map((file) => `/assets/series_10/band/nike-sport/normal/${file}`);

      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({ images });

    //res.setHeader('Cache-Control', 'no-store');
   // res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ message: 'Error reading directory', error: error.message });
  }
}
*/