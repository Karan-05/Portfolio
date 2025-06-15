import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".experience-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Samsung Research Institute",
      location: "Delhi, India",
      period: "Jan 2024 – Aug 2024",
      achievements: [
        "Containerised Linux dev environments with Docker and Kubernetes, cutting infrastructure costs 40% and enabling repeatable CI builds via GitHub Actions & Jenkins pipelines",
        "Architected a Java/Spring Boot load-balancer and Redis cache, slashing swap thrashing 50% and accelerating Samsung Health HPC builds 3x",
        "Exposed analytics via GraphQL API, reducing query latency 4x; instrumented unit tests (JUnit/PyTest) reaching 85% coverage",
        "Integrated Prometheus + Grafana observability, enabling p95 latency alerting and cutting incident MTTR by 30%"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Samsung Research Institute",
      location: "Delhi, India",
      period: "Jun 2023 – Dec 2023",
      achievements: [
        "Created Python static-analysis pipeline to spot code-smell/lint errors pre-merge, reducing integration faults 25%",
        "Set up CI/CD workflows with branch protection, automated pytest suites, and container scans, trimming manual review 30%"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "NM Softwares",
      location: "Remote",
      period: "Jan 2022 – May 2022",
      achievements: [
        "Engineered a Second Order Cone Programming (SOCP) optimizer in Java, improving computational efficiency by 15% for conic problem solutions, used in complex optimization scenarios",
        "Developed custom Java and Kotlin scripts for S2 Data Science Toolbox, enabling real-time 3D graph visualization, improving data analysis speed by 20%",
        "Architected and deployed a tailored EC2 instance on Google Cloud to support Jupyter Lab with Kotlin and Python kernels, facilitating seamless Kotlin code compilation",
        "Optimized testing workflows, cutting setup time by 30%, and significantly improving development efficiency for data science applications"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-6 bg-white/70 rounded-lg shadow-md">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-tr from-green-700 via-lime-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_6px_28px_rgba(143,250,131,0.19)] animate-fade-in"
            style={{
              textShadow: "0 2px 18px #caf7b7",
              letterSpacing: "-1px"
            }}
          >
            Professional Experience
          </h2>
          <div className="w-28 h-2 bg-gradient-to-r from-green-500 to-lime-300 via-yellow-300 mx-auto mb-2 rounded-full animate-glow" />
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="experience-card bg-green-50 border-green-200 hover:border-lime-400 transition-all duration-500 hover:shadow-xl hover:shadow-lime-300/20 group opacity-0"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="text-xl text-green-600 mt-1">{exp.company}</div>
                    <div className="text-green-500 mt-1">{exp.location}</div>
                  </div>
                  <div className="bg-gradient-to-r from-lime-100/40 to-green-100/30 px-4 py-2 rounded-full mt-2 md:mt-0">
                    <span className="text-green-700 font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-800 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
