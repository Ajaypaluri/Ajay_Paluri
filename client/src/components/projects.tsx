import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    longDescription: "A comprehensive e-commerce platform built with modern web technologies. This project showcases advanced React patterns, secure payment processing with Stripe, and a robust backend API. The application features user authentication, product catalog management, shopping cart functionality, order processing, and an admin dashboard for managing products and orders.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    features: [
      "User authentication & authorization",
      "Product catalog with search & filtering",
      "Shopping cart & checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for product management",
      "Order tracking and history"
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: "social-media",
    title: "Social Media App",
    description: "Real-time social media platform with posts, likes, comments, and messaging. Built with React, Socket.io, and Express.js for seamless user interaction.",
    longDescription: "A full-featured social media application that enables users to connect, share content, and communicate in real-time. The platform includes features like posting updates, liking and commenting on posts, real-time messaging, user profiles, and friend connections. Built with a focus on performance and user experience.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    features: [
      "Real-time messaging system",
      "Post creation with image uploads",
      "Like and comment functionality",
      "User profiles and friend connections",
      "News feed with infinite scroll",
      "Push notifications"
    ],
    liveUrl: "https://example-social.com",
    githubUrl: "https://github.com/example/social-media"
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative task management tool with drag-and-drop functionality, team collaboration features, and real-time updates for project tracking.",
    longDescription: "A modern task management application designed for teams to collaborate effectively. Features include project organization, task assignment, progress tracking, and real-time collaboration. The intuitive drag-and-drop interface makes it easy to manage workflows and track project progress.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "Drag-and-drop task management",
      "Team collaboration tools",
      "Project timeline visualization",
      "File attachments and comments",
      "Progress tracking and analytics",
      "Email notifications and reminders"
    ],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/example/task-management"
  }
];

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

export default function Projects({ onProjectSelect }: ProjectsProps) {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
