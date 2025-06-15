import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, Rocket, BriefcaseBusiness, Handshake, Star } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "karanallagh5@gmail.com",
      href: "mailto:karanallagh5@gmail.com",
      icon: Mail,
      description: "Professional inquiries and opportunities"
    },
    {
      label: "Phone",
      value: "+1(646)-251-3215",
      href: "tel:+16462513215",
      icon: Phone,
      description: "Available for calls Mon-Fri, 9 AM - 6 PM EST"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/karan-allagh",
      href: "https://linkedin.com/in/karan-allagh",
      icon: Linkedin,
      description: "Professional network and career updates"
    },
    {
      label: "GitHub",
      value: "github.com/Karan-05",
      href: "https://github.com/Karan-05",
      icon: Github,
      description: "Open source projects and code repositories"
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "New York, NY",
      description: "Available for remote and on-site opportunities"
    },
    {
      icon: Calendar,
      title: "Availability",
      content: "Open to opportunities",
      description: "Actively seeking full-time positions starting June 2025"
    }
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-gradient-to-b from-emerald-50 via-lime-50 to-white/90 rounded-t-2xl shadow-inner">
      <div className="container mx-auto">
        {/* --- Flat, Fully-filled "Let's Connect" Section --- */}
        <div className="text-center mb-10 relative">
          <h2
            className="text-[56px] sm:text-[72px] md:text-[90px] font-extrabold mb-4 text-emerald-700 bg-emerald-100/80 rounded-xl px-4 py-3 mx-auto w-fit font-sans"
            style={{
              background: "linear-gradient(90deg, #bbf7d0 30%, #a7f3d0 95%)",
              color: "#047857",
              boxShadow: "0 2px 16px 4px #bbf7d033",
              textShadow: "none",
              letterSpacing: "-1.4px",
              borderRadius: "2rem",
              border: "2.5px solid #bbf7d0",
              display: "inline-block"
            }}
          >
            Let&apos;s Connect &amp; Collaborate
          </h2>
          {/* Flat, clean gradient bar just below */}
          <div className="w-72 h-[12px] bg-gradient-to-r from-lime-200 via-emerald-200 to-lime-100 mx-auto mb-8 rounded-full shadow-none" />

          {/* New Banner for Actively Seeking Roles */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto max-w-2xl mb-6">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-yellow-50 via-green-100 to-lime-100 border border-emerald-300 font-semibold text-green-800 text-lg shadow animate-pulse">
              <BriefcaseBusiness className="w-6 h-6 text-emerald-400" />
              Actively Seeking Full-Time Roles & Innovative Teams
            </span>
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-lime-100 via-yellow-50 to-green-100 border border-green-200 font-semibold text-green-800 text-lg shadow animate-bounce">
              <Rocket className="w-6 h-6 text-yellow-400" />
              Startup / Tech Builder
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-xl border border-lime-300 bg-white text-lime-800 text-base font-semibold shadow animate-glow">
              <Handshake className="w-5 h-5 text-lime-400" />
              Open to Collaboration
            </span>
          </div>
          
          <p className="text-green-900 text-2xl max-w-3xl mx-auto font-bold leading-relaxed shadow-sm mb-2 animate-fade-in">
            If you&apos;re searching for a <span className="text-emerald-600 font-extrabold">problem solver</span>, founder-minded engineer, or a team player ready to drive new ideas forward, <span className="underline underline-offset-4 decoration-emerald-400">let&apos;s team up</span>!
          </p>
          <p className="text-green-700 text-lg font-medium max-w-2xl mx-auto mb-2">
            <span className="inline-flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 animate-glow" />
              <span>Ready to tackle <b>real-world challenges</b>, launch new products, or help your vision reach the next level— from zero to one.</span>
            </span>
          </p>
        </div>

        {/* Contact Methods */}
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-emerald-100/90 to-lime-100/80 border-emerald-400/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-300/20 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-emerald-700 font-semibold text-md mb-0.5">{contact.label}</div>
                      <a
                        href={contact.href}
                        className="text-green-900 hover:text-emerald-700 transition-colors duration-200 font-bold text-lg block mb-1"
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {contact.value}
                      </a>
                      <p className="text-green-800 text-sm">{contact.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {additionalInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-lime-100/80 to-emerald-50/70 border-green-400/30 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-300/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-green-800 font-semibold mb-0.5">{info.title}</div>
                      <div className="text-green-900 font-bold mb-1">{info.content}</div>
                      <p className="text-green-700 text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-900/10 to-green-900/10 rounded-2xl p-10 mb-8 shadow-lg border-2 border-emerald-200/40">
              <h3 className="text-3xl font-extrabold text-emerald-600 mb-4 flex items-center justify-center gap-2">
                <Rocket className="w-7 h-7 text-yellow-400 animate-bounce" />
                Ready to Build the Next Big Thing?
              </h3>
              <p className="text-green-900 mb-6 max-w-2xl mx-auto text-lg font-medium">
                Whether you're seeking a <span className="text-emerald-800 font-semibold">founding engineer</span>, a <span className="text-green-700 font-semibold">quantitative developer</span>, or a hands-on <span className="text-yellow-700 font-semibold">startup builder</span>—I'm ready to help build and scale together! 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open("mailto:karanallagh5@gmail.com?subject=Professional Opportunity&body=Hi Karan,%0D%0A%0D%0AI'm reaching out regarding a potential opportunity...")}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Professional Email
                </Button>
                <Button
                  onClick={() => window.open("https://calendly.com/karanallaghsingh", "_blank")}
                  variant="outline"
                  className="border-emerald-400 text-emerald-700 hover:bg-emerald-200 hover:text-white px-8 py-4 rounded-full text-lg transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
              <div className="mt-6 flex flex-row justify-center gap-3 text-2xl">
                <span className="animate-bounce delay-75">🚀</span>
                <span className="animate-pulse delay-150">💡</span>
                <span className="animate-bounce delay-200">🤝</span>
                <span className="animate-pulse delay-100">🏆</span>
                <span className="text-green-500 font-bold px-2">|</span>
                <span className="text-sm text-green-800 font-bold tracking-wide">Let’s build something great together!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-emerald-500/20">
          <p className="text-green-700">
            © 2025 Karan Allagh. Built with React, TypeScript & Tailwind CSS. 
            <span className="text-emerald-600"> Crafted with passion for innovation & impact.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
