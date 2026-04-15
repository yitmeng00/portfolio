import Image from "next/image";

import { Photo } from "@/shared/interface/Gallery";

interface GalleryGridProps {
  photos: Photo[];
  onImageClick: (img: Photo) => void;
}

const GalleryGrid = ({ photos, onImageClick }: GalleryGridProps) => {
  return (
    <div id="gallery-grid">
      {photos.map((img) => (
        <div key={img.id} className="gallery-grid__item">
          <Image
            src={img.url}
            alt={img.alt}
            width={500}
            height={500}
            onClick={() => onImageClick(img)}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
