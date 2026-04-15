import AWSSAAC03 from "@/ui/features/blog/content/AWSSAAC03";
import StakeholderDiscoverySession from "@/ui/features/blog/content/StakeholderDiscoverySession";

import { BlogPost, BlogPostDetail } from "../interface/Blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "stakeholder-discovery-sessions-as-an-engineer",
    title: "Stakeholder Discovery Sessions as an Engineer — What I Wish I Knew Earlier",
    category: "Career & Engineering",
    publishedAt: "April 15, 2026",
    thumbnailUrl: "/assets/thumbnail/meeting.jpg",
  },
  {
    slug: "aws-saa-c03-real-world-cloud-design-lessons",
    title: "What the AWS SAA-C03 Exam Actually Teaches You About Real-World Cloud Design",
    category: "AWS & Cloud",
    publishedAt: "April 15, 2026",
    thumbnailUrl: "/assets/thumbnail/aws-saa-c03-badge.png",
  },
];

export const BLOG_DETAIL: Record<string, BlogPostDetail> = {
  "stakeholder-discovery-sessions-as-an-engineer": {
    slug: "stakeholder-discovery-sessions-as-an-engineer",
    title: "Stakeholder Discovery Sessions as an Engineer — What I Wish I Knew Earlier",
    category: "Career & Engineering",
    publishedAt: "April 15, 2026",
    content: StakeholderDiscoverySession,
  },
  "aws-saa-c03-real-world-cloud-design-lessons": {
    slug: "aws-saa-c03-real-world-cloud-design-lessons",
    title: "What the AWS SAA-C03 Exam Actually Teaches You About Real-World Cloud Design",
    category: "AWS & Cloud",
    publishedAt: "April 15, 2026",
    content: AWSSAAC03,
  },
};
