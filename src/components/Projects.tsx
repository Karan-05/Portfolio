
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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
      const cards = sectionRef.current.querySelectorAll(".project-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "hft-prototype",
      title: "HFT Market-Making Prototype",
      period: "May 2025",
      tech: "C++20, DPDK, RDMA",
      description: "Built a kernel-bypass market-data gateway using DPDK + RDMA, achieving <150 μs tick-to-trade latency on 10GbE.",
      achievements: [
        "Implemented lock-free ring-buffers and GC-free object pools",
        "Profiled with perf/eBPF to eliminate cache-miss hot-spots",
        "Parsed FIX 4.4 / NASDAQ ITCH feeds into in-memory order-book"
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500"
    },
    {
      id: "jelly-bot",
      title: "Jelly Bot – Autonomous Rescue USV",
      period: "Jun 2022",
      tech: "Computer Vision, Python, TensorFlow, React",
      description: "Led 5-member team; deployed YOLOv3 + LSTM temporal model to detect drowning victims at 91.2% accuracy on live feeds.",
      achievements: [
        "Won 1st place at DRDO Smart India Hackathon (15,000+ teams)",
        "Published findings in IEEE, validating solution's potential",
        "Revolutionized beach safety with autonomous detection"
      ],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500"
    },
    {
      id: "discord-guardian",
      title: "Discord Guardian Bot 🛡️",
      period: "Nov 2024",
      tech: "Python, OpenAI API, Discord.py",
      description: "AI-powered moderation assistant that detects toxic messages in real-time and keeps communities safe with intelligent warnings and automated moderation.",
      achievements: [
        "Real-time toxicity detection using OpenAI moderation endpoint",
        "Automated progressive discipline system with configurable thresholds",
        "Comprehensive logging and violation tracking system"
      ],
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500"
    },
    {
      id: "rag-pipeline",
      title: "MLOps RAG Pipeline",
      period: "Dec 2024",
      tech: "PyTorch, Airflow, SageMaker, Qdrant",
      description: "Orchestrated end-to-end Retrieval-Augmented Generation workflow: ETL → feature engineering → vector indexing → model training → deployment.",
      achievements: [
        "Automated hyper-parameter tuning with Optuna",
        "Boosted F1 score by 17% while cutting inference latency 25%",
        "Integrated ClearML for experiment tracking and model versioning"
      ],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500"
    },
    {
      id: "face-recognition",
      title: "Advanced Face Recognition System",
      period: "Jun 2021",
      tech: "Python, Keras, TensorFlow, OpenCV",
      description: "Investigated LBPH and Haar Cascade algorithms, optimizing face recognition to reach 92.74% accuracy with enhanced detection for challenging scenarios.",
      achievements: [
        "Optimized loss function for misaligned faces, improving performance by 15%",
        "Designed real-time CCTV prototype with 90% accuracy",
        "Implemented robust preprocessing pipeline for various lighting conditions"
      ],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6 bg-gradient-to-bl from-lime-50 via-green-100/60 to-emerald-100/30 rounded-lg shadow-md">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card bg-white/90 border-green-300/80 hover:border-emerald-500/70 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-200/30 group hover:scale-105 opacity-0"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-100/80 to-transparent"></div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-green-600 bg-lime-100/70 px-2 py-1 rounded font-medium">
                    {project.period}
                  </span>
                </div>
                <div className="text-green-700 font-medium mb-3">{project.tech}</div>
                <p className="text-green-900 leading-relaxed text-sm font-medium">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.achievements.slice(0, 2).map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-900 text-sm leading-relaxed font-medium">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-700 hover:to-green-700 text-white font-semibold transition-all duration-300"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
