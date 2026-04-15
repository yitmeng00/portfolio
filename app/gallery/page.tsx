"use client";

import { useState } from "react";

import { photos } from "@/shared/data/gallery";
import { Photo } from "@/shared/interface/Gallery";
import { MainHeader } from "@/ui/components/layout";
import PageContainer from "@/ui/components/PageContainer";
import { AboutSection, GearSection, GalleryGrid, Lightbox } from "@/ui/features/gallery";

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<Omit<Photo, "id"> | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);

    // Delay unmount so transition doesn't flicker
    setTimeout(() => {
      setSelectedImage(null);
    }, 200);
  };

  const handleImageClick = (img: { url: string; alt: string }) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  return (
    <PageContainer className="py-20 px-12">
      <div>
        <MainHeader title="GALLERY" />
        <div id="gallery-info-grid">
          <AboutSection />
          <GearSection />
        </div>
        <GalleryGrid photos={photos} onImageClick={handleImageClick} />
        <Lightbox selectedImage={selectedImage} isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    </PageContainer>
  );
};

export default PortfolioPage;
