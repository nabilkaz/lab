export type Status = "loading" | "success" | "error";
export type Category = "experiment" | "note" | "project" | "musing";
export type Theme = "light" | "dark";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Full content for detail page
  publishedAt: string; // ISO date string
  readTime: number; // minutes
  category: Category;
  tags: string[];
  status: "draft" | "published" | "archived";
  featured?: boolean;
  slug: string; // URL-friendly version
}
export default BlogPost;
