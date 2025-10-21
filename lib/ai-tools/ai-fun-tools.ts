import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types"
import { imgModels } from "@/lib/ai-tools/config"


export const FunTools: ThemeConfig = {
  id: ToolCategory.FunTools,
  iconType: "type",
  slug: "fun-tools",
  tools: [
    {
      id: ToolCategory.FunTools,
      slug: "fun-tools",
      name: "Fun Tools",
      category: ToolCategory.FunTools,
      isDefaultToolForTheme: true,
      editorConfig: {
        modelTypes: [ModelType.TIToImage],
        isExclusive: false,  
        imgRequired: ParamRequirement.Disabled,
        defaultModelId: imgModels[1].id,
        promptEngine: {
          defaultPrompt: ``,
          promptPrefix: "",
          promptSuffix: "",
          placeholder: `A cat holding a sign that says "FLux.1 Kontext"`,
          promptExamples: [],
          promptRequired:ParamRequirement.Disabled,
          exampleImgUrl: "https://cdn.kontextflux.io/home-gallery/cat-with-sign-flux-kontext.png"
        }

      },
      seo: {
        title: "Free AI Image Generator | Text to Image with FLUX.1 Kontext | kontextflux.io",
        description: "Create stunning, unique images from text prompts with kontextflux.io's AI Image Generator. Powered by advanced FLUX.1 Kontext models for limitless creativity.Discover AI tools to generate unique images from text, including artistic styles like Ghibli, Van Gogh, Pixel Art, and more on kontextflux.io.",
        keywords: [
          "ai image generator",
          "text to image",
          "flux.1 kontext",
          "free ai art",
          "ai photo generator",
        ],
      },
      pageHeader: {
        pageTitle: "AI Image Generation Studio",
        pageTagline: "Describe anything, and let our cutting-edge **FLUX.1 Kontext** AI bring your text prompts to vibrant life, from artistic styles to photorealistic images."
      },
      gallerySection: {
        title: "Witness the Power of AI Generation",
        description:
          "Explore a diverse gallery of images crafted by users and our FLUX.1 Kontext AI. Get inspired by the limitless possibilities.",
        images: [
          
        ],
      },
      featuresSection: {
        title: "Why Choose Our AI Image Generator?",
        description:
          "Experience the next level of text-to-image creation with features designed for quality, speed, and ease of use, all powered by FLUX.1 Kontext.",
        items: [
          {
            icon: "✨",
            title: "Unmatched Quality",
            description:
              "Generate high-resolution, detailed images with exceptional coherence thanks to the advanced FLUX.1 Kontext models.",
          },
          {
            icon: "🚀",
            title: "Blazing Fast Speed",
            description:
              "Transform your text prompts into stunning visuals in seconds, allowing for rapid iteration and creativity.",
          },
          {
            icon: "🎨",
            title: "Versatile Styles",
            description:
              "From photorealism to fantasy art, our AI understands a vast range of styles to match your creative vision.",
          },
          {
            icon: "💡",
            title: "Intuitive Prompting",
            description:
              "Our system, powered by FLUX.1 Kontext, excels at understanding natural language, making it easy to get the results you want.",
          },
          {
            icon: "⚙️",
            title: "Advanced Customization",
            description:
              "Fine-tune your creations with various parameters (coming soon) to achieve the perfect look and feel.",
          },
          {
            icon: "🌍",
            title: "Limitless Possibilities",
            description:
              "If you can describe it, our AI can create it. Explore infinite visual landscapes and concepts.",
          },
        ],
      },
      faqSection: {
        title: "AI Image Generator: Frequently Asked Questions",
        items: [
          {
            question: "What is the AI Image Generator on kontextflux.io?",
            answer:
              "Our AI Image Generator is a tool that uses advanced **FLUX.1 Kontext** models to transform your text descriptions into unique, high-quality images. You simply type what you want to see, and the AI creates it.",
          },
          {
            question: "How does FLUX.1 Kontext improve image generation?",
            answer:
              "**FLUX.1 Kontext** is a state-of-the-art model that excels in understanding prompt nuances, maintaining coherence, and generating detailed visuals. This results in images that more accurately reflect your textual input compared to many other models.",
          },
          {
            question: "Is this AI Image Generator free to use?",
            answer:
              "kontextflux.io offers free generation credits upon signup and may have ongoing free tiers or promotional periods. Please check our pricing page for the most up-to-date information on usage limits and plans.",
          },
          {
            question: "What kind of images can I create?",
            answer:
              "You can create a vast array of images, including realistic scenes, fantasy art, abstract designs, character concepts, product mockups, and much more. The **FLUX.1 Kontext** models are highly versatile.",
          },
          {
            question: "Can I use the generated images for commercial purposes?",
            answer:
              "The rights to images generated on kontextflux.io are outlined in our Terms of Service. Generally, users have broad rights to the images they create, but we recommend reviewing the terms for specific details, especially concerning commercial use.",
          },
          {
            question: "How can I write better prompts for the AI?",
            answer:
              "For optimal results with **FLUX.1 Kontext**, be descriptive! Use adjectives, specify styles (e.g., 'photorealistic', 'impressionistic'), mention artistic influences, and describe the mood or lighting. Our prompt examples can also provide inspiration.",
          },
          {
            question: "Are there any content restrictions?",
            answer:
              "Yes, we have an acceptable use policy to prevent the generation of harmful, unethical, or infringing content. Please refer to our Terms of Service for detailed content guidelines.",
          },
        ],
      },
    },

    {
        //  https://sora.chatgpt.com/p/s_68e37ae44a548191a2da126fe20c19d9
  id: "sora-2-watermark-remover",
  slug: "sora-2-watermark-remover",
  name: "Sora 2 Watermark Remover",
  category: ToolCategory.FunTools,
  icon: "https://cdn.kontextflux.io/ai-image/sora-2-watermark-remover/icon.webp",
  defaultAspectRatio: "1792x1024",
  isDefaultToolForTheme: false,
  editorConfig: {
    modelTypes: [ModelType.TIToImage], 
    isExclusive: true,
    imgRequired: ParamRequirement.Required, 
    defaultModelId: "Sora 2 Watermark Remover",
    promptEngine: {
      defaultPrompt: "Remove watermark from this Sora 2 video.",
      promptPrefix: "",
      promptSuffix: "",
      placeholder: "Upload your Sora 2 video to begin. Our AI will automatically detect and remove the watermark.",
      promptExamples: [],
      promptRequired: ParamRequirement.Disabled, 
      exampleImgUrl: "https://cdn.kontextflux.io/ai-image/sora-2-watermark-remover/editor-example.webp"
    }
  },
  seo: {
    title: "Free Sora 2 Watermark Remover | Remove Sora Watermarks Fast",
    description: "Instantly remove watermarks from your Sora 2 videos with our free AI tool. Get clean, high-quality MP4 or GIF downloads in seconds without losing video quality.",
    keywords: [
      "sora 2 watermark remover",
      "free sora 2 watermark remover",
      "sora 2 remove watermark",
      "openai sora watermark remover",
      "remove sora video watermark",
      "sora watermark remover online",
      "ai video watermark remover",
      "sora 2 video editor"
    ],
    ogImage: "https://cdn.kontextflux.io/ai-image/sora-2-watermark-remover/og-image.webp"
  },
  pageHeader: {
    pageTitle: "Sora 2 Watermark Remover",
    pageTagline: "Instantly remove watermarks from any Sora 2 video. Experience pristine, professional-grade output in about 3 seconds. Free to start.",
    buttons: [{label:"Get 20 Free Credits", link:"/login"}]
  },
  scenarioShowcase: {
    title: "Unlock Professional Videos for Any Use Case",
    description: "See how our Sora 2 Watermark Remover empowers creators and businesses to use stunning AI-generated videos without distraction.",
    scenarios: [
      {
        id: "social-media-marketing",
        shortTitle: "Social Media Ads",
        originalTitle: "Professional Social Media Marketing Campaigns",
        tagline: "Elevate your brand's presence online.",
        description: "Transform your Sora 2 video concepts into polished, professional advertisements ready for Instagram, TikTok, and Facebook. A clean, watermark-free video ensures your brand's message is the only thing viewers see.",
        category: "Marketing",
        inputImage: [],
        outputImages: [
        //   {
        //     prompt: "A stylish woman walking through a futuristic Tokyo street with neon signs.",
        //     imageUrl: "https://cdn.kontextflux.io/ai-image/sora-2-watermark-remover/scenario-social-media.webp",
        //     alt: "A clean, watermark-free video of a woman in a futuristic city, perfect for a high-fashion social media ad."
        //   }
        ]
      },
      {
        id: "corporate-presentations",
        shortTitle: "Corporate Presentations",
        originalTitle: "Impactful Corporate Presentations & Keynotes",
        tagline: "Maintain a polished, corporate identity.",
        description: "Integrate breathtaking Sora 2 video clips into your keynote speeches and corporate presentations. Removing the watermark maintains a seamless, professional aesthetic that keeps the focus on your company's vision and data.",
        category: "Business",
        inputImage: [],
        outputImages: [
        //   {
        //     prompt: "Drone footage flying over a vast solar panel farm at sunrise.",
        //     imageUrl: "https://cdn.kontextflux.io/ai-image/sora-2-watermark-remover/scenario-corporate.webp",
        //     alt: "A watermark-free video of a solar farm, suitable for a corporate presentation on renewable energy."
        //   }
        ]
      },
      {
        id: "filmmaker-portfolio",
        shortTitle: "Filmmaker Portfolios",
        originalTitle: "Pristine Filmmaker & Artist Portfolios",
        tagline: "Showcase your pure creative vision.",
        description: "As a filmmaker or digital artist, your portfolio is your resume. Present your AI-assisted creations generated by Sora 2 in their purest form. A watermark-free video ensures potential clients and collaborators see your artistic vision, not the tool you used.",
        category: "Creative Arts",
        inputImage: [],
        outputImages: [
        //   {
        //     prompt: "A historical reenactment of ancient Roman soldiers marching through a forest.",
        //     imageUrl: "https://cdn.kontextflux.io/ai-image/sora-2-watermark-remover/scenario-filmmaker.webp",
        //     alt: "A cinematic, watermark-free clip of Roman soldiers, ideal for a filmmaker's portfolio."
        //   }
        ]
      },
      {
        id: "online-content-creation",
        shortTitle: "YouTube Content",
        originalTitle: "Seamless B-Roll for YouTube & Online Content",
        tagline: "Enhance your content without distraction.",
        description: "Content creators can use Sora 2 to generate incredible B-roll footage. Remove the watermark to seamlessly blend AI-generated clips with your own footage, creating a high-quality, cohesive video that captivates your audience on YouTube and beyond.",
        category: "Content Creation",
        inputImage: [],
        outputImages: [
        //   {
        //     prompt: "A cute, fluffy creature exploring a magical, glowing forest.",
        //     imageUrl: "https://cdn.kontextflux.io/ai-image/sora-2-watermark-remover/scenario-youtube.webp",
        //     alt: "A watermark-free video of a fantasy creature, perfect for B-roll in a YouTube video."
        //   }
        ]
      }
    ]
  },
  gallerySection: {
    title: "Gallery of Watermark-Free Sora 2 Creations",
    description: "Explore a collection of stunning videos, all processed by our AI to be perfectly clean and ready for any project.",
    images: [
     
    ]
  },
  featuresSection: {
    title: "Powerful Features for Flawless Video",
    description: "Our AI is engineered for speed, quality, and simplicity, giving you professional results with zero effort.",
    items: [
      {
        icon: "✨",
        title: "AI-Powered Smart Removal",
        description: "Our advanced AI intelligently identifies and reconstructs the area behind the Sora 2 watermark, ensuring a natural, seamless result."
      },
      {
        icon: "🏆",
        title: "Preserve Original Quality",
        description: "Never compromise on quality. The tool removes the watermark while maintaining the video's original resolution, frame rate, and detail."
      },
      {
        icon: "⚡",
        title: "Blazing-Fast Processing",
        description: "Why wait? Upload your video and download the clean, watermark-free version in under 3 seconds. Efficiency is built-in."
      },
      {
        icon: "🎬",
        title: "Multiple Output Formats",
        description: "Download your final video in the format you need. We support high-quality MP4 for general use and animated GIF for web and social media."
      },
      {
        icon: "🖱️",
        title: "Simple Drag-and-Drop Interface",
        description: "No complex software or editing skills required. Simply upload your video, and our tool handles the rest automatically."
      },
      {
        icon: "🆓",
        title: "Free to Get Started",
        description: "Sign up today and receive 20 free credits to try the Sora 2 Watermark Remover and other powerful AI tools on KontextFlux.io."
      }
    ]
  },
  faqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is it legal to remove the Sora 2 watermark?",
        answer: "You should always review OpenAI's terms of service for Sora. Generally, you must ensure you have the right to use and modify the content you generate. This tool is provided for users to modify content they have appropriate rights to."
      },
      {
        question: "Will removing the watermark reduce my video quality?",
        answer: "No. Our tool is designed to be lossless. It intelligently removes the watermark and reconstructs the pixels behind it, preserving the original video's resolution and clarity."
      },
      {
        question: "How fast is the watermark removal process?",
        answer: "The process is incredibly fast, typically completing in under 5 seconds for most standard-length video clips."
      },
      {
        question: "How much does it cost?",
        answer: "When you sign up for KontextFlux.io, you receive 20 free credits. Each watermark removal uses a small number of credits. You can purchase more credits as needed."
      },
      {
        question: "What video formats can I upload and download?",
        answer: "You can upload videos generated by Sora 2, typically in MP4 format. You can download the finished, watermark-free video as either an MP4 or an animated GIF."
      },
      {
        question: "How does the AI actually remove the watermark?",
        answer: "Our tool uses a sophisticated AI model trained to recognize the specific Sora 2 watermark. It then uses in-painting techniques to fill in the area where the watermark was, matching the surrounding video content for a seamless look."
      },
      {
        question: "Are my uploaded videos secure?",
        answer: "Yes, your privacy and security are paramount. Your videos are processed on secure servers and are not shared or used for any other purpose. They are automatically deleted after processing."
      },
      {
        question: "Do I need to install any software?",
        answer: "No, our Sora 2 Watermark Remover is a fully web-based tool. It works in any modern browser on your desktop or mobile device. There's nothing to download or install."
      }
    ]
  },
  cta: {
      title: "Ready to Create Professional, Watermark-Free Videos?",
      description: "Sign up for KontextFlux.io today, claim your 20 free credits, and start producing clean, stunning Sora 2 videos in seconds.",
      button: {
        text: "Start Generating for Free",
        link: "/login"
      }
  },
  summaryMD: ``
},
  ],
};
