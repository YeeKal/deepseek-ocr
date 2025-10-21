import {Scenario} from "@/lib/types"


// --- DATA ---
// (Ensure these image paths point to actual images in your /public directory)
// --- UPDATED DATA ---
export const practicalScenarios: Scenario[] = [
  {
    id: "advertiser-ecommerce",
    shortTitle: "Product Visualization",
    originalTitle: "E-Commerce Product Visualization: Showcase Your Products in Any Setting",
    tagline: "From studio shot to lifestyle scene. Elevate your e-commerce visuals.",
    description: "Upload a basic product photo. FLUX Kontext places it in diverse, professional lifestyle settings or on various backgrounds, creating compelling visuals that boost engagement and sales for your online store.",
    category: "Advertisers / E-Commerce",
    inputImage: [{
      prompt: "Original: A red headphone",
      imageUrl: "https://cdn.kontextflux.io/home-gallery/advertiser/headphones.webp", // Replace
      alt: "red-headphone",
    },
    {
      prompt: "Original: woman",
      imageUrl: "https://cdn.kontextflux.io/home-gallery/advertiser/girl-with-a-backpack-in-an-hallway-min.webp", // Replace
      alt: "girl-with-a-backpack-in-an-hallway-min",
    },
  ],
    outputImages: [
      {
        prompt: "Put the red headphones on the woman, sitting at a cozy café table with a coffee cup, looking thoughtfully out the window",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/advertiser/output1-at-coffee.webp", // Replace
        alt: "output1-at-coffee",
      },
      {
        prompt: "Put the red headphones on the woman, dancing energetically in a colorful studio with a blurred background",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/advertiser/output2-dancing-in-studio.webp", // Replace
        alt: "output2-dancing-in-studio",
      },
      {
        prompt: "Put the red headphones on the woman, leaning against a wall in a modern art gallery, striking a relaxed pose.",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/advertiser/output3-at-art-gallery.webp", // Replace
        alt: "output3-at-art-gallery",
      },
    ],
  },
  {
    id: "filmmaker-precision", // UPDATED ID
    shortTitle: "Vision Realized", // UPDATED
    originalTitle: "Filmmaker: Precision Pre-Visualization with Contextual AI", // UPDATED
    tagline: "From script or sketch to scene-accurate visuals. AI that truly understands cinematic intent.", // UPDATED
    description: "Filmmaking demands precision—lighting, composition, visual continuity. FLUX Kontext bridges this gap where other AI tools fall short. It contextually learns from your script, detailed sketch, or reference frame, generating visuals that precisely match your original vision and empower you to pre-visualize with unparalleled accuracy.", // UPDATED
    category: "Filmmakers / Pre-Visualization", // UPDATED Category slightly
    inputImage: [      {
      prompt: "Original: Woman on mountain",
      imageUrl: "https://cdn.kontextflux.io/home-gallery/filmmaker/lukas-zischke.webp", // Replace
      alt: "lukas-zischke",
    }],
    outputImages: [
      {
        prompt: "Transform the lighting to a foggy morning ambiance, with soft diffused light highlighting the woman silhouette against the dunes and a calm sea",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/filmmaker/moning-foggy.webp", // Replace
        alt: "moning-foggy",
      },
      {
        prompt: "the woman walking toward the water, keeping the sunset lighting consistent.",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/filmmaker/lukas-zischke-walking-to-water.webp", // Replace
        alt: "lukas-zischke-walking-to-water",
      }
    ],
  },
  {
    id: "illustrator-refine",
    shortTitle: "Sketch Refined",
    originalTitle: "Illustrator: Elevate Your Sketches to Polished Illustrations",
    tagline: "Transform your creative doodles into portfolio-ready artwork.",
    description: "Upload your initial character sketch or illustration concept. FLUX Kontext helps refine lines, add color palettes, or even transform it into different artistic styles, turning your raw ideas into finished masterpieces.",
    category: "Illustrators / Artists",
    inputImage:[ {
      prompt: "A simple pencile sketch",
      imageUrl: "https://cdn.kontextflux.io/home-gallery/sketch/pencile-sketch.webp", // Replace
      alt: "pencile-sketch",
    }],
    outputImages: [
      {
        prompt: "Refine the lines of the pencil sketch, apply a Japanese Ghibli-style animation aesthetic with pastel colors, and add a whimsical background with cherry blossoms",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/sketch/sketch-to-ghibli-style.webp", // Replace
        alt: "sketch-to-ghibli-style",
      },
      {
        prompt: "Transform the pencil sketch into a detailed oil painting style, using rich earthy tones, and add subtle shading to the sneakers and chalkboard",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/sketch/sketch-to-oil-painting.webp", // Replace
        alt: "sketch-to-oil-painting",
      }
    ],
  },
  {
    id: "social-media-content",
    shortTitle: "Social Buzz",
    originalTitle: "Social Media Content Creation: Engaging Visuals in Seconds",
    tagline: "Generate eye-catching posts that stop the scroll.",
    description: "Need fresh visuals for your social media? Input a theme, a quote, or a product idea. FLUX Kontext crafts vibrant, shareable images perfectly sized and styled for platforms like Instagram, X, or Facebook, boosting your online presence.",
    category: "Social Media / Marketing",
    inputImage:[ {
      prompt: "Original: Cute girl",
      imageUrl: "https://cdn.kontextflux.io/home-gallery/social/cute-girl.jpg", // Replace
      alt: "cute-girl",
    }],
    outputImages: [
      {
        prompt: "Create a vibrant Instagram post with this girl featuring a tropical beach theme with a quote 'Chase the Waves' in bold white text with a blue gradient background",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/social/cute-girl-on-beach.jpg", // Replace
        alt: "cute-girl-on-beach.jpg",
      },
      {
        prompt: "Create an Instagram post for this girl in a travel adventure style, featuring a mountain landscape at sunrise with a hiker’s silhouette, with the quote 'Explore More' in bold white text",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/social/cute-girl-hiking.jpg", // Replace
        alt: "cute-girl-hiking",
      },
    ],
  },
  {
    id: "custom-merchandise",
    shortTitle: "Merch Maker",
    originalTitle: "Custom Merchandise Design: Visualize Your Brand on Products",
    tagline: "Design custom apparel and products with ease. See your ideas mocked up instantly.",
    description: "Allow users to design custom T-shirts, mugs, or posters. Upload a logo or design element, specify the product, and add text or color modifications (e.g., “Place my logo on a coffee mug in a cozy café setting”). Ideal for print-on-demand businesses and personal projects.",
    category: "Designers / Print-on-Demand",
    inputImage: [{
      prompt: `Place a circular black logo with a tree silhouette on a white T-shirt, set against a forest background with soft green tones, and add the text 'Nature’s Finest' in bold green font, brush strokes with visible texture.`,
      imageUrl: "https://cdn.kontextflux.io/home-gallery/merch/t-shirt.webp", // Replace with a sample logo
      alt: "t-shirt",
    }],
    outputImages: [
      {
        prompt: "Design a poster with a minimalist blue wave logo centered, set against a beach sunset backdrop, and include the text 'Ride the Wave' in bold white font",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/merch/the-wave.webp", // Replace
        alt: "the-wave",
      },
      {
        prompt: "Mock up a coffee mug with a floral logo in pink and yellow, placed on a wooden table in a cozy café setting with warm lighting, and add the text 'Bloom Everyday' in elegant cursive",
        imageUrl: "https://cdn.kontextflux.io/home-gallery/merch/coffee-floral-logo.webp", // Replace
        alt: "coffee-floral-logo",
      }
    ],
  },
];

