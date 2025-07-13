"use client";
import React from "react";
import LabPostPreview from "../LabPostPreview/LabPostPreview";
import { BlogPost } from "@/types/blog.types";
import { BlogPostFilter } from "../Filter/Filter";

export default function FilterableBlogPostList({
  mockBlogPosts,
}: {
  mockBlogPosts: BlogPost[];
}) {
  const [filteredPosts, setFilteredPosts] =
    React.useState<BlogPost[]>(mockBlogPosts);
  const sortedPosts = React.useMemo(
    () =>
      filteredPosts
        .slice()
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        ),
    [filteredPosts]
  );

  return (
    <>
      <BlogPostFilter posts={mockBlogPosts} onFilterChange={setFilteredPosts} />
      <ul className="w-full space-y-6 mt-8">
        {sortedPosts.map(
          ({ id, title, tags, publishedAt, excerpt, slug }: BlogPost) => (
            <li key={id}>
              <LabPostPreview
                title={title}
                slug={slug}
                tags={tags}
                publishedDate={publishedAt}
                excerpt={excerpt}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
}
