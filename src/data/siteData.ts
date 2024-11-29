export interface Project {
  title: string;
  type: string;
  job: string;
  year: string;
  slug: string;
  featuredImage: string;  // Main image for portfolio grid
  projectImages: string[];  // Additional images for project page
  description: string;
  link?: string;
}

export interface Service {
  name: string;
  category: 'row1' | 'row2';
}

export const projects: Project[] = [
  {
    title: "Hotel Pyria",
    slug: "hotel-pyria",
    type: "WEBSITE DESIGN - BRANDING - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2024",
    featuredImage: "/images/projects/project1.png",
    projectImages: [
    ],
    description: "The Hotel Pyria website features a clean and elegant design that reflects the serene and welcoming atmosphere of the hotel. With its minimal layout, warm tones, and intuitive navigation, it offers a seamless user experience, focusing on showcasing the hotel's charm and amenities.",
    link: "https://www.hotelpyria.gr/"
  },
  {
    title: "Sitovolonas",
    slug: "sitovolonas",
    type: "WEBSITE DESIGN - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2024",
    featuredImage: "/images/projects/project2.png",
    projectImages: [

    ],
    description: "The Sitovolonas website combines earthy tones and a modern aesthetic to highlight its cozy and authentic character. The design emphasizes simplicity and nature, creating a warm, inviting digital space that mirrors the essence of the property.",
    link: "https://sitovolonas.gr/"
  },
  {
    title: "Enalion Suites",
    slug: "enalion-suites",
    type: "WEBSITE DESIGN - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2024",
    featuredImage: "/images/projects/project3.png",
    projectImages: [

    ],
    description: "The Enalion Sifnos website exudes elegance with its minimalistic design and soft, coastal-inspired color palette. It captures the essence of Sifnos with a focus on serene imagery, seamless navigation, and a luxurious yet approachable vibe.",
    link: "https://enalionsifnos.com/"
  },
  {
    title: "Niove Suites",
    slug: "niove-suites",
    type: "WEBSITE DESIGN - BRANDING - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2024",
    featuredImage: "/images/projects/project4.png",
    projectImages: [

    ],
    description: "The Niove Milos website features a clean and modern design, highlighting the natural beauty and tranquility of Milos. With bright visuals, intuitive navigation, and a focus on simplicity, it creates an inviting experience that reflects the essence of island living.",
    link: "https://niovemilos.com/"
  },
  {
    title: "Save Our Oceans",
    slug: "save-our-oceans",
    type: "POSTER DESIGN",
    job: "Case Study",
    year: "2024",
    featuredImage: "/images/projects/project16.jpg",
    projectImages: [
      
    ],
    description: "A bold and striking design highlighting the devastating impact of ocean pollution, urging action to protect marine life and our future.",
    link: "#"
  },
  {
    title: "Creative Writing Workshop",
    slug: "creative-writing-workshop",
    type: "POSTER DESIGN",
    job: "Case Study",
    year: "2023",
    featuredImage: "/images/projects/project16-1.jpg",
    projectImages: [
    ],
    description: "A vibrant and engaging poster celebrating storytelling, inviting participants to explore their creativity through writing.",
    link: "#"
  },
  {
    title: "Achilion Suites",
    slug: "achilion-suites",
    type: "WEBSITE DESIGN - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2023",
    featuredImage: "/images/projects/project5.png",
    projectImages: [
    ],
    description: "The Achillion Suites website features a sleek, modern design with a focus on luxury and comfort. Its clean layout, calming color scheme, and high-quality visuals create an inviting atmosphere, highlighting the elegance of the suites and the premium experience offered to guests.",
    link: "https://www.achillionsuites.com/"
  },
  {
    title: "Athens Plaka Family Suites",
    slug: "athena-plaka-family-suites",
    type: "WEBSITE DESIGN - BRANDING - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2023",
    featuredImage: "/images/projects/project6.png",
    projectImages: [
      
    ],
    description: "The Athens Plaka Family Suites website showcases a warm and welcoming design with a focus on family-friendly accommodations in the heart of Athens. The intuitive layout, combined with vibrant images and clear, easy navigation, highlights the comfort and convenience of the suites for family stays.",
    link: "https://athensplakafamilysuites.gr/"
  },
  {
    title: "Cretan Sea Side",
    slug: "cretan-sea-side",
    type: "WEBSITE DESIGN - BRANDING - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2023",
    featuredImage: "/images/projects/project8.png",
    projectImages: [
    ],
    description: "The Cretan Seaside website offers a fresh, modern design with a focus on the natural beauty of Crete. Its elegant layout, paired with stunning imagery of the seaside, highlights the serene and luxurious experience guests can expect, creating a relaxing and inviting atmosphere.",
    link: "https://cretanseaside.gr/"
  },
  {
    title: "Plakakia Luxury Apartments",
    slug: "plakakia-luxury-apartments",
    type: "WEBSITE DESIGN - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2023",
    featuredImage: "/images/projects/project9.png",
    projectImages: [
    ],
    description: "The Plakakia Crete website features a clean and contemporary design, showcasing the charm and beauty of its Cretan accommodations. With a user-friendly layout and vibrant imagery, it emphasizes the serene and welcoming atmosphere of the property, inviting guests to experience authentic Cretan hospitality.",
    link: "https://plakakiacrete.com/"
  },
  {
    title: "Cycladic Suites",
    slug: "cycladic-suites",
    type: "WEBSITE DESIGN - BRANDING - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2022",
    featuredImage: "/images/projects/project7.png",
    projectImages: [
    ],
    description: "The Cycladic Suites website features a minimalist design that emphasizes the natural beauty of the Cyclades. With serene, coastal-inspired visuals and a sleek layout, it offers a seamless user experience while showcasing the suites' tranquil and luxurious atmosphere.",
    link: "https://www.cycladicsuites.gr/"
  },
  {
    title: "Various Posters",
    slug: "various-posters",
    type: "POSTER DESIGN",
    job: "Case Study",
    year: "2022",
    featuredImage: "/images/projects/project19.jpg",
    projectImages: [
      "/images/projects/project19-1.jpg",
      "/images/projects/project20.jpg",
      "/images/projects/project20-1.jpg"
    ],
    description: `These posters were created with care and creativity, making the process an enjoyable one.

Poster 1 - Athena: The Warrior Goddess

Poster 2 - Medusa: A Silenced Victim

Poster 3 - Good Vibes

Poster 4 - Rewrite Your Narrative`,
    link: ""
  },
  {
    title: "Chrissi Nefeli",
    slug: "chrissi-nefel",
    type: "WEBSITE DESIGN - WEB DEVELOPMENT",
    job: "HotelRev",
    year: "2021",
    featuredImage: "/images/projects/project12.png",
    projectImages: [
    ],
    description: "The Chrissi Nefeli website presents an elegant, modern design with a focus on showcasing the beauty of its accommodations. With its clean layout, refined color palette, and high-quality imagery, it highlights the luxurious and tranquil atmosphere of the property, inviting guests to experience a peaceful getaway.",
    link: "https://chrissinefeli.gr/"
  },
  {
    title: "Stationary Design",
    slug: "stationary-design",
    type: "GRAPHIC DESIGN",
    job: "Case Study",
    year: "2021",
    featuredImage: "/images/projects/project17.png",
    projectImages: [
      "/images/projects/project17-1.png"
    ],
    description: "Both of these stationery designs showcase your attention to detail and your ability to create visually appealing and cohesive products. The first design offers a sophisticated, minimalist aesthetic, while the second design presents a more expressive, artistic approach. Both options have their own unique charm and appeal, allowing you to cater to different personal styles and preferences.",
    link: ""
  },
  {
    title: "Packaging Design",
    slug: "packaging-design",
    type: "GRAPHIC DESIGN",
    job: "Case Study",
    year: "2021",
    featuredImage: "/images/projects/project18.jpg",
    projectImages: [
    ],
    description: "Through the strategic use of color, texture, and pattern, these packaging designs effectively communicate the distinct character of each CB chocolate while unifying them under a strong, recognizable brand. The visually striking yet consistent aesthetic would likely appeal to health-conscious consumers seeking high-quality, artisanal chocolate.",
    link: ""
  }

];

export const services = {
  row1: [
    "Web Design",
    "Brand Identity",
    "UI/UX Design",
    "Web Development",
  ],
  row2: [
    "Digital Strategy",
    "Content Creation",
    "Motion Design",
    "Art Direction",
  ]
};
