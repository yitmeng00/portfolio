import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

import { Photo } from "@/shared/interface/Gallery";

interface LightboxProps {
  selectedImage: Omit<Photo, "id">;
  onClose: () => void;
}

const Lightbox = ({ selectedImage, onClose }: LightboxProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div id="gallery-lightbox" onClick={onClose}>
      <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
        {!loaded && <div className="gallery-lightbox__skeleton" aria-hidden="true" />}
        <Image
          src={selectedImage.url}
          alt={selectedImage.alt}
          width={1200}
          height={1200}
          onContextMenu={(e) => e.preventDefault()}
          onLoad={() => setLoaded(true)}
          loading="eager"
          draggable={false}
          style={{ opacity: loaded ? 1 : 0 }}
        />
        <button className="gallery-lightbox__close" onClick={onClose}>
          <FontAwesomeIcon icon={faX} style={{ width: "20px", height: "20px" }} />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
