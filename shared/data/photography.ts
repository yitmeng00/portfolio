import type { PhotographyStyle } from "../interface/Photography";

export const PHOTOGRAPHY_STYLES: PhotographyStyle[] = [
  {
    id: "architecture",
    name: "Architecture",
    photos: [
      { url: "/assets/gallery/marina-bay-sands.jpg", alt: "Marina Bay Sands" },
      { url: "/assets/gallery/petronas-twin-tower.jpg", alt: "Petronas Twin Tower" },
    ],
  },
  {
    id: "nature",
    name: "Nature",
    photos: [
      { url: "/assets/gallery/mount-kinabalu.jpg", alt: "Mount Kinabalu" },
      { url: "/assets/gallery/jiancing-historic-trail.jpg", alt: "Jiancing Historic Trail" },
    ],
  },
  {
    id: "landscape",
    name: "Landscape",
    photos: [
      { url: "/assets/gallery/gamcheon-cultural-village.jpg", alt: "Gamcheon Cultural Village" },
      { url: "/assets/gallery/the-golden-bridge.jpg", alt: "The Golden Bridge" },
    ],
  },
  {
    id: "street",
    name: "Street",
    photos: [
      { url: "/assets/gallery/jiu-fen.jpg", alt: "Jiufen Old Street" },
      { url: "/assets/gallery/mangwon-market.jpg", alt: "Mangwon Market" },
    ],
  },
  {
    id: "animal",
    name: "Animal",
    photos: [
      { url: "/assets/gallery/capybara.jpg", alt: "Capybara" },
      { url: "/assets/gallery/giraffe.jpg", alt: "Giraffe" },
    ],
  },
  {
    id: "food",
    name: "Food",
    photos: [
      { url: "/assets/gallery/korean-food1.jpg", alt: "Mangwon Market Food" },
      { url: "/assets/gallery/korean-food2.jpg", alt: "Cheese Tonkatsu" },
    ],
  },
];
