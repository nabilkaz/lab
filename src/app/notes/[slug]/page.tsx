import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const { frontmatter } = await loadBlogPost(slug);
  return {
    title: frontmatter.title, // TODO: make it have site name then add title
    description: frontmatter.excerpt,
    // TODO: add open graph metadata
    // https://vercel.com/docs/og-image-generation
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content } = await loadBlogPost(slug);

  return (
    <article className="prose prose-gray max-w-none">
      <MDXRemote source={content} />
    </article>
  );
}

// TODO:
// consider migrating to static page generation
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
