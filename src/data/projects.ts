export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS.",
   {
       title: "My New Project",
       type: "WEBSITE DESIGN",
       job: "Freelance",
       year: "2024",
       description: "Description of the project",
       featuredImage: "/images/myproject-main.jpg",  // Main portfolio image
       projectImages: [
           "/images/myproject-detail1.jpg",
           "/images/myproject-detail2.jpg",
           "/images/myproject-detail3.jpg"
       ]
   }
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourwebsite.com",
    featured: true,
    date: "2024-01",
  },
  // You can add more projects here following the same structure
];

// Helper functions to filter projects
export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(project => project.id === id);
