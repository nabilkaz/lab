import LabPostPreview from "@/components/LabPostPreview/LabPostPreview";
import { getUniqueTags, getBlogPostList } from "@/lib/blog";
import { toSentenceCase } from "@/lib/utils";
import { BlogPost } from "@/types/blog.types";
import React from "react";

export default async function Topics() {
  const filteredPosts = await getBlogPostList();
  const uniqueTags = getUniqueTags(filteredPosts);
  const tagsMap = uniqueTags.reduce<Record<string, BlogPost[]>>((acc, tag) => {
    acc[tag] = filteredPosts.filter((post) => post.tags.includes(tag));
    return acc;
  }, {});

  return (
    <main>
      <h1 className="text-lg font-semibold text-gray-950 mb-3 w-[120px]">
        Topics
      </h1>
      {uniqueTags.map((tag) => (
        <div key={tag} className="mt-16">
          <h2 className="font-bold text-gray-900 text-lg mb-3">
            {toSentenceCase(tag)}
          </h2>
          <ul className="space-y-6 mt-2">
            {tagsMap[tag]
              .sort(
                (a, b) =>
                  new Date(b.publishedAt).getTime() -
                  new Date(a.publishedAt).getTime()
              )
              .map((post) => (
                <li key={post.id}>
                  <LabPostPreview
                    title={post.title}
                    tags={post.tags}
                    publishedDate={post.publishedAt}
                    excerpt={post.excerpt}
                    slug={post.slug}
                  />
                </li>
              ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
