import { ComponentType } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  thumbnailUrl: string;
}

export interface BlogPostDetail {
  slug: string;
  title: string;
  description?: string;
  category: string;
  publishedAt: string;
  content: ComponentType;
}
