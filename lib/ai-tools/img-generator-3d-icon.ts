import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types"
import { imgModels } from "@/lib/ai-tools/config"
import {ai3dIconParamCallback} from "@/lib/ai-tools/param-callback-func"



export const Ai3dIconGenerator: ThemeConfig = {
  id: ToolCategory.Ai3DIcon,
  iconType: "type",
  slug: "ai-3d-icon",
  tools: [
    {
  id: "ai-3d-icon-generator",
  slug: "ai-3d-icon",
  name: "AI 3D Icon Generator",
  category: ToolCategory.Ai3DIcon,
  icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-hero-rec.webp",
  isDefaultToolForTheme: true,
  defaultAspectRatio: "1:1", // Icons are typically square
  paramSchema:{
    callbackFunc: ai3dIconParamCallback,
    params:[
      {
        name: "Color Palette",
        id:"color-palette",
        defaultSubItemId:"synthwave-sunset",
        subItems:[
          {
            name: "Sunset",
            id: "synthwave-sunset",
            icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-forest-synthwave-sunset-cream.webp",
            value: "vibrant gradient colors (pinks, purples, teals, oranges)"
          },
          {
            name: "Ocean",
            id: "deep-ocean",
            icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-deep-ocean-ice-cream.webp",
            value: "vibrant gradient colors (deep blues, teals, and glowing aqua)"
          },
          {
            name: "Forest",
            id: "forest-canopy",
            icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-forest-canopy-ice-cream.webp",
            value: "earthy gradient colors (emerald greens, lime greens, and soft yellows)"
          },
           {
              name: "Fire",
              id: "volcanic-fire",
              icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-volcano-fire-ice-creem.webp",
              value: "fiery gradient colors (deep reds, bright oranges, and hot yellows)"
            },
            {
              name: "Pastel",
              id: "cosmic-haze",
              icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-pastel-ice-cream.webp",
              value: "pastel gradient colors (lavender, soft pinks, and baby blues)"
            },
            {
              name: "Neon",
              id: "cyberpunk-neon",
              icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-neon-ice-cream.webp",
              value: "neon gradient colors (electric blue, magenta, and sharp violet)"
            },
            {
              name: "Gold",
              id: "golden-hour",
              icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-gold-ice-cream.webp",
              value: "luxurious gradient colors (rich golds, warm yellows, and soft amber)"
            },
            {
              name: "Stone",
              id: "stone-cold",
              icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-stone-ice-cream.webp",
              value: "monochromatic gradient colors (dark grays, light grays, and silver tones)"
            }
        ]
      }
    ]
  },
  editorConfig: {
    modelTypes: [ModelType.TextToImage], // Assuming a model alias for FLUX.1 Krea dev
    isExclusive: false,
    imgRequired: ParamRequirement.Disabled,
    defaultModelId: imgModels[0].id, // Placeholder for FLUX.1 Krea dev
    promptEngine: {
      defaultPrompt: ``,
      promptPrefix: "", 
      promptSuffix: "",
      placeholder: `ice cream`,
      promptExamples: [
        
      ],
      promptRequired: ParamRequirement.Required,
      exampleImgUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-cover.webp",
    },
  },
  seo: {
    title: "Free AI 3D Icon Generator | Create Custom 3D Icons in Seconds",
    description: "Instantly generate stunning, high-quality 3D icons with our AI 3D Icon Generator. Create unique claymation-style, gradient icons for your website, app, or marketing materials. No design skills needed. Try it free!",
    keywords: ["ai 3d icon generator", "3d icon maker", "custom 3d icons", "free 3d icons", "gradient icons", "clay icons", "3d illustration generator", "icons for apps", "website icons", "flux.1 krea dev"],
    ogImage: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-hero-rec.webp",
  },
  pageHeader: {
    pageTitle: "AI 3D Icon Generator",
    pageTagline: "Go beyond flat design. Create stunning, professional 3D gradient icons with a single object name.",
    heroImage:{
      src: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-hero.webp",
      alt: "3d-icon of cars and trucks"
    }
  },
  scenarioShowcase: {
    title: "Where a Simple Icon Makes a Big Impact",
    description: "Discover how our AI 3D Icon Generator can elevate your projects, turning simple ideas into polished, eye-catching visuals.",
    scenarios: [
      {
        id: "ui-ux-design",
        shortTitle: "App & Web UI/UX",
        originalTitle: "For UI/UX Designers: Craft a Cohesive Custom Icon Set",
        tagline: "Stop searching for the perfect icon. Create it in seconds.",
        description: "Elevate your user interface with a unique and consistent set of 3D icons that perfectly match your brand's aesthetic. Use our AI to generate everything from navigation buttons to feature illustrations, ensuring a polished, modern, and memorable user experience.",
        category: "UI/UX Designers & Web Developers",
        inputImage: [],
        outputImages: [
          {
            prompt: "paintbrush",
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-paintbrush.webp",
            alt: "3d-icon-paintbrush",
          },
          
        ],
      },
      {
        id: "social-media-content",
        shortTitle: "Social Media Posts",
        originalTitle: "For Marketers: Stop the Scroll with Thumb-Stopping Visuals",
        tagline: "Make every post and story pop with custom 3D graphics.",
        description: "Capture your audience's attention instantly. Create vibrant 3D icons for your social media posts, stories, and highlight covers. Whether you're announcing a new feature, running a poll, or sharing a tip, our AI helps you produce on-brand visuals that stand out in a crowded feed.",
        category: "Social Media Managers / Marketers",
        inputImage: [],
        outputImages: [
          {
            prompt: "question mark block",
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-sunset-question-mark.webp",
            alt: "3d-icon-sunset-question-mark",
          },
        
        ],
      },
      {
        id: "presentation-design",
        shortTitle: "Presentations & Decks",
        originalTitle: "For Professionals: Elevate Your Slides and Reports",
        tagline: "Communicate complex ideas with clean, compelling visuals.",
        description: "Transform your presentations from dull to dynamic. Use custom 3D icons to illustrate key points, structure data, and guide your audience's attention. Create professional, high-quality visuals for your pitch decks, business reports, and educational materials that leave a lasting impression.",
        category: "Business Professionals / Educators",
        inputImage: [],
        outputImages: [
          {
            prompt: "rising bar chart",
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-bar-chart-sunset.webp",
            alt: "3d-icon-bar-chart-sunset",
          },
        ],
      },
       {
        id: "ecommerce-branding",
        shortTitle: "E-commerce Branding",
        originalTitle: "For Store Owners: Create Unique Badges and Category Icons",
        tagline: "Build a memorable brand experience from homepage to checkout.",
        description: "Differentiate your online store with custom 3D visuals. Generate unique icons for product categories, special offer badges ('New Arrival', 'Best Seller'), or trust symbols for your checkout process. This attention to detail builds customer confidence and creates a professional, cohesive brand identity.",
        category: "E-commerce Owners / Entrepreneurs",
        inputImage: [],
        outputImages: [

          {
            prompt: "shield with a checkmark",
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/3d-icon-tag-with-star-sunset.webp",
            alt: "3d-icon-tag-with-star-sunset",
          },
        ],
      },
    ],
  },
  gallerySection: {
    title: "The 3D Icon Gallery",
    description: "Explore a universe of styles and objects, all generated by users with the FLUX.1 Krea dev AI. What will you design next?",
    images:[
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-forest-microphone.webp"],
    alts: ["forest-microphone"],
    prompt: "microphone",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-microphone-icon.webp"],
    alts: ["microphone-icon"],
    prompt: "microphone",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-ocean-microphone.webp"],
    alts: ["ocean-microphone"],
    prompt: "microphone",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-stone-microphone.webp"],
    alts: ["stone-microphone"],
    prompt: "microphone",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-gold-microphone.webp"],
    alts: ["gold-microphone"],
    prompt: "microphone",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-neon-microphone.webp"],
    alts: ["neon-microphone"],
    prompt: "microphone",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-pastel-microphone.webp"],
    alts: ["pastel-microphone"],
    prompt: "microphone",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/microphone/3d-icon-vocano-fire-microphone-icon.webp"],
    alts: ["vocano-fire-microphone-icon"],
    prompt: "microphone",
  },
    {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-ambulance-sunset.webp"],
    alts: ["ambulance-sunset"],
    prompt: "ambulance",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-delivery-truck-sunset.webp"],
    alts: ["delivery-truck-sunset"],
    prompt: "delivery truck",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-limousine-sunset.webp"],
    alts: ["limousine-sunset"],
    prompt: "limousine",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-semi-truck-sunset.webp"],
    alts: ["semi-truck-sunset"],
    prompt: "semi truck",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-tow-truck-sunset.webp"],
    alts: ["tow-truck-sunset"],
    prompt: "tow truck",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-bus-sunset.webp"],
    alts: ["bus-sunset"],
    prompt: "bus",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-excavator-sunset.webp"],
    alts: ["excavator-sunset"],
    prompt: "excavator",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-pickup-truck-sunset.webp"],
    alts: ["pickup-truck-sunset"],
    prompt: "pickup truck",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-shopping-cart-sunset.webp"],
    alts: ["shopping-cart-sunset"],
    prompt: "shopping cart",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-tuituji-sunset.webp"],
    alts: ["tuituji-sunset"],
    prompt: "tuituji",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-coupe-sunset.webp"],
    alts: ["coupe-sunset"],
    prompt: "coupe",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-fire-truck-sunset.webp"],
    alts: ["fire-truck-sunset"],
    prompt: "fire truck",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-police-sunset.webp"],
    alts: ["police-sunset"],
    prompt: "police car",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-suv-sunset.webp"],
    alts: ["suv-sunset"],
    prompt: "SUV",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/car/3d-icon-van-sunset.webp"],
    alts: ["van-sunset"],
    prompt: "van",
  },
    {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-squirrel-sunset.webp"],
    alts: ["squirrel-sunset"],
    prompt: "squirrel",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-tiger-fire.webp"],
    alts: ["tiger-fire"],
    prompt: "tiger",
  },
    {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-cat-sunset.webp"],
    alts: ["cat-sunset"],
    prompt: "cat",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-dog-sunset.webp"],
    alts: ["dog-sunset"],
    prompt: "dog",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-elephant-sunset.webp"],
    alts: ["elephant-sunset"],
    prompt: "elephant",
  },

],
  },
  featuresSection: {
    title: "Why Use the AI 3D Icon Generator?",
    description: "Our tool, powered by the advanced FLUX.1 Krea dev model, simplifies professional 3D design into a single step.",
    items: [
      { icon: "🎨", title: "Signature Claymation Style", description: "Instantly achieve a polished, soft-edge 'clay' look without needing complex 3D software like Blender." },
      { icon: "🌈", title: "Customizable Color Palettes", description: "Guide the AI with color keywords like 'Synthwave Sunset' or 'Forest Canopy' to create unique gradient themes." },
      { icon: "✨", title: "Instant High-Quality Renders", description: "Generate crisp, high-resolution icons with soft lighting and shadows, perfect for any digital use case." },
      { icon: "🚀", title: "Zero Learning Curve", description: "If you can write a sentence, you can create a stunning 3D icon. It's that simple." },
      { icon: "⚙️", title: "Consistent & Scalable", description: "Easily produce a full set of icons in a consistent style, ensuring a professional look across your project." },
      { icon: "💡", title: "Endless Creative Freedom", description: "From common objects to abstract concepts, bring any idea to life in a beautiful 3D format." },
    ],
  },
  faqSection: {
    title: "Your Questions About 3D Icon Generation",
    items: [
      { question: "How does this AI 3D icon generator work?", answer: "Our tool uses the FLUX.1 Krea dev model, a powerful AI trained to understand visual concepts. You provide a text description (a 'prompt'), and the AI interprets it to generate a unique 3D icon in the specified 'claymation' style." },
      { question: "Is it really free to create 3D icons?", answer: "Yes, you can generate a certain number of icons for free. For higher volume needs, please check our pricing plans. Our goal is to make high-quality design accessible to everyone." },
      { question: "Can I use the icons I create for commercial projects?", answer: "Please refer to our Terms of Service for the most up-to-date usage rights. Generally, icons you create can be used for commercial projects, but we recommend ensuring your prompts do not infringe on existing copyrights or trademarks." },
      { question: "What's the best way to write a prompt for a good result?", answer: "Start simple with just the object (e.g., 'a heart'). Then, add stylistic details. Our default prompt provides a great foundation. Try adding color descriptions like 'using fiery red and orange gradients' or changing the background to 'isolated on a white background' for different effects." },
      { question: "Can I get an icon with a transparent background?", answer: "Yes. For maximum flexibility, add 'transparent background, PNG' to the end of your prompt. This will generate a PNG file that you can place on any background." },
      { question: "What makes these icons different from standard stock icons?", answer: "Uniqueness and control. Instead of searching through libraries of overused icons, you can create a perfectly tailored visual that matches your exact needs, brand colors, and creative vision in seconds." },
    ],
  },
},

{
  id: "3d-animal-icon",
  slug: "3d-animal-icon",
  name: "3D Animal Icon",
  category: ToolCategory.Ai3DIcon,
  icon: "/assert/ai-image/3d-animal/astronaut-dog.jpeg",
  isDefaultToolForTheme: false,
  defaultAspectRatio: "1:1",
  // paramSchema: {
  //   callbackFunc: ai3dAnimalIconParamCallback,
  //   params: [
  //     {
  //       name: "Animal Type",
  //       id: "animal-type",
  //       defaultSubItemId: "cat",
  //       subItems: [
  //         {
  //           name: "Cat",
  //           id: "cat",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-cat-sunset.webp",
  //           value: "kawaii cat with perky ears and whiskers"
  //         },
  //         {
  //           name: "Dog",
  //           id: "dog",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-dog-sunset.webp",
  //           value: "chibi dog with floppy ears and happy expression"
  //         },
  //         {
  //           name: "Fox",
  //           id: "fox",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-fox-sunset.webp",
  //           value: "playful fox with bushy tail and mischievous eyes"
  //         },
  //         {
  //           name: "Panda",
  //           id: "panda",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-panda-sunset.webp",
  //           value: "round panda with bamboo accessory"
  //         }
  //       ]
  //     },
  //     {
  //       name: "Color Palette",
  //       id: "color-palette",
  //       defaultSubItemId: "pastel-dream",
  //       subItems: [
  //         {
  //           name: "Pastel Dream",
  //           id: "pastel-dream",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-rabbit-pastel.webp",
  //           value: "soft pastel colors (lavender, mint, baby pink)"
  //         },
  //         {
  //           name: "Forest Friends",
  //           id: "forest-friends",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-deer-forest.webp",
  //           value: "earthy tones (sage green, terracotta, cream)"
  //         },
  //         {
  //           name: "Oceanic",
  //           id: "oceanic",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-seal-ocean.webp",
  //           value: "aqua colors (seafoam, coral, teal)"
  //         },
  //         {
  //           name: "Sunset Safari",
  //           id: "sunset-safari",
  //           icon: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-lion-sunset.webp",
  //           value: "warm tones (peach, amber, rose)"
  //         }
  //       ]
  //     },
  //   ]
  // },
  editorConfig: {
    modelTypes: [ModelType.TextToImage],
    isExclusive: false,
    imgRequired: ParamRequirement.Disabled,
    defaultModelId: imgModels[0].id,
    promptEngine: {
      defaultPrompt: ``,
      promptPrefix: "",
      promptSuffix: "",
      placeholder: "astronaut dog",
      promptExamples: [
      ],
      promptRequired: ParamRequirement.Required,
      exampleImgUrl: "/assert/ai-image/3d-animal/astronaut-dog.jpeg",
    },
  },
  seo: {
    title: "Free AI 3D Animal Icon Generator | Create Kawaii Animal Icons  in Seconds",
    description: "Generate adorable 3D animal icons instantly! Perfect for apps, branding & social media. Custom kawaii chibi animals in pastel clay style with cute accessories. No design skills needed - try free!",
    keywords: [
      "3d animal icon generator",
      "kawaii animal icons",
      "cute 3d animals",
      "chibi animal maker",
      "pastel animal icons",
      "clay style animals",
      "ai animal generator",
      "brand mascot creator",
      "animal logo design",
      "flux ai animals"
    ],
    ogImage: "/assert/ai-image/3d-animal/astronaut-dog.jpeg",
  },
  pageHeader: {
    pageTitle: "AI 3D Animal Icon Generator",
    pageTagline: "Turn any animal into an adorable 3D kawaii icon - perfect for branding, games & social media - 10x faster than GPT-4 image tools",
    heroImage: {
      src: "/assert/ai-image/3d-animal/3d-animal-hero.png",
      alt: "Collection of 3D animal icons including cats, dogs, and foxes in pastel colors"
    }
  },
  scenarioShowcase: {
    title: "Where Cute Animal Icons Make a Difference",
    description: "From app interfaces to merch designs, see how professionals use our AI-generated animal icons",
    scenarios: [
      {
        id: "brand-mascots",
        shortTitle: "Brand Mascots",
        originalTitle: "For Businesses: Create Memorable Brand Mascots in Minutes",
        tagline: "Your logo just got 100% more huggable",
        description: "Startups and established brands alike use custom animal mascots to build emotional connections. Generate a library of expressions and poses for consistent branding across all touchpoints - from your website favicon to packaging stickers.",
        category: "Brand Managers & Entrepreneurs",
        inputImage: [],
        outputImages: [
          // {
          //   prompt: "playful fox mascot for tech startup",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-fox-mascot.webp",
          //   alt: "3D fox mascot with glasses holding a tablet"
          // },
          // {
          //   prompt: "reliable turtle mascot for insurance company",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-turtle-mascot.webp",
          //   alt: "3D turtle mascot with briefcase and tie"
          // }
        ],
      },
      {
        id: "app-characters",
        shortTitle: "App Characters",
        originalTitle: "For Developers: Design Perfect App Guides & Reward Characters",
        tagline: "Characters users want to collect (not ignore)",
        description: "Boost engagement in educational apps, fitness trackers, or language learners with collectible animal characters. Easily generate themed sets (jungle animals for adventure apps, arctic creatures for winter challenges) that motivate users to keep coming back.",
        category: "App Developers & Product Managers",
        inputImage: [],
        outputImages: [
          // {
          //   prompt: "sleepy sloth achievement character",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-sloth-character.webp",
          //   alt: "3D sloth hanging from branch with star badge"
          // },
          // {
          //   prompt: "energetic dolphin for fitness app",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-dolphin-character.webp",
          //   alt: "3D dolphin wearing sports headband"
          // }
        ],
      },
      {
        id: "ecommerce-badges",
        shortTitle: "E-Commerce Badges",
        originalTitle: "For Shopify Stores: Create Animal-Themed Product Badges",
        tagline: "Convert browsers with badges that stand out",
        description: "Replace generic 'bestseller' tags with custom animal badges ('Owl Approved' for bookstores, 'Panda Pick' for eco products). Our AI generates matching badge sets that reinforce your brand personality while highlighting product benefits.",
        category: "E-Commerce Store Owners",
        inputImage: [],
        outputImages: [
          // {
          //   prompt: "bunny badge for organic products",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-bunny-badge.webp",
          //   alt: "3D bunny holding carrot with '100% Natural' ribbon"
          // },
          // {
          //   prompt: "owl badge for wisdom-themed products",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-owl-badge.webp",
          //   alt: "3D owl with graduation cap and 'Expert Pick' shield"
          // }
        ],
      },
      {
        id: "social-stickers",
        shortTitle: "Social Stickers",
        originalTitle: "For Content Creators: Design Viral Animal Sticker Packs",
        tagline: "Followers will beg to use these in their stories",
        description: "Grow your audience with shareable animal stickers. Create seasonal sets (autumn squirrels, winter penguins) or niche themes (gamer cats, yoga bears) that fans use to tag you organically across platforms.",
        category: "Influencers & Community Managers",
        inputImage: [],
        outputImages: [
          // {
          //   prompt: "corgi with 'OMG' reaction face",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-corgi-sticker.webp",
          //   alt: "3D corgi with wide eyes and floating 'OMG' text"
          // },
          // {
          //   prompt: "koala holding 'TGIF' sign",
          //   imageUrl: "https://cdn.kontextflux.io/ai-image/ai-3d-icon/animal/3d-icon-koala-sticker.webp",
          //   alt: "3D koala clinging to 'TGIF' sign with party hat"
          // }
        ],
      }
    ],
  },
  gallerySection: {
    title: "Animal Icon Inspiration Gallery",
    description: "See what's possible with our AI generator - click any image to recreate the style",
    images: [
     
    ],
  },
  featuresSection: {
  title: "Why Our 3D Animal Icon Generator Stands Out",
  description: "Powered by Flux's specialized AI model for adorable, production-ready animal designs",
  items: [
    { 
      icon: "⚡", 
      title: "Blazing-Fast Generation", 
      description: "Create high-quality 3D animal icons in seconds—10x faster than GPT-4 image tools. Perfect for rapid iteration when testing mascot designs or building icon sets." 
    },
    { 
      icon: "🖌️", 
      title: "Hyper-Realistic Clay Style", 
      description: "Authentic matte textures with lifelike depth and soft shadows. Each animal feels like a tangible collectible figurine, with subtle surface imperfections for realism." 
    },
    { 
      icon: "👁️", 
      title: "Expressive Minimalism", 
      description: "Clean, rounded shapes with signature details: oversized sparkle eyes, delicate blush gradients, and subtle smile curves that maximize kawaii appeal." 
    },
    { 
      icon: "📈", 
      title: "Behance-Trending Aesthetic", 
      description: "Professionally lit studio renders with crisp isolation shadows. Directly export portfolio-ready PNGs with perfect 1:1 aspect ratios for Dribbble/Behance." 
    },
    { 
      icon: "🧠", 
      title: "No-Prompt Expertise Needed", 
      description: "Our AI auto-completes anatomical details—whisker placement for cats, feather patterns for owls—so you get pro results with basic descriptions." 
    },
    { 
      icon: "🦊", 
      title: "Species-Specific Styling", 
      description: "Tailored algorithms for 50+ animals. Foxes get bushier tails, rabbits have signature ear folds, and pandas maintain their iconic eye patches." 
    }
  ],
},
  faqSection: {
    title: "Animal Icon FAQs",
    items: [
      { 
      question: "How many free animal icons can I generate?", 
      answer: "All registered users receive 20 free credits upon login (1 credit = 1 icon). You can create up to 20 high-quality 3D animal icons at no cost to test the tool." 
    },
    { 
      question: "What happens after I use my free credits?", 
      answer: "You'll see options to purchase additional credit packs. We offer affordable monthly subscriptions for heavy users, with bulk discounts for teams and agencies." 
    },
      { 
        question: "Can I create mythical animals like unicorns?", 
        answer: "Absolutely! Our AI handles both real and imaginary creatures. Try prompts like 'pastel unicorn with rainbow mane' or 'dragon baby with tiny wings'." 
      },
      { 
        question: "How do I get matching icons for different animals?", 
        answer: "Use the same color palette name (e.g., 'Oceanic') and style terms across prompts. For perfect sets, generate all icons in one session." 
      },
      { 
        question: "What's the best resolution for app icons?", 
        answer: "Our default 1024x1024px output works for all platforms. For App Store submissions, simply resize without quality loss thanks to vector-similar AI rendering." 
      },
      { 
        question: "Can animals hold objects or wear clothes?", 
        answer: "Yes! Include details like 'panda holding bamboo' or 'dog wearing sweater'. For complex items, generate separately then composite in design tools." 
      },
      { 
        question: "How do I make my animal look more 'kawaii'?", 
        answer: "Add 'oversized head', 'sparkle eyes', or 'chibi proportions' to your prompt. Our 'Pastel Dream' palette also enhances cuteness." 
      },
      { 
        question: "Can I use these commercially?", 
        answer: "Icons you create are royalty-free for personal and commercial use. For trademarked characters, ensure your prompts are original concepts." 
      },
          { 
      question: "What resolution are the generated icons?", 
      answer: "All icons output at 1024x1024px(ratio = 1:1) (perfect for apps/websites). You can select other ratio as your own." 
    },
    ],
  }
}
  ],
};
