export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  clientOrRole: string;
  duration: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  architecture: {
    stack: string[];
    performance: string;
    highlights: string[];
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  disciplines: string[];
  deliverables: string[];
  methodology: string;
  quote: string;
}

export interface ArchiveItem {
  year: string;
  title: string;
  type: string;
  focus: string;
  status: string;
  linkText: string;
}

export const PORTFOLIO_DATA = {
  creator: {
    name: "Aurelius Vane",
    title: "Creative Director & Technical Architect",
    location: "Stockholm / London / Remote",
    coordinates: "59.3293° N, 18.0686° E",
    status: "Available for select Q3/Q4 digital commissions",
    timezone: "Europe/Stockholm",
    email: "aurelius.vane.creative@gmail.com",
    bio: "Blending cinematic art direction, custom WebGL compute pipelines, and full-stack software architecture. Over a decade engineering high-retention digital flagships and interactive brand experiences.",
    portraitImage: "/images/portrait_aurelius_vane_1791386286727.jpg",
    statement: "I do not build static websites. I compose interactive environments that evoke emotional resonance and command memorability.",
  },

  socials: [
    { label: "GitHub", url: "https://github.com", handle: "@aurelius-vane" },
    { label: "ReadCV", url: "https://read.cv", handle: "aurelius" },
    { label: "X / Twitter", url: "https://x.com", handle: "@aurelius_vane" },
    { label: "LinkedIn", url: "https://linkedin.com", handle: "/in/aureliusvane" },
  ],

  projects: [
    {
      id: "lumina-chronicles",
      number: "01",
      title: "Lumina Chronicles",
      subtitle: "Interactive Architectural Cinema",
      category: "Interactive Direction",
      year: "2026",
      clientOrRole: "Art Direction & WebGL Engineering",
      duration: "4 Months",
      heroImage: "/images/project_lumina_chronicles_1791386245032.jpg",
      galleryImages: [
        "/images/project_lumina_chronicles_1791386245032.jpg",
        "/images/project_kinetic_vortex_1791386255557.jpg",
      ],
      tagline: "A spatial narrative journey through brutalist monolithic pavilions submerged in dusk.",
      overview:
        "Commissioned as a launch vehicle for an avant-garde architectural collective, Lumina Chronicles is an interactive digital essay exploring light, stone, and memory. The experience renders progressive volumetric illumination in real-time within the browser canvas.",
      challenge:
        "Rendering physically-accurate volumetric light scattering through dense atmospheric fog at 60 frames per second on mobile and low-power devices without thermal throttling or frame degradation.",
      solution:
        "Engineered a bespoke multi-pass raymarching GLSL shader utilizing blue-noise jittering and half-resolution temporal reconstruction, paired with a camera choreography system driven by unified scroll kinematics.",
      architecture: {
        stack: ["WebGL", "Three.js", "GLSL Raymarching", "TypeScript", "Next.js", "Web Audio API"],
        performance: "Sub-16ms frame budget · 98 Lighthouse Score · Zero raster thrashing",
        highlights: [
          "Custom volumetric fog post-processing pass",
          "Procedural ambient soundscape generated via Web Audio oscillator banks",
          "Dynamic camera splines synchronized with editorial typographic reveals",
        ],
      },
      metrics: [
        { label: "Average Session", value: "4m 18s", description: "3.2x industry benchmark for portfolio showcases" },
        { label: "Frame Rate", value: "60 FPS", description: "Rock-solid across 99.4% tested hardware profiles" },
        { label: "Accolades", value: "FWA of the Day", description: "Honored for technical art and real-time storytelling" },
      ],
    },
    {
      id: "kinetic-vortex",
      number: "02",
      title: "Kinetic Vortex",
      subtitle: "Audio-Reactive Fluid Installation",
      category: "Generative Audio-Visual",
      year: "2025",
      clientOrRole: "Lead Creative Technologist",
      duration: "3 Months",
      heroImage: "/images/project_kinetic_vortex_1791386255557.jpg",
      galleryImages: [
        "/images/project_kinetic_vortex_1791386255557.jpg",
        "/images/project_solis_atelier_1791386264775.jpg",
      ],
      tagline: "Real-time GPGPU particle physics responding to spatial acoustics and cursor gravity.",
      overview:
        "An exploration into computational aesthetics. Kinetic Vortex simulates over 150,000 fluid particles orbiting a strange attractor, computing forces directly inside custom GPU compute textures while responding to musical frequency bands.",
      challenge:
        "Maintaining real-time physical simulation fidelity for 150K independent particles while allowing interactive mouse displacement and dynamic color palette shifting without dropping a single frame.",
      solution:
        "Architected a ping-pong float frame-buffer pipeline running curl noise vectors and Verlet integration on the GPU, avoiding CPU-GPU synchronization bottlenecks completely.",
      architecture: {
        stack: ["GPGPU Curl Noise", "GLSL Compute", "Web Audio FFT", "React", "Tailwind CSS"],
        performance: "150,000 particles at 60fps · Zero memory leaks after 3-hour stress test",
        highlights: [
          "FFT frequency-band energy decomposition driving particle velocity",
          "Interactive cursor gravity well with damping inertia",
          "Configurable spectral chromatic dispersion shaders",
        ],
      },
      metrics: [
        { label: "Simulated Particles", value: "150,000", description: "Real-time float precision compute" },
        { label: "Render Overhead", value: "4.2 ms", description: "Per-frame GPU draw time" },
        { label: "User Interaction", value: "88%", description: "Visitors engaged with sound reactivity" },
      ],
    },
    {
      id: "solis-atelier",
      number: "03",
      title: "Solis Atelier",
      subtitle: "Haute Horlogerie Digital Flagship",
      category: "Luxury E-Commerce & 3D",
      year: "2025",
      clientOrRole: "Design Director & 3D Lead",
      duration: "5 Months",
      heroImage: "/images/project_solis_atelier_1791386264775.jpg",
      galleryImages: [
        "/images/project_solis_atelier_1791386264775.jpg",
        "/images/project_neoterra_satellite_1791386276521.jpg",
      ],
      tagline: "Microscopic precision meets digital luxury. A bespoke 3D tourbillon exploration.",
      overview:
        "Crafted for an independent Geneva horology house, Solis Atelier provides an editorial e-commerce experience that deconstructs a 318-component mechanical skeleton watch in real-time 3D, allowing collectors to inspect hairspring tolerances and hand-chamfered bridges.",
      challenge:
        "Delivering micro-millimeter visual realism with brushed titanium, rubies, and anti-reflective sapphire crystal while keeping initial bundle transfer under 3.5 megabytes.",
      solution:
        "Employed progressive mesh LOD streaming, Draco geometry compression, and custom PBR shader micro-faceting routines that simulate anisotropic radial brushing without heavy texture maps.",
      architecture: {
        stack: ["Three.js", "Draco Compression", "Custom Anisotropic PBR", "Next.js", "Motion"],
        performance: "2.8MB total assets · 1.1s First Contentful Paint globally",
        highlights: [
          "Exploded mechanical view synchronized with editorial scroll steps",
          "Dynamic lighting environment replicating Swiss daylight shifts",
          "Seamless checkout and bespoke concierge appointment scheduler",
        ],
      },
      metrics: [
        { label: "Conversion Lift", value: "+142%", description: "Increase in VIP private viewings requested" },
        { label: "Asset Size", value: "2.8 MB", description: "Draco-compressed from 48MB CAD source" },
        { label: "Satisfaction", value: "99.2%", description: "Client and collector sentiment rating" },
      ],
    },
    {
      id: "neo-terra",
      number: "04",
      title: "Neo-Terra",
      subtitle: "Environmental Topography Engine",
      category: "Scientific & Spatial Data",
      year: "2024",
      clientOrRole: "Systems Architect & Visualization Engineer",
      duration: "3.5 Months",
      heroImage: "/images/project_neoterra_satellite_1791386276521.jpg",
      galleryImages: [
        "/images/project_neoterra_satellite_1791386276521.jpg",
        "/images/project_lumina_chronicles_1791386245032.jpg",
      ],
      tagline: "Real-time elevation and oceanic biophony mapped from open satellite streams.",
      overview:
        "An open data visualization tool built for environmental researchers and climate journalists. Neo-Terra transforms NASA Landsat and Sentinel-2 multi-spectral data into an interactive, photorealistic midnight globe with customizable elevation exaggerations and oceanic tide currents.",
      challenge:
        "Processing raster tile elevations on the fly while offering smooth camera translation from low Earth orbit down to volcanic fjord crevasses.",
      solution:
        "Built a quadtree tile server combined with GPU vertex displacement that computes real-time contour vectors and normal mapping directly from 16-bit elevation DEM images.",
      architecture: {
        stack: ["WebGPU / WebGL2", "GeoTIFF Processing", "TypeScript", "Tailwind CSS"],
        performance: "60 FPS zoom transitions · Dynamic tile level-of-detail",
        highlights: [
          "GPU-based normal reconstruction from satellite elevation heightmaps",
          "Custom dark-mode cartographic styling inspired by topographic prints",
          "Data export pipeline for print-resolution SVG vector contours",
        ],
      },
      metrics: [
        { label: "Data Processed", value: "14 TB", description: "Satellite elevation and sensory rasters" },
        { label: "Active Researchers", value: "35,000+", description: "Monthly active scientific users worldwide" },
        { label: "Render Latency", value: "8 ms", description: "Per-frame projection re-calculation" },
      ],
    },
  ] as ProjectCaseStudy[],

  capabilities: [
    {
      id: "creative-direction",
      number: "01",
      title: "Creative Direction & Spatial UX",
      description:
        "Directing the visual rhythm, cinematic pacing, and emotional resonance of interactive digital works. Treating the browser window as an intentional camera lens.",
      disciplines: ["Art Direction", "Cinematic Pacing", "Editorial Layouts", "Motion Choreography", "Typography Systems"],
      deliverables: ["Visual Direction Guidelines", "High-Fidelity Interactive Prototypes", "Editorial Typographic Scales", "Motion Scripts"],
      methodology:
        "Every project begins with a narrative hypothesis. We define the visual tension, typographic contrast, and camera kinematics before a single line of production code is written.",
      quote: "Motion is not decoration; motion is camera control and cognitive focus.",
    },
    {
      id: "webgl-shaders",
      number: "02",
      title: "Real-Time 3D & GLSL Shaders",
      description:
        "Engineering high-performance GPU shaders, procedural particle systems, and photorealistic PBR materials that run with fluid grace across desktop and handheld hardware.",
      disciplines: ["Three.js / WebGL", "Custom GLSL Shaders", "GPGPU Simulation", "Raymarching", "Post-Processing Pipelines"],
      deliverables: ["Optimized 3D Experiences", "Procedural Asset Generators", "Frame-Budget Audits", "Graceful Fallback Logic"],
      methodology:
        "GPU compute must be disciplined. We prioritize lightweight math, blue-noise sampling, and memory reuse to achieve cinematic quality without heating the user's laptop.",
      quote: "True technical luxury is delivering breathtaking visual fidelity within a 16ms budget.",
    },
    {
      id: "frontend-architecture",
      number: "03",
      title: "Modern Frontend Architecture",
      description:
        "Building rock-solid, production-grade applications using Next.js, React, TypeScript, and modern CSS that maintain pristine performance, SEO fidelity, and WCAG AA accessibility.",
      disciplines: ["Next.js App Router", "TypeScript Strict Typing", "State Orchestration", "Micro-Interactions", "SEO & OpenGraph"],
      deliverables: ["Component Design Systems", "Responsive Viewport Systems", "Accessible Semantics", "Zero-Clutter Codebases"],
      methodology:
        "Code should read as clearly as typography. Strict component boundaries, zero unnecessary libraries, and zero layout thrash.",
      quote: "Elegance on screen requires architectural discipline beneath the hood.",
    },
    {
      id: "audio-spatial",
      number: "04",
      title: "Interactive Soundscapes & Micro-Acoustics",
      description:
        "Crafting procedural ambient drone synthesizers and tactile audio cues that amplify digital tangibility without relying on bulky audio downloads.",
      disciplines: ["Web Audio API", "Parametric Synthesis", "Audio-Reactive FFT", "Bespoke Haptic Cues", "User-Controlled Soundscapes"],
      deliverables: ["Synthesized Ambient Engines", "Spatial Audio Panners", "Tactile Click Systems", "Mute State Persistence"],
      methodology:
        "Sound must always ask for permission and never startle. Procedural synthesis ensures zero network bandwidth and infinite generative variation.",
      quote: "Sound transforms visual pixels into a physical space.",
    },
  ] as CapabilityItem[],

  archive: [
    {
      year: "2026",
      title: "Chroma Shift: Anamorphic Flare Shaders in GLSL",
      type: "Technical Essay",
      focus: "Graphics & Shaders",
      status: "Published",
      linkText: "Read Paper",
    },
    {
      year: "2025",
      title: "Aetheria: Procedural Volumetric Clouds in WebGL",
      type: "Open Source",
      focus: "Three.js / GLSL",
      status: "Production",
      linkText: "Inspect Repo",
    },
    {
      year: "2025",
      title: "The Death of the Card Grid: Editorial Web Direction",
      type: "Keynote Talk",
      focus: "Creative Direction",
      status: "Archived",
      linkText: "Watch Recording",
    },
    {
      year: "2024",
      title: "Vespera: Kinetic Typography Experiment",
      type: "Digital Artifact",
      focus: "Motion & Canvas",
      status: "Interactive",
      linkText: "Launch Lab",
    },
    {
      year: "2024",
      title: "Zero-Latency Spatial Audio in Browser Worklets",
      type: "Research Note",
      focus: "Web Audio",
      status: "Published",
      linkText: "Read Notes",
    },
  ] as ArchiveItem[],
};
