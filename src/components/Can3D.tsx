import canOriginal from "@/assets/can-original.png";

/**
 * Premium floating Red Bull can image with CSS-driven glow,
 * hover tilt, and a smooth float animation.
 * Replaces the previous Three.js-based 3D can for better
 * compatibility and performance.
 */
export function Can3D({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center hero-can-wrapper`}>
      <img
        src="./assets/can-original.png"
        alt="Red Bull Original"
        width={760}
        height={1710}
        decoding="async"
        fetchPriority="high"
        draggable={false}
        className="hero-can"
      />
    </div>
  );
}
