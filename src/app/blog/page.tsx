import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { bluunext } from '../fonts/bluunext';
import { manrope } from '../fonts/manrope';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-24">
      <div className="max-w-3xl w-full">
        <h1 className={`text-6xl md:text-8xl font-extrabold tracking-tight mb-12 ${bluunext.className}`}>
          Blog
        </h1>
        <div className="space-y-8">
          {allPostsData.map(({ slug, title, date, excerpt }) => (
            <article key={slug} className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${slug}`} className="block hover:opacity-70 transition-opacity">
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 ${bluunext.className}`}>
                  {title}
                </h2>
                <p className={`text-sm text-gray-600 mb-3 ${manrope.className}`}>
                  {date}
                </p>
                <p className={`text-lg ${manrope.className}`}>
                  {excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
