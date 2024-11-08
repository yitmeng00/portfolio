"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";
import Link from "@mui/material/Link";

const SmartTourismMobileApp = () => {
  const techStack = [
    "Java",
    "Firebase",
    "Google Location API",
    "Google Maps API",
    "News API",
    "Android",
    "XML",
  ];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="Go. Travel" />
      <PageContainer>
        <h3>A Smart Tourism Guide Android application I developed for my final year project.</h3>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__img-container">
            <div className="project-about__img-wrapper">
              <img src="/assets/projects/fyp-homepage.png" alt="FYP Homepage Screen" />
              <p>Home Screen</p>
            </div>
            <div className="project-about__img-wrapper">
              <img src="/assets/projects/fyp-sidebar.png" alt="FYP Sidebar Screen" />
              <p>Side Navigation Bar</p>
            </div>
            <div className="project-about__img-wrapper">
              <img src="/assets/projects/fyp-all-categories.png" alt="FYP All Categories Screen" />
              <p>All Categories Screen</p>
            </div>
            <div className="project-about__img-wrapper">
              <img src="/assets/projects/fyp-review.png" alt="FYP Review and Rating Screen" />
              <p>Review and Rating Screen</p>
            </div>
            <div className="project-about__img-wrapper">
              <img src="/assets/projects/fyp-saved-place.png" alt="FYP Favourite Place Screen" />
              <p>Favourite Place Screen</p>
            </div>
            <div className="project-about__img-wrapper">
              <img src="/assets/projects/fyp-google-maps.jpg" alt="FYP Google Maps Screen" />
              <p>Google Maps Screen</p>
            </div>
          </div>
          <div className="project-about__container">
            <p>
              Go.Travel was built using Java with a minimum SDK of API 16 (Android 4.1). XML was
              used for layout and styling, and Firebase was used as the real-time database. The core
              objective of the app is to enhance the travel experience.
            </p>
            <p>
              Some of the key features of the app included a variety of detailed categories of
              places, location-based services with Google Maps to allow users to search for nearby
              places of interest, a travel forum for users to share their travel experiences, an
              option for users to save their favorite places within the app, the ability to review
              and rate places, and access to travel-related articles directly within the app to stay
              informed.
            </p>
            <p>
              One of the main challenges encountered during development was handling the Firebase
              Realtime Database’s nested data structure. The nested format made it difficult to
              query specific data efficiently, as Firebase Realtime Database is optimized for
              shallow queries rather than deep nested ones. To address this, I restructured the
              database by flattening the data into separate collections for locations and reviews,
              improving query performance and scalability.
            </p>
            <p>
              My journal article on this project was published by the Journal of Advances in
              Artificial Life Robotics in October 2022 —{" "}
              <span>
                <Link
                  href="https://www.jstage.jst.go.jp/article/jaalr/3/2/3_7/_article"
                  underline="always"
                  sx={{ color: "#504538", textDecorationColor: "#504538" }}
                >
                  Publication
                </Link>
                .
              </span>
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default SmartTourismMobileApp;
