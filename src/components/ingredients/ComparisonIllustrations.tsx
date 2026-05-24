import React from "react";

type IllustrationProps = {
  className?: string;
};

// 1. Red Bull Can Illustration (highly accurate & glossy tilted vector can)
export function RedBullCan({ className = "w-24 h-32" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Glossy metallic shine horizontal gradient */}
        <linearGradient id="can-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="45%" stopColor="#000000" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.65" />
          <stop offset="90%" stopColor="#9CA3AF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
        </linearGradient>

        {/* Clip path for the cylinder body to perfectly contain the quadrant stripes and text */}
        <clipPath id="can-body-clip">
          <rect x="20" y="15" width="60" height="100" rx="8" />
        </clipPath>
      </defs>

      {/* Tilted Graphic Group (-6 degrees) */}
      <g transform="rotate(-6 50 65)">
        {/* Soft shadow */}
        <rect x="23" y="18" width="54" height="100" rx="8" fill="#001E5C" fillOpacity="0.12" />

        {/* --- Can Base & Cylinder --- */}
        <rect x="20" y="15" width="60" height="100" rx="8" fill="#D1D5DB" stroke="#001E5C" strokeWidth="2" />

        {/* --- Quadrant Artwork (Clipped to body) --- */}
        <g clipPath="url(#can-body-clip)">
          {/* Base Silver Fill */}
          <rect x="20" y="15" width="60" height="100" fill="#E5E7EB" />

          {/* Top-Left Blue Quadrant Polygon */}
          <polygon points="20,15 54,15 20,80" fill="#002F93" />

          {/* Bottom-Right Blue Quadrant Polygon */}
          <polygon points="80,50 80,115 46,115" fill="#002F93" />

          {/* Classic Red Bull Branding Texts */}
          {/* RED BULL (Bold Red) */}
          <text
            x="50"
            y="38"
            fill="#ED1B24"
            fontFamily="'Inter', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="8"
            textAnchor="middle"
            letterSpacing="0.4"
            stroke="#001E5C"
            strokeWidth="0.5"
          >
            RED BULL
          </text>

          {/* ENERGY DRINK (Sans Serif Blue) */}
          <text
            x="50"
            y="88"
            fill="#001D6E"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="4.8"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            ENERGY DRINK
          </text>

          {/* Skeleton technical detail lines below */}
          <line x1="38" y1="94" x2="62" y2="94" stroke="#9CA3AF" strokeWidth="0.8" />
          <line x1="42" y1="98" x2="58" y2="98" stroke="#9CA3AF" strokeWidth="0.6" />

          {/* Golden Sun Emblem in the center silver diagonal band */}
          <circle cx="50" cy="62" r="14" fill="#FFCC00" stroke="#001E5C" strokeWidth="1.5" />

          {/* Charging Bulls Head-to-Head */}
          {/* Left Charging Bull */}
          <path
            d="M32 64 c1-1.5 3.5-3 5.5-3 c1.5 0 3 1.5 4.5 1 c1-0.3 1.5-1 1.8-1 c-0.3 1 -1.8 1.8-3.2 1.8 c-2.2 0 -4.2-0.8 -5.6 0.4 c-0.8 0.8 -1.2 0.8 -3 0.8"
            fill="#ED1B24"
            stroke="#001E5C"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <path d="M41 61.2 L43 59 L41 61.8" stroke="#ED1B24" strokeWidth="0.8" strokeLinecap="round" /> {/* Horn */}
          <path d="M33 63.5 C31 62 30 59 31 57" stroke="#ED1B24" strokeWidth="0.8" strokeLinecap="round" fill="none" /> {/* Tail */}

          {/* Right Charging Bull */}
          <path
            d="M68 64 c-1-1.5-3.5-3-5.5-3 c-1.5 0-3 1.5-4.5 1 c-1-0.3-1.5-1-1.8-1 c0.3 1 1.8 1.8 3.2 1.8 c2.2 0 4.2-0.8 5.6 0.4 c0.8 0.8 1.2 0.8 3 0.8"
            fill="#ED1B24"
            stroke="#001E5C"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <path d="M59 61.2 L57 59 L59 61.8" stroke="#ED1B24" strokeWidth="0.8" strokeLinecap="round" /> {/* Horn */}
          <path d="M67 63.5 C69 62 70 59 69 57" stroke="#ED1B24" strokeWidth="0.8" strokeLinecap="round" fill="none" /> {/* Tail */}

          {/* Glossy metallic vertical overlay shine */}
          <rect x="20" y="15" width="60" height="100" fill="url(#can-shine)" opacity="0.38" style={{ mixBlendMode: "multiply" }} />
        </g>

        {/* --- Silver Can Top Rim & Tab --- */}
        <ellipse cx="50" cy="15" rx="30" ry="6" fill="#D8DBDF" stroke="#001E5C" strokeWidth="2" />
        <ellipse cx="50" cy="14" rx="25" ry="4" fill="#A8AEB7" />
        {/* Pull tab ring */}
        <ellipse cx="50" cy="14" rx="5.5" ry="2.5" fill="#E5E7EB" stroke="#001E5C" strokeWidth="1" />
        <circle cx="50" cy="14" r="1.5" fill="#9CA3AF" />

        {/* --- Silver Can Bottom Rim --- */}
        <path d="M20 111 C20 117 80 117 80 111" stroke="#001E5C" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

// 2. Instant Coffee Illustration
export function InstantCoffee({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kettle Kettle Kettle */}
      <g transform="translate(42, 10) rotate(-15)">
        {/* Blue Kettle Body */}
        <path
          d="M10 25 L35 25 L38 48 L7 48 Z"
          fill="#3B82F6"
          stroke="#001E5C"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Kettle Lid */}
        <path d="M12 25 C 12 20, 33 20, 33 25 Z" fill="#2563EB" stroke="#001E5C" strokeWidth="1.8" />
        <circle cx="22.5" cy="18" r="2.5" fill="#FFCC00" stroke="#001E5C" strokeWidth="1.2" />
        {/* Kettle Handle */}
        <path d="M34 27 C 42 27, 42 43, 37 45" stroke="#001E5C" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Kettle Spout */}
        <path
          d="M8 40 L-2 36 L-2 42 L8 45"
          fill="#1D4ED8"
          stroke="#001E5C"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </g>

      {/* Pouring Stream */}
      <path
        d="M38 25 Q 30 38 35 55"
        stroke="#8B5A2B"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="4 2"
        fill="none"
      />
      <path d="M38 25 Q 30 38 35 55" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Coffee Cup and Saucer */}
      <g transform="translate(16, 52)">
        {/* Saucer */}
        <ellipse cx="22" cy="24" rx="20" ry="5" fill="#E5E7EB" stroke="#001E5C" strokeWidth="1.8" />
        {/* Coffee Cup Body */}
        <path
          d="M7 6 Q 7 20, 22 20 Q 37 20, 37 6 Z"
          fill="#FFFFFF"
          stroke="#001E5C"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Coffee level inside */}
        <path d="M8 7 Q 22 11, 36 7 Q 30 17, 22 17 Q 14 17, 8 7 Z" fill="#5C3D2E" />
        {/* Cup Handle */}
        <path d="M36 10 C 41 10, 41 17, 36 18" stroke="#001E5C" strokeWidth="1.8" fill="none" />
      </g>

      {/* Coffee Packet */}
      <g transform="translate(8, 25) rotate(-10)">
        <rect x="0" y="0" width="14" height="24" rx="2" fill="#D97706" stroke="#001E5C" strokeWidth="1.5" />
        <line x1="2" y1="4" x2="12" y2="4" stroke="#001E5C" strokeWidth="1" />
        <line x1="2" y1="20" x2="12" y2="20" stroke="#001E5C" strokeWidth="1" />
        <circle cx="7" cy="12" r="3" fill="#FFCC00" stroke="#001E5C" strokeWidth="1" />
      </g>

      {/* Steam lines */}
      <path d="M32 45 Q 30 40 33 36" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 48 Q 44 42 41 38" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 3. Cola Illustration
export function ColaCan({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(32, 14) rotate(12)">
        {/* Cola shadow */}
        <rect x="3" y="5" width="30" height="56" rx="4" fill="#000000" fillOpacity="0.08" />

        {/* Can Body */}
        <rect x="0" y="2" width="30" height="54" rx="4" fill="#EF4444" stroke="#001E5C" strokeWidth="1.8" />
        {/* Silver Rims */}
        <ellipse cx="15" cy="2" rx="15" ry="3.5" fill="#D1D5DB" stroke="#001E5C" strokeWidth="1.8" />
        <ellipse cx="15" cy="56" rx="15" ry="3.5" fill="#9CA3AF" stroke="#001E5C" strokeWidth="1.8" />
        
        {/* Blue and White Stripes */}
        <path d="M0 16 L30 32 L30 40 L0 24 Z" fill="#3B82F6" />
        <path d="M0 20 L30 36 L30 38 L0 22 Z" fill="#FFFFFF" />

        {/* Carbonated bubbles and details */}
        <circle cx="8" cy="11" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
        <circle cx="22" cy="45" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
        <circle cx="18" cy="26" r="2" fill="#FFFFFF" fillOpacity="0.8" />

        {/* Splash out of open tab */}
        <path d="M8 -2 Q 2 -10 6 -14" stroke="#8B5A2B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 -3 Q 18 -12 12 -16" stroke="#8B5A2B" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 4. Filter Coffee Illustration
export function FilterCoffee({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cup and Saucer */}
      <g transform="translate(20, 24)">
        {/* Saucer */}
        <ellipse cx="30" cy="42" rx="28" ry="7" fill="#E5E7EB" stroke="#001E5C" strokeWidth="2" />
        <ellipse cx="30" cy="41" rx="20" ry="4.5" fill="#F3F4F6" />

        {/* Coffee Cup Body */}
        <path
          d="M10 15 L50 15 Q 48 38, 30 38 Q 12 38, 10 15 Z"
          fill="#FFFFFF"
          stroke="#001E5C"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Coffee Inside */}
        <ellipse cx="30" cy="16" rx="18.5" ry="4" fill="#5C3D2E" stroke="#001E5C" strokeWidth="1" />
        
        {/* Coffee Reflection line */}
        <path d="M16 16 C 16 18, 22 18, 26 17" stroke="#FFCC00" strokeWidth="0.8" fill="none" />

        {/* Cup Handle */}
        <path
          d="M48 20 C 56 20, 56 30, 47 32"
          stroke="#001E5C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Steam lines */}
      <path d="M42 30 Q 39 20 44 14" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M50 33 Q 52 24 49 16" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M58 32 Q 56 22 61 15" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 5. Black Tea Illustration
export function BlackTea({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(24, 20)">
        {/* Glass mug shadow */}
        <rect x="5" y="4" width="34" height="46" rx="6" fill="#000000" fillOpacity="0.05" />

        {/* Glass mug outer */}
        <rect
          x="3"
          y="2"
          width="34"
          height="46"
          rx="6"
          fill="#FFFFFF"
          fillOpacity="0.3"
          stroke="#001E5C"
          strokeWidth="2"
        />

        {/* Tea level inside (amber / orange-brown) */}
        <rect x="5" y="16" width="30" height="30" rx="3" fill="#D97706" fillOpacity="0.9" />

        {/* Glass Handle */}
        <path
          d="M37 12 C 46 12, 46 36, 37 36"
          stroke="#001E5C"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tea bag string */}
        <path d="M20 10 Q 15 5 10 -2 Q 5 -8 7 -14" stroke="#D1D5DB" strokeWidth="1.2" fill="none" />
        
        {/* Tea bag tag hanging outside */}
        <g transform="translate(2, -18)">
          <rect x="0" y="0" width="8" height="10" rx="1" fill="#10B981" stroke="#001E5C" strokeWidth="1" />
          <line x1="2" y1="3" x2="6" y2="3" stroke="#FFFFFF" strokeWidth="0.8" />
          <line x1="2" y1="6" x2="6" y2="6" stroke="#FFFFFF" strokeWidth="0.8" />
        </g>

        {/* Steam */}
        <path d="M16 -2 Q 13 -8 16 -12" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 -4 Q 26 -10 23 -14" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 6. Human Body Illustration (Taurine comparison)
export function HumanBody({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Energetic circular orbits */}
      <circle cx="50" cy="50" r="38" stroke="#FFCC00" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <circle cx="50" cy="50" r="28" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 2" fill="none" />

      {/* Human silhouette */}
      <g transform="translate(30, 14)">
        {/* Head */}
        <circle cx="20" cy="10" r="7" fill="#001E5C" />

        {/* Neck */}
        <rect x="18" y="16" width="4" height="4" fill="#001E5C" />

        {/* Torso */}
        <path d="M12 20 H28 L25 50 H15 Z" fill="#001E5C" />

        {/* Arms outstretched slightly */}
        <path d="M12 22 L2 35 L5 38 L13 26 Z" fill="#001E5C" />
        <path d="M28 22 L38 35 L35 38 L27 26 Z" fill="#001E5C" />

        {/* Legs */}
        <rect x="14" y="50" width="5" height="24" rx="2" fill="#001E5C" />
        <rect x="21" y="50" width="5" height="24" rx="2" fill="#001E5C" />
      </g>

      {/* Heart/Core energy pulse */}
      <circle cx="50" cy="40" r="6" fill="#ED1B24" />
      <circle cx="50" cy="40" r="10" stroke="#ED1B24" strokeWidth="1" opacity="0.6">
        <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// 7. Grape Juice Illustration (Sugars comparison)
export function GrapeJuice({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Juice Glass */}
      <g transform="translate(20, 15)">
        {/* Glass body */}
        <path
          d="M10 5 L14 48 Q 15 54, 25 54 Q 35 54, 36 48 L40 5 Z"
          fill="#FFFFFF"
          fillOpacity="0.2"
          stroke="#001E5C"
          strokeWidth="2"
        />
        {/* Purple Juice level */}
        <path d="M11 15 L14 47 C 14 52 36 52 36 47 L39 15 Z" fill="#7C3AED" />
        {/* Ice cube */}
        <rect x="18" y="22" width="10" height="10" rx="1" fill="#FFFFFF" fillOpacity="0.5" transform="rotate(15 23 27)" />
        {/* Straw */}
        <path d="M28 -6 L20 25" stroke="#ED1B24" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 -6 Q 32 -10 28 -6" stroke="#ED1B24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Grape bunch next to glass */}
      <g transform="translate(56, 52)">
        {/* Grapes circle stack */}
        <circle cx="8" cy="8" r="5" fill="#6D28D9" stroke="#001E5C" strokeWidth="1.2" />
        <circle cx="16" cy="8" r="5" fill="#6D28D9" stroke="#001E5C" strokeWidth="1.2" />
        <circle cx="12" cy="15" r="5" fill="#5B21B6" stroke="#001E5C" strokeWidth="1.2" />
        <circle cx="20" cy="15" r="5" fill="#5B21B6" stroke="#001E5C" strokeWidth="1.2" />
        <circle cx="16" cy="22" r="5" fill="#4C1D95" stroke="#001E5C" strokeWidth="1.2" />

        {/* Stem */}
        <path d="M12 4 Q 12 -2 16 -3" stroke="#00A859" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 8. Orange Juice Illustration
export function OrangeJuice({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Juice Glass */}
      <g transform="translate(20, 15)">
        {/* Glass body */}
        <path
          d="M10 5 L14 48 Q 15 54, 25 54 Q 35 54, 36 48 L40 5 Z"
          fill="#FFFFFF"
          fillOpacity="0.2"
          stroke="#001E5C"
          strokeWidth="2"
        />
        {/* Orange Juice level */}
        <path d="M11 15 L14 47 C 14 52 36 52 36 47 L39 15 Z" fill="#F97316" />
        {/* Straw */}
        <path d="M22 -8 L18 25" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 -8 Q 24 -12 28 -8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Orange Slice on glass rim */}
      <g transform="translate(52, 12)">
        {/* Outer rind */}
        <circle cx="14" cy="14" r="14" fill="#EA580C" stroke="#001E5C" strokeWidth="1.8" />
        {/* Inner flesh */}
        <circle cx="14" cy="14" r="11" fill="#FBBF24" />
        {/* Segments */}
        <line x1="14" y1="3" x2="14" y2="25" stroke="#EA580C" strokeWidth="1.2" />
        <line x1="3" y1="14" x2="25" y2="14" stroke="#EA580C" strokeWidth="1.2" />
        <line x1="6" y1="6" x2="22" y2="22" stroke="#EA580C" strokeWidth="1.2" />
        <line x1="6" y1="22" x2="22" y2="6" stroke="#EA580C" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

// 9. Soft Drink Illustration
export function SoftDrink({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(32, 16)">
        {/* Fast food soda cup shadow */}
        <path d="M2 8 L30 8 L24 64 L8 64 Z" fill="#000000" fillOpacity="0.05" />

        {/* Soda Cup Body */}
        <path
          d="M0 6 L32 6 L26 62 L6 62 Z"
          fill="#F3F4F6"
          stroke="#001E5C"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Blue Logo Stripe on Cup */}
        <path d="M3 24 L29 24 L27 38 L5 38 Z" fill="#2563EB" />
        
        {/* Red Circle Badge */}
        <circle cx="16" cy="31" r="5" fill="#EF4444" stroke="#001E5C" strokeWidth="1" />

        {/* Cup Lid */}
        <rect x="-3" y="0" width="38" height="6" rx="2.5" fill="#E5E7EB" stroke="#001E5C" strokeWidth="2" />

        {/* Red Straw */}
        <path d="M16 0 L16 -12 L24 -18" stroke="#EF4444" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M16 0 L16 -12 L24 -18" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" fill="none" />
      </g>
    </svg>
  );
}

// 10. Apple Juice Illustration
export function AppleJuice({ className = "w-24 h-24" }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Juice Glass */}
      <g transform="translate(20, 15)">
        {/* Glass body */}
        <path
          d="M10 5 L14 48 Q 15 54, 25 54 Q 35 54, 36 48 L40 5 Z"
          fill="#FFFFFF"
          fillOpacity="0.2"
          stroke="#001E5C"
          strokeWidth="2"
        />
        {/* Golden Apple Juice level */}
        <path d="M11 15 L14 47 C 14 52 36 52 36 47 L39 15 Z" fill="#EAB308" fillOpacity="0.85" />
        {/* Straw */}
        <path d="M22 -8 L18 25" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 -8 Q 24 -12 28 -8" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Red Apple next to glass */}
      <g transform="translate(56, 52)">
        {/* Leaf */}
        <path d="M14 2 C 16 -3, 22 -1, 20 4 C 18 9, 12 7, 14 2 Z" fill="#22C55E" />
        {/* Stem */}
        <path d="M12 5 Q 15 0 14 -3" stroke="#001E5C" strokeWidth="1.5" strokeLinecap="round" />
        {/* Apple body (cute hand drawn shape) */}
        <path
          d="M12 4 C 8 3 1 5 1 12 C 1 20 7 24 12 23 C 17 24 23 20 23 12 C 23 5 16 3 12 4 Z"
          fill="#EF4444"
          stroke="#001E5C"
          strokeWidth="1.8"
        />
        {/* Highlight splash */}
        <path d="M6 9 Q 4 13 6 15" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Helper mapper function to render correct SVG based on label
export function getIllustration(label: string, className?: string) {
  const normalized = label.toLowerCase();
  
  if (normalized.includes("red bull")) return <RedBullCan className={className} />;
  if (normalized.includes("instant coffee")) return <InstantCoffee className={className} />;
  if (normalized.includes("cola")) return <ColaCan className={className} />;
  if (normalized.includes("filter coffee")) return <FilterCoffee className={className} />;
  if (normalized.includes("black tea")) return <BlackTea className={className} />;
  if (normalized.includes("human body")) return <HumanBody className={className} />;
  if (normalized.includes("grape juice")) return <GrapeJuice className={className} />;
  if (normalized.includes("orange juice")) return <OrangeJuice className={className} />;
  if (normalized.includes("soft drink")) return <SoftDrink className={className} />;
  if (normalized.includes("apple juice")) return <AppleJuice className={className} />;
  
  // Fallback default coffee illustration
  return <FilterCoffee className={className} />;
}
