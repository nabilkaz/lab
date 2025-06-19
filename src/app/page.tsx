"use client";
import React from "react";
import LabPostPreview from "@/components/LabPostPreview/LabPostPreview";
import { mockBlogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/types";
import { BlogPostFilter } from "@/components/Filter/Filter";

export default function Home() {
  const [filteredPosts, setFilteredPosts] =
    React.useState<BlogPost[]>(mockBlogPosts);

  return (
    <main className="flex flex-col">
      <h1 className="text-lg font-bold ml-4 mb-2 w-[120px]">Notes</h1>
      <BlogPostFilter posts={mockBlogPosts} onFilterChange={setFilteredPosts} />
      <ul className="w-full space-y-4 mt-6">
        {filteredPosts.map(
          ({ id, title, tags, publishedAt, excerpt }: BlogPost) => (
            <li key={id}>
              <LabPostPreview
                title={title}
                tags={tags}
                publishedDate={publishedAt}
                excerpt={excerpt}
              />
            </li>
          )
        )}
      </ul>
    </main>
  );
}
