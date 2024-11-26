export interface Project {
  title: string;
  type: string;
  job: string;
  year: string;
  featuredImage: string;  // Main image for portfolio grid
  projectImages: string[];  // Additional images for project page
  description?: string;
  link?: string;
}

export interface Service {
  name: string;
  category: 'row1' | 'row2';
}

export const projects: Project[] = [
  {
    title: "Project One",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2024",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus velit ex cursus ac, vulputate lacus aliquam.",
    featuredImage: "/images/project1.jpg",
    projectImages: [
      "/images/project1-2.jpg",
      "/images/project1-3.jpg"
    ]
  },
  {
    title: "Project Two",
    type: "BRANDING",
    job: "Freelance",
    year: "2024",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus velit ex cursus ac, vulputate lacus aliquam.",
    featuredImage: "/images/project2.jpg",
    projectImages: [
      "/images/project2-2.jpg",
      "/images/project2-3.jpg"
    ]
  },
  {
    title: "Project Three",
    type: "UI/UX DESIGN",
    job: "Freelance",
    year: "2024",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus velit ex cursus ac, vulputate lacus aliquam.",
    featuredImage: "/images/project3.jpg",
    projectImages: [
      "/images/project3-2.jpg",
      "/images/project3-3.jpg"
    ]
  },
  {
    title: "Project Four",
    type: "DEVELOPMENT",
    job: "Freelance",
    year: "2024",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus velit ex cursus ac, vulputate lacus aliquam.",
    featuredImage: "/images/project4.jpg",
    projectImages: [
      "/images/project4-2.jpg",
      "/images/project4-3.jpg"
    ]
  },
  {
    title: "Project Five",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2024",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus velit ex cursus ac, vulputate lacus aliquam.",  
    featuredImage: "/images/project5.jpg",
    projectImages: [
      "/images/project5-2.jpg",
      "/images/project5-3.jpg"
    ]
  },
  {
    title: "Project Six",
    type: "BRANDING",
    job: "Freelance",
    year: "2024",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lectus velit ex cursus ac, vulputate lacus aliquam.", 
    featuredImage: "/images/project6.jpg",
    projectImages: [
      "/images/project6-2.jpg",
      "/images/project6-3.jpg"
    ]
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
