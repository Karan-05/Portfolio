
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = {
    "hft-prototype": {
      title: "HFT Market-Making Prototype",
      tech: "C++20, DPDK, RDMA, Linux Kernel",
      period: "May 2025",
      description: "A high-performance trading system prototype designed to achieve ultra-low latency market data processing and order execution.",
      longDescription: "This project represents the cutting edge of high-frequency trading technology, implementing kernel-bypass techniques to minimize latency in financial markets. The system processes market data feeds in real-time and executes trades with microsecond precision.",
      images: [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800"
      ],
      features: [
        "Kernel-bypass market data gateway using DPDK",
        "RDMA implementation for ultra-low latency communication",
        "Lock-free ring buffers for high-throughput data processing",
        "GC-free object pools to eliminate memory allocation overhead",
        "FIX 4.4 and NASDAQ ITCH protocol parsing",
        "In-memory order book reconstruction",
        "Performance profiling with perf and eBPF"
      ],
      techStack: [
        { name: "C++20", description: "Core language with modern features" },
        { name: "DPDK", description: "Data Plane Development Kit for kernel bypass" },
        { name: "RDMA", description: "Remote Direct Memory Access for low latency" },
        { name: "Linux Kernel", description: "Operating system optimization" }
      ],
      metrics: [
        { label: "Latency", value: "<150 μs", description: "Tick-to-trade execution time" },
        { label: "Throughput", value: "10GbE", description: "Network bandwidth utilization" },
        { label: "Performance", value: "99.9%", description: "Uptime reliability" }
      ]
    },
    "jelly-bot": {
      title: "Jelly Bot – Autonomous Rescue USV",
      tech: "Python, TensorFlow, YOLO v3, LRCN, OpenCV, React",
      period: "June 2022",
      description: "An autonomous unmanned surface vehicle designed to detect and rescue drowning victims using advanced computer vision and deep learning techniques.",
      longDescription: "Jelly Bot revolutionizes beach safety by combining autonomous navigation with state-of-the-art drowning detection algorithms. The system can patrol beaches independently and respond to emergency situations faster than human lifeguards.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
      ],
      features: [
        "Real-time drowning detection with 91.2% accuracy",
        "YOLO v3 object detection for person identification",
        "LRCN (Long-term Recurrent Convolutional Networks) for temporal analysis",
        "Autonomous navigation and path planning",
        "Emergency response protocols and victim assistance",
        "Weather-resistant design for marine environments",
        "Real-time video streaming and monitoring dashboard"
      ],
      techStack: [
        { name: "YOLO v3", description: "Object detection framework" },
        { name: "LRCN", description: "Long-term Recurrent Convolutional Networks" },
        { name: "TensorFlow", description: "Deep learning framework" },
        { name: "OpenCV", description: "Computer vision library" },
        { name: "React", description: "Monitoring dashboard frontend" }
      ],
      metrics: [
        { label: "Accuracy", value: "91.2%", description: "Drowning detection precision" },
        { label: "Response Time", value: "<30s", description: "Emergency response speed" },
        { label: "Recognition", value: "1st Place", description: "Smart India Hackathon winner" }
      ],
      links: {
        website: "https://jelly-bot.vercel.app/home/",
        paper: "https://ieeexplore.ieee.org/document/10262792"
      }
    },
    "discord-guardian": {
      title: "Discord Guardian Bot 🛡️",
      tech: "Python, discord.py, OpenAI API, Docker",
      period: "November 2024",
      description: "An AI-powered Discord moderation bot that detects toxic messages in real-time and maintains community safety through intelligent automation.",
      longDescription: "Discord Guardian Bot leverages OpenAI's moderation capabilities to create safer online communities. It combines real-time message analysis with progressive discipline systems to maintain healthy discourse while respecting user privacy.",
      images: [
        "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800",
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800"
      ],
      features: [
        "Real-time toxicity detection using OpenAI moderation endpoint",
        "Progressive discipline system with configurable thresholds",
        "Automated warning system with polite messaging",
        "Violation tracking and user offense history",
        "Configurable mute durations and escalation policies",
        "Dedicated moderation logging channel",
        "Privacy-focused design (messages not stored)",
        "Docker containerization for easy deployment"
      ],
      techStack: [
        { name: "Python", description: "Core programming language" },
        { name: "discord.py 2.x", description: "Discord API wrapper with slash commands" },
        { name: "OpenAI API", description: "Content moderation and AI analysis" },
        { name: "Docker", description: "Containerization for deployment" }
      ],
      metrics: [
        { label: "Response Time", value: "<500ms", description: "Message analysis speed" },
        { label: "Accuracy", value: "95%+", description: "Toxicity detection precision" },
        { label: "Privacy", value: "100%", description: "Messages not stored permanently" }
      ]
    },
    "rag-pipeline": {
      title: "MLOps RAG Pipeline",
      tech: "PyTorch, Airflow, SageMaker, Qdrant, ClearML, Optuna",
      period: "December 2024",
      description: "An end-to-end MLOps pipeline for Retrieval-Augmented Generation with automated training, optimization, and deployment capabilities.",
      longDescription: "This comprehensive MLOps solution demonstrates modern machine learning engineering practices, combining vector databases, automated hyperparameter optimization, and cloud deployment to create a production-ready RAG system.",
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800"
      ],
      features: [
        "Automated ETL pipeline with Apache Airflow",
        "Vector indexing with Qdrant for similarity search",
        "Hyperparameter optimization using Optuna",
        "Model training with PyTorch and fine-tuning",
        "Experiment tracking with ClearML",
        "Automated deployment to AWS SageMaker",
        "Performance monitoring and model versioning",
        "A/B testing framework for model comparison"
      ],
      techStack: [
        { name: "PyTorch", description: "Deep learning framework" },
        { name: "Airflow", description: "Workflow orchestration" },
        { name: "SageMaker", description: "AWS ML platform" },
        { name: "Qdrant", description: "Vector database" },
        { name: "ClearML", description: "MLOps platform" },
        { name: "Optuna", description: "Hyperparameter optimization" }
      ],
      metrics: [
        { label: "F1 Improvement", value: "+17%", description: "Model accuracy enhancement" },
        { label: "Latency Reduction", value: "-25%", description: "Inference speed improvement" },
        { label: "Automation", value: "100%", description: "End-to-end pipeline automation" }
      ]
    },
    "face-recognition": {
      title: "Advanced Face Recognition System",
      tech: "Python, Keras, TensorFlow, OpenCV, Haar Cascades",
      period: "June 2021",
      description: "A comprehensive face recognition system implementing multiple algorithms with optimized performance for real-world applications.",
      longDescription: "This project explores various face recognition techniques, optimizing them for real-world scenarios including challenging lighting conditions and face orientations. The system includes a complete pipeline from detection to recognition with a focus on practical deployment.",
      images: [
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
      ],
      features: [
        "LBPH (Local Binary Pattern Histogram) implementation",
        "Haar Cascade face detection algorithm",
        "Custom loss function optimization for misaligned faces",
        "Real-time CCTV integration prototype",
        "Robust preprocessing for various lighting conditions",
        "Performance benchmarking and comparison",
        "Deployment-ready architecture"
      ],
      techStack: [
        { name: "Python", description: "Core programming language" },
        { name: "TensorFlow/Keras", description: "Deep learning frameworks" },
        { name: "OpenCV", description: "Computer vision library" },
        { name: "Haar Cascades", description: "Face detection algorithm" }
      ],
      metrics: [
        { label: "Recognition Accuracy", value: "92.74%", description: "Face recognition precision" },
        { label: "Detection Accuracy", value: "90.36%", description: "Face detection precision" },
        { label: "Performance Improvement", value: "+15%", description: "Enhancement for misaligned faces" }
      ]
    }
  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-emerald-600 hover:bg-emerald-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Type guard to check if project has links
  const hasLinks = (proj: typeof project): proj is typeof project & { links: { website?: string; paper?: string } } => {
    return 'links' in proj && proj.links !== undefined;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="container mx-auto px-6 py-8">
        <Button
          onClick={() => navigate("/")}
          className="mb-8 bg-emerald-600 hover:bg-emerald-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-2">{project.tech}</p>
            <p className="text-emerald-400 font-medium">{project.period}</p>
          </div>

          {/* Images Gallery */}
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <Card className="bg-slate-800/50 border-emerald-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="bg-slate-800/50 border-emerald-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack & Metrics */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-emerald-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">Technology Stack</h2>
                <div className="space-y-4">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="border-l-2 border-emerald-400 pl-4">
                      <h3 className="font-semibold text-green-400">{tech.name}</h3>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-emerald-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">Key Metrics</h2>
                <div className="space-y-6">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-1">{metric.value}</div>
                      <div className="text-green-400 font-medium">{metric.label}</div>
                      <div className="text-gray-400 text-sm">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Links - Only show if project has links */}
          {hasLinks(project) && (
            <Card className="bg-slate-800/50 border-emerald-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">Project Links</h2>
                <div className="flex flex-wrap gap-4">
                  {project.links.website && (
                    <Button
                      onClick={() => window.open(project.links.website, "_blank")}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button
                      onClick={() => window.open(project.links.paper, "_blank")}
                      variant="outline"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Research Paper
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
