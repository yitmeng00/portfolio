"use client";

import { BLOG_POSTS } from "@/shared/data/blog";
import { PageContainer } from "@/ui/components";
import { MainHeader } from "@/ui/components/layout";
import { BlogGrid } from "@/ui/features/blog";

const BlogPage = () => {
  return (
    <PageContainer className="py-20 px-12">
      <MainHeader title="BLOG" />
      <BlogGrid posts={BLOG_POSTS} />
    </PageContainer>
  );
};

export default BlogPage;
