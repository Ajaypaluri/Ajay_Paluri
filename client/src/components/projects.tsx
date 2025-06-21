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
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Featured Projects</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                isIntersecting 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => onProjectSelect(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
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

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
