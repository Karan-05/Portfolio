import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Award, Medal, Sparkle, Star, BadgeCheck, Code2, Terminal, Hexagon, Rocket, BriefcaseBusiness, Handshake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const pixelBadges = [
  { Icon: Star, left: "10%", top: "12%", delay: "0ms", color: "text-yellow-400" },
  { Icon: BadgeCheck, left: "82%", top: "18%", delay: "180ms", color: "text-green-400" },
  { Icon: Medal, left: "15%", top: "72%", delay: "420ms", color: "text-lime-400" },
  { Icon: Star, left: "61%", top: "68%", delay: "660ms", color: "text-yellow-300" },
  { Icon: Sparkle, left: "57%", top: "23%", delay: "340ms", color: "text-emerald-400" },
  { Icon: BadgeCheck, left: "40%", top: "65%", delay: "920ms", color: "text-emerald-400" },
  { Icon: Sparkle, left: "75%", top: "63%", delay: "1290ms", color: "text-green-400" },
];

const sparkles = [
  { left: "18%", top: "54%", delay: "300ms" },
  { left: "62%", top: "22%", delay: "630ms" },
  { left: "56%", top: "67%", delay: "950ms" },
  { left: "25%", top: "43%", delay: "1100ms" },
  { left: "79%", top: "77%", delay: "1500ms" },
  { left: "83%", top: "29%", delay: "1700ms" },
];

const SparkleIcon = ({ style }: { style?: React.CSSProperties }) => (
  <div
    className="absolute w-2 h-2 rounded-full bg-lime-300 opacity-80 animate-pulse"
    style={style}
  ></div>
);

const PixelBadge = ({
  Icon,
  left,
  top,
  delay,
  color,
}: {
  Icon: React.ElementType;
  left: string;
  top: string;
  delay?: string;
  color?: string;
}) => (
  <Icon
    className={`absolute w-5 h-5 animate-bounce ${color || "text-emerald-400"}`}
    style={{
      left,
      top,
      animationDelay: delay || "0ms",
      filter: "drop-shadow(0 0 7px #bbf7d0)",
    }}
    strokeWidth={2.1}
  />
);

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Software Engineer & AI/ML Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 47);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden select-none pt-36 md:pt-44 pb-16 sm:pb-24">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[12%] w-[38rem] h-[38rem] bg-gradient-to-br from-green-200/70 via-emerald-100/70 to-lime-50/60 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-10 right-0 w-[22rem] h-[30rem] bg-gradient-to-t from-lime-200/60 to-emerald-100/0 rounded-full blur-2xl animate-pulse delay-700" />
        <div className="absolute top-[65%] left-[-8%] w-96 h-80 bg-gradient-to-bl from-emerald-200/80 to-lime-50/0 blur-xl animate-pulse" />
        <div className="absolute -top-16 right-[10%] w-[36rem] h-[36rem] border-8 border-lime-200/40 rounded-full animate-spin-slow pointer-events-none" />
      </div>

      {/* Gamified badges & sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {pixelBadges.map((badge, idx) => (
          <PixelBadge
            key={idx}
            Icon={badge.Icon}
            left={badge.left}
            top={badge.top}
            delay={badge.delay}
            color={badge.color}
          />
        ))}
        {sparkles.map((s, idx) => (
          <SparkleIcon key={idx} style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-20 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 34, scale: 0.96 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* HERO Photo Section */}
          <div className="relative mx-auto mb-10 flex justify-center items-center w-full min-h-[290px]">
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.20 }}
              className="relative flex items-center justify-center h-[215px] w-[215px] md:h-[290px] md:w-[290px] xl:w-[340px] xl:h-[340px] transition-all shadow-xl"
              style={{ zIndex: 12 }}
            >
              {/* BACKGROUNDS and Animated overlays */}
              <div className="absolute rounded-full w-full h-full bg-gradient-to-tr from-lime-300 via-green-100 to-lime-50 shadow-xl animate-glow z-0" />
              {/* Vibrant floating code shapes */}
              <Terminal className="absolute -left-7 top-8 w-10 h-10 text-emerald-400/70 rotate-[6deg] animate-bounce-slow" />
              <Code2 className="absolute -right-7 top-16 w-9 h-9 text-yellow-300/80 rotate-12 animate-float" />
              <Hexagon className="absolute left-[52%] -bottom-7 w-11 h-11 text-lime-400/80 rotate-45 animate-bounce" />
              {/* Pattern dots */}
              <div className="absolute left-8 bottom-7 w-2 h-2 rounded-full bg-green-300/70 animate-pulse" />
              <div className="absolute right-8 top-7 w-2 h-2 rounded-full bg-lime-400/80 animate-pulse delay-300" />
              <div className="absolute inset-2 rounded-full border-4 border-emerald-400/30 pointer-events-none" />
              <img
                src="/lovable-uploads/92c7448d-04ac-4fab-bbb6-ca7e2185f1db.png"
                alt="Animated Coding Character"
                className="w-[160px] h-[160px] md:w-[220px] md:h-[220px] xl:w-[290px] xl:h-[290px] object-contain bg-white/70 rounded-[2.5rem] ring ring-lime-400/40 shadow-green-300/30 shadow-2xl z-30 animate-scale-in border-[6px] border-white"
                style={{
                  shapeOutside: "polygon(0 0, 100% 25%, 100% 75%, 0% 100%)",
                  clipPath: "polygon(0% 0%, 100% 7%, 98% 100%, 0% 93%)"
                }}
              />
              <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none animate-glow bg-lime-400/10 backdrop-blur-sm" />
            </motion.div>
            {/* Overlay sparkles */}
            <Sparkle className="absolute left-3 top-3 w-8 h-8 text-yellow-400 animate-glow" />
            <Star className="absolute right-3 bottom-6 w-8 h-8 text-lime-300 animate-bounce" />
            <Medal className="absolute left-1/2 top-0 -translate-x-1/2 -mt-8 w-11 h-11 text-emerald-400/80 animate-float" />
            <SparkleIcon style={{ left: "88%", top: "17%", animationDelay: "150ms" }} />
            <SparkleIcon style={{ left: "12%", top: "90%", animationDelay: "650ms" }} />
          </div>

          {/* --- NEW: Startup/Builder Identity Box --- */}
          <div className="w-full max-w-xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.64, delay: 0.19, type: "spring", bounce: 0.11 }}
              className="rounded-3xl bg-gradient-to-r from-lime-100 via-green-100/80 to-yellow-50 shadow-lg shadow-green-200/20 border border-emerald-300/30 px-6 md:px-12 py-6 flex flex-col items-center animate-fade-in"
              style={{
                boxShadow: "0 8px 38px 0 rgba(139,246,195,0.12), 0 2px 4px 0 rgba(90,247,144,0.07)",
              }}
            >
              <div className="flex flex-row items-center justify-center gap-4 mb-3 flex-wrap">
                <span className="inline-flex items-center gap-2 font-mono font-bold text-green-700 text-base md:text-lg animate-pulse">
                  <Rocket className="w-5 h-5 text-yellow-400 -mt-0.5" strokeWidth={2.1} /> Founder Mindset
                </span>
                <span className="inline-flex items-center gap-2 font-mono font-bold text-green-700 text-base md:text-lg">
                  <BriefcaseBusiness className="w-5 h-5 text-emerald-400 -mt-0.5" strokeWidth={2.1} /> Startup Builder
                </span>
                <span className="inline-flex items-center gap-2 font-mono font-bold text-green-700 text-base md:text-lg">
                  <Handshake className="w-5 h-5 text-lime-500 -mt-0.5" strokeWidth={2.1} /> Team Player
                </span>
                <span className="inline-flex items-center gap-2 font-mono font-bold text-green-700 text-base md:text-lg">
                  <Star className="w-5 h-5 text-yellow-300 -mt-0.5" strokeWidth={2.1} /> Relentless Problem Solver
                </span>
              </div>
              <div className="flex flex-row items-center justify-center text-yellow-500 text-2xl md:text-3xl gap-2 mb-1 animate-bounce">
                🚀💡🤝🏆
              </div>
              <p className="text-green-800 font-medium text-base md:text-lg mt-1 mb-0.5 animate-fade-in">
                Passionate about building <b>innovative solutions</b> from scratch—experienced in launching projects, leading teams, and turning ideas into real products.
              </p>
              <p className="text-green-700 text-xs md:text-sm mt-0.5 italic">
                "From zero to one: I thrive in uncertainty, love startup chaos, and deliver real-world impact."
              </p>
            </motion.div>
          </div>
          
          {/* HERO header and subtitle */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.93, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, type: "spring", bounce: 0.15 }}
            className="text-5xl md:text-7xl xl:text-8xl font-extrabold mb-5 bg-gradient-to-br from-green-700 via-lime-400 to-yellow-300 bg-clip-text text-transparent flex items-center justify-center gap-2 drop-shadow-[0_8px_36px_rgba(16,200,150,0.28)] relative animate-fade-in tracking-tight"
            style={{ textShadow: "0 3px 14px #b6f6da" }}
          >
            <span className="relative z-20">Karan Allagh</span>
            <span
              className="inline-flex items-center px-8 py-3 -mb-2 ms-1 rounded-full bg-emerald-200 font-black text-emerald-700 text-3xl shadow-xl border-emerald-400 border-2 animate-fade-in-slow drop-shadow-emerald-400 z-10 font-sans"
              style={{
                background: "linear-gradient(90deg, #fef08a 10%, #bbf7d0 80%)",
                color: "#166534",
                letterSpacing: "-.03em",
                fontWeight: 900,
                textShadow: "none",
                borderRadius: "2.2rem",
                boxShadow: "0 6px 30px 0 #f7fda833, 0 1px 6px #a7f3d0",
                border: "2.5px solid #bbf7d0"
              }}
            >
              <Award className="w-8 h-8 text-lime-500 mr-2" strokeWidth={2.2} />
              Awarded
            </span>
          </motion.h1>
          <div className="mx-auto mb-7 mt-2 h-2 w-36 md:w-64 rounded-full bg-gradient-to-r from-lime-500 via-green-500 to-yellow-300 shadow-lg animate-glow opacity-90" />

          {/* Typing animation */}
          <div className="text-2xl md:text-3xl text-lime-700 mb-6 h-8 font-mono drop-shadow-md animate-fade-in font-semibold">
            {displayText}
            <span className="animate-pulse text-green-600">|</span>
          </div>
          {/* Description */}
          <p className="text-lg text-green-900 mb-10 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in delay-150 shadow-[0_1px_4px_rgba(80,230,180,0.14)]">
            M.S. CS from NYU with 2+ years of experience delivering cloud-native,
            low-latency and machine-learning solutions in production.
            Passionate about algorithmic trading, autonomous systems, and cutting-edge AI research.
          </p>
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <Button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-green-400 to-lime-500 hover:from-lime-400 hover:to-green-500 text-green-900 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-300/40 animate-glow drop-shadow-[0_1px_2px_rgba(185,255,209,0.21)]"
            >
              Explore My Work
              <Sparkle className="ml-2 w-5 h-5 text-yellow-400 animate-pulse" strokeWidth={1.7} />
            </Button>
            <Button
              variant="outline"
              className="border-lime-400 text-green-700 hover:bg-lime-200 hover:text-green-900 px-10 py-4 rounded-full text-lg transition-all duration-300"
              onClick={() => window.open("mailto:karanallagh5@gmail.com")}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
