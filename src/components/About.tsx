import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white/90 rounded-lg shadow-md">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-br from-lime-600 via-green-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_5px_24px_rgba(67,195,92,0.16)] animate-fade-in"
            style={{
              textShadow: "0 3px 16px #b7f6cd",
              letterSpacing: "-1px"
            }}
          >
            About Me
          </h2>
          {/* Glowing Underline */}
          <div className="w-28 h-2 bg-gradient-to-r from-yellow-300 via-lime-400 to-green-500 mx-auto mb-2 rounded-full animate-glow shine-shadow" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-green-900 text-lg leading-relaxed font-medium drop-shadow-sm">
              I'm currently pursuing my Master's in Computer Science at New York University, 
              specializing in advanced algorithms, distributed systems, and machine learning. 
              My academic journey has equipped me with deep theoretical knowledge that I 
              consistently apply to solve real-world engineering challenges.
            </p>
            <p className="text-green-900 text-lg leading-relaxed font-medium drop-shadow-sm">
              At Samsung Research Institute, I've architected high-performance systems serving 
              millions of users, optimized cloud infrastructure costs by 40%, and accelerated 
              critical builds by 3x. My experience spans from kernel-bypass networking to 
              AI-powered moderation systems, always focusing on scalability and efficiency.
            </p>
            <p className="text-green-900 text-lg leading-relaxed font-medium drop-shadow-sm">
              Beyond professional work, I'm passionate about algorithmic trading, autonomous 
              systems, and the intersection of AI and finance. I believe in pushing technological 
              boundaries while maintaining a focus on practical, impactful solutions that make 
              a real difference in people's lives.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-lime-50 border-green-300/90 hover:border-lime-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/30 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-700 mb-2">2+</div>
                <div className="text-green-800 font-semibold">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-lime-50 border-green-300/90 hover:border-emerald-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-800 mb-2">3.9</div>
                <div className="text-green-900 font-semibold">GPA at NYU</div>
              </CardContent>
            </Card>
            <Card className="bg-lime-50 border-emerald-200/90 hover:border-emerald-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/30 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-green-900 font-semibold">Technologies</div>
              </CardContent>
            </Card>
            <Card className="bg-lime-50 border-lime-300/90 hover:border-lime-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/30 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-lime-500 mb-2">6+</div>
                <div className="text-green-900 font-semibold">Major Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
