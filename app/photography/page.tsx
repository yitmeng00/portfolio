import { PageContainer } from "@/ui/components";
import { MainHeader } from "@/ui/components/layout";
import AboutSection from "@/ui/features/photography/AboutSection";
import GearSection from "@/ui/features/photography/GearSection";
import PhotographyStyles from "@/ui/features/photography/PhotographyStyles";

const PhotographyPage = () => {
  return (
    <PageContainer className="py-20 px-12">
      <div>
        <MainHeader title="PHOTOGRAPHY" />
        <div id="gallery-info-grid">
          <AboutSection />
          <GearSection />
        </div>
      </div>
      <PhotographyStyles />
    </PageContainer>
  );
};

export default PhotographyPage;
