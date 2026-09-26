// Faint connected-node network for the home hero — a restrained "data / automation" texture.
// Deterministic points so server and client render identically.

const nodes: [number, number][] = [
  [620, 60], [720, 130], [860, 90], [980, 170], [1100, 80], [1220, 150],
  [680, 260], [800, 320], [940, 280], [1060, 350], [1180, 290], [1300, 240],
  [740, 450], [880, 500], [1010, 460], [1140, 520], [1270, 430], [1360, 360],
];

const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
  [3, 8], [5, 11], [7, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [9, 14], [11, 17], [2, 8],
];

export default function NodeField() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full [mask-image:linear-gradient(to_right,transparent_35%,black_75%)]"
    >
      <g stroke="white" strokeOpacity="0.09" strokeWidth="1">
        {links.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 4 === 0 ? 3 : 2}
          fill={i % 4 === 0 ? "#9aad9c" : "white"}
          className={i % 3 === 0 ? "node-pulse" : undefined}
          style={i % 3 === 0 ? { animationDelay: `${(i * 370) % 3200}ms` } : undefined}
          opacity={i % 3 === 0 ? undefined : 0.3}
        />
      ))}
    </svg>
  );
}
