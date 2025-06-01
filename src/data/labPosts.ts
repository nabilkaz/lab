import { LabPostPreviewProps } from "@/components/LabPostPreview/LabPostPreview";

export interface LabPost extends LabPostPreviewProps {
  id: string;
}

export const mockLabPosts: LabPost[] = [
  {
    id: "1",
    title: "My First Post",
    tags: ["Tag"],
    publishedDate: "2025-01-01",
    excerpt: "This is my first post",
  },
  {
    id: "2",
    title: "My Second Post",
    tags: ["Tag"],
    publishedDate: "2025-01-02",
    excerpt: "This is my second post",
  },
  {
    id: "3",
    title: "My Third Post",
    tags: ["Tag"],
    publishedDate: "2025-01-03",
    excerpt: "This is my third post",
  },
  {
    id: "4",
    title: "My Fourth Post",
    tags: ["Tag"],
    publishedDate: "2025-01-04",
    excerpt: "This is my fourth post",
  },
  {
    id: "5",
    title: "My Fifth Post",
    tags: ["Tag"],
    publishedDate: "2025-01-05",
    excerpt: "This is my fifth post",
  },
];
