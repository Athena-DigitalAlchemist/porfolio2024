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
    title: "Project One",
    slug: "project-one",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2023",
    featuredImage: "/images/projects/project1.jpg",
    projectImages: [
      "/images/projects/project1.jpg",
      "/images/projects/project1-detail1.jpg",
      "/images/projects/project1-detail2.jpg"
    ],
    description: "A modern website design project showcasing clean aesthetics and intuitive navigation.",
    link: "https://example.com/project1"
  },
  {
    title: "Project Two",
    slug: "project-two",
    type: "BRANDING",
    job: "Agency",
    year: "2023",
    featuredImage: "/images/projects/project2.jpg",
    projectImages: [
      "/images/projects/project2.jpg",
      "/images/projects/project2-detail1.jpg",
      "/images/projects/project2-detail2.jpg"
    ],
    description: "Complete brand identity design including logo, color palette, and brand guidelines.",
    link: "https://example.com/project2"
  },
  {
    title: "Project Three",
    slug: "project-three",
    type: "UI/UX DESIGN",
    job: "Freelance",
    year: "2023",
    featuredImage: "/images/projects/project3.jpg",
    projectImages: [
      "/images/projects/project3.jpg",
      "/images/projects/project3-detail1.jpg",
      "/images/projects/project3-detail2.jpg"
    ],
    description: "User interface and experience design for a mobile application.",
    link: "https://example.com/project3"
  },
  {
    title: "Project Four",
    slug: "project-four",
    type: "GRAPHIC DESIGN",
    job: "Agency",
    year: "2023",
    featuredImage: "/images/projects/project4.jpg",
    projectImages: [
      "/images/projects/project4.jpg",
      "/images/projects/project4-detail1.jpg",
      "/images/projects/project4-detail2.jpg"
    ],
    description: "Print and digital graphic design for a marketing campaign.",
    link: "https://example.com/project4"
  },
  {
    title: "Project Five",
    slug: "project-five",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2023",
    featuredImage: "/images/projects/project5.jpg",
    projectImages: [
      "/images/projects/project5.jpg",
      "/images/projects/project5-detail1.jpg",
      "/images/projects/project5-detail2.jpg"
    ],
    description: "E-commerce website design with focus on user experience and conversion.",
    link: "https://example.com/project5"
  },
  {
    title: "Project Six",
    slug: "project-six",
    type: "BRANDING",
    job: "Agency",
    year: "2023",
    featuredImage: "/images/projects/project6.jpg",
    projectImages: [
      "/images/projects/project6.jpg",
      "/images/projects/project6-detail1.jpg",
      "/images/projects/project6-detail2.jpg"
    ],
    description: "Brand refresh project for an established company.",
    link: "https://example.com/project6"
  },
  {
    title: "Project Seven",
    slug: "project-seven",
    type: "UI/UX DESIGN",
    job: "Freelance",
    year: "2023",
    featuredImage: "/images/projects/project7.jpg",
    projectImages: [
      "/images/projects/project7.jpg",
      "/images/projects/project7-detail1.jpg",
      "/images/projects/project7-detail2.jpg"
    ],
    description: "Dashboard interface design for a web application.",
    link: "https://example.com/project7"
  },
  {
    title: "Project Eight",
    slug: "project-eight",
    type: "GRAPHIC DESIGN",
    job: "Agency",
    year: "2023",
    featuredImage: "/images/projects/project8.jpg",
    projectImages: [
      "/images/projects/project8.jpg",
      "/images/projects/project8-detail1.jpg",
      "/images/projects/project8-detail2.jpg"
    ],
    description: "Package design for a consumer product line.",
    link: "https://example.com/project8"
  },
  {
    title: "Project Nine",
    slug: "project-nine",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2023",
    featuredImage: "/images/projects/project9.jpg",
    projectImages: [
      "/images/projects/project9.jpg",
      "/images/projects/project9-detail1.jpg",
      "/images/projects/project9-detail2.jpg"
    ],
    description: "Portfolio website design for a creative professional.",
    link: "https://example.com/project9"
  },
  {
    title: "Project Ten",
    slug: "project-ten",
    type: "BRANDING",
    job: "Agency",
    year: "2023",
    featuredImage: "/images/projects/project10.jpg",
    projectImages: [
      "/images/projects/project10.jpg",
      "/images/projects/project10-detail1.jpg",
      "/images/projects/project10-detail2.jpg"
    ],
    description: "Visual identity system for a startup company.",
    link: "https://example.com/project10"
  },
  {
    title: "Project Eleven",
    slug: "project-eleven",
    type: "UI/UX DESIGN",
    job: "Freelance",
    year: "2023",
    featuredImage: "/images/projects/project11.jpg",
    projectImages: [
      "/images/projects/project11.jpg",
      "/images/projects/project11-detail1.jpg",
      "/images/projects/project11-detail2.jpg"
    ],
    description: "Mobile app interface design for a fitness application.",
    link: "https://example.com/project11"
  },
  {
    title: "Project Twelve",
    slug: "project-twelve",
    type: "GRAPHIC DESIGN",
    job: "Agency",
    year: "2023",
    featuredImage: "/images/projects/project12.jpg",
    projectImages: [
      "/images/projects/project12.jpg",
      "/images/projects/project12-detail1.jpg",
      "/images/projects/project12-detail2.jpg"
    ],
    description: "Editorial design for a digital magazine.",
    link: "https://example.com/project12"
  },
  {
    title: "Project Thirteen",
    slug: "project-thirteen",
    type: "WEBSITE DESIGN",
    job: "Freelance",
    year: "2023",
    featuredImage: "/images/projects/project13.jpg",
    projectImages: [
      "/images/projects/project13.jpg",
      "/images/projects/project13-detail1.jpg",
      "/images/projects/project13-detail2.jpg"
    ],
    description: "Corporate website redesign with modern aesthetics.",
    link: "https://example.com/project13"
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
