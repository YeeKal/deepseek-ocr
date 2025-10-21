import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types"
import { imgModels } from "@/lib/ai-tools/config"


export const ImgGenerator: ThemeConfig = {
  id: ToolCategory.ImageGeneration,
  iconType: "type",
  slug: "image-generator",
  tools: [
    {
      id: ToolCategory.ImageGeneration,
      slug: "image-generator",
      name: "Image Generator",
      category: ToolCategory.ImageGeneration,
      isDefaultToolForTheme: true,
      editorConfig: {
        modelTypes: [ModelType.TextToImage, ModelType.TIToImage],
        isExclusive: false,  
        imgRequired: ParamRequirement.Disabled,
        defaultModelId: imgModels[1].id,
        promptEngine: {
          defaultPrompt: ``,
          promptPrefix: "",
          promptSuffix: "",
          placeholder: `A cat holding a sign that says "FLux.1 Kontext"`,
          promptExamples: [],
          promptRequired:ParamRequirement.Required,
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
          {
            srcs: ["/gallery/general/sci-fi-city.webp"],
            alts: ["AI generated sci-fi city landscape"],
            prompt: "A sprawling cyberpunk city under a neon rain",
          },
          {
            srcs: ["/gallery/general/fantasy-creature.webp"],
            alts: ["AI generated fantasy creature in a forest"],
            prompt: "A majestic griffin perched on a cliff at sunrise",
          },
          {
            srcs: ["/gallery/general/abstract-art.webp"],
            alts: ["AI generated abstract art piece"],
            prompt: "Abstract representation of digital chaos and order",
          },
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
      id: "labubu-doll-generator",
      slug: "ai-labubu-generator",
      name: "Labubu Doll Generator",
      category: ToolCategory.ImageGeneration,
      icon: "https://cdn.kontextflux.io/tool-config/labubu-generator-merge.png",
      defaultAspectRatio: "3:4",
      editorConfig: {
        modelTypes: [ModelType.LabubuLora],
        isExclusive: true,
        imgRequired: ParamRequirement.Disabled,
        defaultModelId: imgModels[3].id, // FLUX.1 Kontext [max] for high-detail 3D renders
        promptEngine: {
          defaultPrompt: ``,
          promptPrefix: "",
          promptSuffix: "",
          placeholder: `Labubu style, an astronaut(remember adding the "Labubu style")`,
          promptExamples: [
            "A Labubu doll made of transparent crystal, filled with tiny stars.",
            "A Labubu doll as a pastry chef, covered in flour.",
            "A spooky vampire Labubu doll with a small cape.",
            "A Labubu doll in a futuristic astronaut suit.",
          ],
          promptRequired:ParamRequirement.Required,
          exampleImgUrl: "https://cdn.kontextflux.io/labubu-generator/lbb-lora-astronaut.jpg",
        },
      },
      seo: {
        title: "AI Labubu Generator | Create Your Own Labubu Doll | kontextflux.io",
        description: "Design your dream Labubu! Use our FLUX.1 Kontext AI to generate unique, high-quality images of Labubu art toys in any theme you can imagine.",
        keywords: ["labubu ai generator", "custom labubu", "pop mart ai", "the monsters art toy", "designer toy generator", "flux.1 kontext", "blind box toy"],
        ogImage: "https://cdn.kontextflux.io/tool-config/labubu-generator-merge.png",
      },
      pageHeader: {
        pageTitle: "Labubu Doll AI Generator",
        pageTagline: "Unbox your imagination. Create one-of-a-kind Labubu dolls with powerful Flux Ai Model",
        videoSrc: "https://cdn.kontextflux.io/labubu-generator/video/labubu-generator-hero-video.webm", // Replace with actual video ID
        videoPoster: "https://cdn.kontextflux.io/labubu-generator/79127e5615845dda8a1599d1141b252d37f8eab3498d495c3fef90946f4fd5fd.png"
      },
      scenarioShowcase:{
        title: "Practical Scenarios for Labubu Doll Generation",
        description: "Explore how our AI can help you create unique Labubu dolls for various purposes, from professional design to personal collection.",
        scenarios: [
          {
            id: "labubu-designer-series",
            shortTitle: "Series Ideation",
            originalTitle: "Designer's Mood Board: Rapidly Prototype a New Labubu Series",
            tagline: "From a single idea to a full collection concept. Visualize your next blind box hit.",
            description: "Speed up your creative process. Whether you're a professional toy designer or an aspiring artist, use **FLUX.1 Kontext** to instantly generate a full range of concepts for a new Labubu series. Explore variations on a theme and build a visual mood board in minutes, not weeks.",
            category: "Toy Designers / Concept Artists",
            inputImage: [], // Input is the text prompt itself
            outputImages: [
              {
                prompt: "Labubu from a 'Dessert Kingdom' series, themed as a chocolate lava cake, with gooey chocolate dripping from its ears.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/IJN4C3byVj.jpeg",
                alt: "Labubu doll themed as a chocolate lava cake with gooey chocolate dripping from its ears."
              },
              {
                prompt: "Labubu from a 'Dessert Kingdom' series, themed as a strawberry shortcake, with a fluffy cake texture and a dollop of whipped cream on its head.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/BXuXXJvi3.jpeg",
                alt: "Strawberry shortcake themed Labubu doll with fluffy cake texture and whipped cream on its head."
              },
              {
                prompt: "The secret chase Labubu from a 'Dessert Kingdom' series, made of translucent, glittery jelly with tiny fruit pieces suspended inside.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/7c1d9011fa0385bf655f03b72468f92a.jpg",
                alt: "Translucent glittery jelly Labubu with tiny suspended fruit pieces (secret chase variant)."
              },
            ],
          },
          {
            id: "labubu-collector-custom",
            shortTitle: "Dream Custom",
            originalTitle: "Collector's Dream: Design Your One-of-a-Kind Labubu",
            tagline: "Your passion, your hobby, your unique Labubu. Bring it to life.",
            description: "For the dedicated collector. Ever wished for a Labubu that perfectly matches your personal style or a theme that's never been done? Describe your ultimate custom Labubu—from its theme to its tiniest accessory—and let **FLUX.1 Kontext** create a high-quality render of your unique concept.",
            category: "Art Toy Collectors / Fans",
            inputImage: [], // Input is the text prompt itself
            outputImages: [
              {
                prompt: "A Labubu doll designed as a vintage astronaut, with a retro-style silver suit and a cracked glass helmet, holding a small alien plant.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/970e77964a615c17337918dab381eface276cfc4318c568515875bea2892bf04.png",
                alt: "Vintage astronaut Labubu wearing a retro silver suit and cracked glass helmet, holding a small alien plant."
              },
              {
                prompt: "A Labubu doll as a master sushi chef, wearing a hachimaki headband, holding a miniature tuna roll with tiny chopsticks.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/491f31a9262d2111b78edcd0cc01d8a01837f254fc17cdbb2e661df1f1ec3dc0.png",
                alt: "Labubu doll dressed as a sushi chef with a hachimaki headband holding a miniature tuna roll and chopsticks."
              },
              {
                prompt: "A Labubu doll carved from ancient jade, with intricate cloud patterns etched into its surface and glowing golden eyes.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/8f4cf35fd991668f0a574413640885b9bf8854661f2418f1de4daf62cfc24b51.png",
                alt: "Labubu doll carved from ancient jade with etched cloud patterns and glowing golden eyes."
              },
            ],
          },
          {
            id: "labubu-social-content",
            shortTitle: "Viral Content",
            originalTitle: "Themed Content Creation: Make Your Social Feed Pop with Labubu",
            tagline: "Hop on trends and celebrate seasons with unique Labubu visuals.",
            description: "Create eye-catching, shareable content for your blog or social media. Generate unique Labubu images for holidays like Halloween or Christmas, or tap into viral aesthetics like Cottagecore or Cyberpunk. **FLUX.1 Kontext** makes it easy to create relevant, high-quality images that fans will love.",
            category: "Social Media / Content Creators",
            inputImage: [], // Input is the text prompt itself
            outputImages: [
              {
                prompt: "A Labubu doll for Halloween, dressed as a spooky-cute vampire with a tiny cape and fangs, sitting on a giant pumpkin.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/44e778f9340ee9eb2ad964c1f19e73feb5ca0461954c8b0d2038145c86390345.png",
                alt: "Halloween Labubu dressed as a spooky-cute vampire with tiny cape and fangs sitting on a giant pumpkin."
              },
              {
                prompt: "A Labubu doll in a festive Christmas scene, wearing a knitted reindeer sweater and tangled in colorful fairy lights.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/Image-2.png",
                alt: "Christmas-themed Labubu wearing a knitted reindeer sweater tangled in colorful fairy lights."
              },
              {
                prompt: "A Labubu doll in a futuristic Cyberpunk setting, with glowing neon circuits on its body and holographic ears.",
                imageUrl: "https://cdn.kontextflux.io/labubu-generator/fa8b43039357d57d57d6670883ba36178013de4e4fe215a675780adfae880bab.png",
                alt: "Cyberpunk Labubu with glowing neon circuit patterns and holographic ears."
              },
            ],
          },
        ],
      },
      gallerySection: {
        title: "Your Personal Labubu Collection",
        description: "Explore an endless variety of themed Labubu dolls, all designed by users with **FLUX.1 Kontext** AI. What will you create?",
        images:[
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/02aPEk0q_.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/44e778f9340ee9eb2ad964c1f19e73feb5ca0461954c8b0d2038145c86390345.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/491f31a9262d2111b78edcd0cc01d8a01837f254fc17cdbb2e661df1f1ec3dc0.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/79127e5615845dda8a1599d1141b252d37f8eab3498d495c3fef90946f4fd5fd.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/79ec3969c10734d4a608c26e8d2d8d360d8c2c7ddea6e0a101ae2a93c77de7ef.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/7c1d9011fa0385bf655f03b72468f92a.jpg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/8f4cf35fd991668f0a574413640885b9bf8854661f2418f1de4daf62cfc24b51.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/970e77964a615c17337918dab381eface276cfc4318c568515875bea2892bf04.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/BOqb1vTju.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/BXuXXJvi3.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/ctZrBL5c9.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/eCGy4SSFV.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/fa8b43039357d57d57d6670883ba36178013de4e4fe215a675780adfae880bab.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/HgseeAwUI.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/igcPXdzBG.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/IJN4C3byVj.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/Image-2.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/khaki-vest.jpg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/KPzzUob-v.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/Labubu-Doll-Maker-cute-boy.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/Labubu-Doll-Maker-girl.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/Labubu-Doll-Maker.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/lbb-lora-astronaut.jpg"], "alts": ["AI generated Labubu doll in an astronaut suit"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/lbb-lora-walking-street.jpg"], "alts": ["AI generated Labubu doll walking on a street"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/Myshell_Labubu Maker_250610_214306.png"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/Nup1s_bEs.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/op8_mkNcP.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/out-0.webp"], "alts": ["AI generated Labubu doll"], "prompt": "" },
  { "srcs": ["https://cdn.kontextflux.io/labubu-generator/ryQODJYnR.jpeg"], "alts": ["AI generated Labubu doll"], "prompt": "" }
],
      },
      featuresSection: {
        title: "Why Design Labubu with Our AI?",
        description: "Leverage the power of FLUX.1 Kontext to craft the perfect designer art toy concept.",
        items: [
          { icon: "🎨", title: "Authentic Art Toy Style", description: "Our AI captures the signature mischievous look, long ears, and buck teeth of the Labubu character." },
          { icon: "✨", title: "Endless Themed Variations", description: "Create Labubu based on fruits, sweets, holidays, or any concept you can imagine." },
          { icon: "🖼️", title: "High-Detail 3D Renders", description: "**FLUX.1 Kontext** generates images that look like professional 3D renders, perfect for concept art." },
          { icon: "💡", title: "Your Personal Blind Box", description: "Experience the thrill of 'unboxing' a unique AI creation every time you generate." },
          { icon: "✍️", title: "Complex Prompt Following", description: "**FLUX.1 Kontext** excels at combining multiple ideas—like 'crystal' + 'astronaut' + 'Labubu'—into a coherent image." },
          { icon: "🚀", title: "Instant Inspiration", description: "Quickly visualize new character designs and colorways for your collection or creative projects." },
        ],
      },
      faqSection: {
        title: "Labubu AI Generator: Your Questions",
        items: [
          { question: "What is a Labubu?", answer: "Labubu is a popular character from 'The Monsters' series of collectible art toys, created by Hong Kong artist Kasing Lung and distributed by Pop Mart. They are known for their impish grins and long ears." },
          { question: "Is this an official Pop Mart or Labubu tool?", answer: "No. This tool is a creative homage created by kontextflux.io and is not affiliated with, endorsed by, or connected to Pop Mart or Kasing Lung. It's an inspirational tool for fans and creators, powered by **FLUX.1 Kontext** AI." },
          { question: "How does the AI create a Labubu image from text?", answer: "Our **FLUX.1 Kontext** model has been trained on a vast dataset of images and text, allowing it to understand the key visual characteristics of a 'Labubu art toy'. It uses your prompt to generate a new, original image in that style." },
          { question: "Can I create a Labubu in any theme I want?", answer: "Yes! That's the fun of it. Be descriptive in your prompt. Try combining different ideas like 'a Labubu made of wood' or 'a Labubu dressed as a detective'." },
          { question: "Can I use the images I create?", answer: "Please refer to our Terms of Service for specific usage rights. The tool is intended for personal creative exploration. Given the character's IP, extreme caution should be used for any commercial applications." },
        ],
      },
    },
    {
  id: "ai-girl-generator",
  slug: "ai-girl-generator",
  name: "AI Girl Generator",
  category: ToolCategory.ImageGeneration,
  icon: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/hero-icon.webp",
  isDefaultToolForTheme: false,
  editorConfig: {
    modelTypes: [ModelType.TextToImage, ModelType.TIToImage],
    isExclusive: false,
    imgRequired: ParamRequirement.Disabled,
    defaultModelId: imgModels[11].id,
    promptEngine: {
      defaultPrompt: "",
      promptPrefix: "",
      promptSuffix: "",
      placeholder: `A full-body studio portrait of a handsome young East Asian woman sitting on the floor in front of a light purple backdrop. She is wearing a cozy, oversized lavender chunky-knit sweater, white skirt, and white socks. She hugs a pet cat tightly, gazing at it with affectionate eyes. The background is decorated with playful, hand-drawn purple doodles and text, including "E", "&", "ELLA", paper airplanes, and flowers, in the style of a K-pop photocard or fanzine cover. The lighting is bright and soft, enhancing the cute and affectionate mood.`,
      promptExamples: [
        "A close-up portrait of a futuristic cyberpunk girl with neon pink hair and glowing cybernetic implants, detailed face, cinematic lighting.",
        "A beautiful anime-style warrior princess with silver hair, wearing ornate golden armor, holding a glowing sword.",
        "A realistic photo of a young woman laughing on a beach at sunset, warm lighting, shallow depth of field."
      ],
      promptRequired: ParamRequirement.Required,
      exampleImgUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-ella-purple-holding-puppy.webp"
    }
  },
  seo: {
    title: "Free AI Girl Generator: Create Realistic AI Girls Instantly",
    description: "Generate stunning, realistic, and anime-style AI girls from text or photos. Our free AI Girl Generator offers endless customization. Sign up for free credits!",
    keywords: [
      "ai girl generator",
      "free ai girl generator",
      "ai girl generator realistic",
      "ai dream girl generator",
      "ai girl photo generator",
      "realistic ai girl generator",
      "ai picture girl generator",
      "ai character generator",
      "text to image girl"
    ],
    ogImage: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/hero-icon.webp"
  },
  pageHeader: {
    pageTitle: "AI Girl Generator",
    pageTagline: "Bring your ideal characters to life. Generate stunningly realistic and artistic AI girls from simple text descriptions in seconds.",
    heroImage: {
      src: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/hero-banner.webp",
      alt: "A collage of diverse and realistic AI-generated women of different styles and ethnicities."
    },
    buttons: [{label:"Generate For Free", link:"/login"}]
  },
  scenarioShowcase: {
    title: "Real-World Applications: From Marketing to Concept Art",
    description: "Discover how our AI Girl Generator empowers creators, marketers, and designers to produce high-quality visuals without the need for expensive photoshoots or complex software.",
    scenarios: [
      {
        id: "social-media-marketing",
        shortTitle: "Social Media",
        originalTitle: "AI-Generated Influencers for Social Media Marketing",
        tagline: "Create endless content with unique virtual models.",
        description: "Generate a diverse cast of AI models for your fashion, beauty, or lifestyle brand. Create unique, engaging social media posts, stories, and campaigns that capture attention without the overhead of hiring human models and photographers.",
        category: "Social Media",
        inputImage: [],
        outputImages: [
          {
            prompt: "A young East Asian woman winking playfully at the camera, seated on a black leather couch. She has her hair in a messy bun, light pink blush, and is wearing a white bralette, white shorts, and a grey zip-up hoodie draped over her shoulders. A silver laptop is next to her on the couch. Bright, dramatic lighting with a strong shadow on the white background",
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/girl-winking-at-camera.webp",
            alt: "Young East Asian woman winking on a black leather couch with dramatic lighting."
          },
          {
            prompt: `A full-body studio portrait of a handsome young East Asian woman Kneeling gracefully on one knee in front of a Warm Cream Yellow backdrop. She is wearing a Loose-fit Rust Orange turtleneck, Cream wide-leg trousers, and brown loafers. She is blowing a kiss towards the viewer with a sweet smile. The background is decorated with Minimalist Black line art, featuring geometric shapes, the letter "X", and floating moons, in the style of a fanzine cover. The lighting is soft and directional, enhancing the cozy and affectionate mood`,
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-warm-creem-on-the-knee.webp",
            alt: "Full-body portrait of an East Asian woman kneeling in a rust orange turtleneck against a warm cream yellow backdrop."
          },
          {
            prompt: `A full-body studio portrait of a handsome young East Asian woman sitting on the floor in front of a light purple backdrop. She is wearing a cozy, oversized lavender chunky-knit sweater, white skirt, and white socks. She is affectionately hugging a large Sanrio Kuromi plushie and looking at the camera with a gentle expression. The background is decorated with playful, hand-drawn purple doodles and text, including "A", "ANNISA", paper airplanes, and flowers, in the style of a K-pop photocard or fanzine cover. The lighting is bright and soft, enhancing the cute and affectionate mood. `,
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-purple-sitting-annisa.webp",
            alt: "East Asian woman sitting on a light purple backdrop hugging a large Kuromi plushie in a K-pop photocard style."
          },
          {
            prompt: `A full-body studio portrait of a handsome young East Asian woman sitting on the floor in front of a light purple backdrop. She is wearing a cozy, oversized lavender chunky-knit sweater, white skirt, and white socks. She hugs a pet cat tightly, gazing at it with affectionate eyes. The background is decorated with playful, hand-drawn purple doodles and text, including "E", "&", "ELLA", paper airplanes, and flowers, in the style of a K-pop photocard or fanzine cover. The lighting is bright and soft, enhancing the cute and affectionate mood. `,
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/e38e64e8-6394-4741-b0c2-4990970351d6.webp",
            alt: "Full-body portrait of an East Asian woman hugging a cat on a light purple backdrop with playful doodles."
          },
        ]
      },
      {
        id: "ecommerce-product-showcase",
        shortTitle: "E-commerce",
        originalTitle: "Dynamic E-commerce Product Photography",
        tagline: "Showcase products on diverse, realistic models.",
        description: "Instantly create lifestyle shots for your products. Upload a photo of your item and use our AI to generate realistic models wearing it, helping customers visualize your products in a real-world context and boosting conversion rates.",
        category: "E-commerce",
        inputImage: [],
        outputImages: [
          {
            prompt: `A full-body studio portrait of a handsome young East Asian woman Lying down on her stomach, propped up on elbows in front of a Dusty Rose Pink backdrop. She is wearing a Ruffled Maroon silk blouse, Black velvet high-waisted shorts, and lace-up boots. She is tossing glitter into the air, laughing joyfully. The background is decorated with Handwritten Red poetry excerpts, delicate flower patterns, and a large "?" symbol, in the style of a K-pop photocard. The lighting is bright and crisp, enhancing the vibrant and cheerful mood.`,
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-rose-pink-propped-up.webp",
            alt: "East Asian woman lying on her stomach on a dusty rose backdrop wearing a maroon silk blouse, tossing glitter and laughing."
          }
        ]
      },
      {
        id: "game-character-design",
        shortTitle: "Game Design",
        originalTitle: "Rapid Prototyping for Game Character Design",
        tagline: "Iterate on character concepts at the speed of thought.",
        description: "Quickly generate high-quality concept art for female characters in your video game or animation. Experiment with different styles, from photorealistic heroes to stylized anime villains, drastically reducing design time and unlocking new creative possibilities.",
        category: "Web Design",
        inputImage: [],
        outputImages: [
          {
            prompt: `Mirror selfie in otaku bedroom computer corner, purple theme. 25-year-old East Asian woman, slim with defined waistline, C cup with natural cleavage, light neutral skin, waist-length straight hair with slightly curled ends (medium brown). Standing with one hand on her hip (e.g., left hand), phone held in the other hand (right) covering the face. Head tilted slightly, perhaps a knee bent slightly to relax the pose. Wearing light purple cropped knit cardigan (front two buttons fastened, purple French lingerie visible), denim short shorts with purple satin ribbon bows on each hip, purple-white striped over-knee socks, purple cute mascot phone case. Background: bedroom computer corner seen in wall mirror - white desk, single monitor with soft purple wallpaper, mechanical keyboard with white keycaps on purple desk mat, mouse on small purple mouse pad, PC case on right with purple lighting, three anime figures, pagoda poster on wall, cat-shaped lamp with purple accents, clear glass of water, tall green leafy plant by window (left side). Lighting: soft diffused daylight from large window (left) through sheer curtains, white balance 5200K. Camera: smartphone rear camera through mirror (no portrait/blur mode), 26mm equivalent focal length, subject 0.6m to mirror, camera 0.5m to mirror. Exposure: f/1.8, ISO 100, 1/100s shutter, -0.3 EV compensation. Focus on torso and shorts in mirror reflection. Natural smartphone depth of field (deep DOF), background clear and recognizable, no artificial blur. Composition: 1:1 aspect ratio, crop from top of head to mid-thigh including desk, monitor, PC and plant, slight downward angle from mirror's perspective, subject centered. Negative prompt: any pink/magenta colors, beauty filters/skin smoothing/poreless appearance, exaggerated or distorted anatomy, NSFW/see-through fabric/wardrobe malfunction, trademarks/brand names/readable UI text, fake portrait mode blur/CGI/illustration feel."`,
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/Gemini_Generated_Image_bj89ivbj89ivbj89.webp",
            alt: "Mirror selfie in a purple-themed otaku bedroom: East Asian woman in a light purple cropped cardigan and denim shorts reflected in the mirror, phone covering her face."
          }
        ]
      },
      {
        id: "advertising-campaigns",
        shortTitle: "Advertising",
        originalTitle: "Unique Visuals for Digital Advertising",
        tagline: "Create compelling ad creative that stands out.",
        description: "Design unique and captivating visuals for your ad campaigns. Generate custom characters that perfectly match your brand's aesthetic and message, ensuring your advertisements are memorable and effective across all digital platforms.",
        category: "Advertising",
        inputImage: [],
        outputImages: [
          {
            prompt: `A full-body studio portrait of a handsome young East Asian woman Standing casually, leaning against an invisible wall in front of a Soft Mint Green backdrop. She is wearing an Oversized White cable-knit cardigan, Pale Yellow satin shorts, and matching socks. She is winking mischievously at the camera, holding a peace sign. The background is decorated with Graffiti-style Neon Green abstract lines, text reading "VIBE", and stylized lightning bolts, in the style of a K-pop photocard. The lighting is bright and soft, enhancing the cute and energetic mood`,
            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-girl-generator/bde11446-e973-4ab5-b050-dd2cbe8ad517.webp",
            alt: "Full-body portrait of an East Asian woman leaning against an invisible wall on a soft mint green backdrop, wearing an oversized white cardigan and pale yellow shorts, winking and flashing a peace sign."
          }
        ]
      }
    ]
  },
  gallerySection: {
    title: "Gallery of AI-Generated Girls",
    description: "Explore a curated collection of stunning images created with our AI Girl Generator, showcasing a range of styles from hyperrealistic portraits to fantasy art.",
  images: [
        {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-purple-dancing.webp"],
      alts: ["K-pop style girl in purple dancing"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-purple-sitting-annisa.webp"],
      alts: ["K-pop style girl Annisa in purple sitting"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-purple-standing-ella.webp"],
      alts: ["K-pop style girl Ella in purple standing"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-rose-pink-propped-up.webp"],
      alts: ["K-pop style girl in rose pink propped up"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-sky-blue-cross-legged.webp"],
      alts: ["K-pop style girl in sky blue sitting cross-legged"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-warm-creem-on-the-knee.webp"],
      alts: ["K-pop style girl in warm cream color sitting on the knee"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/0034154c-f71c-4e1f-8809-da50b18e2ee9.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/18e86019-7d40-42e2-b113-20e74d2d99f0.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/2d8aaedf-9196-45cd-b979-c6ea8f3197b1.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/3211c19c-a072-4dc5-8127-eb0f149f1201.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/3603e047-790e-4ea1-b439-9894d461b46f.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/420bbe85-4b67-4f52-9dbe-fd39a37acac0.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/44b4cecd-95a7-42b9-9985-b2a3232b98b2.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/4a485d06-7571-4f0a-bab6-3b2ccf996b0d.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/52683115-8b2e-4fb7-96fa-aec6f406e744.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/5d398d56-0c8c-401f-8f4b-a9d2d00b80c7.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/6c0bc157-7cd1-4e33-ac06-5678e1efbd03.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/6c3a7e8d-1a3e-4999-bd7b-8bd0c91762a2.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/72fedaff-f4dd-4b05-8290-b3cea9a0abc0.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/747297c4-6093-405b-81a2-204ddb072cb8.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/8c054640-4e8c-4f32-990e-192a22a70d66.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/94fc9ae2-ca01-4d9d-bd31-c92322163c38.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/Gemini_Generated_Image_bj89ivbj89ivbj89.webp"],
      alts: ["Gemini AI-generated girl image"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/Gemini_Generated_Image_yun4rlyun4rlyun4.webp"],
      alts: ["Gemini AI-generated girl image"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/b94a6ac4-08e3-4970-b2eb-7df736e1c6fb.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/bbf337e5-33a0-4906-8434-cb32bee20403.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/bde11446-e973-4ab5-b050-dd2cbe8ad517.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/d47ff5ca-bbdc-41a0-b0c1-80ebed219216.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/e38e64e8-6394-4741-b0c2-4990970351d6.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/e9705467-f016-4ce9-8467-59a2ac6d3982.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/ed218512-ae36-4b39-a664-5b2324f9449e.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/ee3757e0-83f7-4cd8-ae09-f41f2cc83da2.webp"],
      alts: ["AI-generated girl portrait"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/girl-winking-at-camera-2.webp"],
      alts: ["Girl winking at camera"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/girl-winking-at-camera.webp"],
      alts: ["Girl winking at camera"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/girl-winking-on-knee.webp"],
      alts: ["Girl winking while sitting on knee"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-ella-purple-holding-puppy.webp"],
      alts: ["K-pop style girl in purple holding a puppy"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-forest-green-dancing.webp"],
      alts: ["K-pop style girl in forest green dancing"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-mint-green-sitting.webp"],
      alts: ["K-pop style girl in mint green sitting"],
      prompt: ""
    },
    {
      srcs: ["https://cdn.kontextflux.io/ai-image/ai-girl-generator/k-pop-mint-green-standing.webp"],
      alts: ["K-pop style girl in mint green standing"],
      prompt: ""
    },

  ]
  },
  featuresSection: {
    title: "Unleash Your Creativity with Powerful Features",
    description: "Our AI Girl Generator is packed with advanced tools to give you complete control over your creations, from achieving lifelike realism to exploring artistic styles.",
    items: [
      {
        icon: "🎨",
        title: "Limitless Customization",
        description: "Control every detail of your creation, from facial features, hairstyle, and ethnicity to clothing and accessories. Your imagination is the only limit."
      },
      {
        icon: "✨",
        title: "Photorealistic Quality",
        description: "Leverage cutting-edge AI to generate high-resolution, lifelike images that are often indistinguishable from real photographs. Perfect for professional use."
      },
      {
        icon: "🎭",
        title: "Versatile Style Selection",
        description: "Switch between a wide array of artistic styles instantly. Create everything from realistic portraits and anime characters to fantasy art and 3D renders with a single click."
      },
      {
        icon: "📸",
        title: "Photo-to-AI Transformation",
        description: "Upload an existing photo and watch as our AI transforms it into a unique AI-generated character, blending real features with digital artistry."
      },
      {
        icon: "🚀",
        title: "Fast & User-Friendly",
        description: "Our intuitive interface ensures a seamless creative process. Generate stunning images in seconds, no technical expertise required."
      },
      {
        icon: "💼",
        title: "Commercial Use Ready",
        description: "The images you create are yours to use. We provide a commercial license so you can use your AI-generated girls in marketing, advertising, and other projects."
      }
    ]
  },
  faqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is an AI Girl Generator?",
        answer: "An AI Girl Generator is a tool that uses artificial intelligence, specifically deep learning models like GANs, to create images of female characters from text descriptions or existing photos. You can specify details like appearance, style, and setting to generate unique visuals."
      },
      {
        question: "How can I get started for free?",
        answer: "Every new user at KontextFlux.io receives 20 free credits upon signing up. You can use these credits to try the AI Girl Generator and explore all its features without any cost."
      },
      {
        question: "Can I use the generated images for commercial purposes?",
        answer: "Yes, all images you create with our AI Girl Generator come with a commercial license, allowing you to use them for your business needs, including marketing, social media, and product design."
      },
      {
        question: "How realistic are the generated images?",
        answer: "Our generator is optimized to produce highly realistic, high-resolution images that can mimic professional photography. You also have the flexibility to create images in various artistic styles like anime or fantasy."
      },
      {
        question: "Do I need any technical skills to use this tool?",
        answer: "Not at all! Our platform is designed with a user-friendly interface. If you can type a description, you can create stunning AI art. Just write what you want to see, and the AI will handle the rest."
      },
      {
        question: "Can I create an AI girl based on a real photo?",
        answer: "Yes, our tool supports image-to-image generation. You can upload a photo to guide the AI's creation process, allowing you to transform existing pictures into new, artistic interpretations."
      },
      {
        question: "What kind of styles can I create?",
        answer: "You can generate a wide variety of styles, including photorealistic, anime, cyberpunk, fantasy, Victorian, 3D renders, and pencil sketches. Our prompt engine is flexible enough to accommodate countless artistic demands."
      },
      {
        question: "Is my data and are my creations private?",
        answer: "We prioritize user privacy. Your input prompts and generated images are securely stored and are not shared publicly without your consent. Please refer to our privacy policy for more details."
      }
    ]
  },
  cta: {
      title: "Ready to Create Your Vision?",
      description: "Join thousands of creators, marketers, and artists who are bringing their ideas to life. Sign up now and receive 20 free credits to start generating your perfect AI girl instantly.",
      button: {
        text: "Start Generating for Free",
        link: "/login"
      }
  },
  summaryMD: ``
}
  ],
};
