import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "@/shared/interface/Blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div id="blog-card" className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="blog-card__image-wrapper">
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className="blog-grid-category">{post.category}</span>
        <h6 className="blog-grid-title">{post.title}</h6>
      </Link>
    </div>
  );
};

export default BlogCard;
