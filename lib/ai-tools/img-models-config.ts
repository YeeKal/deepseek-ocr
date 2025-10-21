import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types"
import { imgModels } from "@/lib/ai-tools/config"

export const ImgModels: ThemeConfig = {
  id: ToolCategory.ImageModels,
  iconType: "boxes",
  slug: "image-models",
  tools: [
    // 1. Default "Tool" for the Image Models Theme Page
    {
      id: ToolCategory.ImageModels, // Matches ThemeConfig.id for default loading
      slug: "image-models",
      name: "Image Models",
      category: ToolCategory.ImageModels,
      isDefaultToolForTheme: true,
      editorConfig: {
        modelTypes: [ModelType.TextToImage, ModelType.TIToImage],
        isExclusive: false,
        // This editor instance is for general model exploration, maybe a demo
        imgRequired: ParamRequirement.Optional,
        defaultModelId: imgModels[1].id, // Default to FLUX.1 Kontext Pro T2I for demo
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "",
          promptSuffix: "",
          placeholder: "Select a model above to learn more or try a prompt here.",
          promptExamples: ["A detailed landscape", "Edit photo to add sunglasses"],
          promptRequired: ParamRequirement.Required,
          exampleImgUrl: "https://cdn.kontextflux.io/img-generator/a-cat.png"
        },
      },
      seo: {
        title: "Explore FLUX.1 Kontext AI Image Models | FluxKontext",
        description: "Discover the suite of FLUX.1 AI models on kontextflux.io. Compare Schnell, Pro, Max, and the open-weight Dev version for all your image generation and editing needs.",
        keywords: ["flux.1 kontext", "ai image models", "text to image", "ai image editor", "black forest labs", "gpt-4o alternative"],
        ogImage: "/og-images/models-overview.jpg",
      },
      pageHeader: { // Rendered AFTER the editor UI
        pageTitle: "The FLUX.1 AI Image Model Family",
        pageTagline: "Find the perfect AI model for any task. From rapid, free prototyping with Schnell to professional editing with Kontext Pro and open-source development with Kontext Dev.",
      },
      gallerySection: {
        title: "A Glimpse Across the FLUX.1 Kontext Family",
        description: "See diverse examples showcasing the capabilities of our different AI models. Each model offers unique strengths.",
        images: [
          { srcs: ["/gallery/models/schnell-example.webp"], alts: ["Example from FLUX.1 Schnell Free"], prompt: "Quick sketch of a cat by FLUX.1 Schnell" },
          { srcs: ["/gallery/models/pro-t2i-example.webp"], alts: ["Example from FLUX.1 Kontext Pro (Text to Image)"], prompt: "Detailed portrait by FLUX.1 Kontext Pro T2I" },
          { srcs: ["/gallery/models/pro-edit-example.webp", "/gallery/models/pro-edit-example-after.webp"], alts: ["Before editing with FLUX.1 Kontext Pro ", "After editing with FLUX.1 Kontext Pro "], prompt: "Object removal by FLUX.1 Kontext Pro Edit" },
        ],
      },
      featuresSection: {
        title: "The FLUX.1 Advantage",
        description: "Our models are engineered for state-of-the-art performance, quality, and versatility in AI image creation and manipulation.",
        items: [
          { icon: "family", title: "A Model for Every Need", description: "From the fast, free Schnell to the powerful Kontext Pro, Max, and the open-weight Dev, there's a tool for every creator." },
          { icon: "sparkles", title: "Superior Quality & Speed", description: "Generate high-fidelity images and perform context-aware edits at speeds up to 8x faster than leading competitors." },
          { icon: "brain", title: "Advanced Contextual Understanding", description: "Excellent prompt adherence and contextual awareness mean the AI truly understands and executes your vision, without the yellow tint of other models." },
          { icon: "users", title: "Unmatched Character Consistency", description: "Maintain a character's identity, clothing, and features across multiple scenes and edits, perfect for storytelling." },
          { icon: "code", title: "Open-Source Innovation", description: "With FLUX.1 Kontext [dev], we provide an open-weight model for developers and researchers to build upon." },
          { icon: "dollar-sign", title: "Cost-Effective Performance", description: "Achieve better or equivalent results to leading proprietary models like GPT-4o at a lower cost." },
        ],
      },
      faqSection: {
        title: "General AI Model FAQs",
        items: [
          { question: "What is FLUX.1 Kontext?", answer: "FLUX.1 Kontext is a new generation of AI image models from Black Forest Labs, designed for best-in-class image generation and editing using text prompts and image inputs." },
          { question: "What are the main differences between Schnell, Pro, and Max models?", answer: "FLUX.1 Schnell is a fast, free model for testing. FLUX.1 Kontext Pro offers professional-grade quality and features. FLUX.1 Kontext Max provides the absolute premium performance and capabilities." },
          { question: "How do I choose the right FLUX.1 model for my needs?", answer: "Consider your project's requirements: for quick tests or free use, Schnell is great. For professional quality text-to-image or editing, Pro is ideal. For the highest fidelity and performance, choose Max." },
          { question: "What makes FLUX.1 Kontext models better than others?", answer: "FLUX.1 Kontext models are noted for their superior prompt following, interactive speed, character consistency, and accurate local editing, often outperforming and being more cost-effective than alternatives." },
          { question: "Are there different versions for text-to-image and image editing?", answer: "Yes, for both Pro and Max tiers, there are specialized versions optimized for 'Text to Image' generation and 'Edit' (which handles image manipulation, inpainting, outpainting, etc.)." },
          { question: "What are the main differences between the models?", answer: "**Schnell:** Fast and free for testing. **Dev:** Open-weight for developers and researchers. **Pro:** Professional-grade quality for all-purpose generation and editing. **Max:** Premium performance with the best quality and typography." },
          { question: "Can I use images commercially?", answer: "Yes, images generated with our paid models can be used commercially. The `dev` model is governed by a Non-Commercial License by default, with commercial options available. Always refer to our terms of service." },
          { question: "How does FLUX.1 Kontext compare to OpenAI's DALL-E 3 or GPT-4o?", answer: "In internal and external benchmarks, FLUX.1 Kontext models are significantly faster and more cost-effective, while providing superior performance in character consistency, local editing, and avoiding common artifacts like a yellow tint." },
        ],
      },
    },

    // ----- Specific Model Detail Pages -----

    // 2. FLUX.1 Schnell Free
    {
      id: imgModels[0].id,
      slug: "flux-1-schnell",
      name: imgModels[0].name,
      category: ToolCategory.ImageModels,
      editorConfig: {
        modelTypes: [ModelType.TextToImage, ModelType.TIToImage],
        isExclusive: false,
        imgRequired: ParamRequirement.Disabled, // As per model.withImg
        defaultModelId: imgModels[0].id,
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "",
          promptSuffix: "",
          placeholder: "Try a prompt with FLUX.1 Schnell Free...",
          promptExamples: ["A logo for a coffee shop", "Basic character concept art"],
          promptRequired: ParamRequirement.Required,
          exampleImgUrl: "https://cdn.kontextflux.io/img-generator/a-cat.png"
        },
      },
      seo: {
        title: "FLUX.1 Schnell Free AI Model | kontextflux.io",
        description: "Learn about the FLUX.1 Schnell Free model: fast, free AI image generation for testing and quick drafts on kontextflux.io.",
        keywords: ["flux.1 schnell free", "free ai image generator", "fast ai model", "black forest labs"],
      },
      pageHeader: {
        pageTitle: "FLUX.1 Schnell Free Model",
        pageTagline: "Rapid, free AI image generation for everyone. Perfect for quick tests, experiments, and exploring basic concepts with FLUX.1 technology.",
      },
      gallerySection: {
        title: "Examples from FLUX.1 Schnell Free",
        description: "See what you can create quickly with our free and fast Schnell model.",
        images: [
          { srcs: ["/gallery/schnell/example1.webp"], alts: ["Schnell example: Simple icon"], prompt: "A minimalist icon of a lightbulb" },
          { srcs: ["/gallery/schnell/example2.webp"], alts: ["Schnell example: Quick landscape sketch"], prompt: "Rough sketch of a desert landscape" },
        ],
      },
      featuresSection: {
        title: "Key Features of FLUX.1 Schnell Free",
        description: "The ideal entry point into the FLUX.1 ecosystem.",
        items: [
          { icon: "🆓", title: "Completely Free", description: "Experiment and generate images without any cost, perfect for learning and testing." },
          { icon: "⚡", title: "Lightning Fast", description: "Designed for speed, FLUX.1 Schnell delivers results quickly, ideal for rapid prototyping." },
          { icon: "👍", title: "Easy to Use", description: "A straightforward model for getting started with AI image generation without complexity." },
          { icon: "🧪", title: "Great for Testing", description: "Quickly test prompt ideas and concepts before committing to higher-tier models." },
          { icon: "💡", title: "Core FLUX.1 Engine", description: "Built on the foundational technology of the FLUX.1 family, ensuring quality even at speed." },
          { icon: "✈️", title: "Accessible AI", description: "Brings the power of FLUX.1 image generation to a wider audience with no financial barrier." },
        ],
      },
      faqSection: {
        title: "FLUX.1 Schnell Free - FAQs",
        items: [
          { question: "What is FLUX.1 Schnell Free best used for?", answer: "It's ideal for rapid prototyping, testing prompt ideas, educational purposes, and users who want to try AI image generation for free." },
          { question: "Are there any limitations on the Schnell Free model?", answer: "While fast and free, it may not offer the same level of detail, coherence, or advanced features as the FLUX.1 Kontext Pro or Max models." },
          { question: "How does Schnell Free compare to FLUX.1 Kontext Pro?", answer: "Schnell is optimized for speed and accessibility (free), while Pro is focused on delivering professional-grade image quality and features for more demanding tasks." },
          { question: "Can I use images from Schnell Free commercially?", answer: "Yes, images generated are generally available for commercial use, but always check our latest Terms of Service for specifics." },
          { question: "Is there a limit to how many images I can generate with Schnell Free?", answer: "There might be fair usage policies or daily limits to ensure availability for all users. Check your account details or our pricing page for current information." },
          { question: "Does Schnell Free support image editing features?", answer: "No, FLUX.1 Schnell Free is primarily a text-to-image generation model and does not support the advanced editing capabilities of FLUX.1 Kontext models." },
          { question: "How can I get the best results with FLUX.1 Schnell Free?", answer: "Keep prompts clear and concise. While it's fast, focusing on simpler concepts will generally yield better results with this entry-level model." }
        ],
      },
    },
    // flux kontext dev
    {
      id: imgModels[4].id,
      slug: "flux-kontext-dev",
      name: imgModels[4].name,
      category: ToolCategory.ImageModels,
      editorConfig: {
        modelTypes: [ModelType.TIToImage],
        isExclusive: false,
        imgRequired: ParamRequirement.Optional,
        defaultModelId: imgModels[4].id,
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "",
          promptSuffix: "",
          placeholder: "Instruction for editing the image...",
          promptExamples: ["Turn the subject into a cyborg", "Change art style to 8-bit pixel art", "Add a dragon flying in the background"],
          promptRequired: ParamRequirement.Required,
          exampleImgUrl: "https://cdn.kontextflux.io/model-gallery/flux-kontext-dev.webp"
        },
      },
      seo: {
        title: "try FLUX.1 Kontext [dev] for free at kontextflux.io",
        description: "Explore the FLUX.1 Kontext [dev] for research and development. A powerful, customizable 12B parameter model for image editing and text to image tasks",
        keywords: ["flux.1 kontext dev", "open weight ai model", "open source image editing", "ai for developers", "guidance distilled model", "hugging face"],
      },
      pageHeader: {
        pageTitle: "FLUX.1 Kontext [dev]",
        pageTagline: "The open-weight model for developers and researchers. Build, customize, and innovate with a powerful, guidance-distilled version of FLUX.1 Kontext. !!We support text to image in this model.",
        videoSrc: "https://cdn.kontextflux.io/model-gallery/kontext-dev-style-transfer-hero.webm",
        videoPoster: "https://cdn.kontextflux.io/model-gallery/Add-futuristic-armor-for-this-character.webp"
      },
      scenarioShowcase: {
        title: "Built for Innovation: [dev] Scenarios",
        description: "See how the open-weight model empowers custom workflows and research.",
         scenarios: [
            {
                id: "dev-char",
                shortTitle: "Character Prototyping",
                originalTitle: "Iterative Character Design with FLUX.1 Kontext [dev]",
                tagline: "Rapidly prototype a game character concept.",
                description: "Starting with a base character, the model is used to iteratively add armor and change accessories, showcasing its consistency for asset development.",
                category: "Character Consistency",
                inputImage: [{ prompt: "Base character portrait", imageUrl: "https://cdn.kontextflux.io/model-gallery/girl-character-portrait.webp", alt: "Base character concept art" }],
                outputImages: [
                    { prompt: "Add futuristic armor for this character", imageUrl: "https://cdn.kontextflux.io/model-gallery/Add-futuristic-armor-for-this-character.webp", alt: "Character with futuristic armor added" },
                    { prompt: "Now place her on a cyberpunk city street", imageUrl: "https://cdn.kontextflux.io/model-gallery/Now-place-her-on-a-cyberpunk-city-street.webp", alt: "Character on a cyberpunk street" },
                ],
            },
            {
                id: "dev-scene-manipulation",
                shortTitle: "Changing Time of Day",
                originalTitle: "Transforming a Daytime Scene to a Moody Night Environment",
                tagline: "Drastically alter the mood and lighting of an image.",
                description: "Demonstrates the model's contextual understanding by changing a bright, sunny day scene into a moody, moonlit night, complete with realistic shadows and atmospheric changes.",
                category: "Local Editing",
                inputImage: [{ prompt: "A sunny cobblestone street in a European city", imageUrl: "https://cdn.kontextflux.io/model-gallery/a-sunny-cobblestone-street-in-a-european-city-with.webp", alt: "Sunny cobblestone street" }],
                outputImages: [
                    { prompt: "Change the scene to a moody night with streetlights on", imageUrl: "https://cdn.kontextflux.io/model-gallery/change-sunset.webp", alt: "The same street at night" },
                ],
            },
            {
              "id": "dev-prop-iteration",
              "shortTitle": "Vehicle Prototyping",
              "originalTitle": "Iterative Vehicle Design from Concept to Scene",
              "tagline": "Rapidly design and contextualize a vehicle concept.",
              "description": "Starting with a base vehicle design, the model is used to iteratively add features and then place the vehicle in a fitting environment, demonstrating its consistency for asset development and scene composition.",
              "category": "Product Design",
              "inputImage": [{ "prompt": "A sleek, futuristic concept car, studio lighting", "imageUrl": "https://cdn.kontextflux.io/model-gallery/futuristic-concept-car.webp", "alt": "Base concept car design" }],
              "outputImages": [
                  { "prompt": "Add off-road tires and a roof rack to the car", "imageUrl": "https://cdn.kontextflux.io/model-gallery/car-with-offroad-tires.webp", "alt": "Concept car with off-road features" },
                  { "prompt": "Place the car on a dirt road in a mountain landscape at sunset", "imageUrl": "https://cdn.kontextflux.io/model-gallery/car-in-mountain-landscape.webp", "alt": "Car in a mountain environment" }
              ]
          },
          {
        "id": "dev-style-transfer",
        "shortTitle": "Artistic Style Transfer",
        "originalTitle": "Applying a Master's Style to a Photograph",
        "tagline": "Reimagine a photo with the essence of a specific artistic style.",
        "description": "Showcases the model's ability to extract stylistic elements—like brushwork, color palette, and mood—from a reference artwork and apply them to a target photo, preserving the photo's original composition.",
        "category": "Style Reference",
        "inputImage": [{ "prompt": "A modern cityscape photograph at dusk", "imageUrl": "https://cdn.kontextflux.io/model-gallery/a-modern-cityscape-photograph-at-dusk.webp", "alt": "Photograph of a modern city at dusk" }],
        "outputImages": [
            { "prompt": "Render the cityscape in the style of The Starry Night", "imageUrl": "https://cdn.kontextflux.io/model-gallery/cityscape-in-starry-night-style.webp", "alt": "Cityscape rendered in Van Gogh's style" }
        ]
    },
        ]
      },
      gallerySection: {
        title: "Creations with FLUX.1 Kontext [dev]",
        description: "Examples of edits and generations possible with the flexible open-weight model.",
        images: [
          { srcs: ["/gallery/dev/edit-before.webp", "/gallery/dev/edit-after.webp"], alts: ["Before and after creative edit", "After creative edit with dev model"], prompt: "Transform him into a fantasy-style druid with glowing tattoos" },
          { srcs: ["/gallery/dev/style-ref.webp"], alts: ["Style reference example"], prompt: "Using the style of the left image, generate a castle in the clouds" },
        ],
      },
      featuresSection: {
        title: "Key Features of FLUX.1 Kontext [dev]",
        description: "The ideal model for custom applications, research, and fine-tuning.",
         items: [
            { icon: "📦", title: "Open-Weight & Flexible", description: "Model weights are openly accessible, allowing for deep customization and fine-tuning for your specific projects." },
            { icon: "🪶", title: "Guidance-Distilled", description: "A highly efficient 12B parameter model that retains powerful editing capabilities while being suitable for consumer hardware." },
            { icon: "⚡️", title: "Blazing Fast Edits", description: "Engineered for speed, the dev model provides near real-time feedback, enabling rapid experimentation and iterative development." },
            { icon: "🚀", title: "Hardware Optimized", description: "Includes optimized TensorRT variants for NVIDIA Blackwell, balancing incredible speed, efficiency, and quality." },
            { icon: "🔬", title: "Perfect for Research", description: "Enables researchers to study, experiment, and push the boundaries of generative AI image editing." },
            { icon: "🤝", title: "Community Driven", description: "Fully compatible with popular frameworks like ComfyUI and Diffusers, supported by a vibrant and growing community." },
        ],
      },
      faqSection: {
        title: "FLUX.1 Kontext [dev] - FAQs",
        items: [
          { question: "What does 'open-weight' mean?", answer: "It means the model's parameters (weights) are publicly released, allowing anyone to download, modify, and run the model themselves for non-commercial purposes." },
          { question: "How does the 'dev' model compare to the 'pro' model?", answer: "`dev` is a smaller, guidance-distilled version focused on editing tasks. It's designed for customization and efficiency, while `pro` is a larger, managed API model optimized for peak out-of-the-box performance." },
          { question: "Can I run this model on my own computer?", answer: "Yes, the 12B parameter model is designed to run on consumer-grade hardware, though performance will vary based on your GPU." },
          { question: "What is the license for the 'dev' model?", answer: "It is released under the FLUX.1 dev Non-Commercial License, which is ideal for research and personal use. A simple self-serve portal is available to purchase a commercial license." },
           { question: "Can I fine-tune FLUX.1 Kontext [dev] on my own data?", answer: "Absolutely. A key advantage of the `dev` model is that it's designed to be fine-tuned. You can train it on your own datasets to create specialized models for specific styles or tasks." },
        { question: "What makes this model particularly good for editing?", answer: "FLUX.1 Kontext was architected specifically for instruction-based editing. It has a deep contextual understanding of both the image and the text prompt, allowing it to make precise, targeted changes rather than just generating a new image." },
        { question: "How does this compare to other open-source models like Stable Diffusion?", answer: "While models like Stable Diffusion are excellent general-purpose generators, FLUX.1 Kontext [dev] is specialized for high-fidelity image editing, character consistency, and following complex instructions, often outperforming general models in these specific areas." },
        { question: "Where can I find community support and resources?", answer: "The best places to start are the model's page on Hugging Face for technical details and community discussions, as well as official repositories and frameworks like ComfyUI and Diffusers that support the model." }
        ],
      },
    },
    // 4. FLUX.1 Kontext Pro 
    {
      id: imgModels[1].id,
      slug: "flux-kontext-pro",
      name: imgModels[1].name,
      category: ToolCategory.ImageModels,
      editorConfig: {
        modelTypes: [ModelType.TIToImage],
        isExclusive: false,
        imgRequired: ParamRequirement.Optional, // As per model.withImg
        defaultModelId: imgModels[1].id,
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "",
          promptSuffix: "",
          placeholder: "Describe the edit you want to make...",
          promptExamples: ["Change hair color to blue", "Add sunglasses to the subject", "Replace background with a beach scene"],
          promptRequired: ParamRequirement.Required,
          exampleImgUrl: "https://cdn.kontextflux.io/model-gallery/flux-kontext-pro-forest-berry-4.png"
        },
      },
      seo: {
        title: "FLUX.1 Kontext [pro] AI Image Editor | FluxKontext",
        description: "Use FLUX.1 Kontext [pro] for professional AI image editing and generation. Master local edits, style reference, and character consistency at unparalleled speed.",
        keywords: ["flux.1 kontext pro", "ai image editor", "professional photo editing ai", "character consistency ai", "fast ai image generator"],
      },
      pageHeader: {
        pageTitle: "FLUX.1 Kontext [pro]",
        pageTagline: "The professional's choice for speed and versatility. Perform powerful edits, maintain character identity, and generate stunning images with one model.",
      },
      gallerySection: {
        title: "Transformations with FLUX.1 Kontext Pro ",
        description: "See the precision and creativity of AI-powered image editing.",
        images: [
          { srcs: ["/gallery/pro-edit/before-object-remove.webp", "/gallery/pro-edit/after-object-remove.webp"], alts: ["Before object removal", "After object removal by Kontext Pro Edit"], prompt: "Remove the car from the street" },
          { srcs: ["/gallery/pro-edit/before-style-transfer.webp", "/gallery/pro-edit/after-style-transfer.webp"], alts: ["Before style transfer", "After style transfer by Kontext Pro Edit"], prompt: "Apply a Van Gogh style to this photo" },
        ],
      },
      featuresSection: {
        title: "FLUX.1 Kontext Pro  Capabilities",
        description: "Unlock a new level of control and creativity in image editing.",
        items: [
          { icon: "🎯", title: "Precise Local Editing", description: "Make targeted modifications to specific elements in an image without affecting the rest, guided by your text prompts." },
          { icon: "👤", title: "Character Consistency", description: "Preserve unique elements of a subject, like a character or object, across multiple edits or scenes." },
          { icon: "🎨", title: "Style Reference & Transfer", description: "Apply artistic styles from reference images or text prompts to transform your photos." },
          { icon: "⏱️", title: "Interactive Speed Editing", description: "Experience minimal latency for image editing, allowing for quick iterations and refinements." },
          { icon: "🖼️", title: "Inpainting & Outpainting", description: "Intelligently fill in missing parts of an image or extend its boundaries seamlessly." },
          { icon: "🧠", title: "Contextual Understanding", description: "The AI understands the content of your image, enabling more intuitive and accurate edits based on your text instructions." },
        ],
      },
      faqSection: {
        title: "FLUX.1 Kontext Pro  - FAQs",
        items: [
          { question: "What kind of edits can I make with Kontext Pro ?", answer: "You can perform local edits (e.g., change color, add/remove objects), apply style transfers, inpaint/outpaint, and ensure character consistency across edits." },
          { question: "How does 'local editing' work?", answer: "You provide an image and a text prompt describing the change you want in a specific area (e.g., 'make the red car blue'). The AI then intelligently applies that change." },
          { question: "What is 'style reference' in FLUX.1 Kontext Pro ?", answer: "It's the ability to take the artistic style from one image (a reference) and apply it to another, or to describe a style in text to be applied to your image." },
          { question: "Do I need to be precise with masking for edits?", answer: "Often, FLUX.1 Kontext Pro can infer the area of interest from your text prompt. For more complex edits, masking tools might be used in conjunction (if supported by the UI)." },
          { question: "How does this compare to traditional photo editing software?", answer: "It complements traditional software by offering powerful AI-driven edits that can be complex or time-consuming manually, especially those requiring content generation or deep contextual understanding." },
          { question: "Is this model suitable for restoring old photos?", answer: "Yes, its inpainting and contextual understanding capabilities can be very effective for tasks like removing scratches or reconstructing missing parts of old photographs." },
          { question: "Does it work well for product photography edits?", answer: "Absolutely. It can be used to change backgrounds, clean up imperfections, or even generate variations of a product within an image." }
        ],
      },
    },
    // 5. FLUX.1 Kontext Max 
    {
      id: imgModels[2].id,
      slug: "flux-kontext-max",
      name: imgModels[2].name,
      category: ToolCategory.ImageModels,
      editorConfig: {
        modelTypes: [ModelType.TIToImage],
        isExclusive: false,
        imgRequired: ParamRequirement.Optional,
        defaultModelId: imgModels[2].id,
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "",
          promptSuffix: "",
          placeholder: "Describe your most ambitious edit...",
          promptExamples: ["Generate photorealistic text 'Hello World' on the wall", "Completely change the season in this photo to winter"],
          promptRequired: ParamRequirement.Required,
          exampleImgUrl: "https://cdn.kontextflux.io/model-gallery/flux-kontext-max-brush.webp"
        },
      },
      seo: {
        title: "FLUX.1 Kontext [max] AI Model | FluxKontext",
        description: "Experience the ultimate in AI image editing with FLUX.1 Kontext [max]. Unmatched quality, performance, and superior typography generation.",
        keywords: ["flux.1 kontext max", "premium ai image editor", "best photo editing ai", "ai typography", "high quality ai image"],
      },
      pageHeader: {
        pageTitle: "FLUX.1 Kontext [max]",
        pageTagline: "The pinnacle of AI image editing. Uncompromised quality, maximum performance, and state-of-the-art typography generation.",
      },
      gallerySection: {
        title: "Masterclass Editing: FLUX.1 Kontext Max",
        description: "Examples where only the best quality and most complex edits will suffice.",
        images: [
          { srcs: ["/gallery/max-edit/before-complex.webp", "/gallery/max-edit/after-complex.webp"], alts: ["Before complex edit", "After complex edit by Kontext Max"], prompt: "Transform this day scene into a dramatic stormy night" },
          { srcs: ["/gallery/max-edit/typography-example.webp"], alts: ["Example of typography by Kontext Max Edit"], prompt: "Add elegant golden text 'Grand Opening' to this image" },
        ],
      },
      featuresSection: {
        title: "FLUX.1 Kontext Max  - Peak Capabilities",
        description: "For when every detail matters and performance is paramount.",
        items: [
          { icon: "👑", title: "Maximum Performance", description: "The most powerful model in the FLUX.1 family for editing, delivering top-tier results without compromise." },
          { icon: "✒️", title: "High-Quality Typography", description: "Excels at generating and integrating clean, contextually aware text directly into images." },
          { icon: "💎", title: "Unsurpassed Edit Quality", description: "Achieves the highest level of detail, realism, and coherence in complex image manipulations." },
          { icon: "🧠", title: "Superior Prompt Adherence", description: "Even better at understanding and executing nuanced and intricate editing instructions." },
          { icon: "⚡", title: "Optimized for Speed", description: "Despite its power, Max maintains impressive interactive speeds for a fluid workflow." },
          { icon: "🛠️", title: "Advanced Creative Control", description: "The ultimate tool for professionals demanding the finest control and best possible output for their image edits." },
        ],
      },
      faqSection: {
        title: "FLUX.1 Kontext Max  - FAQs",
        items: [
          { question: "What is the main advantage of Kontext Max  over Pro ?", answer: "Kontext Max  offers the absolute highest quality, better adherence to very complex prompts, and specialized capabilities like superior typography generation." },
          { question: "Who should use FLUX.1 Kontext Max ?", answer: "Professionals and users who require the utmost precision, quality, and advanced features for critical projects, especially those involving intricate edits or typography." },
          { question: "How good is the typography generation in Kontext Max ?", answer: "It's a key feature, designed to produce high-quality, well-integrated text that looks natural within the image, surpassing many other AI models in this area." },
          { question: "Does 'maximum performance' mean it's slower?", answer: "Not necessarily. While it's performing more complex calculations for higher quality, FLUX.1 models are optimized for speed. It aims for top quality without undue latency." },
          { question: "Can Kontext Max  handle very subtle or artistic edits?", answer: "Yes, its enhanced understanding and control make it excellent for both dramatic transformations and nuanced, artistic adjustments, following your prompt closely." },
          { question: "Is there a significant price difference for using Kontext Max ?", answer: "As a premium offering, Kontext Max  is typically priced higher than the Pro version. Consult the kontextflux.io pricing page for specifics." },
          { question: "What types of projects particularly benefit from Max ?", answer: "High-end advertising, complex photo manipulation for art or film, projects requiring perfect text integration, and any scenario where image quality is absolutely paramount." },
          { question: "Does it offer more editing parameters than the Pro version?", answer: "While the core editing concepts are similar, Max may leverage its capabilities to offer finer control or achieve better results with the same parameters due to its advanced engine." }
        ],
      },
    },
     {
  id: "flux-krea-dev",
  slug: "flux-krea",
  name: "FLUX.1 Krea dev",
  icon: "https://cdn.kontextflux.io/model-gallery/flux-krea-icon.webp",
  category: ToolCategory.ImageModels,
  editorConfig: {
    modelTypes: [ModelType.TextToImage],
    isExclusive: false,
    imgRequired: ParamRequirement.Disabled,
    defaultModelId: imgModels[7].id,
    promptEngine: {
      defaultPrompt: "",
      promptPrefix: "",
      promptSuffix: "",
      placeholder: "A photorealistic image of...",
      promptExamples: [
        "A gourmet burger on a rustic wooden table, dramatic lighting",
        "A sleek electric car driving on a coastal road at sunset, motion blur",
        "A detailed illustration of a mythical creature for a book cover"
      ],
      promptRequired: ParamRequirement.Required,
      exampleImgUrl: "https://cdn.kontextflux.io/model-gallery/flux-krea-icon.webp"
    }
  },
  seo: {
    title: "Free FLUX.1 Krea dev AI Image Generator | KontextFlux.io",
    description: "Experience FLUX.1 Krea dev, the 'opinionated' text-to-image model developed with Krea AI. Generate highly aesthetic, realistic images that avoid the generic 'AI look'. Try it free.",
    ogImage: "https://cdn.kontextflux.io/model-gallery/flux-krea-icon.webp",
    keywords: [
      "flux.1 krea dev",
      "krea ai",
      "opinionated ai model",
      "text-to-image",
      "free ai image generator",
      "ai for designers",
      "photorealistic images",
      "ai ad generator"
    ]
  },
  pageHeader: {
    pageTitle: "FLUX.1 Krea dev",
    pageTagline: "The 'Opinionated' Text-to-Image Model. Crafted with Krea AI to generate stunning, high-coherence images with a distinctive artistic style, overcoming the generic 'AI look'.",
    videoPoster: "https://cdn.kontextflux.io/model-gallery/coco-can.webp",
    heroImage:{
      src:"https://cdn.kontextflux.io/model-gallery/flux-krea-hero.webp",
      alt:"flux krea hero image"
    }
  },
  scenarioShowcase: {
    title: "Designed for Distinction: Krea dev Scenarios",
    description: "See how FLUX.1 Krea dev's 'opinionated' approach delivers superior results for creative and commercial projects.",
    scenarios: [
      {
        id: "krea-ecommerce",
        shortTitle: "E-commerce Imagery",
        originalTitle: "Creating Compelling E-commerce Product Shots",
        tagline: "Generate unique, high-quality product photos that sell.",
        description: "Produce eye-catching product images with realistic textures and lighting that stand out from standard catalog photos. The model's aesthetic sense ensures professional, appealing results for online stores.",
        category: "E-commerce",
        inputImage: [],
        outputImages: [
          {
            prompt:"A high-end mirrorless camera in sleek black finish, placed on a textured slate-gray concrete surface, with a softly unfocused backdrop of a sunlit studio. A single lens with a shallow depth of field lies beside it, dew-like water droplets glistening on the camera body for added texture. Soft natural light streams from the side, highlighting the metallic details and leather grip. A faded roll of film and a minimalist tripod stand subtly in the background. Photorealistic, 8K resolution, warm-cold contrast lighting — elegant and professional, ideal for a photography or creative gear brand hero banner with space for overlay text.",
            imageUrl:"https://cdn.kontextflux.io/model-gallery/krea-ecommerce-camera.webp",
            alt:"high-end mirrorless camera"
          },
          {
            prompt: "A luxury wristwatch on a dark marble surface with soft, indirect lighting",
            imageUrl: "https://cdn.kontextflux.io/model-gallery/krea-ecommerce-watch.webp",
            alt: "AI generated luxury watch photo for e-commerce"
          },
          {
            prompt: "A single, elegant perfume bottle surrounded by fresh flowers and water droplets",
            imageUrl: "https://cdn.kontextflux.io/model-gallery/krea-ecommerce-perfume.webp",
            alt: "AI generated perfume bottle advertisement"
          },
        ]
      },
      {
        id: "krea-ad-concept",
        shortTitle: "Ad Campaign Concepts",
        originalTitle: "Rapidly Visualize Advertising Concepts",
        tagline: "Brainstorm and iterate on creative ad visuals in seconds.",
        description: "Quickly generate multiple high-fidelity concepts for an ad campaign. The model's ability to create realistic and aesthetically pleasing scenes allows marketers to explore and refine ideas efficiently.",
        category: "Advertising",
        inputImage: [],
        outputImages: [
          {
            prompt: "Photo of a new brand of soda can, condensation, on a vibrant, colorful background, pop art style",
            imageUrl: "https://cdn.kontextflux.io/model-gallery/coco-can.webp",
            alt: "Pop art style ad for a soda can"
          },
          {
            prompt: "Photo of a new brand of watch, condensation, on a vibrant, colorful background, pop art style",
            imageUrl: "https://cdn.kontextflux.io/model-gallery/watch-ad.webp",
            alt: "Ad concept for a watch"
          }
        ]
      },
      {
        id: "krea-web-design",
        shortTitle: "Website Hero Images",
        originalTitle: "Generating Unique Hero Images for Websites",
        tagline: "Create a stunning first impression with a custom hero image.",
        description: "Generate a unique, high-resolution hero image that perfectly captures the essence of a brand. This model avoids generic stock photos, providing a memorable visual for any website's landing page.",
        category: "Website Design",
        inputImage: [],
        outputImages: [
          {
            prompt: "A team of developers collaborating in a futuristic, light-filled workspace",
            imageUrl: "https://cdn.kontextflux.io/model-gallery/digitial-website.webp",
            alt: "AI generated hero image for a tech company website"
          },
          {
            prompt: "Abstract background with flowing, organic shapes and a calm color palette for a wellness blog",
            imageUrl: "https://cdn.kontextflux.io/model-gallery/krea-web-hero-abstract.webp",
            alt: "Abstract hero image for a wellness blog"
          }
        ]
      },
      {
        id: "krea-social-media",
        shortTitle: "Social Media Content",
        originalTitle: "Crafting Scroll-Stopping Social Media Visuals",
        tagline: "Produce a consistent stream of beautiful, on-brand images.",
        description: "Generate a diverse array of images for social media feeds. From inspirational quotes set against beautiful backdrops to announcements, the model ensures a consistent, high-quality aesthetic that builds brand identity.",
        category: "Social Media",
        inputImage: [],
        outputImages: [
          {
            prompt: "A flat lay of a travel blogger's essentials: passport, camera, map, on a wooden background",
            imageUrl: "https://cdn.kontextflux.io/model-gallery/travel-blogger.webp",
            alt: "Travel flat lay for a social media post"
          }
        ]
      }
    ]
  },
  gallerySection: {
    title: "The Krea dev Aesthetic",
    description: "Explore images generated with FLUX.1 Krea dev, showcasing its unique style and exceptional realism.",
    images: [
        {
    srcs: ["https://cdn.kontextflux.io/model-gallery/krea-9.webp"],
    alts:["shot of a sporty cartoon teenager"],
    prompt:"Full body shot of a sporty cartoon teenager, Animation film-style, 3D, Bold streetwear in tangerine & scarlet over slate/ivory. Bare hand palming vivid soccer ball. Cheeky grin, lively eyes. Soccer field, cinematic light, low angle shot"
  },
   {
    srcs: ["https://cdn.kontextflux.io/model-gallery/krea-10.webp"],
    alts: ["Small dog in suit as news presenter"],
    prompt: "Photo of a small dog wearing a suit as a news presenter"
  },
  {
    srcs: ["https://cdn.kontextflux.io/model-gallery/krea-11.webp"],
    alts: ["Minimal line drawing of a cozy hillside cottage with a cat on the steps"],
    prompt: "A minimal line drawing of a cozy hillside cottage with a scalloped shingle roof, nestled among leafy trees and desert plants, shaded by a leaning olive tree instead of a palm. The house has a small arched window with open shutters, a stone staircase leading to the door, and a cat lounging on the front steps. In the background, soft rolling hills stretch toward a distant lake, with two birds in flight overhead. The drawing uses simple navy blue and muted terracotta lines on an off-white background, in a loose sketch style reminiscent of travel journal illustrations."
  },
  {
    srcs: ["https://cdn.kontextflux.io/model-gallery/krea-12.webp"],
    alts: ["8-bit pixel art of a cozy house at red sunset in winter"],
    prompt: "8 bit pixel art of the world's coziest house, cinematic lighting, red sunset, dark winter"
  },
  {
    srcs: ["https://cdn.kontextflux.io/model-gallery/krea-13.webp"],
    alts: ["Cute cartoon coffee mug sticker with thick outlines"],
    prompt: "Cute cartoon sticker of a coffee mug, thick outlines"
  },
  {
    srcs: ["https://cdn.kontextflux.io/model-gallery/krea-14.webp"],
    alts: ["Wool raccoon explorer walking through felt grassland"],
    prompt: "A miniature raccoon explorer made of wool wearing all kinds of equipment, walking through dry grass, the whole world is made of felt textile"
  },
  {
    srcs: ["https://cdn.kontextflux.io/model-gallery/krea-15.webp"],
    alts: ["Realistic cat pirate on a ship in chaotic scene"],
    prompt: "Realistic photo of a cat as a pirate, everyday photo on a ship, complex chaotic scene with many details"
  },
      {
        srcs:["https://cdn.kontextflux.io/model-gallery/astronaut-on-egg.webp"],
        alts:["a tiny astronaut hatching from an egg on mars"],
        prompt:"a tiny astronaut hatching from an egg on mars"
      },
      {
        srcs:["https://cdn.kontextflux.io/model-gallery/tiny-rat-on-iphone.webp"],
        alts:["a tiny rat hatching from an an iphone"],
        prompt:"a tiny rat hatching from an an iphone"
      },
      {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-1.webp"],
    "alts": ["Small dog in suit as news presenter"],
    "prompt": "Photo of a small dog wearing a suit as a news presenter"
  },
  {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-2.webp"],
    "alts": ["Wool raccoon explorer in felt world"],
    "prompt": "A miniature raccoon explorer made of wool wearing all kinds of equipment, walking through dry grass, the whole world is made of felt textile"
  },
  {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-3.webp"],
    "alts": ["Cat pirate on a ship"],
    "prompt": "Realistic photo of a cat as a pirate, everyday photo on a ship, complex chaotic scene with many details"
  },
  {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-4.webp"],
    "alts": ["Cozy house in 8-bit pixel art"],
    "prompt": "8 bit pixel art of the world's coziest house, warm cinematic lighting, red sunset, winter"
  },
  {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-5.webp"],
    "alts": ["Mailman illustration in corporate Memphis style"],
    "prompt": "Corporate memphis style minimalist illustration of a mailman on blue background"
  },
  {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-6.webp"],
    "alts": ["Red-haired model in tuxedo in desert"],
    "prompt": "A male model with red hair a black tuxedo in the Mojave desert, low angle shot"
  },
  {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-7.webp"],
    "alts": ["Techwear fashion shoot on Icelandic rock"],
    "prompt": "Technical outdoor style fashion shoot on icelandic rock, minimalist techwear, low angle, cinematic low contrast shoot"
  },
  {
    "srcs": ["https://cdn.kontextflux.io/model-gallery/krea-8.webp"],
    "alts": ["Minimal line drawing of hillside cottage"],
    "prompt": "A minimal line drawing of a cozy hillside cottage with a scalloped shingle roof, nestled among leafy trees and desert plants, shaded by a leaning olive tree instead of a palm. The house has a small arched window with open shutters, a stone staircase leading to the door, and a cat lounging on the front steps. In the background, soft rolling hills stretch toward a distant lake, with two birds in flight overhead. The drawing uses simple navy blue and muted terracotta lines on an off-white background, in a loose sketch style reminiscent of travel journal illustrations."
  },

      {
        srcs: ["https://cdn.kontextflux.io/model-gallery/driving-car-motion-blur.webp"],
        alts: ["A sleek electric car driving on a coastal road at sunset"],
        prompt: "A sleek electric car driving on a coastal road at sunset, motion blur"
      },
      {
        srcs: ["https://cdn.kontextflux.io/model-gallery/a-girl-foggy-city.webp"],
        alts: ["A girl standing on a foggy city street under a lone streetlamp"],
        prompt: "A girl standing on a foggy city street under a lone streetlamp, wearing a trench coat, mystery thriller aesthetic, anamorphic lens flare"
      },
      {
        srcs:["https://cdn.kontextflux.io/model-gallery/girl-sandy-beach.webp"],
        alts:["girl-sandy-beach"],
        prompt: "A girl with long, flowing hair walking on a sandy beach at sunset, warm light illuminating her profile, gentle breeze, serene atmosphere."
      }
    ]
  },
  featuresSection: {
    title: "Key Features of FLUX.1 Krea dev",
    description: "The ideal model for generating unique, high-quality images that captivate and engage.",
    items: [
      {
        icon: "🎨",
        title: "'Opinionated' by Design",
        description: "Trained with a distinctive aesthetic to produce surprising and visually interesting images that avoid the generic 'AI look'. "
      },
      {
        icon: "✨",
        title: "Exceptional Realism",
        description: "Generates images with high fidelity and natural details, avoiding the oversaturated textures and common artifacts of other AI models."
      },
      {
        icon: "🚀",
        title: "State-of-the-Art Performance",
        description: "Outperforms previous open text-to-image models and is on par with closed, pro-level solutions in user preference tests. "
      },
      {
        icon: "🔧",
        title: "Flexible & Customizable",
        description: "Architecturally compatible with the FLUX.1 dev ecosystem, serving as a powerful base for fine-tuning and custom applications."
      },
      {
        icon: "🤝",
        title: "Collaborative Excellence",
        description: "Developed in a joint project between Black Forest Labs and Krea AI, combining the best of research and aesthetic design. "
      },
      {
        icon: "🌐",
        title: "Open & Accessible",
        description: "The model's open weights empower researchers, developers, and artists to build the next generation of generative tools. "
      }
    ]
  },
  faqSection: {
    title: "FLUX.1 Krea dev - FAQs",
    items: [
      {
        question: "Is FLUX.1 Krea dev free to use?",
        answer: "Yes, every logged-in user receives 20 free credits. Generating one image consumes 6 credits. For more creations, you can easily upgrade to a paid tier to get more credits."
      },
      {
        question: "What does an 'opinionated' text-to-image model mean?",
        answer: "It means the model is intentionally trained with a specific, distinctive aesthetic. Instead of just literally interpreting a prompt, it adds a layer of artistic style, resulting in more beautiful and less generic images. [1, 4]"
      },
      {
        question: "How is this different from other FLUX models?",
        answer: "FLUX.1 Krea dev is specialized for text-to-image generation with a unique visual style developed with Krea AI. It excels at overcoming the common 'AI look' and producing photorealistic results. [1, 4]"
      },
      {
        question: "Can I use images from this model commercially?",
        answer: "The base model is released under a non-commercial license for personal and research use. However, commercial licenses are available through the official BFL Licensing Portal. [2, 3]"
      },
      {
        question: "Is this model compatible with tools like ComfyUI and Diffusers?",
        answer: "Yes, it is fully compatible with the FLUX.1 dev ecosystem, including popular frameworks like ComfyUI and Diffusers, making it easy to integrate into existing workflows. "
      },
      {
        question: "What makes FLUX.1 Krea dev good for photorealism?",
        answer: "It was specifically trained to generate realistic images that do not contain oversaturated textures or other common AI artifacts, resulting in a higher level of realism and quality. [1, 4]"
      },
       {
        "question": "What does 'open-weight' actually mean?",
        "answer": "It means the model's core parameters (weights) are publicly released. This allows developers and researchers to download, study, and build upon the model for their own projects and fine-tuning. ]"
      },
      {
        "question": "Can I fine-tune FLUX.1 Krea dev on my own data?",
        "answer": "Absolutely. As an open-weight model architecturally compatible with the FLUX.1 dev ecosystem, it's designed to be a flexible base for customization and fine-tuning on your own datasets."
      },
      {
        "question": "Can I use images generated with this model commercially?",
        "answer": "The model is released under a non-commercial license for personal and research use. However, a commercial license can be purchased through the official BFL Licensing Portal for commercial applications."
      },
      {
        "question": "Is this model compatible with developer tools like ComfyUI?",
        "answer": "Yes, it is fully compatible with the FLUX.1 dev ecosystem, including popular frameworks like ComfyUI and Diffusers, making it easy to integrate into existing developer and artist workflows."
      },
      {
        "question": "Where can I find technical details and community support?",
        "answer": "The best places to start are the model's page on Hugging Face for technical documentation and the BFL GitHub repository for reference implementations. These platforms also have active communities for support."
      }
    ]
  }
},
// pages/qwen-image.tsx
{
  id: "qwen-image",
  slug: "qwen-image",
  name: "Qwen-Image",
  category: ToolCategory.ImageModels,
  icon: "https://cdn.kontextflux.io/ai-image/qwen-image/straw-man-dynamic-pose.webp",
  editorConfig: {
    modelTypes: [ModelType.TextToImage],
    isExclusive: false,
    imgRequired: ParamRequirement.Optional,
    defaultModelId: imgModels[8].id, // Assuming Qwen-Image is the 11th model in the array
    promptEngine: {
      defaultPrompt: "",
      promptPrefix: "",
      promptSuffix: "",
      placeholder: "A vibrant, dynamic marketing poster featuring a futuristic cityscape at dusk...",
      promptExamples: [
        
      ],
      promptRequired: ParamRequirement.Optional,
      exampleImgUrl: "https://cdn.kontextflux.io/ai-image/qwen-image/qwen-pencil-sketch.webp"
    }
  },
  seo: {
    title: "Qwen-Image: The MMDiT AI Image Generator for Flawless Text & Editing | KontextFlux.io",
    description: "Experience free Qwen-Image, a 20B MMDiT model that excels at generating images with flawless text and offers precise editing capabilities. Create stunning visuals for posters, ads, and more. Try it free on KontextFlux.io.",
    ogImage: "https://cdn.kontextflux.io/ai-image/qwen-image/straw-man-dynamic-pose.webp",
    keywords: [
      "qwen-image",
      "qwen-image ai",
      "ai text rendering",
      "qwen image generator",
      "precise image editing",
      "multilingual ai image",
      "flux qwen",
      "qwen-image playground"
    ]
  },
  pageHeader: {
    pageTitle: "Qwen-Image",
    pageTagline: "The 20B MMDiT AI Image Foundation Model. Generate complex images with flawless text and unparalleled editing control, from English to Chinese.",
    videoPoster: "https://cdn.kontextflux.io/ai-image/qwen-image/straw-man-dynamic-pose.webp",
    buttons:[
      {label: "Try Qwen-Image-Edit",
      link: "/image-models/qwen-image-edit"}
    ]
  },
  scenarioShowcase: {
    title: "Creative Solutions with Qwen-Image",
    description: "Leverage Qwen-Image's unique strengths in text rendering and editing for professional-grade creative projects.",
    scenarios: [
      {
        id: "qwen-ad-poster",
        shortTitle: "Marketing & Posters",
        originalTitle: "Designing High-Impact Posters and Advertisements",
        tagline: "Generate stunning posters with perfectly rendered headlines and body text.",
        description: "Create eye-catching marketing materials with complex textual elements. Qwen-Image ensures your ad copy, headlines, and call-to-action text are rendered flawlessly within the image, eliminating the need for post-generation text overlays.",
        category: "Marketing",
        inputImage: [],
        outputImages: [
          {
            prompt: "A retro-futuristic advertisement for a new soda, with the headline 'QWEN IMAGE' in bold, stylized text and a smaller tagline 'The Future is Refreshing'",
            imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image/retro-futuristic-advertisement.webp",
            alt: "AI-generated retro-futuristic soda ad poster with flawless text"
          },
        ]
      },
      {
        id: "qwen-ecommerce-text",
        shortTitle: "E-commerce Text-on-Image",
        originalTitle: "Product Imagery with Integrated Text",
        tagline: "Generate product shots where packaging and labels are perfectly legible.",
        description: "Produce e-commerce images where text on product labels, boxes, and packaging is clear and consistent. This is ideal for generating realistic product concepts, mockups, or advertising visuals where the brand name must be readable and accurate.",
        category: "E-commerce",
        inputImage: [],
        outputImages: [
          {
            prompt:`Bookstore window display. A sign displays “New Arrivals This Week”. Below, a shelf tag with the text “Best-Selling Novels Here”. To the side, a colorful poster advertises “Author Meet And Greet on Saturday” with a central portrait of the author. There are four books on the bookshelf, namely “The light between worlds” “When stars are scattered” “The slient patient” “The night circus”`,
            imageUrl:"https://cdn.kontextflux.io/ai-image/qwen-image/new-arrival-books.webp",
            alt:"New Arrivals This Week for bookstore"
          }
        ]
      },
      {
        id: "qwen-presentation",
        shortTitle: "Presentation & Infographics",
        originalTitle: "Creating Text-Rich Presentation Slides",
        tagline: "Visualize complex data and concepts with integrated text for clarity.",
        description: "Use Qwen-Image to generate visually compelling slides for business presentations and educational content. The model can create infographics, charts, and diagrams with accurate, well-formatted text, helping you communicate complex ideas more effectively.",
        category: "Presentations",
        inputImage: [],
        outputImages: [  
          {
            prompt: "A detailed architectural blueprint of a futuristic building, with labels for different sections: 'Entrance', 'Lobby', 'Offices'",
            imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image/architectural-blueprint.webp",
            alt: "Architectural blueprint with accurate text labels"
          },
          {
            prompt: "An infographic showing a growth chart, with the title '2025 Projections' and labels on the axes 'Revenue' and 'Q1, Q2, Q3, Q4'",
            imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image/2025-projections.webp",
            alt: "AI-generated infographic for a presentation slide"
          },
        ]
      },
      {
        id: "qwen-editing",
        shortTitle: "Precise Image Editing",
        originalTitle: "Making Surgical Edits to Existing Images",
        tagline: "Modify images with granular control over objects and text.",
        description: "Utilize Qwen-Image’s upcoming editing features to seamlessly alter images. Change the text on a sign, replace an object, or adjust a character's pose, all while maintaining visual consistency and realism. The editing version, coming soon, will unlock a new level of creative control.",
        category: "Image Editing",
        inputImage: [], // This scenario will be text-to-image until editing is available
        outputImages: [
          {
            prompt:"",
            imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhSHZiagAAaLEB.webp",
            alt:""
          }

        ]
      },
    ]
  },
  gallerySection: {
    title: "Unmatched Text & Image Coherence",
    description: "Explore the visual fidelity and superior text rendering of Qwen-Image. From complex scenes to intricate details, see what's possible.",
    images: [
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhQ5bfbEAAme2k.webp"],
    alts: ["qwen-image-1"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhSHZiagAAaLEB.webp"],
    alts: ["qwen-image-2"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhVhMIbAAATevg.webp"],
    alts: ["qwen-image-3"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/safdsgdfgf.webp"],
    alts: ["qwen-image-4"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhRBRCbYAAGzYJ.webp"],
    alts: ["qwen-image-5"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhU5bmbMAAgsWR.webp"],
    alts: ["qwen-image-6"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhVlHZa4AAdy1E.webp"],
    alts: ["qwen-image-7"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/shgthfgjhfgjjsfgjfg.webp"],
    alts: ["qwen-image-8"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhS4H0bEAEB2Ba.webp"],
    alts: ["qwen-image-9"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhUovFawAA08XT.webp"],
    alts: ["qwen-image-10"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/long-girl.webp"],
    alts: ["qwen-image-11"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/six.webp"],
    alts: ["qwen-image-12"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhS7izacAAbZnC.webp"],
    alts: ["qwen-image-13"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhUV8zboAALfTL.webp"],
    alts: ["qwen-image-14"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/mushroom.webp"],
    alts: ["qwen-image-15"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhSDeXboAAD1g7.webp"],
    alts: ["qwen-image-16"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/GxhUzvyaAAAtXLp.webp"],
    alts: ["qwen-image-17"],
    prompt: "",
  },
  {
    srcs: ["https://cdn.kontextflux.io/ai-image/qwen-image/c/raccoon.webp"],
    alts: ["raccoon explorer"],
    prompt: "A miniature raccoon explorer made of wool wearing all kinds of equipment, walking through dry grass, the whole world is made of felt textile",
  },
]
  },
  featuresSection: {
    title: "Key Features of Qwen-Image",
    description: "Discover why Qwen-Image is the next generation of AI for visual creation and editing.",
    items: [
      {
        icon: "🖋️",
        title: "Flawless Text Rendering",
        description: "Generate images with perfect, readable text, from single words to complex paragraphs, in both English and Chinese."
      },
      {
        icon: "✂️",
        title: "Precise Image Editing",
        description: "The upcoming editing version provides surgical control over images, allowing you to seamlessly change objects, text, and details. (Editing version coming soon!)"
      },
      {
        icon: "🎨",
        title: "Diverse Visual Styles",
        description: "From photorealism to stylized art, Qwen-Image handles a vast array of artistic styles and complex scenes with high fidelity."
      },
      {
        icon: "🧠",
        title: "20B MMDiT Foundation Model",
        description: "Built on a state-of-the-art 20-billion-parameter multimodal architecture for superior understanding and generation capabilities."
      },
      {
        icon: "🚀",
        title: "Open-Weight & Accessible",
        description: "The open-source nature of the model allows for unprecedented customization, fine-tuning, and integration by developers and researchers."
      },
      {
        icon: "🤝",
        title: "Collaborative Ecosystem",
        description: "Designed to be a flexible base, Qwen-Image can be integrated into popular frameworks and workflows for a seamless creative process."
      },
    ]
  },
  faqSection: {
    title: "Qwen-Image - FAQs",
    items: [
      {
        question: "What is Qwen-Image?",
        answer: "Qwen-Image is a 20B MMDiT (Multimodal Diffusion Transformer) foundation model developed by the Qwen team. It is an AI designed for superior text-to-image generation and precise image editing, with a special focus on flawless text rendering and high-quality visuals."
      },
      {
        question: "How does Qwen-Image differ from other AI image models?",
        answer: "Qwen-Image's primary differentiators are its exceptional text rendering capabilities, especially for complex, multi-line, and multilingual text (including Chinese), and its upcoming, precise image editing features that offer fine-grained control over images."
      },
      {
        question: "Is the image editing feature available now?",
        answer: "The Qwen-Image team has currently released the image generation weights. The editing version is a key part of the roadmap and will be released soon. KontextFlux.io will integrate this feature as soon as it becomes available."
      },
      {
        question: "Can I use Qwen-Image to generate images with text in other languages?",
        answer: "Yes, Qwen-Image is designed to handle both alphabetic languages like English and logographic languages like Chinese with high accuracy, making it a highly versatile tool for global users."
      },
      {
        question: "What does '20B MMDiT' mean?",
        answer: "'20B' refers to the model's 20 billion parameters, indicating its immense scale and complexity. 'MMDiT' stands for Multimodal Diffusion Transformer, which is a state-of-the-art architectural design that combines language and vision understanding to generate high-quality images."
      },
      {
        question: "Is Qwen-Image open-source?",
        answer: "Yes, Qwen-Image is an open-weight model. This means its core parameters are publicly available, allowing developers and researchers to download, study, and build their own projects on top of its powerful foundation."
      },
       {
        question: "How does Qwen-Image compare to Flux models for text rendering?",
        answer: "While Flux models offer strong typography, Qwen-Image's architecture is specifically trained to excel at complex, long-form text and multilingual support, especially for Chinese characters, providing a distinct advantage for text-heavy projects."
      }
    ]
  },
  summaryMD:`
## Qwen-Image: The Technical Report

![qwen image showcase](https://cdn.kontextflux.io/qwen-image/summary/merge3.webp)

### Unparalleled Text Rendering: A Game-Changer for Creatives

One of the most significant advancements offered by Qwen-Image is its superior ability to render text within images. This feature addresses a long-standing challenge in AI image generation, enabling the creation of visually coherent and contextually accurate images with embedded text.

### Key Text Rendering Features:

*   **Multi-language Support:** Qwen-Image seamlessly renders both English and Chinese text, preserving the nuances of each language. This makes it an invaluable tool for global marketing campaigns, multilingual content creation, and cross-cultural artistic expression.
*   **Complex Layouts:** The model can handle multi-line text, paragraphs, and intricate layouts with remarkable precision. This opens up new possibilities for generating posters, infographics, and other text-heavy visuals directly from a prompt.
*   **In-Image Text Accuracy:** Whether it's a sign on a storefront, text on a t-shirt, or the cover of a book, Qwen-Image integrates text into the visual fabric of the image with stunning accuracy.

### Image Editing Capabilities: A Feature-by-Feature Showdown

The following table provides a clear, concise, and feature-by-feature comparison of the editing functionalities offered by each model. For web application developers, this directly informs feature planning, helps identify potential gaps, and aids in selecting the most appropriate models for desired editing workflows.

| Model Name   | Generative Editing Capabilities (Inpainting, Outpainting, Object Modification, Style Transfer, Background Replacement) | Text Editing within Images | Character/Pose Adjustment | Iterative Editing Support | Primary Editing Paradigm | Current Availability Status | Noteworthy Features/Limitations |
|--------------|:------------------------------------------------------------------------------------------------------------------:|:--------------------------:|:-------------------------:|:-------------------------:|:------------------------:|:---------------------------:|----------------------------------|
| Qwen-Image   | Yes (Object additions/deletions, style transfer, detail enhancement)                                               | Yes                        | Yes (Character pose adjustment) | Yes (Enhanced multi-task training paradigm implies consistency) | Native Generative         | Coming Soon                   | Focus on preserving semantic meaning and visual realism |
| Flux         | Yes (Object Modification, Style Transfer, Background Replacement, Inpainting, Outpainting)                          | Yes (Maintains original fonts/styles) | Yes (Character consistency) | Yes (Iteratively add instructions, minimal latency) | Native Generative         | Released                      | Unified framework handling multiple tasks; lightning-fast editing |
| Recraft      | Yes (Upscaling, Background Removal, Style Transfer, Inpainting, Outpainting)                                        | Yes (Edit, recolor, reposition text) | Not explicitly specified  | Yes (Prompt-based editing, iterate) | Platform-Integrated (Leverages external models like GPT-4o, Flux Kontext) | Released | Streamlined design workflow; allows exact text placement |
| Ideogram     | Limited (Cropping, resizing, drawing from scratch, removing unwanted elements)                                      | Not explicitly specified as generative text editing | Yes (Character Reference) | Not explicitly specified as iterative generative editing | Basic Image Manipulation / Platform-Integrated (Magic Prompt for generation) | Released | Focus on enhancing prompts for image generation; editor for basic adjustments |
| Imagen 4     | Limited (Crop, Straighten, Subject Mask)                                                                           | Not explicitly specified as generative text editing | Not explicitly specified | Not explicitly specified | Post-Processing/Enhancement (for photographers) | Released | Automates color correction, culling; learns user's editing style; integrates with Adobe Lightroom |


### Advanced Image Editing on the Horizon:

While the initial release focuses on image generation, the Qwen team has announced that an editing version of Qwen-Image will be available soon. This upcoming release will empower users with a suite of professional-grade editing tools, including:

*   **Style Transfer:** Apply the artistic style of one image to another.
*   **Object Manipulation:** Add, remove, or modify objects within an image.
*   **Detail Enhancement:** Improve the clarity and sharpness of specific image elements.
*   **Text Editing:** Edit existing text within an image.
*   **Pose Adjustment:** Modify the pose of human subjects.


### Benchmarking Success

![qwen image showcase](https://cdn.kontextflux.io/qwen-image/summary/bench.webp)

Qwen-Image has demonstrated strong performance across multiple public benchmarks, outperforming many existing models in both image generation and editing tasks. It particularly excels in text rendering benchmarks, solidifying its position as a leader in this critical area.

### Open-Source and Community-Driven

To start exploring the capabilities of Qwen-Image, you can visit the official resources:

*   **Start Generating:** [Qwen-Image](/image-models/qwen-image)

*   **GitHub:** [https://github.com/QwenLM/Qwen-Image](https://github.com/QwenLM/Qwen-Image)
*   **Hugging Face:** [https://huggingface.co/Qwen/Qwen-Image](https://huggingface.co/Qwen/Qwen-Image)
*   **Official Blog:** [https://qwenlm.github.io/blog/qwen-image/](https://qwenlm.github.io/blog/qwen-image/)

The release of Qwen-Image marks a significant milestone in the evolution of AI image generation. With its powerful text rendering capabilities, high-fidelity image generation, and open-source accessibility, Qwen-Image is poised to become an indispensable tool for creatives and developers worldwide.
`
},
{
  id: "nano-banana",
  slug: "nano-banana",
  name: "Nano Banana",
  category: ToolCategory.ImageModels,
  icon: "https://cdn.kontextflux.io/ai-image/nano-banana/nano-banana-is-new-king.webp",
  editorConfig: {
    modelTypes: [ModelType.TIIToImage],
    isExclusive: false,
    imgRequired: ParamRequirement.Optional,
    defaultModelId: imgModels[10].id,
    promptEngine: {
      defaultPrompt: "",
      promptPrefix: "",
      promptSuffix: "",
      placeholder: "",
      promptExamples: [
        "Change the background to a bustling cyberpunk city",
        "Make the character's armor sleek chrome",
        "Turn the season to a snowy winter landscape",
        "Add a majestic dragon flying in the sky"
      ],
      promptRequired: ParamRequirement.Optional,
      exampleImgUrl: "https://cdn.kontextflux.io/ai-image/nano-banana/nano-banana-is-new-king.webp"
    },
  },
  seo: {
    title: "Nano Banana(Gemini 2.5 Flash Image Preview): The Future of AI Image Editing & Generation",
    description: "Experience the mysterious and powerful Nano Banana AI model. Renowned for its incredible prompt accuracy and stunning image quality that rivals GPT-4 and Gemini. Edit and create like never before.",
    keywords: ["Nano Banana", "AI image editor", "AI image generator", "Gemini 3 image", "next-gen AI", "LMArena", "instruction-following AI"],
    ogImage: "https://cdn.kontextflux.io/ai-image/nano-banana/nano-banana-is-new-king.webp"
  },
  pageHeader: {
    pageTitle: "Nano Banana(Gemini 2.5 Flash Image)",
    pageTagline: "The mysterious AI model Officially Unveiled as Google's Gemini 2.5 Flash Image Preview. Experience unparalleled prompt-following and editing power that feels like magic.",
    videoPoster: "https://cdn.kontextflux.io/ai-image/nano-banana/nano-banana-hero.webp",
    buttons:[
      {label: "Try Nano Banana Now",
      link: "/image-models/nano-banana"}
    ]
  },
  scenarioShowcase: {
    title: "Next-Generation Scenarios with Nano Banana",
    description: "Discover how Nano Banana's advanced contextual understanding and precision editing can revolutionize creative workflows across industries. ",
    scenarios: [
      {
        id: "ecommerce-product-refresh",
        shortTitle: "E-commerce Refresh",
        originalTitle: "Dynamic Product Environments for E-commerce",
        tagline: "Instantly place your product in any setting.",
        description: "Transform a standard studio product shot into a compelling lifestyle image. Nano Banana understands the product's context, allowing it to generate realistic backgrounds, lighting, and props that increase engagement and sales.",
        category: "E-commerce",
        inputImage: [
          { prompt: "", 
          imageUrl: "https://cdn.kontextflux.io/ai-image/nano-banana/scenario-1.webp",
          alt: "scenario-1" }
        ],
        outputImages: [
          ],
      },
      {
        id: "advertising-campaign-mockup",
        shortTitle: "Ad Campaign Mockup",
        originalTitle: "Create High-Impact Advertising Visuals Instantly",
        tagline: "Generate an entire ad campaign from a single idea.",
        description: "Nano Banana's ability to follow complex instructions makes it perfect for ad creation. From a simple product image, generate a full-fledged advertising visual, complete with dramatic lighting and thematic elements, ready for A/B testing.",
        category: "Advertising",
        inputImage: [{ prompt: "", 
          imageUrl: "https://cdn.kontextflux.io/ai-image/nano-banana/scenario-2.webp",
          alt: "scenario-2" }],
        outputImages: [
        ],
      },
      {
        id: "website-hero-image",
        shortTitle: "Website Hero Image",
        originalTitle: "Designing a Unique Website Hero Image",
        tagline: "Craft the perfect, on-brand hero image.",
        description: "Generate a stunning, brand-aligned hero image that captures visitors' attention. Nano Banana can interpret abstract concepts and branding cues to produce visuals that are both beautiful and meaningful for your website.",
        category: "Website Design",
        inputImage: [{ prompt: "", 
          imageUrl: "https://cdn.kontextflux.io/ai-image/nano-banana/scenario-3.webp",
          alt: "scenario-3" }],
        outputImages: [
        ],
      },
      {
        id: "social-media-storytelling",
        shortTitle: "Social Media Storytelling",
        originalTitle: "Create a Cohesive Visual Narrative for Social Media",
        tagline: "Tell a story in a single, evolving image.",
        description: "Use Nano Banana’s powerful editing to create a sequence of images for a social media carousel post. Start with one character and progressively change their outfit, background, and mood to tell a captivating visual story.",
        category: "Social Media",
        inputImage: [{ prompt: "", 
          imageUrl: "https://cdn.kontextflux.io/ai-image/nano-banana/scenario-4.webp",
          alt: "scenario-4" }],
        outputImages: [
        ],
      }
    ]
  },
  gallerySection: {
    title: "The Nano Banana Showcase",
    description: "A gallery of creations made possible by Nano Banana's unprecedented editing and generation capabilities.",
    images: [
      
    ],
  },
  featuresSection: {
    title: "Why is Nano Banana Special?",
    description: "Appearing mysteriously on LMArena, Nano Banana has stunned users with its performance, leading to speculation that it could be a next-generation model from a major AI lab.",
    items: [
      { icon: "🎯", title: "Superior Instruction Following", description: "Excels at interpreting complex, multi-step prompts to deliver incredibly accurate edits and generations. " },
      { icon: "✨", title: "Flawless Image Editing", description: "Seamlessly adds, removes, or modifies elements while maintaining perfect lighting, shadows, and context. " },
      { icon: "👤", title: "Unmatched Character Consistency", description: "Maintains character identity and details across multiple edits and scene changes, a key challenge for many models. " },
      { icon: "🌌", title: "Photorealistic & Creative", description: "Capable of generating breathtakingly realistic images and a wide array of artistic styles with equal proficiency. " },
      { icon: "🤫", title: "Mysterious & Powerful", description: "The community speculates this could be an unreleased Gemini 2.5 or next-gen Imagen model, making it one of the most exciting models to watch. " },
      { icon: "⚔️", title: "Outperforms the Competition", description: "Early user tests suggest it surpasses leading models like FLUX Kontext and GPT-4's image generator in key areas." },
    ],
  },
  faqSection: {
    title: "Frequently Asked Questions about Nano Banana",
    items: [
      { question: "What is the Nano Banana AI model?", answer: "Nano Banana is a new, high-performance AI model that appeared on the LMArena platform. It's known for its exceptional ability to understand complex text prompts for both image generation and editing. " },
      { question: "Who made Nano Banana? Is it a Google Gemini model?", answer: "The developer of Nano Banana is  Officially Unveiled as Google's Gemini 2.5 Flash Image Preview. Its sudden, unannounced appearance has led to intense speculation in the AI community, and now is surely viewed as released model from Google, the next version of Gemini Flash Image model." },
      { question: "How does Nano Banana compare to other models like FLUX Kontext or GPT-4 Image?", answer: "Based on user feedback and comparisons in LMArena, Nano Banana shows significant advantages in prompt accuracy, character consistency, and the ability to perform complex edits, often outperforming existing top-tier models in these specific areas." },
      { question: "What does the 'Nano' in the name mean?", answer: "While there's no official explanation, some users on Reddit speculate that 'Nano' could imply it's a smaller, highly efficient version of a much larger model, optimized for speed without sacrificing quality." },
      { question: "Can I use Nano Banana for commercial projects?", answer: "Since the model's origin and license are unknown, it is currently available for public testing and evaluation on LMArena.Its use in commercial projects is not advised until an official release and licensing terms are provided." },
      { question: "What are its main strengths?", answer: "Its main strengths are superior prompt following for complex edits, maintaining scene and character consistency, and producing high-quality, photorealistic results." }
    ],
  },
},
    {
      id: "qwen-image-edit",
      slug: "qwen-image-edit",
      name: "Qwen-Image-Edit",
      category: ToolCategory.ImageModels,
      icon: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/qwen-panda.webp",
      editorConfig: {
        modelTypes: [ModelType.TIIToImage],
        isExclusive: false,
        imgRequired: ParamRequirement.Required,
        defaultModelId: imgModels[9].id, // Assuming Qwen-Image-Edit is positioned after Qwen-Image in the array
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "",
          promptSuffix: "",
          placeholder: "",
          promptExamples: [],
          promptRequired: ParamRequirement.Required,
          exampleImgUrl: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/qwen-panda.webp"
        }
      },
      seo: {
        title: "Qwen-Image-Edit: Advanced AI Image Editor for Semantic & Appearance Changes | KontextFlux.io",
        description: "Try free Qwen-Image-Edit, a 20B MMDiT model excelling in precise text editing, object manipulation, and style transfers. Edit images with flawless bilingual text and visual consistency. Available on KontextFlux.io with free credits.",
        ogImage: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/qwen-panda.webp",
        keywords: [
          "qwen-image-edit",
          "qwen-image-edit ai",
          "ai image editing",
          "precise text editing ai",
          "semantic image editing",
          "appearance editing tool",
          "bilingual text editor",
          "qwen edit playground"
        ]
      },
      pageHeader: {
        pageTitle: "Qwen-Image-Edit",
        pageTagline: "Experience unparalleled control with Qwen-Image-Edit, the 20B MMDiT AI model. Execute complex semantic edits, precise appearance changes, and accurate bilingual text modifications—all from a simple prompt. Start editing for free on KontextFlux.io.",
        heroImage: {
          src: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/qwen-banner.webp",
          alt: "Qwen-Image-Edit AI hero image showcasing semantic and appearance editing"
        },
      },
      scenarioShowcase: {
        title: "Real-World Applications of Qwen-Image-Edit",
        description: "Harness Qwen-Image-Edit's editing prowess for real-world applications in e-commerce, advertising, website design, and social media content creation.",
        scenarios: [
          {
            id: "qwen-ecommerce-product-edit",
            shortTitle: "E-commerce Product Enhancement",
            originalTitle: "Refining Product Images for Online Stores",
            tagline: "Modify product colors, add labels, or remove backgrounds seamlessly.",
            description: "Enhance e-commerce listings by editing product photos to change colors, add custom text on packaging, or remove distracting elements, ensuring high-quality visuals that boost sales without reshooting.",
            category: "E-commerce",
            inputImage: [
              
            ],
            outputImages: [
              {
                prompt: "change the clothes to green color for the girl, replace background with sunny beach",
                imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/red-girl-to-green-girl.webp",
                alt: "red-girl-to-green-girl sit on sunny beach"
              }
            ]
          },
          {
            id: "qwen-ad-campaign-edit",
            shortTitle: "Advertising Campaign Customization",
            originalTitle: "Tailoring Ads with Precise Edits",
            tagline: "Update text, swap elements, or apply styles for targeted campaigns.",
            description: "Customize ad creatives by editing headlines in multiple languages, replacing objects to fit seasonal themes, or transferring styles to match brand aesthetics, saving time on redesigns for digital and print ads.",
            category: "Advertising",
            inputImage: [
             
            ],
            outputImages: [
              {
                prompt: "add headline with  'AUGUST', and remove all other texts",
                imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/poster-at-august.webp",
                alt: "Edited advertising poster with updated bilingual text and rotation"
              }
            ]
          },
          {
            id: "qwen-website-design-edit",
            shortTitle: "Website Design Optimization",
            originalTitle: "Editing Visuals for Web Layouts",
            tagline: "Adjust banners, icons, or hero images for better user engagement.",
            description: "Optimize website assets by editing banners to include precise text overlays, modifying elements for responsiveness, or applying semantic changes like style transfers to align with site themes, enhancing UX without custom graphics.",
            category: "Website Design",
            inputImage: [
             
            ],
            outputImages: [
              {
                prompt: `replace the bottom rabbit with an jumping cute robot, add "QWEN IMAGE EDIT" text at center`,
                imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/add-text-icon-for-hero.webp",
                alt: "Edited website banner with text addition and background change"
              }
            ]
          },
          {
            id: "qwen-social-media-edit",
            shortTitle: "Social Media Content Refinement",
            originalTitle: "Polishing Posts for Viral Impact",
            tagline: "Edit memes, stories, or reels with text and object tweaks.",
            description: "Refine social media content by adding trendy text, removing blemishes from photos, or performing appearance edits like clothing changes, creating engaging posts that resonate with audiences on platforms like Instagram or TikTok.",
            category: "Social Media",
            inputImage: [
             
            ],
            outputImages: [
              {
                prompt: "change this into ghibli style",
                imageUrl: "https://cdn.kontextflux.io/ai-image/qwen-image-edit/girl-with-glasses-compare-ghibli-style.webp",
                alt: "girl with glasses changed to ghibli style"
              }
            ]
          }
        ]
      },
      gallerySection: {
        title: "Showcasing Qwen-Image-Edit's Editing Excellence",
        description: "View real edits demonstrating semantic consistency, appearance precision, and text accuracy across diverse scenarios.",
        images: [
         
        ]
      },
      featuresSection: {
        title: "Key Features of Qwen-Image-Edit",
        description: "Explore the advanced capabilities that make Qwen-Image-Edit a leader in AI-driven image editing.",
        items: [
          {
            icon: "🔍",
            title: "Semantic Editing Mastery",
            description: "Perform high-level changes like IP creation, object rotations, and style transfers while maintaining overall semantic consistency."
          },
          {
            icon: "✏️",
            title: "Appearance Editing Precision",
            description: "Add, remove, or modify elements with low-level control, ensuring unchanged regions remain identical in pixels."
          },
          {
            icon: "🖼️",
            title: "Bilingual Text Editing",
            description: "Edit English and Chinese text directly in images, preserving original font, size, and style for accurate modifications."
          },
          {
            icon: "📊",
            title: "SOTA Benchmark Performance",
            description: "Achieves state-of-the-art results on public benchmarks for both semantic and appearance editing tasks."
          },
          {
            icon: "🔄",
            title: "Chained Editing Support",
            description: "Enable step-by-step iterative edits, perfect for correcting details in complex artworks or designs."
          },
          {
            icon: "🌐",
            title: "Open-Source Accessibility",
            description: "Built on open-weight architecture, allowing integration and customization; access via KontextFlux.io with free credits."
          }
        ]
      },
      cta: {
    title: "Ready to Transform Your Images?",
    description: "Unlock the full potential of AI-driven image editing today. Sign up on KontextFlux.io to receive 20 free credits and start using the Qwen-Image-Edit model instantly. No credit card required.",
    button: {
      text: "Start Editing for Free",
      link: "/login"
    }
  },
      faqSection: {
        title: "Qwen-Image-Edit - FAQs",
        items: [
          {
            question: "What is Qwen-Image-Edit?",
            answer: "Qwen-Image-Edit is a 20B MMDiT model from the Qwen team, specializing in image editing with capabilities in semantic changes, appearance modifications, and precise bilingual text editing."
          },
          {
            question: "How does Qwen-Image-Edit handle text editing?",
            answer: "It supports adding, deleting, or modifying English and Chinese text in images, maintaining the original font, size, and style for seamless integration."
          },
          {
            question: "What are semantic vs. appearance editing?",
            answer: "Semantic editing involves high-level changes like style transfer or object rotation with overall pixel shifts but consistent meaning. Appearance editing focuses on precise additions/removals without altering other regions."
          },
          {
            question: "Is Qwen-Image-Edit free to use on KontextFlux.io?",
            answer: "Yes, logged-in users get 20 free credits; each image edit consumes 5 credits. It's powered by third-party APIs from the open-source Qwen model."
          },
          {
            question: "Can I perform iterative edits with this model?",
            answer: "Absolutely, Qwen-Image-Edit supports chained editing, allowing step-by-step refinements, such as correcting characters in calligraphy artworks."
          },
          {
            question: "How does it compare to other editing models like Flux?",
            answer: "Qwen-Image-Edit excels in bilingual text precision and semantic consistency, while Flux offers fast unified editing; see our comparison table for details."
          },
          {
            question: "What input is required for editing?",
            answer: "An input image is required, along with a prompt describing the edits. The model uses Qwen2.5-VL for semantic control and VAE for appearance."
          },
          {
            question: "Is Qwen-Image-Edit open-source?",
            answer: "Yes, developed by the Qwen team under Apache 2.0 license, with weights available on Hugging Face for community use and fine-tuning."
          }
        ]
      },
      summaryMD: `
## Qwen-Image-Edit: Revolutionizing AI Image Editing

Qwen-Image-Edit is a groundbreaking AI-powered image editing tool developed by the Qwen team, building upon the robust 20B Qwen-Image model. This advanced iteration extends the model's exceptional text rendering capabilities into a versatile editing platform, catering to creatives, marketers, and developers alike. Launched as an open-source solution under the Apache 2.0 license, Qwen-Image-Edit integrates cutting-edge technology to deliver precise semantic and appearance-based edits, making it a standout choice for professional-grade visual content creation

### Key Features and Abilities


- Semantic Editing Mastery: Perform complex edits like style transfers (e.g., Studio Ghibli aesthetics) and 180-degree object rotations, maintaining semantic coherence across the image.
- Appearance Editing Precision: Add, remove, or modify specific elements (e.g., signboards with reflections) while keeping unchanged regions intact.
- Bilingual Text Editing: Edit text in English and Chinese with high accuracy, perfect for posters, ads, and packaging designs.
- Chained Editing Support: Enable iterative, step-by-step refinements, as demonstrated in correcting calligraphy artworks.
- State-of-the-Art Performance: Achieves top benchmarks in text editing, object manipulation, and view synthesis, outperforming many competitors.
- Open-Source Accessibility: Fully open-weight, allowing customization and integration, accessible via third-party APIs on KontextFlux.io.

### Applications

- Ip creations
- Novel view synthesis
- Avatar creator
- Object add
- Object remove
- Object replace
- Background swap
- virtual try on
- Poster editing
- Repairing T2I text

### Official Resources

- [hugging face](https://huggingface.co/Qwen/Qwen-Image-Edit)
- [modelscope](https://modelscope.cn/models/Qwen/Qwen-Image)
- [Blog](https://qwenlm.github.io/blog/qwen-image-edit/)
- [Tech Report](https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen-Image/Qwen_Image.pdf)
      `,
    },
    {
      id: "gemini-25-flash-image",
      slug: "gemini-25-flash-image",
      name: "Gemini 2.5 Flash Image",
      category: ToolCategory.ImageModels,
      icon: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/gemini-2.5-flash-image-2.webp",
      editorConfig: {
        modelTypes: [ModelType.TIIToImage],
        isExclusive: false,
        imgRequired: ParamRequirement.Optional,
        defaultModelId: imgModels[10].id,
        promptEngine: {
          defaultPrompt: "",
          promptPrefix: "",
          promptSuffix: "",
          placeholder: "",
          promptExamples: [],
          promptRequired: ParamRequirement.Optional,
          exampleImgUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/gemini-2.5-flash-image-2.webp"
        }
      },
      seo: {
        title: "Gemini 2.5 Flash Image: AI-Powered Generation & Editing | KontextFlux.io",
        description: "Explore Google's Gemini 2.5 Flash(nano banana) for advanced AI image generation and editing. Benefit from features like multi-image fusion, character consistency, and conversational editing. Start creating for free on KontextFlux.io.",
        ogImage: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/gemini-2.5-flash-image-2.webp",
        keywords: [
          "Gemini 2.5 Flash Image",
          "AI image generator",
          "AI image editor",
          "multi-image fusion",
          "character consistency",
          "conversational image editing",
          "Google AI image model",
          "nano banana model"
        ]
      },
      pageHeader: {
        pageTitle: "Gemini 2.5 Flash Image(nano banana)",
        pageTagline: "Leverage Google's state-of-the-art AI for seamless image creation and editing. Experience multi-image fusion, consistent character generation, and intuitive conversational editing. Available now on KontextFlux.io.",
        videoPoster: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/gemini-hero-transparent.webp"
      },
      scenarioShowcase: {
        title: "Practical Applications of Gemini 2.5 Flash Image",
        description: "Discover how Gemini 2.5 Flash Image can be applied in various real-world scenarios, from marketing and design to storytelling and e-commerce.",
        scenarios: [
          {
            id: "gemini-character-storyboarding",
            shortTitle: "Consistent Character Storyboarding",
            originalTitle: "Creating Consistent Characters for Visual Narratives",
            tagline: "Maintain character appearance across multiple scenes and poses.",
            description: "Generate a series of images for a comic, animation, or marketing campaign with a consistent character, ensuring brand and narrative continuity without manual adjustments. ",
            category: "Creative",
            inputImage: [],
            outputImages: [
              {
                prompt: "Refer to this picture and create 4 image, all the images show the same character in different settings and with different expressions (e.g., happy, surprised, determined). The art style should be consistent across all depictions, and the overall composition should be balanced and visually appealing.",
                imageUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/dynamic-pose-for-the-animated-girl.webp",
                alt: "A consistent character shown in different emotional states and environments"
              }
            ]
          },
          {
            id: "gemini-product-mockups",
            shortTitle: "Dynamic Product Mockups",
            originalTitle: "Generating Realistic Product Mockups with Multi-Image Fusion",
            tagline: "Combine product images with lifestyle backgrounds for compelling ads.",
            description: "Merge a product photo with a scenic background to create a realistic lifestyle shot for e-commerce or advertising, saving time and resources on photoshoots. ",
            category: "E-commerce",
            inputImage: [],
            outputImages: [
              {
                prompt: "let the girl hold this handbag",
                imageUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/fashionable-mocha-tone-portrait-girl-hand-bag.webp",
                alt: "fashionable-mocha-tone-portrait-girl with handbag"
              },
              {
                prompt: "fashionable-mocha-tone-portrait-girl",
                imageUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/fashionable-mocha-tone-portrait.webp",
                alt: "fashionable-mocha-tone-portrait-girl"
              },
              {
                prompt: "the pink handbag",
                imageUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/handbag.webp",
                alt: "the pink handbag"
              }
            ]
          },
          {
            id: "gemini-interior-design",
            shortTitle: "Interior Design Visualization",
            originalTitle: "Restyling Interior Spaces with Conversational Edits",
            tagline: "Experiment with different furniture and decor styles instantly.",
            description: "Upload a photo of a room and use conversational prompts to change furniture, color schemes, and decor, allowing for rapid interior design prototyping.",
            category: "Design",
            inputImage: [],
            outputImages: [
              {
                prompt: "Change the sofa in the living room to a green velvet couch and add a modern art piece on the wall",
                imageUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/sofa-product-in-living-room.jpeg",
                alt: "An interior design concept showing a restyled living room"
              },
              {
                prompt: "raw input",
                imageUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/sofa-product.webp",
                alt: "An solo sofa product"
              }
            ]
          },
           {
            id: "gemini-concept-art",
            shortTitle: "Concept Art & Ideation",
            originalTitle: "Generating and Refining Concept Art through Iterative Prompts",
            tagline: "Develop creative concepts with iterative, conversational feedback.",
            description: "Start with a basic idea and refine it through a series of conversational prompts, exploring different styles, elements, and compositions to develop unique concept art for games, films, or other creative projects.",
            category: "Creative",
            inputImage: [],
            outputImages: [
              {
                prompt: `turn this photo into a character figure. Behind it, place a box with the character’s image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible`,
                imageUrl: "https://cdn.kontextflux.io/ai-image/gemini-25-flash-image/animation-character-figure.webp",
                alt: "animation girl character figure"
              }
            ]
          }
        ]
      },
      gallerySection: {
        title: "Gemini 2.5 Flash Image Showcase",
        description: "Explore a gallery of images generated and edited using the powerful features of Gemini 2.5 Flash, demonstrating its versatility and quality.",
        images: [
        ]
      },
      featuresSection: {
        title: "Key Features of Gemini 2.5 Flash Image",
        description: "Discover the advanced capabilities that set Gemini 2.5 Flash Image apart as a premier tool for AI-driven image generation and editing.",
        items: [
          {
            icon: "🎨",
            title: "Multi-Image Fusion",
            description: "Combine elements from up to three images to create a single, cohesive new visual, perfect for product mockups and creative compositions. "
          },
          {
            icon: "🎭",
            title: "Character and Style Consistency",
            description: "Maintain the appearance of characters, objects, and styles across multiple image generations, ideal for storytelling and branding. "
          },
          {
            icon: "💬",
            title: "Conversational Editing",
            description: "Edit images using natural language through a multi-turn dialogue, allowing for precise and iterative refinements. "
          },
          {
            icon: "🧠",
            title: "Visual and World Knowledge",
            description: "Leverages Gemini's deep understanding of the world to interpret complex requests, including hand-drawn diagrams and multi-step instructions. "
          },
          {
            icon: "✨",
            title: "Targeted Transformations",
            description: "Make specific changes like blurring backgrounds, altering poses, or removing objects with simple text commands."
          },
          {
            icon: "💧",
            title: "SynthID Watermarking",
            description: "All generated images are embedded with an invisible SynthID watermark to promote responsible AI usage."
          }
        ]
      },
      cta: {
        title: "Ready to Create with Gemini 2.5 Flash?",
        description: "Unlock the next level of AI image generation and editing. Sign up on KontextFlux.io to receive 20 free credits and start using the Gemini 2.5 Flash Image model instantly. No credit card required.",
        button: {
          text: "Start Creating for Free",
          link: "/login"
        }
      },
      faqSection: {
        title: "Gemini 2.5 Flash Image - FAQs",
        items: [
          {
            question: "What is Gemini 2.5 Flash Image?",
            answer: "Gemini 2.5 Flash Image is a state-of-the-art AI model from Google designed for fast and high-quality image generation and editing. It excels at tasks requiring conversational editing, character consistency, and multi-image fusion."
          },
          {
            question: "What was the 'nano banana' model on LMArena?",
            answer: "Before its official release, Gemini 2.5 Flash Image appeared on the LMArena platform under the codename 'nano banana', where it was recognized for its high performance."
          },
          {
            question: "How much does it cost to use Gemini 2.5 Flash on KontextFlux.io?",
            answer: "Each image generation or editing task costs 10 credits. New users who log in receive 20 free credits to get started."
          },
          {
            question: "What makes Gemini 2.5 Flash different from other image models?",
            answer: "Its key differentiators are native multi-image fusion, strong character and style consistency across multiple prompts, and a powerful conversational editing capability that allows for iterative refinement."
          },
          {
            question: "Can I use my own images with this model?",
            answer: "Yes, a key feature of Gemini 2.5 Flash is its ability to take input images for editing, composition, style transfer, and other modifications."
          },
          {
            question: "What is multi-image fusion?",
            answer: "This feature allows you to combine elements from multiple source images into a single new image. For example, you can place a product from one photo into a scene from another."
          },
          {
            question: "How does conversational editing work?",
            answer: "You can provide an initial prompt to generate an image, and then give subsequent text commands to modify it, such as 'now make the car red' or 'add a tree in the background', allowing for a step-by-step creative process."
          },
          {
            question: "Is this model developed by Google?",
            answer: "Yes, Gemini 2.5 Flash Image is developed by Google and made available to developers via the Gemini API. "
          },
           {
            question: "What is SynthID and why is it used?",
            answer: "SynthID is a tool from Google DeepMind that embeds an invisible digital watermark into AI-generated images. This helps to identify the content as AI-generated, promoting transparency and responsible AI practices."
          },
          {
            question: "Can Gemini 2.5 Flash create images with text?",
            answer: "Yes, the underlying Gemini technology is proficient at rendering text accurately within images, making it suitable for creating logos, posters, and diagrams."
          }
        ]
      },
      summaryMD: `
## Gemini 2.5 Flash Image: The Next Frontier in AI Creativity

Gemini 2.5 Flash Image, developed by Google, is a cutting-edge AI model that redefines the landscape of image generation and editing. Initially gaining attention as the high-performing "nano banana" on the LMArena platform, this model combines speed with sophisticated creative control, making it a powerful tool for artists, designers, and developers.  It is accessible through Google's Gemini API and is now available on KontextFlux.io.

> [image edit arena](https://lmarena.ai/leaderboard/image-edit) at Aug 26, 2025

| Rank (UB) | Model                                      | Score  | 95% CI (±) | Votes     | Organization         | License       |
|----------|--------------------------------------------|--------|-----------|-----------|----------------------|---------------|
| 1        | gemini-2.5-flash-image-preview (nano-banana) | 1362   | ±2        | 2,521,035 | Google               | Proprietary   |
| 2        | flux-1-kontext-max                          | 1191   | ±3        | 357,196   | Black Forest Labs    | Proprietary   |
| 3        | flux-1-kontext-pro                          | 1174   | ±2        | 2,015,530 | Black Forest Labs    | Proprietary   |
| 3        | gpt-image-1                                 | 1170   | ±3        | 1,026,399 | OpenAI               | Proprietary   |
| 5        | flux-1-kontext-dev                          | 1152   | ±3        | 1,584,400 | Black Forest Labs    | Proprietary   |
| 6        | qwen-image-edit                             | 1145   | ±2        | 1,585,904 | Alibaba              | Apache 2.0    |
| 6        | seededit-3.0                                | 1142   | ±4        | 1,285,080 | Bytedance            | Proprietary   |
| 8        | gemini-2.0-flash-preview-image-generation   | 1093   | ±3        | 1,700,785 | Google               | Proprietary   |
| 9        | bagel                                       | 1044   | ±5        | 12,774    | Bytedance            | Apache 2.0    |
| 10       | step1x-edit                                 | 1017   | ±4        | 138,399   | StepFun              | Apache 2.0    |


### Key Features and Abilities

- **Multi-Image Fusion:** Seamlessly blend elements from up to three different images to create a single, photorealistic composition. This is perfect for creating dynamic product mockups or imaginative scenes. 
- **Character Consistency:** Maintain a consistent look for characters or subjects across a series of images, changing their poses, expressions, or environments without losing their identity. This is a game-changer for storytelling and branding.
- **Conversational Editing:** Engage in a natural, multi-turn dialogue to refine your images. Start with a concept and provide iterative feedback like "make the background blurrier" or "change the shirt color to blue" for precise control. 
- **Advanced World Knowledge:** Backed by the power of Gemini, the model understands complex, real-world concepts and can interpret nuanced instructions, including those based on sketches or diagrams.
- **Targeted Transformations:** Execute precise edits such as adding or removing objects, altering poses, changing colors, and restoring old photos with simple text prompts. 
- **SynthID Watermarking:** To ensure transparency and responsible use, all images created with Gemini 2.5 Flash are embedded with an invisible SynthID watermark, identifying them as AI-generated. 

### Applications

- Character creation for stories and games
- Dynamic product ad generation
- Interior design and architectural visualization
- Concept art and creative ideation
- Social media content creation
- Photo restoration and enhancement
- Logo and graphic design with embedded text

### Official Resources

- [Official Blog Post](https://deepmind.google/models/gemini/image/)
- [API Documentation](https://ai.google.dev/gemini-api/docs/image-generation#template_3)
      `,
    },
    {
  id: "hunyuan-image-3-0",
  slug: "hunyuan-image-3-0",
  name: "Hunyuan Image 3.0",
  category: ToolCategory.ImageModels,
  icon: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/ella-k-pop.webp",
  isDefaultToolForTheme: false,
  editorConfig: {
    modelTypes: [ModelType.TextToImage],
    isExclusive: false,
    imgRequired: ParamRequirement.Disabled,
    defaultModelId: imgModels[11].id,
    promptEngine: {
      defaultPrompt: "",
      promptPrefix: "",
      promptSuffix: "",
      placeholder: "k-pop style image of a young chinese woman ...",
      promptExamples: [
        "A beautiful Chinese painting of mountains and rivers, with a poem in elegant calligraphy on the right side. The style is serene and traditional, with misty clouds.",
        "A high-resolution, photorealistic advertisement for a new brand of luxury watch. The watch is on a velvet cushion, with the brand name 'Elysian Time' written in a sophisticated font below it. Soft, studio lighting.",
        "A detailed scientific illustration of the water cycle for an educational textbook. Label 'Evaporation', 'Condensation', and 'Precipitation' with clear, legible English text arrows pointing to each stage.",
        "A vibrant and eye-catching image for a music festival, text 'Summer Pulse Fest 2025' in a bold, playful font. Features a stylized sunset and silhouettes of a cheering crowd. 1:1 aspect ratio."   
      ],
      promptRequired: ParamRequirement.Required,
      exampleImgUrl: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/ella-k-pop.webp"
    }
  },
  seo: {
    title: "Hunyuan Image 3.0: AI Image Generator with Text | KontextFlux.io",
    description: "Generate stunning, photorealistic images with perfect, integrated text. Hunyuan Image 3.0 offers commercial-grade quality, ideal for ads, posters, and designs.",
    keywords: ["Hunyuan Image 3.0", "AI image generator", "text in image", "photorealistic AI", "Chinese style AI art", "AI for advertising", "Tencent AI model"],
    ogImage: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/ella-k-pop.webp"
  },
  pageHeader: {
    pageTitle: "Hunyuan Image 3.0",
    pageTagline: "The AI that masters text and photorealism. Create commercial-grade images with perfectly rendered Chinese and English text.",
    heroImage: {
      src: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/hunyuan-image-banner.webp",
      alt: "A stunning, photorealistic image of a futuristic city skyline generated by Hunyuan Image 3.0, featuring glowing signs with legible text."
    },
    buttons: [{label:"Generate For Free", link:"/login"}]
  },
  scenarioShowcase: {
    title: "Real-World Applications: Where Text and Image Unite",
    description: "Hunyuan Image 3.0 excels where other models fail, seamlessly integrating text and understanding complex scenes. See how it can revolutionize your creative workflow.",
    scenarios: [
      {
        id: "advertising-posters",
        shortTitle: "Ad Posters",
        originalTitle: "AI-Generated Advertising & Promotional Posters",
        tagline: "Create print-ready ads in seconds.",
        description: "Generate compelling posters and advertisements with flawless text integration. Hunyuan Image 3.0 understands layout and typography, making it perfect for marketing campaigns that need to grab attention and convey information clearly.",
        category: "Advertising",
        inputImage: [],
        outputImages: [
          {
            prompt: "A retro-style poster advertising a summer music festival. The poster features a vintage microphone and musical notes. The text 'Summer Soundwaves Music Fest' is prominently displayed in a groovy, 70s-style font. The date 'August 15-17' is visible at the bottom.",
            imageUrl: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/summer-poster-1.webp",
            alt: "A retro-themed music festival poster with perfectly rendered, stylized text generated by Hunyuan Image 3.0."
          }
        ]
      },
      {
        id: "ecommerce-social-media",
        shortTitle: "Social Media",
        originalTitle: "Engaging Social Media Content for E-commerce",
        tagline: "Stop the scroll with stunning visuals.",
        description: "Design eye-catching social media posts for your e-commerce brand. Showcase products, announce sales with custom text overlays, and create culturally relevant content that resonates with a global audience, including authentic Eastern aesthetics.",
        category: "Social Media",
        inputImage: [],
        outputImages: [
          {
            prompt: "A chic social media post for a skincare brand. A bottle of serum is placed next to a jade roller on a marble surface. The text 'Glow Naturally' is written in an elegant, clean font. The brand's handle '@KontextFluxBeauty' is at the bottom. 1:1 aspect ratio.",
            imageUrl: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/skincare-social-media-post.webp",
            alt: "A stylish social media post for a beauty brand, featuring product and clean text generated by Hunyuan Image 3.0."
          }
        ]
      },
      {
        id: "product-design-mockups",
        shortTitle: "Product Mockups",
        originalTitle: "Conceptual Product & Packaging Design",
        tagline: "Visualize your next product instantly.",
        description: "Rapidly prototype product designs and packaging concepts. Generate high-fidelity mockups of items like book covers, beverage cans, or tech gadgets with your branding and text perfectly rendered on the surface, saving hours of manual design work.",
        category: "Product Design",
        inputImage: [],
        outputImages: [
          {
            prompt: "Photorealistic product mockup of a coffee bag. The bag is matte black with a modern design. The brand name 'FLUX ROAST' and the text 'Artisan Espresso Blend' are printed clearly on the front. The bag is sitting on a wooden table next to scattered coffee beans.",
            imageUrl: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/flux-roast-coffee-bag.webp",
            alt: "A photorealistic mockup of a coffee bag with custom branding, generated by Hunyuan Image 3.0."
          }
        ]
      },
      {
        id: "educational-content",
        shortTitle: "Educational Graphics",
        originalTitle: "Informative Illustrations & Diagrams",
        tagline: "Make complex information beautiful.",
        description: "Create clear and informative diagrams, charts, and scientific illustrations for educational materials or presentations. Hunyuan Image 3.0's ability to handle long, descriptive prompts and render accurate labels makes it an invaluable tool for educators and researchers.",
        category: "Education",
        inputImage: [],
        outputImages: [
          {
            prompt: "A historical timeline graphic detailing key events of the 'Industrial Revolution', from 1760 to 1840. Include small, representative icons for 'Steam Engine', 'Factory System', 'Urbanization', and 'Child Labor', with relevant dates and concise descriptions for each event。",
            imageUrl: "https://cdn.kontextflux.io/ai-image/hunyuan-image-3-0/industrial-revolution.webp",
            alt: "A colorful and clear educational diagram of a flower with accurate text labels, created by Hunyuan Image 3.0."
          }
        ]
      }
    ]
  },
  gallerySection: {
    title: "Hunyuan Image 3.0 Gallery",
    description: "Explore a curated collection of images showcasing the unparalleled text rendering, photorealism, and artistic range of Hunyuan Image 3.0.",
    images: [

    ]
  },
  featuresSection: {
    title: "Core Features: Why Hunyuan Image 3.0 is a Game-Changer",
    description: "Leveraging a massive 80B parameter model, Hunyuan Image 3.0 delivers breakthrough capabilities for creators and businesses.",
    items: [
      {
        icon: "✍️",
        title: "Advanced Text-in-Image Rendering",
        description: "Generate images with crisp, coherent, and contextually-aware text in both Chinese and English. Perfect for posters, logos, and advertisements."
      },
      {
        icon: "📸",
        title: "Superior Photorealism",
        description: "Create stunningly realistic images with intricate details, accurate lighting, and lifelike textures that rival professional photography."
      },
      {
        icon: "🐉",
        title: "Deep Understanding of Culture",
        description: "Excel in generating content with authentic Eastern and Chinese aesthetics, from traditional art styles to modern cultural elements."
      },
      {
        icon: "📖",
        title: "Ultra-Long Prompt Comprehension",
        description: "Bring your most complex ideas to life. The model understands and executes detailed prompts of over 1000 characters for precise creative control."
      },
      {
        icon: "🚀",
        title: "Commercial-Grade & Open Source",
        description: "Built for industrial use, Hunyuan Image 3.0 provides a powerful, open-source foundation for developers and businesses to innovate upon freely."
      },
      {
        icon: "⚙️",
        title: "Efficient MoE Architecture",
        description: "Utilizes a Mixture-of-Experts (MoE) architecture, ensuring that despite its massive scale, inference is fast and computationally efficient."
      }
    ]
  },
  faqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is Hunyuan Image 3.0?",
        answer: "Hunyuan Image 3.0 is a revolutionary, commercial-grade text-to-image AI model developed by Tencent. It is currently the world's largest open-source image generation model, known for its exceptional ability to render text and create photorealistic images."
      },
      {
        question: "What makes Hunyuan Image 3.0 different from Midjourney or DALL-E 3?",
        answer: "Its primary differentiator is its state-of-the-art ability to generate clear and accurate text directly within images, a common challenge for other models. It also has a deep understanding of Chinese cultural aesthetics and can process extremely long and complex prompts."
      },
      {
        question: "Is Hunyuan Image 3.0 free to use?",
        answer: "Yes, the model is fully open-source for both personal and commercial use. On KontextFlux.io, you can start generating for free with the 20 credits you receive upon signing up."
      },
      {
        question: "What are the best use cases for this model?",
        answer: "It excels in applications requiring text and image synthesis, such as creating advertisements, posters, social media graphics, product mockups, and informative illustrations. Its photorealism also makes it ideal for digital art and conceptual design."
      },
      {
        question: "Does it support languages other than English?",
        answer: "Yes, it has native support and exceptional proficiency in generating text and understanding prompts in both English and Chinese."
      },
      {
        question: "Can I edit images with Hunyuan Image 3.0?",
        answer: "Currently, Hunyuan Image 3.0 on KontextFlux.io supports text-to-image generation. Advanced functions like image-to-image and in-painting are planned for future releases by the model's developers."
      },
      {
        question: "What does '80B parameters' mean?",
        answer: "The 80 billion parameters refer to the scale of the neural network. A larger number of parameters generally allows the model to learn more complex patterns and nuances from its training data, contributing to its high-quality and detailed outputs."
      },
      {
        question: "What aspect ratios can I generate images in?",
        answer: "Hunyuan Image 3.0 supports a wide range of aspect ratios, including 1:1 (square), 16:9 (widescreen), 4:3, and their vertical counterparts, giving you flexibility for any platform or creative need."
      }
    ]
  },
  cta: {
      title: "Ready to Create Images That Speak?",
      description: "Experience the power of perfect text and stunning photorealism. Sign up now and get 20 free credits to start generating with Hunyuan Image 3.0.",
      button: {
        text: "Start Generating for Free",
        link: "/login"
      }
  },
  summaryMD: `
### The Pinnacle of Open-Source Image Generation

Tencent's Hunyuan Image 3.0 marks a significant milestone in the AI landscape. As the world's largest open-source text-to-image model with 80 billion parameters, it offers capabilities that rival top-tier closed-source competitors. Its native multimodal architecture, combining a Mixture-of-Experts (MoE) design with advanced techniques like RLHF, allows for an unprecedented synthesis of textual understanding and visual creation.

The model's standout feature is its ability to render text within images with remarkable clarity and precision in both English and Chinese—a breakthrough that unlocks new potentials for graphic design, marketing, and communication. Coupled with its capacity for ultra-long prompt comprehension and superior photorealism, Hunyuan Image 3.0 provides a powerful, versatile, and accessible tool for creators worldwide.
`
}
  ],
};