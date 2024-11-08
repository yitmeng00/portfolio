"use client";

import { NavigateBackBtn } from "@/ui/components/button";
import { MainHeader } from "@/ui/components/layout";
import MainChip from "@/ui/components/MainChip";
import PageContainer from "@/ui/components/PageContainer";
import SectionWrapper from "@/ui/components/SectionWrapper";

const ResponsiveWebsite = () => {
  const techStack = [
    "Vue.js",
    "Nuxt",
    "Buefy",
    "Bulma",
    "JavaScript",
    "HTML",
    "CSS",
    "WordPress",
    "SEO",
    "Caching",
    "Web Hosting",
  ];

  return (
    <>
      <NavigateBackBtn />
      <MainHeader title="Responsive Website" />
      <PageContainer>
        <h3>Crafting and optimizing web solutions to reflect brand identity.</h3>
        <SectionWrapper title="TECHNOLOGIES">
          <MainChip techStack={techStack} />
        </SectionWrapper>
        <SectionWrapper title="ABOUT">
          <div className="project-about__container">
            <p>
              I have had the opportunity to develop and customize WordPress websites for different
              clients in industries such as Green IT infrastructure, construction, consultancy, IoT,
              and e-commerce. Utilizing page builders like Divi, Elementor, and WPBakery, along with
              essential plugins, I tailored each site to reflect the client’s brand identity. My
              responsibilities extended to image optimization for faster load times, implementing
              SEO best practices to boost search visibility, applying caching techniques to enhance
              performance, and ensuring each site was fully responsive across devices. Additionally,
              I managed the setup and maintenance of web hosting, working with providers like
              GoDaddy and Exabytes to ensure the stability and accessibility of each site.
            </p>
            <p>
              Currently, I am working on enhancing my company’s official website, collaborating
              closely with the UI/UX design team to align with their creative vision. Leveraging
              Vue.js with the Nuxt framework, Buefy for UI components, and Bulma for styling, I am
              developing and implementing new features, refining and restructuring page designs, and
              ensuring responsiveness across devices.
            </p>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

export default ResponsiveWebsite;
