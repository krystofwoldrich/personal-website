import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}

export default async function GET() {
  // Make sure the font exists in the specified path:
  const fontData = await fetch(
    new URL('../../src/app/fonts/bluunext/BluuNext-Bold.otf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 30,
          background: '#e6cbbf',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#100f20',
        }}
      >
        <span
          style={{
            paddingBottom: 3,
            paddingLeft: 2,
          }}
        >K</span>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'BluuNext',
          data: fontData,
          weight: 800,
          style: 'normal',
        },
      ],
    },
  );
}