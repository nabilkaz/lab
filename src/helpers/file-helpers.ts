import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types/blog.types";
import readingTime from "reading-time";

export async function getBlogPostList() {
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter, content } = matter(rawContent);
    const { minutes } = readingTime(content);
    const readTime = Math.max(1, Math.ceil(minutes));

    blogPosts.push({
      id: fileName.replace(".mdx", ""),
      slug: fileName.replace(".mdx", ""),
      readTime,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      publishedAt: frontmatter.publishedAt,
      category: frontmatter.category,
      tags: frontmatter.tags,
      status: frontmatter.status,
      featured: frontmatter.featured,
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedAt < p2.publishedAt ? 1 : -1));
}

export async function loadBlogPost(slug: string) {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
