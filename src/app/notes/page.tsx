import FilterableBlogPostList from "@/components/FilterableBlogPostList/FilterableBlogPostList";
import { mockBlogPosts } from "@/data/blogPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nabil Kazerouni • Notes",
  description:
    "Nabil Kazerouni's notes on product design, development, and more.",
};

export default function Notes() {
  return (
    <main className="flex flex-col">
      <h1 className="text-lg font-semibold text-gray-950 mb-3">
        Notes
      </h1>
      <FilterableBlogPostList mockBlogPosts={mockBlogPosts} />
    </main>
  );
}
