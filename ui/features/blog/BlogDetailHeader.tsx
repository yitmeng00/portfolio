interface BlogGridProps {
  category: string;
  title: string;
  publishedAt: string;
}

const BlogDetailHeader = ({ category, title, publishedAt }: BlogGridProps) => {
  return (
    <section id="blog-detail">
      <span className="blog-detail-category">{category}</span>
      <h2 className="blog-detail-title">{title}</h2>
      <p className="blog-detail-publish-date">{publishedAt}</p>
    </section>
  );
};

export default BlogDetailHeader;
