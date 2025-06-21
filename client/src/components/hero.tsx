import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white bg-opacity-10 rounded-full floating-animation hidden sm:block" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full floating-animation-delayed hidden sm:block" />
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-white bg-opacity-10 rounded-full floating-animation-delayed-2 hidden sm:block" />
      
      <div className="text-center text-white px-4 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          <span>John</span> <span>Smith</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto px-4 sm:px-0 drop-shadow-md">
          Full Stack Developer crafting modern web experiences with the MERN stack
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() => scrollToSection("#projects")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 drop-shadow-lg backdrop-blur-sm w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300 text-2xl"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300 text-2xl"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300 text-2xl"
          >
            <Twitter />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="text-white text-2xl hover:text-green-400 transition-colors duration-300"
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  );
}
