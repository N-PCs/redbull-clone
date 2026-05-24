import React, { useState, useRef, useEffect } from "react";
import { flavors, Flavor } from "@/data/flavors";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export function FlavorSlider() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Watermelon (Red Edition)
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBgRef = useRef<HTMLDivElement>(null);
  const cansContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const activeFlavor = flavors[activeIndex];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % flavors.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + flavors.length) % flavors.length);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Background transition - faster
      gsap.to(leftBgRef.current, {
        background: activeFlavor.bg,
        duration: 0.5,
        ease: "power2.inOut",
      });

      // Text animations - snappier
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.1,
        }
      );

      // Cans animation logic - Circular Unidirectional & Faster
      const cans = cansContainerRef.current?.querySelectorAll(".flavor-can");
      const len = flavors.length;
      
      if (cans) {
        cans.forEach((can, index) => {
          // Calculate circular distance
          const distance = (index - activeIndex + len) % len;
          
          let xPercent = 0;
          let scale = 1;
          let opacity = 0;
          let zIndex = 10;
          let rotate = 0;

          if (distance === 0) {
            // Active can
            xPercent = 0;
            scale = 1.1;
            opacity = 1;
            zIndex = 30;
            rotate = 0;
          } else if (distance >= 1 && distance <= 3) {
            // Next 3 cans in the queue (visible on the right)
            xPercent = distance * 60 + 40; 
            scale = 0.9 - distance * 0.15;
            opacity = 1 - distance * 0.25;
            zIndex = 20 - distance;
            rotate = distance * 5;
          } else if (distance > 3 && distance < len - 1) {
            // Hidden cans far right
            xPercent = 300;
            opacity = 0;
            scale = 0.5;
            zIndex = 5;
          } else {
            // The can that just moved out (to the left)
            xPercent = -150;
            opacity = 0;
            scale = 0.8;
            zIndex = 5;
            rotate = -15;
          }

          gsap.to(can, {
            xPercent,
            scale,
            opacity,
            zIndex,
            rotate,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              if (index === activeIndex) setIsAnimating(false);
            }
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex, activeFlavor]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[700px] md:h-[800px] overflow-hidden bg-white font-sans mt-20"
    >
      {/* Left Colored Background */}
      <div 
        ref={leftBgRef}
        className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full transition-colors duration-500"
        style={{ background: activeFlavor.bg }}
      />

      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto flex flex-col md:flex-row">
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-20 text-white">
          <div ref={textRef} className="max-w-md pt-10 md:pt-0">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
              Red Bull Energy Drinks
            </p>
            <h2 className="text-4xl md:text-7xl font-black mb-6 leading-[0.9] uppercase tracking-tight">
              {activeFlavor.tagline.includes('Edition') 
                ? activeFlavor.tagline.replace('.', '') 
                : activeFlavor.title.toLowerCase().includes('edition')
                  ? activeFlavor.title
                  : `The ${activeFlavor.title} Edition`}
            </h2>
            <p className="text-base md:text-xl mb-8 opacity-90 leading-relaxed font-medium">
              Discover the full range of Red Bull Energy Drinks.
            </p>
            
            {/* Vegetarian Icon */}
            <div className="flex items-center mb-10">
              <div className="w-5 h-5 border-[1.5px] border-white flex items-center justify-center rounded-sm mr-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-white text-black font-black rounded-full hover:bg-opacity-90 transition shadow-xl text-xs uppercase tracking-widest">
                See product
              </button>
              <button 
                className="px-10 py-4 bg-black/25 backdrop-blur-md border border-white/10 text-white font-black rounded-full hover:bg-black/40 transition text-xs uppercase tracking-widest"
              >
                Select your flavor
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-10 left-8 md:left-20 flex gap-4 z-20">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition group backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition group backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Cans Area */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-white md:bg-transparent">
          <div 
            ref={cansContainerRef}
            className="relative w-full h-full flex items-center justify-center"
          >
            {flavors.map((flavor, index) => (
              <div
                key={flavor.id}
                className={cn(
                  "flavor-can absolute w-[240px] md:w-[420px] pointer-events-none transition-opacity duration-300",
                  index === activeIndex ? "opacity-100" : "opacity-0 md:opacity-100"
                )}
                style={{
                  zIndex: index === activeIndex ? 30 : 20 - Math.abs(index - activeIndex),
                }}
              >
                <img 
                  src={flavor.image} 
                  alt={flavor.title}
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
