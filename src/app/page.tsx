import React from "react";
import LabPostPreview from "@/components/LabPostPreview/LabPostPreview";
import { mockBlogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/types";
import { BlogPostFilter } from "@/components/Filter/Filter";
import { TITLE } from "@/constants";
import { Metadata } from "next";
import FilterableBlogPostList from "@/components/FilterableBlogPostList/FilterableBlogPostList";
import { getBlogPostList } from "@/helpers/file-helpers";

export const metadata: Metadata = {
  title: TITLE,
  description: "Collection of my notes and thoughts",
  openGraph: {
    title: TITLE,
    description: "Collection of my notes and thoughts",
    type: "website",
  },
};

export default async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <main className="flex flex-col">
      <h1 className="text-lg font-semibold text-gray-950 mb-3">Notes</h1>
      <FilterableBlogPostList mockBlogPosts={blogPosts} />
    </main>
  );
}
