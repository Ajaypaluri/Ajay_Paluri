import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "feedback-system",
    title: "Anonymous Student Feedback System",
    description: "A MERN stack-based platform for students to submit feedback anonymously. Secure, efficient, and data-driven.",
    longDescription:
      "Built using MongoDB, Express, React, and Node.js, this system allows students to submit feedback anonymously using SHA-256 encryption. Professors can view analytics and feedback trends using Chart.js. Designed for academic institutions to gather honest student input securely.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    technologies: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    features: [
      "Anonymous feedback via SHA-256 encryption",
      "Admin dashboard for data viewing",
      "Professor-wise feedback charts",
      "Form validation and access control",
      "Clean responsive UI"
    ],
    liveUrl: "https://feedback-system-client-2oay1anp9-ajays-projects-b96f1c0e.vercel.app/",
    githubUrl: "https://github.com/Ajaypaluri/feedback-system-client.git"
  },
  {
    id: "lead-dashboard",
    title: "Lead Management Dashboard",
    description: "A React-based dashboard to manage leads, assign tasks, and track sales pipelines in real-time.",
    longDescription:
      "Developed for efficient lead tracking, this dashboard uses React.js with modern UI practices. It supports filtering, lead stage tracking, user assignment, and role-based access. Built for marketing and sales teams to boost productivity.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Context API", "LocalStorage"],
    features: [
      "Lead assignment and status tracking",
      "Interactive dashboard UI",
      "Search and filter functionality",
      "Responsive and mobile-friendly",
      "LocalStorage-based state persistence"
    ],
    liveUrl: "https://ajaypaluri.github.io/lead-management-dashboard/",
    githubUrl: "https://github.com/Ajaypaluri/lead-management-dashboard.git"
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    description: "Manage employee records using React frontend and Spring Boot backend with CRUD operations.",
    longDescription:
      "This full-stack application uses React for the frontend and Spring Boot as the backend to manage employees. It includes features like adding, editing, viewing, and deleting employee records with form validations and search.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Spring Boot", "REST API"],
    features: [
      "Create, Read, Update, Delete (CRUD) operations",
      "Spring Boot RESTful services",
      "Responsive UI with form validation",
      "Employee search and filter",
      "API integration with React"
    ],
    liveUrl: "https://ajaypaluri.github.io/crud-fullstack/",
    githubUrl: "https://github.com/Ajaypaluri/crud-fullstack.git"
  },
  {
    id: "banking-system",
    title: "Basic Banking System",
    description: "A simple yet effective banking system made with HTML, CSS, and JavaScript for basic fund transfers.",
    longDescription:
      "Created as a beginner-friendly frontend project to demonstrate banking logic and transaction handling. This static web app includes a basic UI for listing users and transferring funds between them using plain JavaScript.",
    image: "https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-13931.jpg?semt=ais_hybrid&w=740",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "User listing and fund transfer",
      "Basic DOM manipulation",
      "Responsive static pages",
      "Minimalist design",
      "Beginner-friendly UI"
    ],
    liveUrl: "https://ajaypaluri.github.io/Basic_Banking_system/",
    githubUrl: "https://github.com/Ajaypaluri/Basic_Banking_system.git"
  }
];


// const projects: Project[] = [
//   {
//     id: "ecommerce",
//     title: "E-commerce Platform",
//     description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
//     longDescription: "A comprehensive e-commerce platform built with modern web technologies. This project showcases advanced React patterns, secure payment processing with Stripe, and a robust backend API. The application features user authentication, product catalog management, shopping cart functionality, order processing, and an admin dashboard for managing products and orders.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
//     features: [
//       "User authentication & authorization",
//       "Product catalog with search & filtering",
//       "Shopping cart & checkout process",
//       "Payment integration with Stripe",
//       "Admin dashboard for product management",
//       "Order tracking and history"
//     ],
//     liveUrl: "https://example-ecommerce.com",
//     githubUrl: "https://github.com/example/ecommerce"
//   },
//   {
//     id: "social-media",
//     title: "Social Media App",
//     description: "Real-time social media platform with posts, likes, comments, and messaging. Built with React, Socket.io, and Express.js for seamless user interaction.",
//     longDescription: "A full-featured social media application that enables users to connect, share content, and communicate in real-time. The platform includes features like posting updates, liking and commenting on posts, real-time messaging, user profiles, and friend connections. Built with a focus on performance and user experience.",
//     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
//     technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
//     features: [
//       "Real-time messaging system",
//       "Post creation with image uploads",
//       "Like and comment functionality",
//       "User profiles and friend connections",
//       "News feed with infinite scroll",
//       "Push notifications"
//     ],
//     liveUrl: "https://example-social.com",
//     githubUrl: "https://github.com/example/social-media"
//   },
//   {
//     id: "task-management",
//     title: "Task Management App",
//     description: "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and real-time updates for project tracking.",
//     longDescription: "A modern task management application designed for teams to collaborate effectively. Features include project organization, task assignment, progress tracking, and real-time collaboration. The intuitive drag-and-drop interface makes it easy to manage workflows and track project progress.",
//     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
//     technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
//     features: [
//       "Drag-and-drop task management",
//       "Team collaboration tools",
//       "Project timeline visualization",
//       "File attachments and comments",
//       "Progress tracking and analytics",
//       "Email notifications and reminders"
//     ],
//     liveUrl: "https://example-tasks.com",
//     githubUrl: "https://github.com/example/task-management"
//   }
// ];

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

export default function Projects({ onProjectSelect }: ProjectsProps) {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg ${
                isIntersecting 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => onProjectSelect(project)}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 text-sm sm:text-base"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 font-medium flex items-center gap-2 text-sm sm:text-base"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="relative inline-block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative z-10">
              View All Projects
            </Button>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
