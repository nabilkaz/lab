export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Full content for detail page
  publishedAt: string; // ISO date string
  readTime: number; // minutes
  category: "experiment" | "note" | "project" | "musing";
  tags: string[];
  status: "draft" | "published" | "archived";
  featured?: boolean;
  slug: string; // URL-friendly version
}
export default BlogPost;
