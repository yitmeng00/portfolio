"use client";

import { BLOG_POSTS } from "@/shared/data/blog";
import { MainHeader } from "@/ui/components/layout";
import PageContainer from "@/ui/components/PageContainer";
import BlogGrid from "@/ui/features/blog/BlogGrid";

const BlogPage = () => {
  return (
    <PageContainer className="py-20 px-12">
      <MainHeader title="BLOG" />
      <BlogGrid posts={BLOG_POSTS} />
    </PageContainer>
  );
};

export default BlogPage;
