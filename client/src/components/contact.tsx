// import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
// import { useState } from "react";
// // import { useMutation } from "@tanstack/react-query";
// // import { apiRequest } from "@/lib/queryClient";
// // import { ContactFormData } from "@/lib/types";

// export default function Contact() {
//   const { ref, isIntersecting } = useIntersectionObserver();
//   const { toast } = useToast();
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   // const handleSubmit = (e: React.FormEvent) => {
//   // No need to handle manually if using Formspree
//   // just let the browser submit the form
// };


//   // const contactMutation = useMutation({
//   //   mutationFn: async (data: ContactFormData) => {
//   //     const response = await apiRequest("POST", "/api/contact", data);
//   //     return response.json();
//   //   },
//   //   onSuccess: () => {
//   //     toast({
//   //       title: "Message sent successfully!",
//   //       description: "Thank you for your message. I'll get back to you soon.",
//   //     });
//   //     setFormData({ name: "", email: "", subject: "", message: "" });
//   //   },
//   //   onError: (error: any) => {
//   //     toast({
//   //       title: "Failed to send message",
//   //       description: error.message || "Please try again later.",
//   //       variant: "destructive",
//   //     });
//   //   },
//   // });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name || !formData.email || !formData.subject || !formData.message) {
//       toast({
//         title: "Please fill in all fields",
//         description: "All fields are required to send your message.",
//         variant: "destructive",
//       });
//       return;
//     }

//     contactMutation.mutate(formData);
//   };

//   const handleInputChange = (field: keyof ContactFormData, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <section id="contact" className="py-16 sm:py-20 bg-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Get In Touch</h2>
//           <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
//             Ready to collaborate? Let's discuss your project and bring your ideas to life.
//           </p>
//         </div>

//         <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Contact Information */}
//           <div className={`space-y-8 transition-all duration-700 ${
//             isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
//                 <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
//               </div>
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1 sm:mb-2">Email</h3>
//                 <p className="text-sm sm:text-base text-slate-600">ajaypaluri058@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
//                 <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
//               </div>
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1 sm:mb-2">Phone</h3>
//                 <p className="text-sm sm:text-base text-slate-600">+91 9392736678 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
//                 <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
//               </div>
//               <div>
//                 <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1 sm:mb-2">Location</h3>
//                 <p className="text-sm sm:text-base text-slate-600">Hyderabad, India</p>
//               </div>
//             </div>

//             <div className="pt-8">
//               <div className="flex space-x-4">
//                 <a
//                   href="https://github.com/Ajaypaluri"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/ajay-paluri-7967a11b8/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 {/* <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
//                 >
//                   <Twitter className="w-5 h-5" />
//                 </a> */}
//                 <a
//                   href="https://www.instagram.com/ajay_paluri"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>

//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card className={`transition-all duration-700 delay-300 ${
//             isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//             <CardContent className="p-6 sm:p-8">
//               <form action="https://formspree.io/f/mqabykny" method="POST" className="space-y-4 sm:space-y-6">
//                 <div>
//                   <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
//                     Name
//                   </Label>
//                   <Input
//                     id="name"
//                     type="text"
//                     name="name"
//                     placeholder="Your full name"
//                     required
//                     className="transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
//                     Email
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     name="email"
//                     placeholder="your.email@example.com"
//                     required
//                     className="transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
//                     Subject
//                   </Label>
//                   <Input
//                     id="subject"
//                     type="text"
//                     name="subject"
//                     placeholder="Project discussion"
//                     required
//                     className="transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
//                     Message
//                   </Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Tell me about your project..."
//                     rows={5}
//                     required
//                     className="resize-none transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//                 >
//                   Send Message
//                 </Button>
//               </form>

//               {/* <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                 <div>
//                   <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
//                     Name
//                   </Label>
//                   <Input
//                     id="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => handleInputChange("name", e.target.value)}
//                     placeholder="Your full name"
//                     required
//                     className="transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
//                     Email
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     placeholder="your.email@example.com"
//                     required
//                     className="transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
//                     Subject
//                   </Label>
//                   <Input
//                     id="subject"
//                     type="text"
//                     value={formData.subject}
//                     onChange={(e) => handleInputChange("subject", e.target.value)}
//                     placeholder="Project discussion"
//                     required
//                     className="transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
//                     Message
//                   </Label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => handleInputChange("message", e.target.value)}
//                     placeholder="Tell me about your project..."
//                     rows={5}
//                     required
//                     className="resize-none transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={contactMutation.isPending}
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//                 >
//                   {contactMutation.isPending ? "Sending..." : "Send Message"}
//                 </Button>
//               </form> */}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";
// import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

// export default function Contact() {
//   const { ref, isIntersecting } = useIntersectionObserver();
//   const { toast } = useToast();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   // Let the browser handle form submission to Formspree
//   //   toast({
//   //     title: "Message sent!",
//   //     description: "Thank you for reaching out. I'll reply soon.",
//   //   });
//   // };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault(); // ✅ Prevent browser reload & let Formspree handle it
//   e.currentTarget.submit(); // ✅ Submit manually to Formspree

//   toast({
//     title: "Message sent!",
//     description: "Thank you for reaching out. I'll reply soon.",
//   });
// };


//   return (
//     <section id="contact" className="py-16 sm:py-20 bg-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
//             Get In Touch
//           </h2>
//           <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
//             Ready to collaborate? Let's discuss your project and bring your ideas to life.
//           </p>
//         </div>

//         <div
//           ref={ref}
//           className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ${
//             isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <InfoItem icon={<Mail />} label="Email" value="ajaypaluri058@gmail.com" />
//             <InfoItem icon={<Phone />} label="Phone" value="+91 9392736678" />
//             <InfoItem icon={<MapPin />} label="Location" value="Hyderabad, India" />
//             <div className="pt-8 flex space-x-4">
//               <SocialIcon link="https://github.com/Ajaypaluri" icon={<Github />} />
//               <SocialIcon link="https://www.linkedin.com/in/ajay-paluri-7967a11b8/" icon={<Linkedin />} />
//               <SocialIcon link="https://www.instagram.com/ajay_paluri" icon={<Instagram />} />
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card className="transition-all duration-700 delay-300">
//             <CardContent className="p-6 sm:p-8">
//               <form
//                 action="https://formspree.io/f/mqabykny"
//                 method="POST"
//                 onSubmit={handleSubmit}
//                 className="space-y-4 sm:space-y-6"
//               >
//                 <FormField
//                   id="name"
//                   label="Name"
//                   value={formData.name}
//                   onChange={(val) => handleChange("name", val)}
//                 />
//                 <FormField
//                   id="email"
//                   type="email"
//                   label="Email"
//                   value={formData.email}
//                   onChange={(val) => handleChange("email", val)}
//                 />
//                 <FormField
//                   id="subject"
//                   label="Subject"
//                   value={formData.subject}
//                   onChange={(val) => handleChange("subject", val)}
//                 />
//                 <div>
//                   <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
//                     Message
//                   </Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={5}
//                     value={formData.message}
//                     onChange={(e) => handleChange("message", e.target.value)}
//                     placeholder="Tell me about your project..."
//                     className="resize-none transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
//   return (
//     <div className="flex items-start space-x-4">
//       <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
//         {icon}
//       </div>
//       <div>
//         <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1 sm:mb-2">{label}</h3>
//         <p className="text-sm sm:text-base text-slate-600">{value}</p>
//       </div>
//     </div>
//   );
// }

// function SocialIcon({ link, icon }: { link: string; icon: React.ReactNode }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
//     >
//       {icon}
//     </a>
//   );
// }

// function FormField({
//   id,
//   type = "text",
//   label,
//   value,
//   onChange,
// }: {
//   id: string;
//   type?: string;
//   label: string;
//   value: string;
//   onChange: (val: string) => void;
// }) {
//   return (
//     <div>
//       <Label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">
//         {label}
//       </Label>
//       <Input
//         id={id}
//         type={type}
//         name={id}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         required
//         placeholder={`Enter your ${label.toLowerCase()}`}
//         className="transition-all duration-300 focus:ring-2 focus:ring-blue-600"
//       />
//     </div>
//   );
// }


import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqabykny", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatusMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("❌ An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to collaborate? Let’s discuss your project and bring your ideas to life.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Mail />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                <p className="text-slate-600">ajaypaluri058@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Phone />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                <p className="text-slate-600">+91 9392736678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <MapPin />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Location</h3>
                <p className="text-slate-600">Hyderabad, India</p>
              </div>
            </div>

            <div className="pt-8 flex space-x-4">
              <a
                href="https://github.com/Ajaypaluri"
                target="_blank"
                className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-paluri-7967a11b8/"
                target="_blank"
                className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/ajay_paluri"
                target="_blank"
                className="w-12 h-12 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <Card
            className={`transition-all duration-700 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardContent className="p-6 sm:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input type="text" id="subject" name="subject" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Send Message
                </button>
                {statusMessage && (
                  <p className="text-sm text-center text-green-600 pt-2">{statusMessage}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
