import type { PhotographyStyle } from "../interface/Photography";

export const PHOTOGRAPHY_STYLES: PhotographyStyle[] = [
  {
    id: "architecture",
    name: "Architecture",
    photos: [
      { url: "/assets/gallery/marina-bay-sands.jpg", alt: "Marina Bay Sands" },
      { url: "/assets/gallery/petronas-twin-tower.jpg", alt: "Petronas Twin Tower" },
      { url: "/assets/gallery/old-hill-street-police-station.jpg", alt: "Old Hill Street Police Station" },
      { url: "/assets/gallery/singapore-building.jpg", alt: "Singapore Building" },
      { url: "/assets/gallery/vienna-building.jpg", alt: "Vienna Building" },
    ],
  },
  {
    id: "nature",
    name: "Nature",
    photos: [
      { url: "/assets/gallery/mount-kinabalu.jpg", alt: "Mount Kinabalu" },
      { url: "/assets/gallery/jiancing-historic-trail.jpg", alt: "Jiancing Historic Trail" },
      { url: "/assets/gallery/gosausee.jpg", alt: "Gosausee" },
      { url: "/assets/gallery/konigssee.jpg", alt: "Königssee" },
      { url: "/assets/gallery/hallstat.jpg", alt: "Hallstatt" },
    ],
  },
  {
    id: "landscape",
    name: "Landscape",
    photos: [
      { url: "/assets/gallery/gamcheon-cultural-village.jpg", alt: "Gamcheon Cultural Village" },
      { url: "/assets/gallery/the-golden-bridge.jpg", alt: "The Golden Bridge" },
      { url: "/assets/gallery/cesky-krumlov.jpg", alt: "Český Krumlov" },
      { url: "/assets/gallery/budapest.jpg", alt: "Budapest" },
      { url: "/assets/gallery/buda-castle.jpg", alt: "Budapest at Night" },
    ],
  },
  {
    id: "street",
    name: "Street",
    photos: [
      { url: "/assets/gallery/jiu-fen.jpg", alt: "Jiufen Old Street" },
      { url: "/assets/gallery/mangwon-market.jpg", alt: "Mangwon Market" },
      { url: "/assets/gallery/prague-street.jpg", alt: "Prague Street" },
      { url: "/assets/gallery/vienna-street1.jpg", alt: "Vienna Street" },
      { url: "/assets/gallery/vienna-street2.jpg", alt: "Vienna Street" },
    ],
  },
  {
    id: "animal",
    name: "Animal",
    photos: [
      { url: "/assets/gallery/capybara.jpg", alt: "Capybara" },
      { url: "/assets/gallery/giraffe.jpg", alt: "Giraffe" },
      { url: "/assets/gallery/alpaca.jpg", alt: "Alpaca" },
      { url: "/assets/gallery/cow.jpg", alt: "Cow" },
      { url: "/assets/gallery/deer.jpg", alt: "Deer" },
    ],
  },
  {
    id: "food",
    name: "Food",
    photos: [
      { url: "/assets/gallery/korean-food1.jpg", alt: "Mangwon Market Food" },
      { url: "/assets/gallery/korean-food2.jpg", alt: "Cheese Tonkatsu" },
      { url: "/assets/gallery/europe-food1.jpg", alt: "European Food" },
      { url: "/assets/gallery/europe-food2.jpg", alt: "European Food" },
      { url: "/assets/gallery/europe-food3.jpg", alt: "European Food" },
    ],
  },
];
