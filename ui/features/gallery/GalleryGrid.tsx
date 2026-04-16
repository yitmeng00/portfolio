"use client";

import { useState } from "react";

import { Photo } from "@/shared/interface/Gallery";

import ImageItem from "./ImageItem";

const ITEMS_PER_PAGE = 9;

interface GalleryGridProps {
  photos: Photo[];
  onImageClick: (img: Photo) => void;
}

const GalleryGrid = ({ photos, onImageClick }: GalleryGridProps) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div>
      <div id="gallery-grid">
        {visiblePhotos.map((img) => (
          <ImageItem key={img.id} img={img} onImageClick={onImageClick} />
        ))}
      </div>

      {hasMore && (
        <div className="gallery-grid__load-more">
          <button onClick={handleLoadMore} className="gallery-grid__load-more-btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
