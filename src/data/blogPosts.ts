import type { BlogPost } from "@/types";

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Codebase Exploration Framework",
    excerpt:
      "Developed a systematic two-layer approach for exploring unfamiliar repositories - technology assessment plus structured exploration questions that work across any tech stack.",
    publishedAt: "2025-06-28",
    readTime: 8,
    category: "understand",
    tags: ["Learning Framework", "Mental Models", "Codebase Exploration"],
    status: "published",
    slug: "codebase-exploration-framework",
  },
  {
    id: "2",
    title: "TypeScript Union Types: Beyond String Constraints",
    excerpt:
      "How union types with the pipe operator transform type safety - from preventing invalid values to building compositional type systems with proper error location control.",
    publishedAt: "2025-06-29",
    readTime: 6,
    category: "apply",
    tags: ["TypeScript", "Type Safety", "Developer Experience"],
    status: "published",
    slug: "typescript-union-types-constraints",
  },
  {
    id: "3",
    title: "React Forms: Why onSubmit Beats onClick",
    excerpt:
      "The onClick Parable from Joy of React taught me why leveraging browser form capabilities creates better UX - Enter key support, accessibility, and validation come free.",
    publishedAt: "2025-06-30",
    readTime: 5,
    category: "explore",
    tags: ["React", "Forms", "Web Platform", "UX"],
    status: "published",
    slug: "react-forms-onsubmit-onclick-parable",
  },
  {
    id: "4",
    title: "Font Weight Strategy: Typography as Interface Design",
    excerpt:
      "ShiftNudge's font weight lesson revealed how weight + negative space + color creates visual hierarchy more effectively than size alone - with practical CSS implementation.",
    publishedAt: "2025-06-29",
    readTime: 7,
    category: "teach",
    tags: ["Typography", "Design Systems", "Visual Hierarchy", "CSS"],
    status: "published",
    slug: "font-weight-strategy-interface-design",
  },
  {
    id: "5",
    title: "Promise Types in TypeScript: API Safety Patterns",
    excerpt:
      "Three approaches to typing async functions and API responses - explicit Promise return types, response typing, and type casting with their safety trade-offs.",
    publishedAt: "2025-06-28",
    readTime: 4,
    category: "apply",
    tags: ["TypeScript", "Async", "API Integration", "Type Safety"],
    status: "published",
    slug: "promise-types-typescript-api-safety",
  },
  {
    id: "6",
    title: "Cross-Domain Learning: Mental Model Evolution Tracking",
    excerpt:
      "How quiz-driven retention testing revealed natural pattern recognition across TypeScript, React, and design - building bridges between technical and visual thinking.",
    publishedAt: "2025-06-30",
    readTime: 9,
    category: "understand",
    tags: ["Learning Systems", "Mental Models", "Cross-Domain Integration"],
    status: "published",
    slug: "cross-domain-learning-mental-model-evolution",
  },
];

export function getUniqueTags(posts: BlogPost[]): string[] {
  const uniqueTags = new Set<string>();
  posts.forEach(({ tags }) => {
    tags.forEach((tag) => uniqueTags.add(tag));
  });
  return Array.from(uniqueTags);
}

export function getUniqueCategories(posts: BlogPost[]): string[] {
  const uniqueCategories = new Set<string>();
  posts.forEach(({ category }) => {
    uniqueCategories.add(category);
  });
  return Array.from(uniqueCategories);
}
