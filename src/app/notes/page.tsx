"use client";

import { BlogPostFilter } from "@/components/Filter/Filter";
import LabPostPreview from "@/components/LabPostPreview/LabPostPreview";
import { mockBlogPosts } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog.types";
import React from "react";

export default function Notes() {
  const [filteredPosts, setFilteredPosts] =
    React.useState<BlogPost[]>(mockBlogPosts);

  return (
    <main className="flex flex-col">
      <h1 className="text-lg font-semibold text-gray-950 mb-3 w-[120px]">
        Notes
      </h1>
      <BlogPostFilter posts={mockBlogPosts} onFilterChange={setFilteredPosts} />
      <ul className="w-full space-y-6 mt-8">
        {filteredPosts
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          .map(({ id, title, tags, publishedAt, excerpt }: BlogPost) => (
            <li key={id}>
              <LabPostPreview
                title={title}
                tags={tags}
                publishedDate={publishedAt}
                excerpt={excerpt}
              />
            </li>
          ))}
      </ul>
    </main>
  );
}
