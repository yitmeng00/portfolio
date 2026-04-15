import { ComponentType } from "react";

interface BlogDetailContentProps {
  content: ComponentType;
}

const BlogDetailContent = ({ content: Content }: BlogDetailContentProps) => {
  return (
    <article id="blog-detail-content">
      <Content />
    </article>
  );
};

export default BlogDetailContent;
