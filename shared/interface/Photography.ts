export interface PhotographyStylePhoto {
  url: string;
  alt: string;
}

export interface PhotographyStyle {
  id: string;
  name: string;
  photos: [PhotographyStylePhoto, PhotographyStylePhoto];
}
