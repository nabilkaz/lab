import FilterableBlogPostList from "@/components/FilterableBlogPostList/FilterableBlogPostList";
import { TITLE } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${TITLE} • Notes`,
  description: "Collection of my notes and thoughts",
};

export default async function Notes() {
  const blogPosts = await getBlogPostList();
  return (
    <main className="flex flex-col">
      <h1 className="text-lg font-semibold text-gray-950 mb-3">Notes</h1>
      <FilterableBlogPostList mockBlogPosts={blogPosts} />
    </main>
  );
}
