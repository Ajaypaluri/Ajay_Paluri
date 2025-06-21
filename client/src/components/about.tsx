import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`transition-all duration-800 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">About Me</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications. 
              I specialize in the MERN stack and love creating user-centric solutions that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community through blog posts and mentoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-100 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-slate-700">5+ Years Experience</span>
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-slate-700">50+ Projects Completed</span>
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-slate-700">Remote Friendly</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-800 delay-300 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-2xl shadow-lg">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
