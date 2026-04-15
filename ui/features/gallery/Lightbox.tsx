import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { Photo } from "@/shared/interface/Gallery";

interface LightboxProps {
  selectedImage: Omit<Photo, "id">;
  onClose: () => void;
}

const Lightbox = ({ selectedImage, onClose }: LightboxProps) => {
  return (
    <div id="gallery-lightbox" onClick={onClose}>
      <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
        <Image
          src={selectedImage.url}
          alt={selectedImage.alt}
          width={1200}
          height={1200}
          onContextMenu={(e) => e.preventDefault()}
          loading="eager"
          draggable={false}
        />
        <button className="gallery-lightbox__close" onClick={onClose}>
          <FontAwesomeIcon icon={faX} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
