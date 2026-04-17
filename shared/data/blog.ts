import {
  AWSSAAC03,
  StakeholderDiscoverySession,
  VolunteerAnimalShelter,
} from "@/ui/features/blog/content";

import { BlogPost, BlogPostDetail } from "../interface/Blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "volunteering-at-an-animal-shelter",
    title: "I Volunteered at an Animal Shelter for a Full Day — Here's What Nobody Tells You",
    category: "Volunteering & Community",
    publishedAt: "April 15, 2026",
    thumbnailUrl: "/assets/thumbnail/stray-dogs.jpg",
  },
  {
    slug: "aws-saa-c03-real-world-cloud-design-lessons",
    title: "What the AWS SAA-C03 Exam Actually Teaches You About Real-World Cloud Design",
    category: "AWS & Cloud",
    publishedAt: "April 15, 2026",
    thumbnailUrl: "/assets/thumbnail/aws-saa-c03-badge.png",
  },
  {
    slug: "stakeholder-discovery-sessions-as-an-engineer",
    title: "Stakeholder Discovery Sessions as an Engineer — What I Wish I Knew Earlier",
    category: "Career & Engineering",
    publishedAt: "April 15, 2026",
    thumbnailUrl: "/assets/thumbnail/meeting.jpg",
  },
];

export const BLOG_DETAIL: Record<string, BlogPostDetail> = {
  "volunteering-at-an-animal-shelter": {
    slug: "volunteering-at-an-animal-shelter",
    title: "I Volunteered at an Animal Shelter for a Full Day — Here's What Nobody Tells You",
    category: "Volunteering & Community",
    publishedAt: "April 15, 2026",
    content: VolunteerAnimalShelter,
    description:
      "It's 7:30am to 11:30pm of meaningful and deeply rewarding work — and I'd do it again without hesitation.",
  },
  "aws-saa-c03-real-world-cloud-design-lessons": {
    slug: "aws-saa-c03-real-world-cloud-design-lessons",
    title: "What the AWS SAA-C03 Exam Actually Teaches You About Real-World Cloud Design",
    category: "AWS & Cloud",
    publishedAt: "April 15, 2026",
    content: AWSSAAC03,
    description:
      "I passed the exam. But more than the certification, I came away thinking differently about how to architect systems — and that surprised me.",
  },
  "stakeholder-discovery-sessions-as-an-engineer": {
    slug: "stakeholder-discovery-sessions-as-an-engineer",
    title: "Stakeholder Discovery Sessions as an Engineer — What I Wish I Knew Earlier",
    category: "Career & Engineering",
    publishedAt: "April 15, 2026",
    content: StakeholderDiscoverySession,
    description:
      "Nobody tells you this in school. You write clean code, pass your tests, ship your features — and then a single meeting with the wrong assumptions unravels months of work.",
  },
};
