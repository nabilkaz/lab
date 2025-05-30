import React from "react";

interface LabPostPreviewProps {
  title: string;
  tag: string;
  publishedDate: string;
  excerpt: string;
}

function LabPostPreview({
  title,
  tag,
  publishedDate,
  excerpt,
}: LabPostPreviewProps) {
  return (
    <div className="flex flex-col gap-4 border-1 border-gray-300 rounded-md p-4">
      <dl className="flex flex-col gap-2">
        <dt className="text-sm font-medium">Title</dt>
        <dd className="text-sm">{title}</dd>
        <dt className="text-sm font-medium">Tag</dt>
        <dd className="text-sm">{tag}</dd>
        <dt className="text-sm font-medium">Published Date</dt>
        <dd className="text-sm">{publishedDate}</dd>
        <dt className="text-sm font-medium">Excerpt</dt>
        <dd className="text-sm">{excerpt}</dd>
      </dl>
    </div>
  );
}

export default LabPostPreview;
