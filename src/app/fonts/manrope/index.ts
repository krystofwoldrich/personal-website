import localFont from 'next/font/local'

export const manrope = localFont({
  src: [
    {
      path: './Manrope-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Manrope-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Manrope-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Manrope-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Manrope-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Manrope-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Manrope-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})