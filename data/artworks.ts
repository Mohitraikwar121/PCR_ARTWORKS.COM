export type Artwork = {
  id: string;
  title: string;
  year: string;
  medium: string;
  category: string;
  series: string;
  description: string;
  status: string;
  slug: string;
  image: string;
  featured?: boolean;
  priority?: number;
};

export const artworks: Artwork[] = [
  {
    id: "mural-waterworks",
    title: "Waterworks Mural",
    year: "",
    medium: "Hand-painted public mural",
    category: "Public Murals",
    series: "Large-Scale Works",
    description: "A large-scale painted wall project documented while the artist works directly on the mural.",
    status: "PROJECT",
    slug: "waterworks-mural",
    image: "/images/mural-waterworks.png",
    featured: true,
    priority: 1,
  },
  {
    id: "johnny-johnny",
    title: "Johnny Johnny Mural",
    year: "",
    medium: "Hand-painted mural",
    category: "Public Murals",
    series: "Illustrative Works",
    description: "A colourful narrative mural featuring illustrated characters and hand-painted lettering, documented during the artist's work on site.",
    status: "PROJECT",
    slug: "johnny-johnny-mural",
    image: "/images/mural-johnny-johnny.png",
    featured: true,
    priority: 2,
  },
  {
    id: "hanuman",
    title: "Large-Scale Hanuman Sculpture",
    year: "",
    medium: "Large-scale painted sculpture",
    category: "Sculpture & Large-Scale Works",
    series: "Large-Scale Works",
    description: "A monumental Hanuman sculpture shown during an active finishing and painting stage, surrounded by traditional bamboo scaffolding.",
    status: "PROJECT",
    slug: "hanuman-sculpture",
    image: "/images/hanuman-sculpture-process.png",
    featured: true,
    priority: 3,
  },
  {
    id: "waterworks-process",
    title: "Waterworks — Process",
    year: "",
    medium: "Hand-painted public signage",
    category: "Process",
    series: "Large-Scale Works",
    description: "On-site process documentation showing the artist painting lettering and imagery on a large public-facing surface.",
    status: "PROCESS",
    slug: "waterworks-process",
    image: "/images/mural-waterworks-process.png",
    priority: 4,
  },
  {
    id: "sai-gyan",
    title: "Sai Gyan Mandir School Mural",
    year: "",
    medium: "Hand-painted wall lettering",
    category: "Public Murals",
    series: "Community Works",
    description: "A large educational wall painting documented while the artist works on the lettering and finishing details.",
    status: "PROJECT",
    slug: "sai-gyan-mandir-mural",
    image: "/images/mural-sai-gyan.png",
    priority: 5,
  },
];
