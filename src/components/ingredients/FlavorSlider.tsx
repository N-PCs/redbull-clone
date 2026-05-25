import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

// Only use these 5 flavors
const SLIDER_FLAVORS = [
  "original",
  "sugarfree",
  "pink",
  "tropical", // Yellow Edition
  "watermelon", // Red Edition
];

// Define flavor data structure
interface Flavor {
  id: string;
  title: string;
  bg: string;
  image: string;
}

// Sample flavor data (replace with actual import from @/data/flavors)
const sampleFlavors: Flavor[] = [
  {
    id: "original",
    title: "Original",
    bg: "linear-gradient(135deg, #1A0B2E 0%, #470022 100%)",
    image: "./assets/can-original.png", // Placeholder
  },
  {
    id: "sugarfree",
    title: "Sugar Free",
    bg: "linear-gradient(135deg, #022140 0%, #003366 100%)",
    image: "./assets/can-sugarfree.png", // Placeholder
  },
  {
    id: "pink",
    title: "Pink Edition",
    bg: "linear-gradient(135deg, #5E2A4A 0%, #B13E6B 100%)",
    image: "./assets/can-pink.png", // Placeholder
  },
  {
    id: "tropical",
    title: "Tropical Edition",
    bg: "linear-gradient(135deg, #E88D1D 0%, #F7D44A 100%)",
    image: "./assets/can-tropical.png", // Placeholder
  },
  {
    id: "watermelon",
    title: "Watermelon Edition",
    bg: "linear-gradient(135deg, #B83B3B 0%, #E77A7A 100%)",
    image: "./assets/can-watermelon.png", // Placeholder
  },
];

// Filter flavors based on SLIDER_FLAVORS
const filteredFlavors = sampleFlavors.filter((f) => SLIDER_FLAVORS.includes(f.id));

// Helper to format display title
const getDisplayTitle = (flavor: Flavor): string => {
  if (flavor.id === "original") return "Red Bull Original";
  if (flavor.id === "sugarfree") return "Red Bull Sugar Free";
  if (flavor.title.includes("Edition")) return flavor.title;
  return `The ${flavor.title} Edition`;
};

export function FlavorSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBgRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const cansContainerRef = useRef<HTMLDivElement>(null);
  const canRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const activeFlavor = filteredFlavors[activeIndex];
  const totalFlavors = filteredFlavors.length;

  // Helper to get position/transform for a can based on its distance from active
  const getCanTarget = (flavorIndex: number) => {
    const distance = (flavorIndex - activeIndex + totalFlavors) % totalFlavors;
    
    // Active can (center)
    if (distance === 0) {
      return {
        left: "50%",
        scale: 1,
        opacity: 1,
        rotate: 0,
        zIndex: 50,
      };
    }
    
    // Next can (right side, distance = 1)
    if (distance === 1) {
      return {
        left: "80%",
        scale: 0.7,
        opacity: 0.85,
        rotate: 8,
        zIndex: 40,
      };
    }
    
    // Previous can (left side, distance = totalFlavors - 1)
    if (distance === totalFlavors - 1) {
      return {
        left: "20%",
        scale: 0.7,
        opacity: 0.85,
        rotate: -8,
        zIndex: 40,
      };
    }
    
    // Hidden cans (further away)
    return {
      left: distance > totalFlavors / 2 ? "-15%" : "115%",
      scale: 0.5,
      opacity: 0,
      rotate: 0,
      zIndex: 0,
    };
  };

  // Animate cans to new positions
  const animateCans = () => {
    let completedAnimations = 0;
    const totalToAnimate = canRefs.current.filter(can => can !== null).length;
    
    if (totalToAnimate === 0) return;

    canRefs.current.forEach((canEl, idx) => {
      if (!canEl) return;
      const target = getCanTarget(idx);
      
      gsap.to(canEl, {
        left: target.left,
        scale: target.scale,
        opacity: target.opacity,
        rotate: target.rotate,
        zIndex: target.zIndex,
        duration: 0.65,
        ease: "back.out(0.6)",
        onComplete: () => {
          completedAnimations++;
          if (completedAnimations === totalToAnimate) {
            setIsAnimating(false);
          }
        },
      });
    });
  };

  // Animate text with stagger effect
  const animateText = () => {
    if (!textContainerRef.current) return;
    const textElements = textContainerRef.current.children;
    if (textElements.length === 0) return;
    
    // Reset and animate
    gsap.set(textElements, { opacity: 0, y: 20 });
    gsap.to(textElements, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      clearProps: "all",
    });
  };

  // Navigation handlers
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % totalFlavors);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + totalFlavors) % totalFlavors);
  };

  // Effect for activeIndex changes: animate background, text, cans
  useEffect(() => {
    if (!containerRef.current) return;

    // Animate background (left side)
    if (leftBgRef.current) {
      gsap.to(leftBgRef.current, {
        background: activeFlavor.bg,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }

    // Animate text
    animateText();

    // Animate cans positioning
    animateCans();
  }, [activeIndex, activeFlavor]);

  // Set initial can positions on mount
  useEffect(() => {
    // Force initial positions after refs are ready
    const timer = setTimeout(() => {
      animateCans();
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[550px] md:h-[650px] overflow-hidden font-sans my-20"
    >
      {/* Animated Left Background */}
      <div
        ref={leftBgRef}
        className="absolute top-0 left-0 w-full md:w-[50%] h-full"
        style={{ background: activeFlavor.bg }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto flex flex-col md:flex-row">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-[50%] h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white">
          <div ref={textContainerRef} className="max-w-md">
            <p className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] mb-5 opacity-80">
              RED BULL ENERGY DRINKS
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              {getDisplayTitle(activeFlavor)}
            </h2>
            <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed font-medium">
              Vitalizes body and mind. Caffeinated Beverage.
            </p>
            
            {/* Flavor highlight badge */}
            <div className="flex items-center gap-2 mb-12">
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <span className="text-sm font-medium tracking-wide opacity-80">
                {activeFlavor.id === "sugarfree" ? "SUGAR FREE" : "CLASSIC BLEND"}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                See product
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 font-semibold rounded-full text-sm hover:bg-white/20 transition-all">
                Select your flavor
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex gap-4">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Side - 3D Can Carousel */}
        <div className="relative w-full md:w-[50%] h-full flex items-center justify-center overflow-visible">
          <div
            ref={cansContainerRef}
            className="relative w-full h-full"
          >
            {filteredFlavors.map((flavor, idx) => (
              <div
                key={flavor.id}
                ref={(el) => { canRefs.current[idx] = el; }}
                className="flavor-can absolute top-1/2 will-change-transform"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "clamp(180px, 45vw, 340px)",
                  zIndex: 0,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              >
                <img
                  src={flavor.image}
                  alt={flavor.title}
                  className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay on edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-black/5" />
    </section>
  );
}