import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
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
      const cards = sectionRef.current.querySelectorAll(".skill-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++17/20", "Python", "Java", "Kotlin", "JavaScript", "Bash", "SQL"],
      color: "emerald"
    },
    {
      title: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "CUDA", "GPU Programming", "Transformers", "LoRA", "Airflow", "MLflow", "SageMaker", "Optuna", "YOLO", "OpenCV"],
      color: "green"
    },
    {
      title: "Web & Mobile Development",
      skills: ["React", "Node.js", "Express", "Expo", "Flutter", "Android", "REST APIs", "GraphQL"],
      color: "teal"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda, RDS)", "GCP", "Azure", "Docker", "Kubernetes", "Helm", "Terraform", "GitHub Actions", "Jenkins", "Prometheus", "Grafana"],
      color: "cyan"
    },
    {
      title: "High-Performance Computing",
      skills: ["DPDK", "RDMA", "AF_XDP", "Lock-free Programming", "TCP/UDP Optimization", "FIX Protocol", "ITCH", "Kernel Bypass", "NUMA Architecture"],
      color: "lime"
    },
    {
      title: "Data & Analytics",
      skills: ["Snowflake", "PostgreSQL", "Redis", "Kafka", "Parquet", "Spark", "Qdrant", "MongoDB", "Vector Databases", "Time Series DB"],
      color: "mint"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "from-green-400 to-green-500 border-green-200 hover:border-green-400/60",
      green: "from-lime-400 to-green-400 border-lime-300 hover:border-green-300/60",
      teal: "from-emerald-200 to-emerald-400 border-emerald-100 hover:border-emerald-200",
      cyan: "from-lime-200 to-green-200 border-green-100 hover:border-green-200",
      lime: "from-lime-400 to-green-300 border-lime-200 hover:border-lime-400",
      mint: "from-green-200 to-lime-200 border-green-100 hover:border-lime-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-white/70 rounded-lg shadow-md">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-lime-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`skill-card bg-lime-50 ${getColorClasses(category.color)} transition-all duration-500 hover:shadow-lg hover:shadow-green-200/30 group opacity-0 hover:scale-105`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-800 group-hover:text-green-900 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 bg-gradient-to-r ${getColorClasses(category.color)} text-green-800 text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
