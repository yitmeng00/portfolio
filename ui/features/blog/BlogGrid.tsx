import { useState } from "react";

import { BlogPost } from "@/shared/interface/Blog";

import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

const POSTS_PER_LOAD = 6;

const BlogGrid = ({ posts }: BlogGridProps) => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_LOAD);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_LOAD);
  };

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <>
      <div id="blog-grid">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {hasMore && (
        <div className="blog-grid__load-more-btn-wrapper">
          <button onClick={handleLoadMore} className="blog-grid__load-more-btn">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default BlogGrid;
