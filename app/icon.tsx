import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = {
  width: 256,
  height: 256,
}
export const contentType = 'image/png'

export default function Icon() {
  // Read the original image from the public folder
  const imagePath = path.join(process.cwd(), 'public', 'me.png');
  const imageData = fs.readFileSync(imagePath);
  const src = `data:image/png;base64,${imageData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0F14',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src={src}
          style={{
            width: '220%', // Zoom in significantly
            height: '220%',
            objectFit: 'cover',
            objectPosition: 'center 5%', // Focus on the very top of the image (face area)
          }}
        />
      </div>
    ),
    { ...size }
  )
}
