"use client";
import React from "react";
import { motion } from "motion/react";
import type LabPostPreviewProps from "@/components/LabPostPreview/LabPostPreview.type";

function LabPostPreview({
  title,
  tags,
  publishedDate,
  excerpt,
  ...delegated
}: LabPostPreviewProps) {
  const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      className="flex flex-col gap-2 p-4 w-full"
      {...delegated}
    >
      <div className="flex flex-row justify-between items-start">
        <time
          className="text-sm text-gray-500 w-[120px]"
          dateTime={publishedDate}
        >
          {formattedDate}
        </time>
        <div className="flex flex-col flex-1 px-2">
          <h2 className="text-sm font-medium">{title}</h2>
          <p className="text-sm text-gray-500 line-clamp-2">{excerpt}</p>
        </div>
        <div className="flex flex-row gap-1 w-[120px] justify-end">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default LabPostPreview;
