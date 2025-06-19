import type { BlogPost } from "@/types";

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "My First Post",
    excerpt: "This is my first post",
    publishedAt: "2021-01-01",
    readTime: 5,
    category: "musing",
    tags: ["JavaScript", "React"],
    status: "published",
    slug: "my-first-post",
  },
  {
    id: "2",
    title: "My Second Post",
    excerpt: "This is my second post",
    publishedAt: "2021-01-02",
    readTime: 10,
    category: "note",
    tags: ["UI/UX", "Design"],
    status: "published",
    slug: "my-second-post",
  },
  {
    id: "3",
    title: "My Third Post",
    excerpt: "This is my third post",
    publishedAt: "2021-01-03",
    readTime: 15,
    category: "experiment",
    tags: ["Marketing", "Growth"],
    status: "published",
    slug: "my-third-post",
  },
  {
    id: "4",
    title: "My Fourth Post",
    excerpt: "This is my fourth post",
    publishedAt: "2021-01-04",
    readTime: 20,
    category: "project",
    tags: ["Physics", "Chemistry"],
    status: "published",
    slug: "my-fourth-post",
  },
  {
    id: "5",
    title: "My Fifth Post",
    excerpt: "This is my fifth post",
    publishedAt: "2021-01-05",
    readTime: 25,
    category: "musing",
    tags: ["Fitness", "Wellness"],
    status: "published",
    slug: "my-fifth-post",
  },
];

export function getUniqueTags(posts: BlogPost[]): string[] {
  return posts.reduce<string[]>((acc, { tags }) => {
    tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);
}
