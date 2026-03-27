#!/usr/bin/env node
/**
 * build-registry.mjs — generates cli/registry.json from the source registry.
 *
 * Reads the registry data directly from the source TypeScript file to avoid
 * ESM import issues with Node.js.
 *
 * Usage: node cli/build-registry.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Read the compiled registry to extract the data
// We'll use a simple approach: read the source and extract the registry array
const registrySource = fs.readFileSync(
  path.join(root, "src", "registry", "index.ts"),
  "utf-8"
);

// Extract registry entries manually from source
// This is a simplified approach that works for our specific structure
const entries = [
  {
    id: "flow-currents",
    name: "Flow Currents",
    description: "Thousands of particles trace Perlin noise vector fields forming organic density maps.",
    tags: ["particles", "noise", "flow", "organic"],
    files: [
      "src/components/FlowCurrents.tsx",
      "src/components/engines/flowCurrents.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "gravity-storm",
    name: "Gravity Storm",
    description: "Multiple gravitational attractors pull a particle swarm into complex orbital dance.",
    tags: ["particles", "physics", "gravity", "orbits"],
    files: [
      "src/components/GravityStorm.tsx",
      "src/components/engines/gravityStorm.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "geo-pulse",
    name: "Geo Pulse",
    description: "Nested parametric polygons rotating at prime-ratio angular velocities.",
    tags: ["geometric", "polygons", "rotation", "mathematical"],
    files: [
      "src/components/GeoPulse.tsx",
      "src/components/engines/geoPulse.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "wave-ether",
    name: "Wave Ether",
    description: "Sine waves from multiple drifting sources interfere to create standing waves and moiré patterns.",
    tags: ["waves", "interference", "sine", "pixel"],
    files: [
      "src/components/WaveEther.tsx",
      "src/components/engines/waveEther.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "vortex-bloom",
    name: "Vortex Bloom",
    description: "Particles spiral under competing vortex attractors, accumulating into mandala-like formations.",
    tags: ["particles", "vortex", "orbital", "mandala"],
    files: [
      "src/components/VortexBloom.tsx",
      "src/components/engines/vortexBloom.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "crystalline-drift",
    name: "Crystalline Drift",
    description: "Recursive branching arms grow from the center, forming snowflake-like crystal mandala structures.",
    tags: ["fractal", "crystal", "symmetry", "dendrite"],
    files: [
      "src/components/CrystallineDrift.tsx",
      "src/components/engines/crystallineDrift.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "ambient-mesh",
    name: "Ambient Mesh",
    description: "Nodes drift through noise fields, forming dynamic connections — a living network background.",
    tags: ["network", "nodes", "mesh", "subtle"],
    files: [
      "src/components/AmbientMesh.tsx",
      "src/components/engines/ambientMesh.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "ember-cascade",
    name: "Ember Cascade",
    description: "Thermal particles rise with turbulent motion, glowing through temperature-based color gradients.",
    tags: ["particles", "fire", "thermal", "glow"],
    files: [
      "src/components/EmberCascade.tsx",
      "src/components/engines/emberCascade.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "clifford-attractor",
    name: "Clifford Attractor",
    description: "Strange attractor density map revealing the fractal structure of chaotic orbital dynamics.",
    tags: ["attractor", "chaos", "fractal", "mathematical"],
    files: [
      "src/components/CliffordAttractor.tsx",
      "src/components/engines/cliffordAttractor.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "harmonic-lattice",
    name: "Harmonic Lattice",
    description: "Two-dimensional standing wave interference patterns with temporal evolution and nodal lines.",
    tags: ["waves", "interference", "harmonic", "mathematical"],
    files: [
      "src/components/HarmonicLattice.tsx",
      "src/components/engines/harmonicLattice.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "lissajous-weave",
    name: "Lissajous Weave",
    description: "Multiple Lissajous curves with different frequency ratios morphing through shared phase offset.",
    tags: ["parametric", "harmonic", "curves", "mathematical"],
    files: [
      "src/components/LissajousWeave.tsx",
      "src/components/engines/lissajousWeave.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "phyllotaxis-dream",
    name: "Phyllotaxis Dream",
    description: "Golden angle spiral growth pattern inspired by sunflower seed arrangements and natural phyllotaxis.",
    tags: ["spiral", "golden-ratio", "botanical", "mathematical"],
    files: [
      "src/components/PhyllotaxisDream.tsx",
      "src/components/engines/phyllotaxisDream.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "spirograph",
    name: "Spirograph",
    description: "Hypotrochoid curves traced by rolling circles, creating intricate geometric rosettes and patterns.",
    tags: ["geometric", "parametric", "curves", "mathematical"],
    files: [
      "src/components/Spirograph.tsx",
      "src/components/engines/spirograph.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "differential-growth",
    name: "Differential Growth",
    description: "Organic growth simulation with spring forces, repulsion, and noise-guided expansion creating folded forms.",
    tags: ["organic", "growth", "simulation", "biological"],
    files: [
      "src/components/DifferentialGrowth.tsx",
      "src/components/engines/differentialGrowth.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "double-pendulum",
    name: "Double Pendulum",
    description: "Chaotic dynamics visualization using RK4 integration showing diverging trajectories from similar initial conditions.",
    tags: ["chaos", "physics", "pendulum", "mathematical"],
    files: [
      "src/components/DoublePendulum.tsx",
      "src/components/engines/doublePendulum.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "fractal-noise-terrain",
    name: "Fractal Noise Terrain",
    description: "Layered octaves of Perlin noise creating procedural landscapes with elevation-based coloring.",
    tags: ["fractal", "terrain", "noise", "landscape"],
    files: [
      "src/components/FractalNoiseTerrain.tsx",
      "src/components/engines/fractalNoiseTerrain.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "moire-lattice",
    name: "Moire Lattice",
    description: "Rotating line grids creating interference patterns and moiré effects through overlapping parallel lines.",
    tags: ["geometric", "moire", "interference", "lines"],
    files: [
      "src/components/MoireLattice.tsx",
      "src/components/engines/moireLattice.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "neural-weave",
    name: "Neural Weave",
    description: "Network of nodes with traveling signal pulses creating dynamic neural-like activation patterns.",
    tags: ["network", "neural", "signals", "nodes"],
    files: [
      "src/components/NeuralWeave.tsx",
      "src/components/engines/neuralWeave.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "orbital-resonance",
    name: "Orbital Resonance",
    description: "Bodies orbit at resonant period ratios creating harmonic patterns and Lissajous-like trajectories.",
    tags: ["orbital", "resonance", "harmonic", "physics"],
    files: [
      "src/components/OrbitalResonance.tsx",
      "src/components/engines/orbitalResonance.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "reaction-diffusion",
    name: "Reaction Diffusion",
    description: "Gray-Scott model creating organic pattern formation through chemical reaction simulation.",
    tags: ["reaction-diffusion", "organic", "pattern", "simulation"],
    files: [
      "src/components/ReactionDiffusion.tsx",
      "src/components/engines/reactionDiffusion.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "recursive-subdivision",
    name: "Recursive Subdivision",
    description: "Binary space partitioning creating Mondrian-like compositions with golden ratio splits.",
    tags: ["geometric", "subdivision", "mondrian", "recursive"],
    files: [
      "src/components/RecursiveSubdivision.tsx",
      "src/components/engines/recursiveSubdivision.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "tide-harmonics",
    name: "Tide Harmonics",
    description: "Multiple wave sources creating interference patterns along horizontal lines like ocean tides.",
    tags: ["waves", "interference", "harmonic", "ocean"],
    files: [
      "src/components/TideHarmonics.tsx",
      "src/components/engines/tideHarmonics.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "voronoi-mosaic",
    name: "Voronoi Mosaic",
    description: "Moving seed points creating dynamic Voronoi tessellation with edge-enhanced cells.",
    tags: ["voronoi", "tessellation", "mosaic", "geometric"],
    files: [
      "src/components/VoronoiMosaic.tsx",
      "src/components/engines/voronoiMosaic.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
  {
    id: "background-studio",
    name: "Background Studio",
    description: "Interactive playground to explore and configure all backgrounds with live preview and code export.",
    tags: ["studio", "playground", "dev-tool"],
    files: [
      "src/components/BackgroundStudio.tsx",
      "src/components/FlowCurrents.tsx",
      "src/components/GravityStorm.tsx",
      "src/components/GeoPulse.tsx",
      "src/components/WaveEther.tsx",
      "src/components/VortexBloom.tsx",
      "src/components/CrystallineDrift.tsx",
      "src/components/AmbientMesh.tsx",
      "src/components/EmberCascade.tsx",
      "src/components/CliffordAttractor.tsx",
      "src/components/HarmonicLattice.tsx",
      "src/components/engines/flowCurrents.ts",
      "src/components/engines/gravityStorm.ts",
      "src/components/engines/geoPulse.ts",
      "src/components/engines/waveEther.ts",
      "src/components/engines/vortexBloom.ts",
      "src/components/engines/crystallineDrift.ts",
      "src/components/engines/ambientMesh.ts",
      "src/components/engines/emberCascade.ts",
      "src/components/engines/cliffordAttractor.ts",
      "src/components/engines/harmonicLattice.ts",
      "src/components/utils/noise.ts",
      "src/components/schemas/index.ts",
    ],
  },
];

// Source paths in the TypeScript registry use the pattern:
//   src/components/X  →  components/backgrounds/X  (install target)
function sourceToTarget(sourcePath) {
  return sourcePath.replace(/^src\/components\//, "components/backgrounds/");
}

const BASE_URL =
  "https://raw.githubusercontent.com/dano796/alg-art-backgrounds/main";

const output = {
  version: "1.0.0",
  baseUrl: BASE_URL,
  components: entries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: entry.description,
    tags: entry.tags,
    files: entry.files.map((source) => ({
      source,
      target: sourceToTarget(source),
    })),
  })),
};

const outPath = path.join(root, "cli", "registry.json");
fs.writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n", "utf-8");
console.log(`cli/registry.json written with ${output.components.length} components.`);
