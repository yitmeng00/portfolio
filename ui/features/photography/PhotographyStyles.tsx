"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { PHOTOGRAPHY_STYLES } from "@/shared/data/photography";
import type { PhotographyStylePhoto } from "@/shared/interface/Photography";

import Lightbox from "./Lightbox";

const PhotographyStyles = () => {
  const [selected, setSelected] = useState<PhotographyStylePhoto | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="photography-styles">
      <p className="photography-styles__title">Styles</p>
      <div className="photography-styles__grid">
        {PHOTOGRAPHY_STYLES.map((style, styleIndex) => (
          <div key={style.id} className="photography-styles__item">
            <p className="photography-styles__item-label">{style.name}</p>
            <div className="photography-styles__item-photos">
              {style.photos.map((photo, i) => (
                <button
                  key={i}
                  className="photography-styles__item-photo"
                  onClick={() => setSelected(photo)}
                  aria-label={`View ${photo.alt}`}
                >
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 20vw"
                    priority={styleIndex === 0 && i === 0}
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selected && <Lightbox selectedImage={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default PhotographyStyles;
