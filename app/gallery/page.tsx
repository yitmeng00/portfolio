"use client";

import { useState } from "react";

import { PHOTOS } from "@/shared/data/gallery";
import { Photo } from "@/shared/interface/Gallery";
import { MainHeader } from "@/ui/components/layout";
import PageContainer from "@/ui/components/PageContainer";
import { AboutSection, GearSection, GalleryGrid, Lightbox } from "@/ui/features/gallery";

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<Omit<Photo, "id"> | null>(null);

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleImageClick = (img: { url: string; alt: string }) => {
    setSelectedImage(img);
  };

  return (
    <PageContainer className="py-20 px-12">
      <div>
        <MainHeader title="GALLERY" />
        <div id="gallery-info-grid">
          <AboutSection />
          <GearSection />
        </div>
        <GalleryGrid photos={PHOTOS} onImageClick={handleImageClick} />
        {selectedImage && <Lightbox selectedImage={selectedImage} onClose={handleCloseModal} />}
      </div>
    </PageContainer>
  );
};

export default PortfolioPage;
