import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BLOG_DETAIL } from "@/shared/data/blog";
import { PageContainer } from "@/ui/components";
import { BlogDetailContent, BlogDetailHeader } from "@/ui/features/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

const BlogDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  const post = BLOG_DETAIL[slug];

  if (!post) notFound();

  return (
    <PageContainer className="pb-20 pt-36 xl:px-64 md:px-32 px-10">
      <Link href="/blog" className="group blog-detail__back-btn">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          style={{ width: "13px", height: "13px", color: "#504538" }}
        />
        <p>Back to Blog</p>
        <span />
      </Link>
      <BlogDetailHeader
        category={post.category}
        title={post.title}
        description={post.description}
        publishedAt={post.publishedAt}
      />
      <BlogDetailContent content={post.content} />
    </PageContainer>
  );
};

export default BlogDetailPage;
