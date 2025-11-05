import { notFound } from 'next/navigation';
import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { bluunext } from '../../fonts/bluunext';
import { manrope } from '../../fonts/manrope';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-24">
      <div className="max-w-3xl w-full">
        <Link
          href="/blog"
          className={`inline-block mb-8 font-medium text-gray-600 hover:text-gray-900 transition-colors ${manrope.className}`}
        >
          ← Back to Blog
        </Link>
        <article>
          <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-4 ${bluunext.className}`}>
            {postData.title}
          </h1>
          <p className={`text-sm text-gray-600 mb-8 ${manrope.className}`}>
            {postData.date}
          </p>
          <div
            className={`prose prose-lg max-w-none ${manrope.className}`}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </div>
    </main>
  );
}
