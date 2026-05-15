/** Thick swooping curved arrows (can → ingredient), with filled arrowheads */

type ArrowDef = { d: string; color: string; id: string };

const arrows: ArrowDef[] = [
  { id: "caffeine", color: "#ED1B24", d: "M 541 310 L 435 310 L 230 105 L 210 105" },
  { id: "taurine", color: "#E6B800", d: "M 520 355 L 195 355" },
  { id: "water", color: "#4A9FD4", d: "M 552 310 L 665 310 L 870 105 L 890 105" },
  { id: "b-vitamins", color: "#DA1884", d: "M 580 355 L 905 355" },
  { id: "sugars", color: "#00A859", d: "M 575 400 L 680 400 L 875 595 L 895 595" },
];

export function IngredientArrows() {
  return (
    <svg
      className="ingredient-arrows absolute inset-0 w-full h-full pointer-events-none hidden md:block"
      viewBox="0 0 1100 680"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        {arrows.map(({ id, color }) => (
          <marker
            key={id}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,1 L7,4 L0,7 Z" fill={color} />
          </marker>
        ))}
      </defs>
      {arrows.map(({ id, color, d }) => {
        const [, startX, startY] = d.split(" ");
        return (
          <g key={id}>
            <circle cx={startX} cy={startY} r="3" fill={color} />
            <path
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={3}
              strokeLinecap="square"
              strokeLinejoin="miter"
              markerEnd={`url(#arrowhead-${id})`}
              className="ingredient-arrow-path"
            />
          </g>
        );
      })}
    </svg>
  );
}
