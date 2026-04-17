"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BlogPost } from "@/shared/interface/Blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div id="blog-card" className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="blog-card__image-wrapper">
          {isLoading && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => {
              if (isLoading) setIsLoading(false);
            }}
            className={`${isLoading ? "opacity-0" : "opacity-100"}`}
          />
        </div>
        <span className="blog-grid-category">{post.category}</span>
        <h2 className="blog-grid-heading">{post.title}</h2>
      </Link>
    </div>
  );
};

export default BlogCard;
