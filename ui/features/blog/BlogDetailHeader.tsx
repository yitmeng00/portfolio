interface BlogGridProps {
  category: string;
  title: string;
  description?: string;
  publishedAt: string;
}

const BlogDetailHeader = ({ category, title, description, publishedAt }: BlogGridProps) => {
  return (
    <section id="blog-detail">
      <span className="blog-detail-category">{category}</span>
      <h2 className="blog-detail-title">{title}</h2>
      {description && <p className="blog-detail-desc">{description}</p>}
      <p className="blog-detail-publish-date">{publishedAt}</p>
    </section>
  );
};

export default BlogDetailHeader;
