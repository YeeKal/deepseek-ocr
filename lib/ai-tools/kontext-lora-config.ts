import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types"
import {kontextLoras} from "@/lib/ai-tools/loras";



// ... (other data types like ImageDetail, Scenario, ModelType, ParamRequirement, etc., should be defined as per your provided context) ...

export const KontextLoraTheme: ThemeConfig = {
  id: ToolCategory.KontextLora,
  iconType: "sparkles", // A suitable icon for custom styles/enhancements
  slug: "kontext-lora",
  tools: [
    // Default "Tool" for the FLUX.1 Kontext LoRAs Theme Page
    {
      id: ToolCategory.KontextLora, // Matches ThemeConfig.id for default loading
      slug: "kontext-lora",
      name: "Kontext LoRAs",
      category: ToolCategory.KontextLora,
      icon: "https://cdn.kontextflux.io/kontext-lora/fuse-icon.webp",
      isDefaultToolForTheme: true,
      editorConfig: {
        modelTypes: [ModelType.KontextLora], // LoRAs typically modify image generation/editing, potentially with or without an input image
        isExclusive: false, // This page showcases many LoRAs, not one exclusive tool
        imgRequired: ParamRequirement.Required, // Users might provide an image to edit with a LoRA, or generate from scratch
        // defaultModelId should point to FLUX.1 Kontext [dev] as it's the base for these LoRAs
        defaultModelId: kontextLoras.loras[0].id, // Placeholder: Replace with the actual ID for FLUX.1 Kontext [dev] from your `imgModels`
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "", // LoRA specific prefix can be dynamically added based on selected LoRA
          promptSuffix: "",
          placeholder: "Describe what you want to generate or edit, and select a LoRA...",
          promptExamples: [
            "A majestic castle in Studio Ghibli style",
            "A futuristic city scene with a realistic look, [realisticlora]",
            "A cat wearing a fluffy hat, pixel art style",
            "Change the texture of the wooden table to marble, [marblestexturelora]"
          ],
          promptRequired: ParamRequirement.Optional,
          exampleImgUrl: "https://cdn.kontextflux.io/kontext-lora/fuse-icon.webp" // Example image showcasing a LoRA effect
        },
      },
      seo: {
        title: "FLUX.1 Kontext LoRAs | Explore Custom AI Image Styles & Personalization | FluxKontext",
        description: "Discover and apply custom Low-Rank Adaptation (LoRA) models trained on FLUX.1 Kontext [dev]. Enhance your images with unique artistic styles, characters, themes, and personalized edits.",
        keywords: ["flux.1 kontext lora", "ai lora models", "custom image styles", "ai image fine-tuning", "kontext dev lora", "black forest labs", "image editing lora", "character consistency lora"],
        ogImage: "https://cdn.kontextflux.io/kontext-lora/fuse-icon.webp", // Placeholder for social media image
      },
      pageHeader: {
        pageTitle: "FLUX.1 Kontext LoRAs",
        pageTagline: "Dive into a rich gallery of community-trained and specialized LoRA models that extend the power of FLUX.1 Kontext [dev]. Tailor your images with unique styles, characters, and concepts.",
        
      },
      loraSectionConfig:{ 
        title: "LoRA Models",
        description: "Explore our collection of LoRA models for AI image generation",
        loras: 
[
    {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/3d-game-assert-icon.webp",
    "coverAlt": "3D Game Assets",
    "title": "3D Game Assets"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/mech-anything-icon.webp",
    "coverAlt": "Mech Anything",
    "title": "Mech Anything"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/glass-prism-icon.webp",
    "coverAlt": "Glass Prism",
    "title": "Glass Prism"
  },
  {
    "coverSrc":"https://cdn.kontextflux.io/kontext-lora/fuse-icon.webp",
    "coverAlt":"Fuse it icon",
    "title":"Fuse It"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/overlay-icon.webp",
    "coverAlt": "Image Overlay",
    "title": "Image Overlay"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/embroidery-style-icon.webp",
    "coverAlt": "Embroidery Style",
    "title": "Embroidery Style"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/metallic-objects-icon.webp",
    "coverAlt": "Metallic Objects",
    "title": "Metallic Objects"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/glittering-portrait-icon.webp",
    "coverAlt": "Glittering Portrait",
    "title": "Glittering Portrait"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/cubist-art-icon.webp",
    "coverAlt": "Cubist Art",
    "title": "Cubist Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/collage-art-icon.webp",
    "coverAlt": "Collage Art",
    "title": "Collage Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/charcoal-art-icon.webp",
    "coverAlt": "Charcoal Art",
    "title": "Charcoal Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/watercolor-art-icon.webp",
    "coverAlt": "Watercolor Art",
    "title": "Watercolor Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/mosaic-art-icon.webp",
    "coverAlt": "Mosaic Art",
    "title": "Mosaic Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/minimalist-art-icon.webp",
    "coverAlt": "Minimalist Art",
    "title": "Minimalist Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/abstract-art-icon.webp",
    "coverAlt": "Abstract Art",
    "title": "Abstract Art"
  },

  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/fluffy-icon.webp",
    "coverAlt": "Fluffy",
    "title": "Fluffy"
  },
  {
      "coverSrc":"https://cdn.kontextflux.io/kontext-lora/realism-face-detailer-icon.webp",
      "coverAlt":"Realism Face Detailer",
      "title":"Realism Face Detailer"
  },
  {
      "coverSrc":"https://cdn.kontextflux.io/kontext-lora/light-fix-icon.webp",
      "coverAlt":"Light Fix",
      "title":"Light Fix"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/youtube-thumbnails-icon.webp",
    "coverAlt": "Youtube Thumbnails",
    "title": "Youtube Thumbnails"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/big-head-lora-icon.webp",
    "coverAlt": "Big Head LoRA",
    "title": "Big Head LoRA"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/wojak-icon.webp",
    "coverAlt": "Wojak",
    "title": "Wojak"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/broccoli-hair-icon.webp",
    "coverAlt": "Broccoli Hair",
    "title": "Broccoli Hair"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/plushie-icon.webp",
    "coverAlt": "Plushie",
    "title": "Plushie"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/yarn-art-icon.webp",
    "coverAlt": "Yarn Art",
    "title": "Yarn Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/propaganda-poster-icon.webp",
    "coverAlt": "Propaganda Poster",
    "title": "Propaganda Poster"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/retro-comic-icon.webp",
    "coverAlt": "Retro Comic",
    "title": "Retro Comic"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/how2draw-icon.webp",
    "coverAlt": "How2Draw",
    "title": "How2Draw"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/simple-vector-icon.webp",
    "coverAlt": "Simple Vector",
    "title": "Simple Vector"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/blockprint-style-icon.webp",
    "coverAlt": "Blockprint Style",
    "title": "Blockprint Style"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/frosting-lane-flux-icon.webp",
    "coverAlt": "Frosting Lane Flux",
    "title": "Frosting Lane Flux"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/80s-cyberpunk-icon.webp",
    "coverAlt": "80s Cyberpunk",
    "title": "80s Cyberpunk"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/haunted-linework-icon.webp",
    "coverAlt": "Haunted Linework",
    "title": "Haunted Linework"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/softserve-anime-icon.webp",
    "coverAlt": "SoftServe Anime",
    "title": "SoftServe Anime"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/pop-art-icon.webp",
    "coverAlt": "Pop Art",
    "title": "Pop Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/pencil-drawing-icon.webp",
    "coverAlt": "Pencil Drawing",
    "title": "Pencil Drawing"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/soft-pasty-icon.webp",
    "coverAlt": "Soft Pasty",
    "title": "Soft Pasty"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/impressionist-art-icon.webp",
    "coverAlt": "Impressionist Art",
    "title": "Impressionist Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/gouache-art-icon.webp",
    "coverAlt": "Gouache Art",
    "title": "Gouache Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/expressive-art-icon.webp",
    "coverAlt": "Expressive Art",
    "title": "Expressive Art"
  },
  {
    "coverSrc": "https://cdn.kontextflux.io/kontext-lora/acrylic-art-icon.webp",
    "coverAlt": "Acrylic Art",
    "title": "Acrylic Art"
  }
]

    },
    //   scenarioShowcase: {
    //     title: "LoRA Application Scenarios",
    //     description: "See how FLUX.1 Kontext LoRAs can be applied to achieve specific creative and practical outcomes.",
    //     scenarios: [
    //       {
    //         id: "lora-character-consistency",
    //         shortTitle: "Character Styles",
    //         originalTitle: "Maintaining Character Consistency with Custom LoRAs",
    //         tagline: "Generate consistent characters across diverse scenes and poses.",
    //         description: "Train a LoRA on your character's unique features to ensure their appearance remains consistent, regardless of the scene or action, perfect for comics, animation, or branding.",
    //         category: "Character Consistency",
    //         inputImage: [{ prompt: "Base character concept", imageUrl: "https://cdn.kontextflux.io/gallery/lora-scenarios/char-lora-input.webp", alt: "Base character for LoRA training" }],
    //         outputImages: [
    //           { prompt: "Character in a cyberpunk city, [mycharacternamlora]", imageUrl: "https://cdn.kontextflux.io/gallery/lora-scenarios/char-lora-cyberpunk.webp", alt: "Consistent character in cyberpunk setting" },
    //           { prompt: "Character as a medieval knight, [mycharacternamlora]", imageUrl: "https://cdn.kontextflux.io/gallery/lora-scenarios/char-lora-knight.webp", alt: "Consistent character as a knight" },
    //         ],
    //       },
    //       {
    //         id: "lora-art-style-transfer",
    //         shortTitle: "Artistic Styles",
    //         originalTitle: "Transforming Photos with Distinct Artistic LoRAs",
    //         tagline: "Apply specific artistic styles to your images with fine-tuned LoRAs.",
    //         description: "Convert photographs into the distinct styles of famous artists, popular animation, or unique digital art forms using specialized LoRAs.",
    //         category: "Style Transfer",
    //         inputImage: [{ prompt: "Photograph of a serene landscape", imageUrl: "https://cdn.kontextflux.io/gallery/lora-scenarios/style-lora-input.webp", alt: "Original landscape photograph" }],
    //         outputImages: [
    //           { prompt: "Landscape in the style of Van Gogh, [starrynightlora]", imageUrl: "https://cdn.kontextflux.io/gallery/lora-scenarios/style-lora-vangogh.webp", alt: "Landscape in Van Gogh's style" },
    //           { prompt: "Landscape in watercolor painting style, [watercolorlora]", imageUrl: "https://cdn.kontextflux.io/gallery/lora-scenarios/style-lora-watercolor.webp", alt: "Landscape in watercolor style" },
    //         ],
    //       },
    //     ],
    //   },
      gallerySection: {
        title: "A Glimpse into LoRA-Powered Creations",
        description: "Explore stunning examples showcasing the versatility and precision of FLUX.1 Kontext LoRAs.",
        images: [
          { srcs: ["/gallery/lora/ghibli-style-before.webp", "/gallery/lora/ghibli-style-after.webp"], alts: ["Original image", "Image transformed with Ghibli Style LoRA"], prompt: "Apply a Studio Ghibli inspired art style to this forest scene, [ghiblilora]" },
          { srcs: ["/gallery/lora/pixel-art-example.webp"], alts: ["Image in Pixel Art style"], prompt: "A futuristic cyborg, pixel art style, [pixelartlora]" },
          { srcs: ["/gallery/lora/realistic-kontext-example.webp"], alts: ["Image with enhanced realism by Realistic Kontext LoRA"], prompt: "A vintage car on a rainy city street, highly realistic, [realisticfluxlora]" },
          { srcs: ["/gallery/lora/change-clothes-example-before.webp", "/gallery/lora/change-clothes-example-after.webp"], alts: ["Character before clothing change", "Character after clothing change with 'Kontext Change Clothes' LoRA"], prompt: "Change the character's attire to a formal suit, [kontextchangeclotheslora]" },
          { srcs: ["/gallery/lora/guo-hua-example.webp"], alts: ["Image in traditional Chinese Ink Painting style"], prompt: "A serene traditional Chinese landscape with mountains and mist, [guohualora]" },
          { srcs: ["/gallery/lora/anime-portrait.webp"], alts: ["Portrait in anime style"], prompt: "A captivating portrait of a woman in modern anime style, [animestyledlora]" },
        ],
      },
      featuresSection: {
        title: "Empower Your Creations with FLUX.1 Kontext LoRAs",
        description: "FLUX.1 Kontext LoRAs offer unparalleled flexibility and precision for personalized image generation and editing.",
        items: [
          { icon: "🎨", title: "Unleash Artistic Styles", description: "Apply a vast array of artistic styles, from classic paintings and 3D renders to modern digital aesthetics, with specialized LoRAs." },
          { icon: "✨", title: "Hyper-Specific Personalization", description: "Train or use LoRAs for unique characters, objects, or brand assets, ensuring perfect consistency across all generations and edits. [5]" },
          { icon: "✂️", title: "Targeted Edits with Finesse", description: "Leverage LoRAs for precise modifications like changing clothing, adding accessories, altering textures, or replacing objects within an image. [2, 5]" },
          { icon: "🌐", title: "Community-Driven Innovation", description: "Access and contribute to a growing ecosystem of community-trained LoRAs, expanding the creative possibilities for all users. [5]" },
          { icon: "🛠️", title: "Efficient Fine-Tuning", description: "LoRAs provide a memory-efficient way to adapt FLUX.1 Kontext [dev] to new datasets, even with limited images, reducing computational costs. [4, 5]" },
          { icon: "🚀", title: "Rapid Iteration & Exploration", description: "Quickly swap and combine LoRAs to explore countless creative directions and refine your vision without complex re-training." },
          { icon: "💡", title: "Expand Model Capabilities", description: "Beyond what the base model offers, LoRAs can introduce new concepts, themes, or visual effects, drastically increasing creative scope." },
        ],
      },
      faqSection: {
        title: "FLUX.1 Kontext LoRAs - FAQs",
        items: [
          { question: "What is a LoRA in the context of FLUX.1 Kontext?", answer: "LoRA (Low-Rank Adaptation) is a technique that allows for efficient fine-tuning of large AI models like FLUX.1 Kontext [dev]. It adds small, trainable layers that can adapt the model's output to specific styles, concepts, or characters without retraining the entire base model. [4]" },
          { question: "How do LoRAs work with FLUX.1 Kontext [dev]?", answer: "LoRAs modify the behavior of the base FLUX.1 Kontext [dev] model. When you apply a LoRA, it biases the model to generate images or edits consistent with the data it was trained on (e.g., a specific art style, a particular character, or a unique object). [2]" },
          { question: "Can I train my own LoRAs for FLUX.1 Kontext [dev]?", answer: "Yes, FLUX.1 Kontext [dev] is designed to be highly customizable, and you can train your own LoRAs using a relatively small dataset and consumer-grade hardware. Black Forest Labs and the community provide resources and guides for training. [5]" },
          { question: "What kind of effects can LoRAs achieve?", answer: "LoRAs can achieve a wide range of effects, including applying unique artistic styles (e.g., anime, oil painting, pixel art), maintaining character consistency, generating specific objects or textures, refining text-based edits, and even altering clothing. [2, 5]" },
          { question: "Are LoRAs compatible with all FLUX.1 Kontext models?", answer: "LoRAs are primarily designed for use with the FLUX.1 Kontext [dev] open-weight model, as it provides the flexibility for such adaptations. While some concepts might transfer, optimal results are with the designated base model." },
          { question: "How do I use a LoRA in the web app?", answer: "Typically, you would select a base model (like FLUX.1 Kontext [dev]), then choose a LoRA from a dropdown or gallery. You then provide your text prompt and an optional input image, and the selected LoRA will influence the output. [5]" },
          { question: "Are LoRAs free to use?", answer: "The availability and licensing of LoRAs vary. Some may be free and open-source (especially those created by the community), while others might be premium or require specific commercial licenses, depending on their origin and intended use. The FLUX.1 Kontext [dev] model itself has a non-commercial license by default, with commercial options available. [4]" },
          { question: "How many images do I need to train a LoRA?", answer: "One of the benefits of FLUX.1 Kontext [dev] is its ability to be fine-tuned effectively with just a few images, making LoRA training accessible and efficient. [5]" },
        ],
      },
    },
  ],
};