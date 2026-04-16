import Image from "next/image";
import { useState } from "react";

import { Photo } from "@/shared/interface/Gallery";

interface ImageItemProps {
  img: Photo;
  onImageClick: (img: Photo) => void;
}

const ImageItem = ({ img, onImageClick }: ImageItemProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="gallery-grid__item">
      {!loaded && <div className="gallery-grid__skeleton" aria-hidden="true" />}
      <Image
        src={img.url}
        alt={img.alt}
        width={500}
        height={500}
        loading="lazy"
        onClick={() => onImageClick(img)}
        onLoad={() => setLoaded(true)}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
};

export default ImageItem;
