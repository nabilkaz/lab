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
      className="flex flex-col gap-3 w-full"
      {...delegated}
    >
      <div className="flex flex-row items-start w-full">
        <div className="flex flex-col flex-1 pl-0">
          <h2 className="text-sm font-bold text-gray-950 leading-snug">
            {title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mt-1">
            {excerpt}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs text-gray-500 font-light bg-gray-100 px-2 py-0.5 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <time
          className="text-sm w-[120px] text-right ml-4"
          dateTime={publishedDate}
        >
          {formattedDate}
        </time>
      </div>
    </motion.article>
  );
}

export default LabPostPreview;
