import { motion } from "motion/react";
import type { ComponentProps } from "react";

export default interface LabPostPreviewProps
  extends ComponentProps<typeof motion.article> {
  title: string;
  tags: string[];
  publishedDate: string;
  excerpt: string;
}
