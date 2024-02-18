import Image from 'next/image';
import { bluunext } from './fonts/bluunext';
import { manrope } from './fonts/manrope';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 md:p-24">
      <div className='flex flex-col gap-y-0 items-end'>
        <Image src={'/avatar.jpg'} alt="Krystof Woldrich" width={300} height={300} className='grayscale-0.5 rounded-lg mb-4' />
        <span className={`
          text-6xl
          font-extrabold
          tracking-tight
          md:text-8xl
          ${bluunext.className}`
        }>
          Krystof
        </span>
        <span className={`
          text-6xl
          font-extrabold
          tracking-tight
          md:text-8xl
          ${bluunext.className}`
        }>
          Woldrich
        </span>
        <span className={`font-extrabold mb-4 ${manrope.className}`}>
          Mobile SDK Developer 
          <Link href="https://sentry.io" target='_blank'>
            <span className='inline-block relative'>
              <span className='sideways-underline'>@Sentry</span>
            </span>
          </Link>
        </span>
        <p className={`font-light ${manrope.className} max-w-lg text-end mb-5`}>
          {"I'm a software engineer with a passion for mobile development, and a love for building tools that make developers' lives easier. I'm currently working on the mobile SDKs at Sentry, where I'm helping developers find and fix bugs faster."}
        </p>
        <Link className={`mb-3 font-extrabold ${manrope.className}`} href="https://www.github.com/krystofwoldrich" target='_blank'>
          <span className='inline-block relative'>
            <span className='sideways-underline'>Visit GitHub</span>
          </span>
        </Link>
        <Link className={`mb-3 font-extrabold ${manrope.className}`} href="https://www.krystofwoldrich.eu/krystof_woldrich_resume.pdf" target='_blank'>
          <span className={`inline-block relative`}>
            <span className='sideways-underline'>Download resume</span>
          </span>
        </Link>
        <Link href="https://twitter.com/messages/compose?recipient_id=177336578" target='_blank'>
          <span className={`inline-block relative font-extrabold ${manrope.className}`}>
            <span className='sideways-underline'>Send me a message</span>
          </span>
        </Link>
      </div>

      {/* <Link
       className={`gap-x-1 flex items-center transition duration-500 ease-in-out hover:text-blue-400 font-extrabold ${manrope.className}`} href="https://twitter.com/messages/compose?recipient_id=177336578">
        Ping me on X!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 300 300.251"
          className="h-5 w-5  "
          >
          <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
        </svg>
      </Link>
      <Link className={`font-extrabold ${manrope.className}`} href="https://www.krystofwoldrich.eu/krystof_woldrich_resume.pdf">Get my resume!</Link>
      <Link className='transition duration-500 ease-in-out hover:text-purple-700' href="https://www.github.com/krystofwoldrich">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </Link> */}
    </main>
  );
}
