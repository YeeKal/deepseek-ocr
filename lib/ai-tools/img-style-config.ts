import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types"; // Assuming Model is also in lib/types
import { imgModels } from "@/lib/ai-tools/config"; // Assuming imgModels is defined elsewhere
import { isDev } from "../utils";
export const ImgStyle: ThemeConfig = {
    id: ToolCategory.ImageStyle, // Changed from ImageGeneration to ImageStyle as per your intent
    iconType: "palette", // Example icon, change as needed
    slug: "style-ai",
    tools: [
        // Default Tool for the "Style AI" Theme (General Style Transfer)
        {
            id: ToolCategory.ImageStyle, // Matches the theme ID for the default tool
            slug: "style-ai",
            name: "Ai Style",
            category: ToolCategory.ImageStyle,
            isDefaultToolForTheme: true,
            icon: "https://cdn.kontextflux.io/ai-style/ai-style-icon.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id, // FLUX.1 Kontext [pro] or [max] for quality
                promptEngine: {
                    defaultPrompt: "",
                    promptPrefix: "",
                    promptSuffix: "",
                    placeholder: "A cat in the style of a Van Gogh painting...(select one style or define your own)",
                    promptExamples: [
                        "Convert my selfie into the LEGO style.",
                        "Render this landscape as a Chinese Ink Painting.",
                        "Apply a futuristic Cyberpunk Neon aesthetic to my car photo.",
                        "Transform this group photo into the Rick and Morty cartoon style."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/ai-style-icon.webp",
                }
            },
            seo: {
                title: "AI Style Generator: 30+ Art Styles to Transform Your Photos",
                description:
                    "Unlock your creativity with the ultimate AI Style Generator. Instantly transform any photo into 30+ unique art styles including Anime, LEGO, Oil Painting, Pop Art, and more. Powered by FLUX.1 Kontext for unparalleled quality. Try it free!",
                keywords: [
                    "ai style generator", "photo to art", "ai art generator from photo", "photo to anime", "lego style photo", "photo to cartoon", "oil painting effect", "pop art generator", "neural style transfer", "cubism generator", "30+ art styles", "FLUX.1 Kontext"
                ],
                ogImage: "https://cdn.kontextflux.io/ai-style/ai-style-icon.webp",
            },
            pageHeader: {
                pageTitle: "AI Art Style Generator (30+ Tools)",
                pageTagline:
                    "One image, endless possibilities. Instantly apply over 30 unique artistic styles to your photos with the world-class power of FLUX.1 Kontext.",
                heroImage: {
                    src: 'https://cdn.kontextflux.io/ai-style/ai-style-hero-hero.webp',
                    alt: "AI Style hero cover",
                }
            },
            scenarioShowcase: {
                title: "From a Single Photo to a Universe of Art",
                description: "Don't just edit your photos—reimagine them. See how our AI Style Generator can be used for work, play, and everything in between.",
                scenarios: [
                    {
                        id: "scenario-pfp",
                        shortTitle: "Create a Unique PFP",
                        originalTitle: "Forge a Profile Picture That Truly Stands Out",
                        tagline: "Your identity, in any style.",
                        description: "Tired of boring selfies? Upload your photo and see yourself as a Ghibli style , Anime hero, a 90s Cartoon character, a Chibi Style icon, or even a LEGO minifigure. Create a profile picture for Discord, Instagram, or Twitter that nobody else has.",
                        category: "Social Media & Gaming",
                        inputImage: [{ imageUrl: "https://cdn.kontextflux.io/ai-style/ghibli-style-boy.webp", alt: "A selfie of a smiling person", prompt: "A person's selfie" }],
                        outputImages: [
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/chibi-style.jpeg", alt: "Person's selfie turned into an anime character by FLUX.1 Kontext", prompt: "In the style of modern anime." },
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/lego-style-roboit-a-futuristic-robot-made-of-classic-lego.png", alt: "Person's selfie turned into a LEGO minifigure by FLUX.1 Kontext", prompt: "In the style of LEGO." }
                        ],
                    },
                    {
                        id: "scenario-gift",
                        shortTitle: "Design a Personalized Gift",
                        originalTitle: "Create a One-of-a-Kind Gift for Someone Special",
                        tagline: "The most personal present is art.",
                        description: "Turn a cherished memory into a masterpiece. Transform a photo of a pet, a couple, or a family into a classic Oil Painting, a delicate Paper Cutting piece, or a timeless Pencil Sketch. Print the result on a canvas or card for a gift they'll never forget.",
                        category: "Gifts & Home Decor",
                        inputImage: [{ imageUrl: "https://cdn.kontextflux.io/ai-style/paper-cut-style.jpeg", alt: "A photo of a golden retriever dog", prompt: "A photo of a golden retriever" }],
                        outputImages: [
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/oil-painting-style.jpeg", alt: "Dog's photo as a classical oil painting by FLUX.1 Kontext", prompt: "In the style of a classical oil painting." },
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/pencil-sketch-style-a-worn-out-pair-of-sneakers-on-a-wooden-floor.png", alt: "Dog's photo as a pencil sketch by FLUX.1 Kontext", prompt: "In the style of a pencil sketch." }
                        ],
                    },
                    {
                        id: "scenario-marketing",
                        shortTitle: "Generate Marketing Visuals",
                        originalTitle: "Create Eye-Catching Visuals for Your Brand or Campaign",
                        tagline: "Stop the scroll with unique style.",
                        description: "Need visuals for your blog, social media, or website? Generate custom graphics that fit your brand's personality. Use the Vector style for a clean corporate look, the Macaron style for a soft, friendly brand, or the Cyberpunk style for an edgy tech company.",
                        category: "Marketing & Business",
                        inputImage: [{ imageUrl: "https://cdn.kontextflux.io/ai-style/macaron-style.png", alt: "A photo of a generic product on a plain background", prompt: "A photo of a product" }],
                        outputImages: [
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/vector-style-icon-of-a-lightbulb-.png", alt: "Product shown in a clean vector style by FLUX.1 Kontext", prompt: "In a clean vector illustration style." },
                            { imageUrl: "https://cdn.kontextflux.io/img-editor/generation-woman-with-dog-neon.png", alt: "Product shown in a vibrant cyberpunk style by FLUX.1 Kontext", prompt: "In the style of cyberpunk neon." }
                        ],
                    },
                    {
                        id: "scenario-art",
                        shortTitle: "Explore Famous Art Movements",
                        originalTitle: "Learn About Art History by Applying Famous Styles",
                        tagline: "Your photo, the canvas of art history.",
                        description: "Understand art in a hands-on way. Take a single image and see how different movements interpret it. How does a Picasso-inspired Cubist take differ from a Van Gogh-inspired one? What does Pop Art emphasize versus Chinese Ink Wash? It's a fun and interactive way to learn.",
                        category: "Education & Artistic Exploration",
                        inputImage: [{ imageUrl: "https://cdn.kontextflux.io/model-gallery/cityscape-in-starry-night-style.webp", alt: "A still life photo of a bowl of fruit", prompt: "A bowl of fruit" }],
                        outputImages: [
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/pop-art.webp", alt: "Fruit bowl in a Picasso cubist style by FLUX.1 Kontext", prompt: "In the style of Picasso." },
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/picasso-style-fruit-bowl-in-a-picasso-cubist-style.png", alt: "Fruit bowl in a pop art style by FLUX.1 Kontext", prompt: "In the style of pop art." }
                        ],
                    },
                    {
                        id: "scenario-fun",
                        shortTitle: "Just Have Fun!",
                        originalTitle: "Turn Your World Upside Down with Bizarre Styles",
                        tagline: "What if everything was... different?",
                        description: "Sometimes the goal is just to have fun. What would your boss look like in the Jojo style? What if your car was made of Clay? Can you turn a serious news photo into a Rick and Morty scene? The only limit is your imagination (and your sense of humor).",
                        category: "Fun & Experimentation",
                        inputImage: [{ imageUrl: "https://cdn.kontextflux.io/ai-style/rick-and-morty-style-run.png", alt: "A photo of a cat looking grumpy", prompt: "A grumpy cat" }],
                        outputImages: [
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/jojo-style.png", alt: "Grumpy cat in the dramatic Jojo style by FLUX.1 Kontext", prompt: "In the dramatic style of Jojo's Bizarre Adventure." },
                            { imageUrl: "https://cdn.kontextflux.io/ai-style/clay-toy-style.webp", alt: "Grumpy cat as a claymation character by FLUX.1 Kontext", prompt: "In the style of claymation." }
                        ],
                    },
                ]
            },
            gallerySection: {
                title: "Explore a Universe of Artistic Transformations",
                description:
                    "See how **FLUX.1 Kontext** reimagines your images with our diverse library of 30+ artistic styles, from classic paintings to modern digital art and everything in between.",

                images: [
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/ghibli-style-girl.webp"
                        ],
                        alts: [
                            "Ghibli style girl"
                        ],
                        prompt: "A charming boy character drawn in the enchanting Ghibli animation style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/anime-style-2-a-girl-with-silver-hair-standing-in-a-futuristic-c.png"
                        ],
                        alts: [
                            "Anime girl in futuristic city 2"
                        ],
                        prompt: "A girl with flowing silver hair, standing confidently in a bustling futuristic city, in anime style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/anime-style-a-girl-with-silver-hair-standing-in-a-futuristic-c.png"
                        ],
                        alts: [
                            "Anime girl in futuristic city"
                        ],
                        prompt: "A girl with silver hair standing in a futuristic cityscape, rendered in anime style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/low-poly-cat.jpeg"
                        ],
                        alts: [
                            "Low poly cat"
                        ],
                        prompt: "A charming cat depicted with a modern low-polygon artistic style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/low-poly-dog.jpeg"
                        ],
                        alts: [
                            "Low poly dog"
                        ],
                        prompt: "A stylized dog created with a distinct low-polygon artistic approach."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/low-poly-panda.jpeg"
                        ],
                        alts: [
                            "Low poly panda"
                        ],
                        prompt: "An adorable panda bear rendered in a minimalist low-polygon style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/lego-style-a-futuristic-robot-made-of-classic-lego-technic-pi.png"
                        ],
                        alts: [
                            "LEGO style futuristic robot"
                        ],
                        prompt: "A futuristic robot constructed entirely from classic LEGO Technic pieces."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/lego-style.jpeg"
                        ],
                        alts: [
                            "LEGO style"
                        ],
                        prompt: "An image showcasing a scene or object built in the classic LEGO brick style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/3d-chibi-a-set-of-chibi-style-animal-friends-.png"
                        ],
                        alts: [
                            "3D chibi animal friends"
                        ],
                        prompt: "A delightful set of animal friends rendered in charming 3D chibi style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/3d-chibi-food-items-rendered-in-3d-chibi-style--like-a-plum.png"
                        ],
                        alts: [
                            "3D chibi food items"
                        ],
                        prompt: "Various food items, like a plum, rendered in a cute 3D chibi style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/3d-chibi-style.webp"
                        ],
                        alts: [
                            "3D chibi style"
                        ],
                        prompt: "A vibrant image showcasing the distinct 3D chibi art style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/action-figureastronaut.jpeg"
                        ],
                        alts: [
                            "Action figure astronaut"
                        ],
                        prompt: "An action figure dressed as an astronaut, ready for space exploration."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/action-figure.jpeg"
                        ],
                        alts: [
                            "Action figure"
                        ],
                        prompt: "A detailed action figure in a dynamic pose."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/action-figure-simple.jpeg"
                        ],
                        alts: [
                            "Simple action figure"
                        ],
                        prompt: "A minimalist action figure design, highlighting its core features."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/american-cartoon-style.webp"
                        ],
                        alts: [
                            "American cartoon style"
                        ],
                        prompt: "An illustration in the classic, vibrant American cartoon style."
                    },

                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/cartoon-style.jpeg"
                        ],
                        alts: [
                            "Cartoon style"
                        ],
                        prompt: "An image rendered in a lively and expressive cartoon style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/chinese-ink-style.jpeg"
                        ],
                        alts: [
                            "Chinese ink style"
                        ],
                        prompt: "A serene landscape depicted with the delicate strokes of Chinese ink painting."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/chinese-ink-style.webp"
                        ],
                        alts: [
                            "Chinese ink style webp"
                        ],
                        prompt: "An elegant illustration in the traditional Chinese ink wash style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/fabric-style-lion.jpg"
                        ],
                        alts: [
                            "Fabric style lion"
                        ],
                        prompt: "A majestic lion depicted in a unique fabric art style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/fabric-style-lion-raw.png"
                        ],
                        alts: [
                            "Fabric style lion raw"
                        ],
                        prompt: "A lion image in raw fabric art style, showing texture and detail."
                    },

                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/hello-kitty-astronaut.jpeg"
                        ],
                        alts: [
                            "Hello Kitty astronaut"
                        ],
                        prompt: "Hello Kitty dressed as an adorable astronaut floating in space."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/hello-kitty-puppy.jpeg"
                        ],
                        alts: [
                            "Hello Kitty puppy"
                        ],
                        prompt: "A cute puppy rendered in the iconic Hello Kitty style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/irasutoya-style-everyday-objects.jpeg"
                        ],
                        alts: [
                            "Irasutoya style everyday objects"
                        ],
                        prompt: "Common everyday objects illustrated in the distinct Irasutoya art style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/line-art-style.webp"
                        ],
                        alts: [
                            "Line art style"
                        ],
                        prompt: "A clean and detailed illustration rendered purely in line art style."
                    },

                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/origami-style-a-dragon-made-from-folded-red-paper-2.png"
                        ],
                        alts: [
                            "Origami dragon 2"
                        ],
                        prompt: "A magnificent dragon intricately folded from red paper, in origami style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/origami-style-a-dragon-made-from-folded-red-paper.png"
                        ],
                        alts: [
                            "Origami dragon"
                        ],
                        prompt: "A striking dragon created through the art of origami from folded red paper."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/paper-cut-style-a-forest-scene-made-of-layered-paper-cutouts---as-.png"
                        ],
                        alts: [
                            "Paper cut forest scene as"
                        ],
                        prompt: "A layered forest scene crafted from intricate paper cutouts."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/paper-cut-style-a-forest-scene-made-of-layered-paper-cutouts.png"
                        ],
                        alts: [
                            "Paper cut forest scene"
                        ],
                        prompt: "A beautiful forest scene composed of layered paper cutouts, creating depth."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/pencil-sketch-2-a-worn-out-pair-of-sneakers-on-a-wooden-floor--pay.png"
                        ],
                        alts: [
                            "Pencil sketch worn sneakers 2"
                        ],
                        prompt: "A detailed pencil sketch of a worn-out pair of sneakers resting on a wooden floor."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/picasso-style-fruit-bowl.png"
                        ],
                        alts: [
                            "Picasso style fruit bowl"
                        ],
                        prompt: "A still life of a fruit bowl, reinterpreted in the fragmented Picasso cubist style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/picasso-style.png"
                        ],
                        alts: [
                            "Picasso style"
                        ],
                        prompt: "An abstract composition inspired by the cubist elements of Picasso's art."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/pixel-art-astronaut-2.jpg"
                        ],
                        alts: [
                            "Pixel art astronaut 2"
                        ],
                        prompt: "A retro-inspired pixel art rendition of an astronaut."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/pixel-art-astronaut-3.jpeg"
                        ],
                        alts: [
                            "Pixel art astronaut 3"
                        ],
                        prompt: "An astronaut depicted in a vibrant and classic pixel art style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/pixel-art-astronaut.jpeg"
                        ],
                        alts: [
                            "Pixel art astronaut"
                        ],
                        prompt: "A courageous astronaut portrayed in the distinct pixel art aesthetic."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/rick-and-morty-style.png"
                        ],
                        alts: [
                            "Rick and Morty style"
                        ],
                        prompt: "A humorous illustration in the recognizable art style of Rick and Morty."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/snoopy-style.jpeg"
                        ],
                        alts: [
                            "Snoopy style"
                        ],
                        prompt: "A character or scene drawn in the classic and endearing Snoopy style."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/watercolor-style-2-a-loose--expressive-portrait-of-a-dancer-in-motion.png"
                        ],
                        alts: [
                            "Watercolor dancer portrait 2"
                        ],
                        prompt: "A loose and expressive watercolor portrait capturing a dancer in graceful motion."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/water-color-style-a-loose--expressive-portrait-of-a-dancer-in-motion.png"
                        ],
                        alts: [
                            "Watercolor dancer portrait"
                        ],
                        prompt: "A fluid and expressive watercolor painting depicting a dancer in mid-motion."
                    },
                    {
                        srcs: [
                            "https://cdn.kontextflux.io/ai-style/watercolor-style.webp"
                        ],
                        alts: [
                            "Watercolor style"
                        ],
                        prompt: "A beautiful illustration rendered in a soft and flowing watercolor style."
                    }
                ]
            },
            featuresSection: {
                title: "Why Use Our AI Style Generator with FLUX.1 Kontext?",
                description:
                    "Experience the pinnacle of creative AI technology, offering unmatched speed, quality, and a vast universe of artistic possibilities.",
                items: [
                    { icon: "🎨", title: "30+ Distinct Art Styles", description: "Master a massive library of styles, from Anime and LEGO to Oil Painting and Vector art. Your creative options are virtually limitless." },
                    { icon: "🖼️", title: "Unmatched Detail & Coherence", description: "**FLUX.1 Kontext** intelligently understands your photo's content, applying styles with incredible detail and preserving the subject's essence." },
                    { icon: "⏱️", title: "Real-Time Creative Flow", description: "Transform your photos in seconds, not minutes. Experiment with dozens of styles rapidly and find the perfect look without breaking your creative stride." },
                    { icon: "✍️", title: "Precision Prompting Control", description: "Go beyond presets. Guide the AI with text to fine-tune the style, combine aesthetics, and achieve a truly unique result that matches your vision." },
                    { icon: "✨", title: "Intelligent Style Adaptation", description: "Our AI doesn't just apply a filter. It re-renders your image based on the principles of each art style, ensuring an authentic and high-quality transformation every time." },
                    { icon: "🚀", title: "Simple Yet Powerful Interface", description: "Whether you're a professional artist or just having fun, our platform is intuitive and easy to use. Upload a photo, choose a style or write a prompt, and let the magic happen." },
                ],
            },
            faqSection: {
                title: "AI Style Generator: Your Questions Answered",
                items: [
                    { question: "What is an AI Style Generator?", answer: "An AI Style Generator uses advanced deep learning models, like **FLUX.1 Kontext**, to analyze the content of your photo and the characteristics of a specific art style. It then redraws your photo in that style, effectively creating a new piece of art." },
                    { question: "How is this different from a basic photo filter?", answer: "A filter simply lays an effect over your image (like changing colors). Our AI rebuilds your image from the ground up. If you choose 'LEGO style', it builds your subject out of digital bricks. If you choose 'Oil Painting', it uses digital brushstrokes. It's a much more profound transformation." },
                    { question: "What's the difference between this page and a specific style page (e.g., 'Anime Style')?", answer: "This is our general-purpose style tool, perfect for exploration and trying many different styles quickly. The specific style pages (like our 'Anime Style' tool) are fine-tuned with prompts and examples that are optimized for achieving the best possible result in that one particular style." },
                    { question: "Can I combine styles?", answer: "Yes, and that's where the real fun begins! You can use the text prompt to combine aesthetics. For example, try prompting 'A portrait in the style of Pop Art, but with the brushstrokes of Van Gogh' to see what unique creation **FLUX.1 Kontext** can produce." },
                    { question: "How do I get the best results?", answer: "Start with a clear, well-lit photo with a distinct subject. Then, experiment! Try different styles to see what works. For more control, use a descriptive text prompt to guide the AI, e.g., 'A cat in the Ghibli style, sitting in a field of tall grass'." },
                    { question: "What kind of photos work best?", answer: "Portraits, pets, landscapes, and still life photos of single objects all work wonderfully. The simpler the background, the more the AI can focus on transforming the main subject into your chosen style." },
                    { question: "Is the output image high resolution?", answer: "Yes, our tool, powered by **FLUX.1 Kontext**, is designed to provide high-resolution outputs. The generated images are suitable for digital sharing, printing for posters, or even creating canvas art." },
                    { question: "Can I use the generated images commercially?", answer: "Please refer to our platform's terms of service for specific details on commercial usage rights. Generally, the generated artwork can be used for a wide range of personal and sometimes commercial projects, but it's always best to check the latest policy." }
                ],
            },
        },

        // --- Specific Style Tools ---



        // 2. Van Gogh Style
        {
            id: "van-gogh-style",
            slug: "van-gogh-style", // As requested
            name: "Van Gogh Style",
            icon: "https://cdn.kontextflux.io/model-gallery/cityscape-in-starry-night-style.webp",
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this scene into a Van Gogh-inspired style with swirling brushstrokes.",
                    promptPrefix: "",
                    promptSuffix: ", in Van Gogh 'Starry Night' style painting.",
                    placeholder: "Transform this scene into a Van Gogh-inspired style with swirling brushstrokes.",
                    promptExamples: ["Make this landscape look like 'Starry Night'.", "Render this portrait with Van Gogh's expressive technique."],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: `https://cdn.kontextflux.io/model-gallery/cityscape-in-starry-night-style.webp`,
                },
            },
            seo: {
                title: "Van Gogh Style AI Generator | kontextflux.io",
                description: "Create art with the expressive brushstrokes and vibrant colors of Vincent Van Gogh using kontextflux.io's AI, powered by FLUX.1 Kontext.",
                keywords: ["van gogh style photo", "ai art filter", "photo to painting", "flux.1 kontext"],
                ogImage: "https://cdn.kontextflux.io/model-gallery/cityscape-in-starry-night-style.webp",
            },
            pageHeader: { pageTitle: "Van Gogh Style AI Generator", pageTagline: "Immerse your photos in the expressive world of Vincent Van Gogh with our FLUX.1 Kontext AI." },
            gallerySection: {
                title: "Photos Reimagined by Van Gogh's AI Spirit",
                description: "See ordinary photos transformed into post-impressionist art, capturing Van Gogh's essence.",
                images: [
                    { srcs: ["/gallery/vangogh/before-1.webp", "/gallery/vangogh/after-1.webp"], alts: ["Original landscape", "Landscape in Van Gogh style by FLUX.1 Kontext"], prompt: "Landscape in Van Gogh style." },
                    { srcs: ["/gallery/vangogh/before-2.webp", "/gallery/vangogh/after-2.webp"], alts: ["Original portrait", "Portrait in Van Gogh style by FLUX.1 Kontext"], prompt: "Portrait with Van Gogh's brushwork." },
                ],
            },
            featuresSection: {
                title: "Van Gogh Style Editor Features",
                description: "Experience Van Gogh's distinct artistic flair on your images.",
                items: [
                    { icon: "🖌️", title: "Signature Brushstrokes", description: "AI emulates Van Gogh's iconic, dynamic brushwork using FLUX.1 Kontext." },
                    { icon: "🎨", title: "Vivid Color Transformation", description: "Applies the bold, emotional color palettes characteristic of his masterpieces." },
                    { icon: "🌟", title: "Impasto Texture Effect", description: "Simulates the thick application of paint for a truly textural feel with FLUX.1 Kontext." },
                    { icon: "🌀", title: "Swirling Elements", description: "Recreate the famous swirling patterns found in works like 'Starry Night'." },
                    { icon: "💡", title: "Artistic Interpretation", description: "FLUX.1 Kontext intelligently adapts the style to suit your photo's content." },
                    { icon: "🖼️", title: "Instant Digital Masterpiece", description: "Transform photos into shareable art in seconds." },
                ],
            },
            faqSection: {
                title: "Van Gogh Style Editor: FAQs",
                items: [
                    { question: "How does FLUX.1 Kontext apply Van Gogh's style?", answer: "FLUX.1 Kontext analyzes your photo and prompt, then re-renders it by applying stylistic elements like Van Gogh's brush techniques and color usage." },
                    { question: "Will it look exactly like a real Van Gogh painting?", answer: "It's an AI artistic interpretation inspired by Van Gogh. FLUX.1 Kontext aims for high fidelity in style." },
                    { question: "Can I control the style's intensity?", answer: "Your text prompt can influence intensity, e.g., 'subtle Van Gogh influence' vs 'strong Van Gogh impasto'." },
                    { question: "What photos work best?", answer: "Landscapes, cityscapes, portraits, and still lifes transform beautifully. Clear subjects yield great results." },
                    { question: "Is the original photo altered?", answer: "No, our editor works on a copy. Your original is untouched." },
                    { question: "How fast is the transformation with FLUX.1 Kontext?", answer: "Transformations are typically completed within seconds to a minute, thanks to FLUX.1 Kontext's efficiency." },
                    { question: "Does the AI understand different periods of Van Gogh's work?", answer: "You can try prompting for specific periods (e.g., 'Arles period style'), and FLUX.1 Kontext will attempt to interpret these nuanced requests based on its training." },
                    { question: "Can it apply the style to just a part of the image?", answer: "Yes, with a descriptive prompt like 'apply Van Gogh style only to the sky', FLUX.1 Kontext's local editing capabilities can target specific regions." }
                ],
            },
        },

        // 3. Cyberpunk Neon
        {
            id: "cyberpunk-neon-tool",
            slug: "cyberpunk-neon", // As requested
            name: "Cyberpunk Neon",
            icon: "https://cdn.kontextflux.io/img-editor/generation-woman-with-dog-neon.png",
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Apply a cyberpunk neon aesthetic to this image.",
                    promptPrefix: "",
                    promptSuffix: " in cyberpunk neon effect, Ensure vibrant glows and futuristic elements.",
                    placeholder: "Apply a cyberpunk neon aesthetic to this image.",
                    promptExamples: ["Make this city look like a Blade Runner scene.", "Add neon tattoos to the subject."],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: `https://cdn.kontextflux.io/img-editor/generation-woman-with-dog-neon.png`,
                },
            },
            seo: {
                title: "Cyberpunk Neon AI Generator | kontextflux.io",
                description: "Give your photos a futuristic cyberpunk neon glow with kontextflux.io's AI editor using FLUX.1 Kontext.",
                keywords: ["cyberpunk filter", "neon photo effect", "ai photo filter", "flux.1 kontext"],
                ogImage: "https://cdn.kontextflux.io/img-editor/generation-woman-with-dog-neon.png",
            },
            pageHeader: { pageTitle: "Cyberpunk Neon AI Generator", pageTagline: "Inject your photos with electric cyberpunk energy using our FLUX.1 Kontext AI." },
            gallerySection: {
                title: "Enter the Neon-Soaked Future",
                description: "Explore photos with a cyberpunk makeover, showcasing glowing lights and dystopian cool.",
                images: [
                    { srcs: ["/gallery/cyberpunk/before-1.webp", "/gallery/cyberpunk/after-1.webp"], alts: ["Original city photo", "City with cyberpunk filter by FLUX.1 Kontext"], prompt: "Cityscape to cyberpunk neon." },
                    { srcs: ["/gallery/cyberpunk/before-2.webp", "/gallery/cyberpunk/after-2.webp"], alts: ["Original portrait", "Portrait with cyberpunk enhancements by FLUX.1 Kontext"], prompt: "Cyberpunk neon makeup." },
                ],
            },
            featuresSection: {
                title: "Cyberpunk Neon Filter Features",
                description: "Transform images with the distinct look of cyberpunk using FLUX.1 Kontext.",
                items: [
                    { icon: "💡", title: "Vibrant Neon Glows", description: "AI adds realistic neon light effects to signs and highlights with FLUX.1 Kontext." },
                    { icon: "🏙️", title: "Futuristic Aesthetics", description: "Infuses images with a high-tech, urban feel." },
                    { icon: "💜", title: "Signature Color Palette", description: "Emphasizes blues, purples, pinks, creating the iconic cyberpunk mood." },
                    { icon: "💧", title: "Atmospheric Effects", description: "FLUX.1 Kontext can add rain or fog when prompted to enhance the vibe." },
                    { icon: "🤖", title: "Digital & Sci-Fi Elements", description: "Subtly incorporate futuristic UI overlays or digital artifacts via prompts." },
                    { icon: "✨", title: "Instant Transformation", description: "Quickly give any photo a dramatic cyberpunk makeover." },
                ],
            },
            faqSection: {
                title: "Cyberpunk Neon Filter: FAQs",
                items: [
                    { question: "How does FLUX.1 Kontext create the cyberpunk look?", answer: "FLUX.1 Kontext applies color transformations, lighting effects (neon glows), and textural changes to emulate the cyberpunk aesthetic based on your prompt." },
                    { question: "Can I specify neon colors?", answer: "Yes! Your prompt is key. Ask for 'blue and pink neon' or 'green data streams' to guide FLUX.1 Kontext." },
                    { question: "Will it work on any photo?", answer: "Urban scenes, portraits, and night shots work best, but experiment! The AI will creatively adapt." },
                    { question: "Can it add cyberpunk clothing?", answer: "Yes, with a descriptive prompt, FLUX.1 Kontext can attempt to modify clothing or add cybernetic elements." },
                    { question: "How detailed are the neon effects from FLUX.1 Kontext?", answer: "FLUX.1 Kontext can produce detailed, realistic glowing effects, mimicking real neon lights." },
                    { question: "Is this filter inspired by specific media?", answer: "It draws from the broad cyberpunk genre (Blade Runner, Cyberpunk 2077) but lets you create unique interpretations." },
                    { question: "Can FLUX.1 Kontext add specific cyberpunk elements like holographic ads?", answer: "Yes, if you prompt for 'holographic advertisements in the background' or 'flying vehicles', FLUX.1 Kontext will attempt to generate these elements within the style." },
                    { question: "How does the AI handle reflections with neon lights?", answer: "FLUX.1 Kontext's contextual understanding allows it to generate plausible reflections on wet surfaces or metallic objects if prompted for such an environment." }
                ],
            },
        },

        // 4. Pencil Sketch
        {
            id: "pencil-sketch-tool",
            slug: "pencil-sketch", // As requested
            name: "Pencil Sketch",
            icon: `https://cdn.kontextflux.io/ai-style/pencil-sketch-style-a-worn-out-pair-of-sneakers-on-a-wooden-floor.png`,
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this image into a detailed black-and-white pencil sketch, focusing on clean lines, shading, and a hand-drawn artistic quality.",
                    promptPrefix: "",
                    promptSuffix: " in a pencil sketch, Emphasize realistic textures and contrast.",
                    placeholder: "An empty street.",
                    promptExamples: ["A worn-out pair of sneakers on a wooden floor, paying close attention to the fabric texture, laces, and the subtle shadows they cast ", "Expressive charcoal-style sketch."],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: `https://cdn.kontextflux.io/ai-style/pencil-sketch-style-a-worn-out-pair-of-sneakers-on-a-wooden-floor.png`,
                },
            },
            seo: {
                title: "AI image to sketch converter | kontextflux.io",
                description: "Turn photos into beautiful pencil sketches with kontextflux.io's AI converter using FLUX.1 Kontext.",
                keywords: ["pencil sketch converter", "image to sketch", "ai sketch effect"],
                ogImage: `https://cdn.kontextflux.io/ai-style/pencil-sketch-style-a-worn-out-pair-of-sneakers-on-a-wooden-floor.png`,
            },
            pageHeader: { pageTitle: "AI Image to Sketch Converter", pageTagline: "Transform photos into timeless pencil sketches with our FLUX.1 Kontext AI." },
            gallerySection: {
                title: "Photographs Reborn as Pencil Art",
                description: "Explore images masterfully converted into detailed pencil sketches by FLUX.1 Kontext.",
                images: [
                    { srcs: ["/gallery/sketch/before-1.webp", "/gallery/sketch/after-1.webp"], alts: ["Original portrait", "Portrait as pencil sketch by FLUX.1 Kontext"], prompt: "Portrait to detailed pencil sketch." },
                    { srcs: ["/gallery/sketch/before-2.webp", "/gallery/sketch/after-2.webp"], alts: ["Original landscape", "Landscape as pencil sketch by FLUX.1 Kontext"], prompt: "Landscape to B&W pencil drawing." },
                ],
            },
            featuresSection: {
                title: "Pencil Sketch Converter Features",
                description: "Achieve authentic sketch effects with FLUX.1 Kontext AI precision.",
                items: [
                    { icon: "✍️", title: "Realistic Shading", description: "FLUX.1 Kontext emulates pencil shading techniques like cross-hatching." },
                    { icon: "✒️", title: "Expressive Outlines", description: "Creates clear, artistic outlines defining the subject, mimicking a skilled hand." },
                    { icon: "🎨", title: "Monochrome Mastery", description: "Beautifully converts color photos into classic black-and-white sketches." },
                    { icon: "🖼️", title: "Artistic Transformation", description: "Provides a genuinely artistic transformation, not just a simple filter, with FLUX.1 Kontext." },
                    { icon: "💡", title: "Variable Sketch Styles", description: "Prompt for 'soft graphite' or 'sharp HB lines' for varied effects via FLUX.1 Kontext." },
                    { icon: "⏱️", title: "Instant Artist Effect", description: "Get a hand-drawn look in seconds." },
                ],
            },
            faqSection: {
                title: "Pencil Sketch Converter: FAQs",
                items: [
                    { question: "How does FLUX.1 Kontext convert photo to sketch?", answer: "FLUX.1 Kontext analyzes forms, lighting, and details, then re-renders using lines, shading, and textures characteristic of pencil drawings based on your prompt." },
                    { question: "Can I choose sketch type (charcoal, graphite)?", answer: "Yes, specify in your prompt! E.g., 'Convert to soft charcoal sketch'. FLUX.1 Kontext interprets these." },
                    { question: "Color or black and white sketch?", answer: "Typically monochrome. Specify 'black and white pencil sketch'. For colored pencil, use a different, specific prompt." },
                    { question: "How detailed can sketches be with FLUX.1 Kontext?", answer: "FLUX.1 Kontext can produce highly detailed sketches. Prompt for 'highly detailed sketch' or 'minimalist line sketch'." },
                    { question: "Works for portraits and landscapes?", answer: "Yes, excellent for both! Portraits gain expression, landscapes become hand-drawn scenes." },
                    { question: "Different from basic photo filter?", answer: "Absolutely. FLUX.1 Kontext reinterprets the image as a drawing, considering form, light, and artistic technique for authentic results." },
                    { question: "Can FLUX.1 Kontext mimic specific hatching styles?", answer: "Yes, if you prompt for 'cross-hatching for shadows' or 'stippling effect', FLUX.1 Kontext will attempt to incorporate these specific pencil techniques." },
                    { question: "Does it handle reflections or metallic surfaces well in sketch mode?", answer: "It will interpret reflective surfaces by using techniques like highlights and varied line weights to suggest shininess, as a human artist would in a pencil sketch." }
                ],
            },
        },

        // 5. Watercolor Painting
        {
            id: "watercolor-painting-tool",
            slug: "watercolor-painting", // As requested
            name: "Watercolor Painting",
            category: ToolCategory.ImageStyle,
            icon: `https://cdn.kontextflux.io/ai-style/water-color-style-a-loose--expressive-portrait-of-a-dancer-in-motion.png`,
            editorConfig: {
                modelTypes: isDev() ? [ModelType.TIToImage, ModelType.TextToImage] : [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Turn this image into a watercolor painting with soft, translucent colors.",
                    promptPrefix: "",
                    promptSuffix: "in a watercolor painting, Emphasize delicate blending and paper texture.",
                    placeholder: "A loose, expressive portrait of a dancer in motion, capturing the fluidity of their movement with dynamic, bleeding washes of color rather than sharp outlines",
                    promptExamples: ["Render this floral image as a vibrant watercolor.", "Create a loose, expressive watercolor."],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: `https://cdn.kontextflux.io/ai-style/water-color-style-a-loose--expressive-portrait-of-a-dancer-in-motion.png`,
                },
            },
            seo: {
                title: "Watercolor Painting AI Generator | kontextflux.io",
                description: "Turn photos into delicate watercolor paintings with kontextflux.io's AI editor using FLUX.1 Kontext.",
                keywords: ["watercolor photo effect", "photo to watercolor", "ai painting filter", "flux.1 kontext"],
                ogImage: `https://cdn.kontextflux.io/ai-style/water-color-style-a-loose--expressive-portrait-of-a-dancer-in-motion.png`,
            },
            pageHeader: { pageTitle: "AI Watercolor Painting Effect", pageTagline: "Give photos the soft, flowing beauty of watercolor with our FLUX.1 Kontext AI." },
            gallerySection: {
                title: "Photos Transformed into Watercolor Art",
                description: "Discover images imbued with the unique charm of watercolor paintings by FLUX.1 Kontext.",
                images: [
                    { srcs: ["/gallery/watercolor/before-1.webp", "/gallery/watercolor/after-1.webp"], alts: ["Original flower photo", "Flower photo as watercolor by FLUX.1 Kontext"], prompt: "Flowers to watercolor." },
                    { srcs: ["/gallery/watercolor/before-2.webp", "/gallery/watercolor/after-2.webp"], alts: ["Original landscape", "Landscape as watercolor by FLUX.1 Kontext"], prompt: "Scenic view to soft watercolor." },
                ],
            },
            featuresSection: {
                title: "Watercolor Painting Effect Features",
                description: "Achieve the distinct, delicate look of watercolor art with FLUX.1 Kontext.",
                items: [
                    { icon: "💧", title: "Translucent Color Washes", description: "FLUX.1 Kontext emulates the transparency and layering of watercolor paints." },
                    { icon: "🎨", title: "Soft Blending & Edges", description: "Creates the soft, often unpredictable, blending of colors in watercolor techniques." },
                    { icon: "📜", title: "Simulated Paper Texture", description: "Can subtly incorporate watercolor paper look to enhance authenticity when prompted to FLUX.1 Kontext." },
                    { icon: "🌸", title: "Delicate & Artistic Feel", description: "Transforms photos with a light, airy, and often impressionistic quality." },
                    { icon: "✨", title: "Characteristic Blooms", description: "When prompted, FLUX.1 Kontext can mimic watercolor blooms and subtle paint run effects." },
                    { icon: "🖼️", title: "Instant Artwork", description: "Quickly turn any photo into a piece that looks hand-painted." },
                ],
            },
            faqSection: {
                title: "Watercolor Effect: FAQs",
                items: [
                    { question: "How does FLUX.1 Kontext make my photo look like watercolor?", answer: "FLUX.1 Kontext processes your image and prompt, then applies algorithms simulating watercolor techniques like transparency, blending, and textures." },
                    { question: "Can I control the 'wetness' or style?", answer: "Yes, via prompt. Ask for 'dry brush watercolor' or 'wet, loose watercolor'. FLUX.1 Kontext adapts." },
                    { question: "What photos are best for this effect?", answer: "Florals, landscapes, portraits, and still lifes translate beautifully. Good lighting and color variation yield striking results." },
                    { question: "Real painting or digital filter look?", answer: "FLUX.1 Kontext aims for authentic artistic representation, mimicking qualities of physical watercolor." },
                    { question: "Can I specify the color palette?", answer: "While AI derives colors from photo, you can influence via prompt, e.g., 'watercolor with muted earthy tones'." },
                    { question: "Does FLUX.1 Kontext add paper texture?", answer: "Yes, if 'with visible paper texture' is in prompt, FLUX.1 Kontext can simulate it." },
                    { question: "Can it replicate 'wet-on-wet' watercolor effects?", answer: "Yes, by prompting for 'soft wet-on-wet blending' or 'colors bleeding into each other', FLUX.1 Kontext can simulate these characteristic watercolor effects." },
                    { question: "How does it handle fine details in watercolor style?", answer: "Watercolor style often softens fine details. FLUX.1 Kontext will interpret this by rendering details with softer edges and blended colors, typical of the medium." }
                ],
            },
        },

        // 6. Ghibli Style
        {
            id: "ghibli-style-tool",
            slug: "ghibli-style", // As requested
            name: "Ghibli Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/tool-config/robot-ghibli.png",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this photo into a Studio Ghibli-style illustration",
                    promptPrefix: "",
                    promptSuffix: " in Studio Ghibli-style illustration",
                    placeholder: "a tall robot with wood body, hands made of tree leaves, sad eyes(Or,Convert this photo into a Studio Ghibli-style illustration)",
                    promptExamples: ["Make this outdoor scene look like a Ghibli background.", "Render people with Ghibli-esque character designs."],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: `https://cdn.kontextflux.io/ghibli/a-tall-robot-with-wood-body.png`,
                },
            },
            seo: {
                title: "Ghibli Style AI Generator | kontextflux.io",
                description: "Generate enchanting images in the iconic Studio Ghibli art style using kontextflux.io's AI, powered by FLUX.1 Kontext. Perfect for fans and artists!",
                keywords: ["ghibli style photo", "ghibli ai generator",
                    "studio ghibli style", "photo to ghibli", "ai anime filter", "flux.1 kontext"],
                ogImage: "https://cdn.kontextflux.io/tool-config/robot-ghibli.png",
            },
            pageHeader: { pageTitle: "AI Ghibli Style Generator", pageTagline: "Step into a world of wonder. Create breathtaking, whimsical art inspired by Studio Ghibli with our FLUX.1 Kontext powered AI." },
            gallerySection: {
                title: "Your World Through Ghibli-Tinted Glasses",
                description: "Explore photos transformed into the whimsical art style of Studio Ghibli by FLUX.1 Kontext.",
                images: [
                    { srcs: ["/gallery/ghibli/before-1.webp", "/gallery/ghibli/after-1.webp"], alts: ["Original nature photo", "Nature photo in Ghibli style by FLUX.1 Kontext"], prompt: "Nature scene to Ghibli style." },
                    { srcs: ["/gallery/ghibli/before-2.webp", "/gallery/ghibli/after-2.webp"], alts: ["Original person photo", "Person in Ghibli style by FLUX.1 Kontext"], prompt: "Person to Ghibli character style." },
                ],
            },
            featuresSection: {
                title: "Ghibli Style Photo Filter Features",
                description: "Capture Ghibli's enchanting essence in your photos with FLUX.1 Kontext.",
                items: [
                    { icon: "🎨", title: "Signature Ghibli Aesthetic", description: "FLUX.1 Kontext applies the soft, hand-painted look, rich colors, and charming character styles." },
                    { icon: "🌳", title: "Lush & Whimsical Environments", description: "Transforms backgrounds into beautiful, nature-filled settings typical of Ghibli films." },
                    { icon: "😊", title: "Charming Character Rendition", description: "If people are present, FLUX.1 Kontext renders them with Ghibli expressiveness." },
                    { icon: "✨", title: "Soft Lighting & Atmosphere", description: "Creates a warm, inviting, and often magical atmosphere." },
                    { icon: "🖼️", title: "Hand-Painted Effect", description: "Gives images a beautiful illustrative quality, moving from photorealism." },
                    { icon: "💖", title: "Nostalgic & Heartwarming", description: "Evokes the wonder and nostalgia of Studio Ghibli's films." },
                ],
            },
            faqSection: {
                title: "Ghibli Style Filter: FAQs",
                items: [
                    { question: "How does FLUX.1 Kontext turn my photo into Ghibli style?", answer: "FLUX.1 Kontext analyzes your photo and prompt, then re-renders it using Ghibli's stylistic conventions (color, lighting, illustration techniques)." },
                    { question: "Will people look like Ghibli characters?", answer: "Yes, FLUX.1 Kontext attempts to render human subjects in a style reminiscent of Ghibli characters." },
                    { question: "Can I specify certain Ghibli movie aesthetics?", answer: "Try! 'Style of My Neighbor Totoro' or 'Spirited Away feel'. FLUX.1 Kontext will interpret." },
                    { question: "What photos work best?", answer: "Outdoor scenes, photos with people (kids especially), and images with whimsy or nature transform beautifully." },
                    { question: "Is this an official Ghibli filter?", answer: "No, it's an AI artistic interpretation inspired by Ghibli, using FLUX.1 Kontext. Not affiliated with Studio Ghibli." },
                    { question: "How detailed is the 'hand-painted' effect?", answer: "Matches Ghibli's illustrative quality (rich backgrounds, expressive characters) rather than photorealism." },
                    { question: "Can FLUX.1 Kontext add fantastical Ghibli creatures if prompted?", answer: "Yes, you can prompt for 'add a small Totoro-like spirit in the forest' and FLUX.1 Kontext will attempt to generate and integrate such elements in style." },
                    { question: "How does it handle modern objects (e.g., smartphones) in Ghibli style?", answer: "FLUX.1 Kontext will attempt to render them with the same illustrative, slightly softened Ghibli aesthetic, making them fit into the overall artistic style." }
                ],
            },
        },

        // 7. Pixar Style
        {
            id: "pixar-style-tool",
            slug: "pixar-style", // As requested
            name: "Pixar Style",
            icon: `https://cdn.kontextflux.io/ai-image/pixar-style/boy-robot.webp`,
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Render this image in the polished 3D animation style of Pixar, with expressive characters (if present), vibrant colors, smooth surfaces, and cinematic lighting.",
                    promptPrefix: " ",
                    promptSuffix: " 3d render, pixar style, disney style, cinematic, vibrant colors, expressive, studio quality, detailed textures",
                    placeholder: "Render this image in the polished 3D animation style of Pixar, with expressive characters (if present), vibrant colors, smooth surfaces, and cinematic lighting.",
                    promptExamples: ["Make subjects look like Pixar movie characters.", "Give scene Pixar's vibrant, clean look."],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: `https://cdn.kontextflux.io/ai-image/pixar-style/boy-robot.webp`,
                },
            },
            seo: {
                title: "Pixar Style AI Generator | Turn Photos into 3D Cartoons",
                description: "Instantly create stunning 3D characters and scenes in the iconic Pixar style with our AI generator. Turn your photos into charming cartoon avatars for free.",
                keywords: [
                    "pixar style generator",
                    "3d cartoon character generator",
                    "disney pixar ai generator",
                    "ai pixar poster",
                    "turn photo into pixar character",
                    "pixar style ai art",
                    "3d avatar creator",
                    "cartoonify my photo"
                ],
                ogImage: `https://cdn.kontextflux.io/ai-image/pixar-style/boy-robot.webp`,
            },
            pageHeader: {
                pageTitle: "Pixar Style AI Generator",
                pageTagline: "Bring your imagination to life in stunning 3D. Create characters, avatars, and posters in the beloved Pixar animation style.",
                heroImage: {
                    src: "https://cdn.kontextflux.io/ai-image/pixar-style/hero-banner.webp",
                    alt: "A vibrant collage of 3D characters in the Pixar style, including a brave astronaut and a quirky robot, generated by AI."
                },
                buttons: [{ label: "Get 20 free credits", link: "/login" }]
            },
            scenarioShowcase: {
                title: "Tell Your Story, Pixar Style",
                description: "From personalized portraits to character design, discover how our AI can render your ideas with the magic of 3D animation.",
                scenarios: [
                    {
                        id: "photo-to-avatar",
                        shortTitle: "3D Avatars",
                        originalTitle: "Transform Your Photo into a 3D Character",
                        tagline: "Become the star of your own animated movie.",
                        description: "Upload a selfie and watch as our AI reimagines you or your friends as a charming, expressive character straight out of a Pixar film. Perfect for social media profiles, gifts, or just for fun!",
                        category: "Personal Use",
                        inputImage: [

                        ],
                        outputImages: [
                            {
                                prompt: "A portrait of a smiling woman with glasses, turned into a 3D animated character",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/pixar-style/girl-with-cat-group.webp",
                                alt: "A photo of a woman transformed into a 3D Pixar-style character by AI."
                            }
                        ]
                    },
                    {
                        id: "character-design",
                        shortTitle: "Character Design",
                        originalTitle: "Create Unique Characters for Your Stories",
                        tagline: "Bring your heroes and villains to life.",
                        description: "Are you a writer, game developer, or storyteller? Instantly visualize your characters in stunning 3D. Describe their personality, appearance, and gear to generate high-quality concept art that captures their essence.",
                        category: "Creative",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "A brave and determined young female knight with shining silver armor and a glowing blue sword",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/pixar-style/knight-with-sword.webp",
                                alt: "An AI-generated 3D character of a young female knight in the style of Pixar."
                            }
                        ]
                    },
                    {
                        id: "pet-portraits",
                        shortTitle: "Pet Portraits",
                        originalTitle: "Create Adorable Pixar-Style Pet Portraits",
                        tagline: "See your furry friends in a whole new light.",
                        description: "Turn a photo of your beloved pet into a heartwarming 3D portrait. Capture their unique personality and create a timeless piece of art that looks like a still from their very own animated adventure.",
                        category: "Personal Use",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "A fluffy, mischievous orange cat with big green eyes, playfully peeking out from a cardboard box",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/pixar-style/cat-from-box.webp",
                                alt: "A cute orange cat rendered in the 3D animation style of Pixar."
                            }
                        ]
                    },
                    {
                        id: "brand-mascots",
                        shortTitle: "Brand Mascots",
                        originalTitle: "Engaging 3D Mascots for Your Brand",
                        tagline: "Create a friendly face for your business.",
                        description: "Develop a memorable and approachable brand mascot in the popular Pixar style. A friendly 3D character can make your marketing more engaging, relatable, and stand out from the competition.",
                        category: "Business",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "A friendly, helpful robot mascot wearing a t-shirt with a company logo, waving cheerfully.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/pixar-style/scenario-brand-mascot.webp",
                                alt: "A friendly robot brand mascot generated by AI in the Pixar style."
                            }
                        ]
                    }
                ]
            },
            gallerySection: {
                title: "The Gallery of Animated Dreams",
                description: "Explore a universe of characters and scenes, all brought to life by AI in the iconic 3D style.",
                images: [
                    //   {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/pixar-style-ai-generator/gallery-image-1.webp"],
                    //     alts: ["A Pixar-style image of a tiny, brave mouse wearing a cape."],
                    //     prompt: "A tiny, heroic mouse wearing a red cape, standing on a pile of books, pixar style, 3d render."
                    //   },
                    //   {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/pixar-style-ai-generator/gallery-image-2.webp"],
                    //     alts: ["A Pixar-style render of a beautiful enchanted forest."],
                    //     prompt: "An enchanted forest with glowing mushrooms and magical, ancient trees, 3d render, disney pixar style."
                    //   },
                    //   {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/pixar-style-ai-generator/gallery-image-3.webp"],
                    //     alts: ["A Pixar-style character of a grumpy garden gnome."],
                    //     prompt: "A grumpy but lovable old garden gnome with a long white beard, crossing his arms, pixar animation style."
                    //   },
                    //   {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/pixar-style-ai-generator/gallery-image-4.webp"],
                    //     alts: ["A Pixar-style image of a futuristic flying car."],
                    //     prompt: "A sleek, futuristic flying car with big, friendly headlights for eyes, soaring through a sky city, pixar style."
                    //   },
                    //   {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/pixar-style-ai-generator/gallery-image-5.webp"],
                    //     alts: ["A Pixar-style monster who looks friendly and fluffy."],
                    //     prompt: "A big, fluffy, gentle monster with three eyes, smiling and hugging a small child, 3d render, pixar style."
                    //   },
                    //   {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/pixar-style-ai-generator/gallery-image-6.webp"],
                    //     alts: ["A close-up shot of a delicious-looking animated cupcake."],
                    //     prompt: "A hyper-detailed close-up of a delicious-looking cupcake with a cherry on top, animated pixar style."
                    //   }
                ]
            },
            featuresSection: {
                title: "Why Use Our Pixar Style AI Generator?",
                description: "Our AI is fine-tuned to capture the heart and soul of modern 3D animation, giving you studio-quality results in seconds.",
                items: [
                    {
                        icon: "🎨",
                        title: "Iconic 3D Aesthetic",
                        description: "Our AI masterfully replicates the signature look of Pixar, focusing on expressive characters, rounded shapes, and vibrant colors."
                    },
                    {
                        icon: "✨",
                        title: "Photo-to-Pixar Transformation",
                        description: "Go beyond text prompts. Upload any photo to instantly transform people, pets, and places into charming 3D cartoon versions."
                    },
                    {
                        icon: "💡",
                        title: "Cinematic Lighting & Detail",
                        description: "Create images with professional-grade lighting, rich textures, and incredible detail that make your creations pop off the screen."
                    },
                    {
                        icon: "😊",
                        title: "Expressive Character Creation",
                        description: "The magic is in the emotion. Our generator excels at creating characters with wide, expressive eyes and dynamic poses that tell a story."
                    },
                    {
                        icon: "🎬",
                        title: "Story-Ready Scenes",
                        description: "Don't just create characters—build their worlds. Generate detailed backgrounds and environments to place your characters in."
                    },
                    {
                        icon: "🖼️",
                        title: "High-Resolution Output",
                        description: "Export your generations in high resolution, perfect for printing custom posters, creating professional marketing materials, or using in digital projects."
                    }
                ]
            },
            faqSection: {
                title: "Frequently Asked Questions",
                items: [
                    {
                        question: "What defines the 'Pixar Style'?",
                        answer: "The 'Pixar Style' is a type of 3D animation characterized by its lifelike textures, cinematic lighting, and characters with expressive, emotive features, particularly large eyes. It balances realism with stylized, often rounded, designs to create a warm and appealing look."
                    },
                    {
                        question: "Is this tool affiliated with Disney or Pixar Animation Studios?",
                        answer: "No, this tool is an independent project and is not affiliated with, endorsed by, or connected to Disney or Pixar. It is a generative AI model trained to create images in a similar artistic style."
                    },
                    {
                        question: "Can I really turn my photo into a 3D character?",
                        answer: "Yes! Simply upload a clear photo of yourself, a friend, or a pet, and our AI will use it as a reference to generate a brand new character in the 3D animation style."
                    },
                    {
                        question: "Is this free to use?",
                        answer: "Yes, you get 20 free credits upon signing up for KontextFlux.io. You can use them to start creating Pixar-style images right away. More credits are available for purchase."
                    },
                    {
                        question: "What are the best prompts for this generator?",
                        answer: "Great prompts are descriptive! Include the character's appearance, emotion, and action. Adding terms like 'cinematic lighting', 'detailed fur', '4k', and 'studio quality' can enhance your results."
                    },
                    {
                        question: "Can I use the images for commercial projects?",
                        answer: "Yes, the images you create can be used for both commercial and personal projects, in line with our terms of service. They are great for marketing, branding, and social media."
                    },
                    {
                        question: "How is this different from a simple 'cartoon filter'?",
                        answer: "Unlike a 2D filter, our AI generates a completely new, three-dimensional image. It understands depth, lighting, and texture to create a character that looks like it belongs in a real animated film."
                    },
                    {
                        question: "What file formats can I download?",
                        answer: "You can download your creations as high-quality `.webp` or `.png` files, suitable for both web and print applications."
                    }
                ]
            },
            cta: {
                title: "Ready to Create Your Own Animated Masterpiece?",
                description: "Sign up now, claim your 20 free credits, and start bringing your character ideas to life with the magic of Pixar-style AI generation.",
                button: {
                    text: "Start Generating for Free",
                    link: "/login"
                }
            },
            summaryMD: ""
        },

        // 8. Pixel Style
        {
            id: "pixel-style-tool",
            slug: "pixel-style", // As requested
            name: "Pixel Art",
            icon: `https://cdn.kontextflux.io/ai-style/pixel-art-astronaut-3.jpeg`,
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this image into 8-bit retro pixel art, with a limited color palette and blocky, pixelated details.",
                    promptPrefix: "",
                    promptSuffix: " in 8-bit retro pixel art, with a limited color palette and blocky, pixelated details",
                    placeholder: "A retro-futuristic astronaut exploring a vibrant, alien jungle",
                    promptExamples: ["Make this portrait a character sprite.", "Pixelate this landscape in retro game style."],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: `https://cdn.kontextflux.io/ai-style/pixel-art-astronaut-3.jpeg`,
                },
            },
            seo: {
                title: "Pixel Art AI Photo Converter | kontextflux.io",
                description: "Turn photos into retro pixel art with kontextflux.io's AI editor. Create 8-bit or 16-bit style images using FLUX.1 Kontext.",
                keywords: ["pixel art converter", "photo to pixel art", "ai pixelate filter", "flux.1 kontext"],
                ogImage: `https://cdn.kontextflux.io/ai-style/pixel-art-astronaut-3.jpeg`,
            },
            pageHeader: { pageTitle: "AI Pixel Art Converter", pageTagline: "Go retro! Transform photos into charming pixel art with our FLUX.1 Kontext AI." },
            gallerySection: {
                title: "Your World, Pixelated by AI",
                description: "See modern photos reimagined as classic pixel art by FLUX.1 Kontext, full of retro charm.",
                images: [
                    { srcs: ["/gallery/pixel/before-1.webp", "/gallery/pixel/after-1.webp"], alts: ["Original character photo", "Character as pixel art by FLUX.1 Kontext"], prompt: "Character to 8-bit pixel sprite." },
                    { srcs: ["/gallery/pixel/before-2.webp", "/gallery/pixel/after-2.webp"], alts: ["Original scene photo", "Scene as pixel art by FLUX.1 Kontext"], prompt: "Scene to 16-bit pixel style." },
                ],
            },
            featuresSection: {
                title: "Pixel Art Converter Features",
                description: "Create authentic retro pixel art from any photo with FLUX.1 Kontext.",
                items: [
                    { icon: "🕹️", title: "Classic Retro Vibe", description: "FLUX.1 Kontext accurately recreates the blocky, charming aesthetic of old-school video games." },
                    { icon: "🎨", title: "Limited Color Palettes", description: "Simulates restricted color capabilities of vintage hardware for an authentic feel when prompted to FLUX.1 Kontext." },
                    { icon: "🧱", title: "Defined Pixel Blocks", description: "Transforms smooth images into compositions of clearly distinguishable pixels." },
                    { icon: "👾", title: "8-bit & 16-bit Styles", description: "Prompt FLUX.1 Kontext for different pixelation levels, from chunky 8-bit to more detailed 16-bit." },
                    { icon: "✨", title: "Nostalgic Charm", description: "Perfect for avatars, game asset inspiration, or fun, retro-style images." },
                    { icon: "💡", title: "Customizable Detail", description: "Influence 'pixel size' or detail level through descriptive prompts with FLUX.1 Kontext." },
                ],
            },
            faqSection: {
                title: "Pixel Art Converter: FAQs",
                items: [
                    { question: "How does FLUX.1 Kontext turn my photo into pixel art?", answer: "FLUX.1 Kontext analyzes your image, then reduces resolution and color depth artistically, grouping pixels to create the blocky retro look based on your prompt." },
                    { question: "Can I choose 8-bit vs 16-bit style?", answer: "Yes! Specify in prompt: 'convert to 8-bit' or 'transform to 16-bit RPG sprite'. FLUX.1 Kontext interprets." },
                    { question: "Will it use a limited color palette?", answer: "Guide it. Prompt for 'classic 16-color palette' or 'NES color palette' for an authentic retro feel with FLUX.1 Kontext." },
                    { question: "What photos work best?", answer: "Images with clear subjects and distinct forms translate well. Portraits, simple objects, landscapes pixelate effectively." },
                    { question: "How 'blocky' will pixels be?", answer: "Depends on style (8-bit vs 16-bit) and prompts like 'chunky pixels' or 'fine pixel detail'." },
                    { question: "Can I use output for game dev/avatars?", answer: "Yes, great starting point or inspiration for game assets, avatars, or retro projects." },
                    { question: "Can FLUX.1 Kontext apply dithering effects for smoother color transitions in pixel art?", answer: "Yes, you can prompt for 'pixel art with dithering' and FLUX.1 Kontext will attempt to simulate this technique for more nuanced color representation within the pixel constraints." },
                    { question: "Does it handle anti-aliasing or keep sharp pixel edges?", answer: "Pixel art typically has sharp edges. FLUX.1 Kontext will aim for this crisp, aliased look unless you specifically prompt for a softer or blended pixel effect, which would be less conventional for the style." }
                ],
            },
        },
        // 2. Chibi Style AI
        {
            id: "chibi-style-ai",
            slug: "chibi-style-ai",
            name: "Chibi",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/chibi-style.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Turn the person in this photo into a cute chibi character with a happy expression and a simple background.",
                    promptPrefix: "",
                    promptSuffix: "  in a cute chibi character with a happy expression and a simple background",
                    placeholder: "Turn the person in this photo into a cute chibi character with a happy expression and a simple background.",
                    promptExamples: [
                        "Chibi version, blushing and winking.",
                        "Make a chibi character with oversized glasses and a school uniform.",
                        "Generate a chibi holding a miniature version of their pet."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/chibi-style.jpeg"
                }
            },
            seo: {
                title: "Chibi Style AI Generator | Create Cute Chibi Art | kontextflux.io",
                description: "Turn your photos into adorable Chibi characters with FLUX.1 Kontext! Our AI Chibi Maker is perfect for cute avatars, profile pictures, and fun art projects.",
                keywords: ["chibi style ai", "photo to chibi", "cute avatar maker", "kawaii art generator", "anime chibi maker", "chibi character creator", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/chibi-style.jpeg",
            },
            pageHeader: {
                pageTitle: "Chibi Style AI Generator",
                pageTagline: "Instantly create super cute Chibi versions of yourself or your characters with FLUX.1 Kontext!"
            },
            gallerySection: {
                title: "Adorable Chibi Transformations",
                description: "See how FLUX.1 Kontext converts photos into charming Chibi art, capturing cuteness in every detail.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/chibi/person-before.webp", "https://cdn.kontextflux.io/gallery/chibi/person-chibi-after.webp"], alts: ["Original photo of a person", "Chibi version of the person by FLUX.1 Kontext"], prompt: "Cute chibi with oversized sweater." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/chibi/group-before.webp", "https://cdn.kontextflux.io/gallery/chibi/group-chibi-after.webp"], alts: ["Photo of a group", "Group of Chibi characters by FLUX.1 Kontext"], prompt: "Group of friends as chibi characters." },
                ],
            },
            featuresSection: {
                title: "Why Create Chibis with Our AI?",
                description: "FLUX.1 Kontext makes Chibi art creation fun, fast, and incredibly cute.",
                items: [
                    { icon: "🥰", title: "Instantly Cute", description: "Transform any photo into an adorable Chibi character with characteristic big eyes and small bodies." },
                    { icon: "🎨", title: "Customizable Features", description: "Use prompts to add unique outfits, accessories, expressions, and hairstyles to your Chibis with FLUX.1 Kontext." },
                    { icon: "✨", title: "High-Quality Art", description: "Get clean, well-defined Chibi art perfect for avatars, stickers, or sharing online." },
                    { icon: "👤", title: "Personalized Avatars", description: "Create unique Chibi avatars for social media, forums, or gaming profiles." },
                    { icon: "⏱️", title: "Quick & Easy", description: "No drawing skills needed! FLUX.1 Kontext generates your Chibi in seconds." },
                    { icon: "🌟", title: "Expressive Characters", description: "FLUX.1 Kontext can capture a wide range of emotions in the Chibi style, making your characters lively." },
                ],
            },
            faqSection: {
                title: "Chibi Style AI: FAQs",
                items: [
                    { question: "What is a Chibi?", answer: "Chibi is a Japanese slang word describing something short and cute. In art, it refers to characters drawn with oversized heads, large eyes, and small bodies to appear adorable." },
                    { question: "How does FLUX.1 Kontext create Chibi art?", answer: "By analyzing your photo and prompt, FLUX.1 Kontext redraws the subject in the Chibi art style, exaggerating features for cuteness as defined by your instructions." },
                    { question: "Can I turn my pet into a Chibi?", answer: "Yes! FLUX.1 Kontext can also create adorable Chibi versions of pets." },
                    { question: "What if my photo has multiple people?", answer: "You can try, but for best results, it's often better to process photos of individuals or specify which person FLUX.1 Kontext should focus on in your prompt." },
                    { question: "Can I use the Chibi art commercially?", answer: "Please check our terms of service. Generally, art created can be used for personal projects; commercial rights may vary." },
                ],
            },
        },

        // 3. AI Hello Kitty Generator (Style)
        {
            id: "hello-kitty-style-generator",
            slug: "ai-hello-kitty-style-generator", // Emphasizing "style"
            name: "Hello Kitty",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/hello-kitty-astronaut.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional, // Can generate from scratch or stylize an image
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this image in the style of Hello Kitty, with a pink bow, sitting in a field of flowers.",
                    promptPrefix: "",
                    promptSuffix: " in the style of Hello Kitty, with a pink bow, sitting in a field of flowers",
                    placeholder: "Generate a cute cat character in the style of Hello Kitty, with a pink bow, sitting in a field of flowers.",
                    promptExamples: [
                        "A sweet dog character with a red bow, Hello Kitty inspired style.",
                        "Generate a scene with cute animal friends having a picnic, in a pastel Sanrio-esque aesthetic.",
                        "A girl character designed in a simple, adorable Hello Kitty like art style."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/hello-kitty-astronaut.jpeg" // Could be a generated example
                }
            },
            seo: {
                title: "AI Hello Kitty Style Generator | Cute Sanrio-Inspired Art | kontextflux.io",
                description: "Create adorable characters and scenes in a style inspired by Hello Kitty & Sanrio with FLUX.1 Kontext! Perfect for fans of cute, kawaii aesthetics.",
                keywords: ["ai hello kitty style", "sanrio style generator", "cute cat art", "kawaii character creator", "pink aesthetic ai", "FLUX.1 Kontext", "adorable animal generator"],
                ogImage: "https://cdn.kontextflux.io/ai-style/hello-kitty-astronaut.jpeg",
            },
            pageHeader: {
                pageTitle: "AI Hello Kitty Style Generator",
                pageTagline: "Spread cuteness! Generate charming characters and art in the iconic, adorable style of Hello Kitty with FLUX.1 Kontext."
            },
            gallerySection: {
                title: "Dive into a World of Cuteness",
                description: "Explore delightful creations by FLUX.1 Kontext, all inspired by the heartwarming and simple aesthetic of Hello Kitty and friends.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/hello-kitty-style/cat-with-bow.webp"], alts: ["AI generated cute cat with bow in Hello Kitty inspired style by FLUX.1 Kontext"], prompt: "Cute white cat with a red bow, Hello Kitty style." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/hello-kitty-style/bunny-friend.webp"], alts: ["AI generated bunny character in Sanrio-esque style by FLUX.1 Kontext"], prompt: "Friendly bunny character with a flower, Sanrio inspired art." },
                ],
            },
            featuresSection: {
                title: "Why Use Our Hello Kitty Style Generator?",
                description: "FLUX.1 Kontext helps you create art that captures the essence of this beloved cute style.",
                items: [
                    { icon: "🎀", title: "Iconic Cuteness", description: "Generate characters and scenes with the signature simple lines, minimal features, and adorable expressions." },
                    { icon: "💖", title: "Pastel Color Palettes", description: "Easily achieve the soft, pastel color schemes typical of this charming style with FLUX.1 Kontext." },
                    { icon: "🐾", title: "Friendly Characters", description: "Create a variety of cute animal characters or human-like figures in this distinct aesthetic." },
                    { icon: "✨", title: "Versatile Creations", description: "Perfect for fan art, personalized gifts, social media posts, or just for fun!" },
                    { icon: "🎨", title: "Easy Prompting", description: "Simply describe your desired scene or character, and FLUX.1 Kontext brings it to life in this style." },
                    { icon: "🌟", title: "Nostalgic & Modern", description: "Capture the timeless appeal of the Hello Kitty aesthetic with a modern AI twist." },
                ],
            },
            faqSection: {
                title: "Hello Kitty Style Generator: FAQs",
                items: [
                    { question: "Does this generate official Hello Kitty characters?", answer: "No, this tool generates new characters and art *in a style inspired by* Hello Kitty and Sanrio. It does not reproduce copyrighted characters. It's for creating your own original cute art." },
                    { question: "How does FLUX.1 Kontext achieve the 'Hello Kitty style'?", answer: "FLUX.1 Kontext is trained on diverse art styles. Your prompts guide it to use simple shapes, specific color palettes (often pastels), and characteristic features like bows or simple eyes associated with this beloved aesthetic." },
                    { question: "Can I create other animals besides cats?", answer: "Yes! You can prompt FLUX.1 Kontext to create bunnies, bears, dogs, or any character you can imagine, all rendered in this cute, minimalistic style." },
                    { question: "Is it free to use?", answer: "We offer some free generations. For more extensive use, please check our plans." },
                    { question: "What can I use these images for?", answer: "Primarily for personal enjoyment, fan art, social media, or non-commercial projects. Always be mindful of respecting intellectual property." },
                ],
            },
        },

        // 4. Snoopy Style AI Generator
        {
            id: "snoopy-style-generator",
            slug: "ai-snoopy-style-generator",
            name: "Snoopy",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/snoopy-style.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "convert this image in the classic black and white comic style of Snoopy.",
                    promptPrefix: "",
                    promptSuffix: " in the classic black and white comic style of Snoopy",
                    placeholder: "Generate an image of a beagle dog thinking on top of a doghouse, in the classic black and white comic style of Snoopy.",
                    promptExamples: [
                        "A beagle dog dancing happily, Snoopy comic style.",
                        "Two friends talking on a bench, in a simple black and white Peanuts-esque style.",
                        "A character flying an imaginary airplane, classic comic strip look."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/snoopy-style.jpeg"
                }
            },
            seo: {
                title: "Snoopy Style AI Generator | Peanuts Inspired Comic Art | kontextflux.io",
                description: "Create charming illustrations in a style reminiscent of Snoopy and Peanuts comics with FLUX.1 Kontext. Generate nostalgic black and white (or minimal color) line art easily.",
                keywords: ["snoopy style ai", "peanuts style generator", "classic comic art", "retro cartoon ai", "dog comic character", "FLUX.1 Kontext", "vintage illustration"],
                ogImage: "https://cdn.kontextflux.io/ai-style/snoopy-style.jpeg",
            },
            pageHeader: {
                pageTitle: "Snoopy Style AI Generator",
                pageTagline: "Relive the charm of classic comics! Generate art inspired by the timeless style of Snoopy and Peanuts with FLUX.1 Kontext."
            },
            gallerySection: {
                title: "Nostalgic Comic Strip Creations",
                description: "FLUX.1 Kontext brings the heartwarming, minimalist style of Peanuts to your fingertips. Create your own imaginative scenes.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/snoopy-style/dog-on-doghouse.webp"], alts: ["AI generated dog on doghouse in Snoopy inspired style by FLUX.1 Kontext"], prompt: "Beagle on a doghouse, thinking, Snoopy comic style." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/snoopy-style/kids-talking.webp"], alts: ["AI generated kids talking in Peanuts-esque style by FLUX.1 Kontext"], prompt: "Two kids having a conversation, classic comic line art." },
                ],
            },
            featuresSection: {
                title: "Key Features of the Snoopy Style Generator",
                description: "Use FLUX.1 Kontext to capture the unique charm of this beloved comic art style.",
                items: [
                    { icon: "🐶", title: "Classic Comic Look", description: "Achieve the iconic black and white (or minimal color) line art style recognizable from Peanuts." },
                    { icon: "💭", title: "Imaginative & Witty", description: "Create scenes that evoke the thoughtful, humorous, and heartwarming tone of the classic strips with FLUX.1 Kontext." },
                    { icon: "✏️", title: "Simple Line Art", description: "FLUX.1 Kontext focuses on the expressive power of simple lines and character poses." },
                    { icon: "🐾", title: "Beloved Characters (Inspired)", description: "Generate your own original characters that fit perfectly within this nostalgic aesthetic." },
                    { icon: "🕰️", title: "Timeless Appeal", description: "Perfect for creating art with a retro, heartwarming, and universally appealing feel." },
                    { icon: "👍", title: "Easy to Generate", description: "Describe your scene, and FLUX.1 Kontext translates it into this distinctive comic style." },
                ],
            },
            faqSection: {
                title: "Snoopy Style Generator: FAQs",
                items: [
                    { question: "Does this generate official Snoopy or Peanuts characters?", answer: "No, this tool creates new, original artwork *inspired by* the artistic style of Snoopy and Peanuts. It is not for reproducing copyrighted characters but for capturing a similar aesthetic." },
                    { question: "How does FLUX.1 Kontext mimic this comic style?", answer: "By focusing on instructions for line art, character proportions, expressions, and often a black-and-white or limited color palette, FLUX.1 Kontext can generate images that evoke the Peanuts comic strip style." },
                    { question: "Can I create scenes with multiple characters?", answer: "Yes, you can prompt FLUX.1 Kontext to create scenes with multiple original characters interacting in this style." },
                    { question: "Is the output typically black and white?", answer: "Yes, the classic Peanuts style is predominantly black and white line art, and FLUX.1 Kontext can be guided to replicate this. You can also experiment with prompts for minimal color." },
                    { question: "What are good prompts for this style?", answer: "Think about simple scenes, character interactions, or imaginative scenarios. Mentioning 'classic comic strip style', 'Peanuts-inspired', or 'simple line art' helps guide FLUX.1 Kontext." },
                ],
            },
        },

        // 5. AI Irasutoya Generator
        {
            id: "irasutoya-style-generator",
            slug: "ai-irasutoya-style-generator",
            name: "Irasutoya Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-image/irasutoya-style/hero-icon.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional, // Can be used to generate from text prompts primarily
                defaultModelId: imgModels[10].id,
                promptEngine: {
                    defaultPrompt: "Turn this into the Irasutoya style",
                    promptPrefix: "",
                    promptSuffix: " in the Irasutoya style",
                    placeholder: "Generate an illustration of a person working on a laptop, in the Irasutoya style with a simple background.",
                    promptExamples: [
                        "Illustration of a doctor and patient, Irasutoya style.",
                        "A person enjoying a hobby, simple Irasutoya illustration.",
                        "Various everyday objects drawn in the clean Irasutoya aesthetic."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-image/irasutoya-style/working-on-laptop-nano.webp"
                }
            },
            seo: {
                title: "AI Irasutoya Style Generator |  | Free Irasutoya Maker | kontextflux.io",
                description: "Instantly create or transform photos charming, high-quality illustrations in the popular Irasutoya style with our AI generator. Perfect for presentations, marketing, and social media.",
                keywords: ["ai irasutoya generator", "irasutoya maker",
                    "irasutoya generator",
                    "irasutoya ai",
                    "ai irasutoya",
                    "free illustration generator",
                    "japanese style illustration",
                    "cute character generator",
                    "kawaii art generator"],
                ogImage: "https://cdn.kontextflux.io/ai-image/irasutoya-style/hero-icon.webp",
            },
            pageHeader: {
                pageTitle: "AI Irasutoya Style Generator",
                pageTagline: "Effortlessly create or transform your pictures into delightful, ready-to-use illustrations in the iconic Irasutoya style. No drawing skills needed!",
                heroImage: {
                    src: "https://cdn.kontextflux.io/ai-image/irasutoya-style/hero-banner.webp",
                    alt: "A collage of diverse and charming Irasutoya-style characters and scenes generated by AI."
                },
                buttons: [{ label: "Get 20 free credits", link: "/login" }]
            },
            scenarioShowcase: {
                title: "Bring Your Ideas to Life with Irasutoya Style Illustrations",
                description: "From professional presentations to turning photos into avatars, discover how our AI can instantly generate the perfect Irasutoya-style images for any context.",
                scenarios: [
                    {
                        id: "educational-materials",
                        shortTitle: "Educational Content",
                        originalTitle: "Engaging Educational Materials",
                        tagline: "Simplify complex topics with friendly visuals.",
                        description: "Quickly generate custom illustrations for worksheets, presentations, and learning modules. Make learning more accessible and fun for students of all ages with clear, expressive, and friendly Irasutoya-style graphics.",
                        category: "Education",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "A teacher explaining the water cycle on a chalkboard to a group of attentive students, in the style of Irasutoya.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/irasutoya-style/water-cycle-nano.webp",
                                alt: "An AI-generated Irasutoya-style illustration of a teacher explaining the water cycle."
                            }
                        ]
                    },
                    {
                        id: "transform-photos-to-avatars",
                        shortTitle: "Photo to Avatar",
                        originalTitle: "Transform Photos into Unique Avatars",
                        tagline: "Create a playful and anonymous online identity.",
                        description: "Upload your photo and let the AI transform it into a charming Irasutoya-style character. Perfect for profile pictures, stickers, or personal blogs, it allows you to express your personality with a touch of whimsical innocence.",
                        category: "Personal Use",
                        inputImage: [

                        ],
                        outputImages: [
                            {
                                prompt: " turned into an Irasutoya-style character.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/irasutoya-style/annisa-irasutoya-style-nano.webp",
                                alt: "A photo transformed into a cute Irasutoya-style avatar by AI."
                            }
                        ]
                    },
                    {
                        id: "social-media-marketing",
                        shortTitle: "Social Media",
                        originalTitle: "Eye-Catching Social Media Campaigns",
                        tagline: "Boost engagement with charming, on-brand content.",
                        description: "Create unique characters and scenes for your social media posts, ads, and stories. The recognizable and beloved Irasutoya style helps your brand stand out and connect with your audience in a lighthearted, approachable way.",
                        category: "Marketing",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "A friendly mascot character holding a smartphone with a thumbs-up icon, social media logos floating in the background, in the style of Irasutoya.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/irasutoya-style/mascot-holding-phones-nano.webp",
                                alt: "A cute Irasutoya-style mascot for a social media marketing campaign."
                            }
                        ]
                    },
                    {
                        id: "business-presentations",
                        shortTitle: "Business Slides",
                        originalTitle: "Professional Business Presentations",
                        tagline: "Soften complex data and corporate messages.",
                        description: "Enhance your business reports, internal communications, and client presentations with custom Irasutoya illustrations. This style is perfect for making serious or complex information appear more friendly and easier to digest.",
                        category: "Business",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "Two business professionals shaking hands in front of a rising stock chart, in the style of Irasutoya.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/irasutoya-style/shaking-hands.webp",
                                alt: "An Irasutoya-style illustration of a business agreement for a presentation."
                            }
                        ]
                    }
                ]
            },
            gallerySection: {
                title: "Endless Possibilities with Irasutoya Style",
                description: "Explore a diverse collection of images created with our AI Irasutoya Style Generator. The possibilities are endless!",
                images: [
                    // {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/ai-irasutoya-style-generator/gallery-image-1.webp"],
                    //     alts: ["Irasutoya style illustration of a person working from home on a laptop."],
                    //     prompt: "A person working from home at a desk with a laptop and a cup of coffee, in the style of Irasutoya."
                    // },
                    // {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/ai-irasutoya-style-generator/gallery-image-2.webp"],
                    //     alts: ["Irasutoya style illustration of various seasonal foods."],
                    //     prompt: "A collection of seasonal Japanese foods: shaved ice, grilled corn, and watermelon, in the style of Irasutoya."
                    // },
                    // {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/ai-irasutoya-style-generator/gallery-image-3.webp"],
                    //     alts: ["Irasutoya style illustration of a person riding a bicycle."],
                    //     prompt: "A happy person riding a bicycle through a park with cherry blossoms, in the style of Irasutoya."
                    // },
                    // {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/ai-irasutoya-style-generator/gallery-image-4.webp"],
                    //     alts: ["Irasutoya style illustration of medical professionals."],
                    //     prompt: "A doctor and a nurse standing side-by-side with friendly smiles, in the style of Irasutoya."
                    // },
                    // {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/ai-irasutoya-style-generator/gallery-image-5.webp"],
                    //     alts: ["Irasutoya style illustration of a cat and a dog playing together."],
                    //     prompt: "A cheerful golden retriever dog and a black cat playing together with a yarn ball, in the style of Irasutoya."
                    // },
                    // {
                    //     srcs: ["https://cdn.kontextflux.io/ai-image/ai-irasutoya-style-generator/gallery-image-6.webp"],
                    //     alts: ["Irasutoya style illustration of someone enjoying a hobby."],
                    //     prompt: "A person sitting on a couch and playing a video game with a controller, in the style of Irasutoya."
                    // }
                ],
            },
            featuresSection: {
                title: "Why Choose Our AI Irasutoya Generator?",
                description: "We combine the beloved Irasutoya aesthetic with powerful AI to give you limitless creative possibilities, instantly.",
                items: [
                    {
                        icon: "🎨",
                        title: "Authentic Style Replication",
                        description: "Our AI is fine-tuned to accurately capture the simple lines, soft color palette, and charming expressions that define the Irasutoya style."
                    },
                    {
                        icon: "✨",
                        title: "Photo-to-Irasutoya Transformation",
                        description: "Transform your own photos into cute Irasutoya-style characters. Create personalized avatars and profile pictures with a single click."
                    },
                    {
                        icon: "🚀",
                        title: "Instant Generation From Text",
                        description: "Go from a simple text prompt to a finished illustration in seconds. Stop searching for stock photos and create exactly what you need, right when you need it."
                    },
                    {
                        icon: "🔧",
                        title: "Highly Customizable",
                        description: "Easily describe any character, scene, or object. Our AI interprets your prompts to generate unique illustrations tailored to your specific needs."
                    },
                    {
                        icon: "🖼️",
                        title: "High-Resolution Exports",
                        description: "Download your creations in high resolution, suitable for both digital use and print. Your Irasutoya-style illustrations will look sharp and professional on any medium."
                    },
                    {
                        icon: "💼",
                        title: "Commercial Use Friendly",
                        description: "Get started with 20 free credits. The images you generate are perfect for both personal projects and commercial applications like marketing and presentations."
                    }
                ]
            },
            faqSection: {
                title: "Frequently Asked Questions",
                items: [
                    {
                        question: "What is the Irasutoya style?",
                        answer: "Irasutoya is a very popular style of Japanese illustration known for its simple, cute, and friendly characters. It's widely used in Japan for everything from business presentations to public announcements because its charm makes any topic feel more approachable."
                    },
                    {
                        question: "How does the AI generate Irasutoya-style images?",
                        answer: "Our tool uses an advanced AI model that has been trained on the key characteristics of the Irasutoya style. You can either provide a text prompt for a new image or upload your own photo for the AI to transform."
                    },
                    {
                        question: "Can I turn my own photo into an Irasutoya character?",
                        answer: "Yes, our generator includes an image-to-image feature. You can upload a photo and provide a prompt to guide the AI in transforming it into a unique character in the Irasutoya style."
                    },
                    {
                        question: "Is this tool free to use?",
                        answer: "Yes! When you sign up for KontextFlux.io, you receive 20 free credits to start generating images immediately. After that, you can purchase more credits as needed."
                    },
                    {
                        question: "Can I use the generated images for commercial purposes?",
                        answer: "Absolutely. The illustrations you create can be used for both personal and commercial projects, such as marketing materials, websites, social media, and presentations, according to our terms of service."
                    },
                    {
                        question: "Do I need any artistic skills to use this tool?",
                        answer: "Not at all! That's the magic of it. If you can describe what you want in words or provide a photo, our AI can create the illustration for you. It's designed for everyone, regardless of artistic ability."
                    },
                    {
                        question: "What kind of prompts work best?",
                        answer: "Clear and simple descriptions work best. Think about the subject, the action, and the setting. For example, instead of 'a person', try 'a cheerful girl with a backpack waving hello'."
                    },
                    {
                        question: "How is this different from the official Irasutoya website?",
                        answer: "The official Irasutoya website offers a vast library of pre-made illustrations. Our tool allows you to create completely new, custom illustrations from your own text descriptions or photos, giving you infinite possibilities that may not exist in the stock library."
                    }
                ]
            },
            cta: {
                title: "Ready to Create Your Own Irasutoya Illustrations?",
                description: "Join KontextFlux.io today and get 20 free credits to start bringing your ideas to life with the charm of Irasutoya, powered by AI.",
                button: {
                    text: "Start Generating for Free",
                    link: "/login"
                }
            },
        },
        // 1. AI Action Figure Generator
        {
            id: "action-figure-generator",
            slug: "ai-action-figure-generator",
            name: "Action Figure",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/action-figureastronaut.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional, // User uploads a photo of a person/character
                defaultModelId: imgModels[1].id, // FLUX.1 Kontext [max] recommended for 3D-like detail
                promptEngine: {
                    defaultPrompt: "Make a picture of a 3D action figure toy with a name.Make it look like it's being displayed in a transparent plastic package, blister packaging model. The figure is as in the photo. On the top of the packaging there is a large writing: of the name in white text then below it is a simple slogan. Also add some supporting items for the job next to the figure. The packaging design is minimalist, cardboard colour, cute toy style sold in stores. The style is cartoonish, cute but still neat, also put a brand logo in the top right corner",
                    promptPrefix: "",
                    promptSuffix: " Make a picture of a 3D action figure toy with a name.Make it look like it's being displayed in a transparent plastic package, blister packaging model. The figure is as in the description. On the top of the packaging there is a large writing of the name in white text then below it is a simple slogan. Also add some supporting items for the job next to the figure. The packaging design is minimalist, cardboard colour, cute toy style sold in stores. The style is cartoonish, cute but still neat, also put a brand logo in the top right corner",
                    placeholder: `an astronaut`,
                    //placeholder: `Make a picture of a 3D action figure toy, named "YOUR-NAME-HERE" Make it look like it's being displayed in a transparent plastic package, blister packaging model. The figure is as in the photo, [GENDER/HIS/HER/THEIR] style is very [DEFINE EVERYTHING ABOUT HAIR/FACE/ETC]. On the top of the packaging there is a large writing: "[NAME-AGAIN]" in white text then below it "[TITLE]” Dressed in [CLOTHING/ACCESSORIES]. Also add some supporting items for the job next to the figure, like [ALL-THE-THINGS]. The packaging design is minimalist, cardboard colour, cute toy style sold in stores. The style is cartoonish, cute but still neat, also put [BRAND] logo in the top right corner`,
                    promptExamples: [
                        "Create a classic 80s toy-style action figure.",
                        "Generate a highly detailed collectible figurine in a dynamic pose.",
                        "Turn into a mecha pilot action figure with a helmet."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/action-figureastronaut.jpeg"
                }
            },
            seo: {
                title: "AI Action Figure Generator | Turn Photos into Toys | kontextflux.io",
                description: "Create amazing custom action figures from your photos with FLUX.1 Kontext! Design unique toy characters in various styles. Perfect for collectors and fun projects.",
                keywords: ["ai action figure generator", "custom action figure", "photo to toy", "3d toy generator", "personalized figurine", "FLUX.1 Kontext", "toy design ai"],
                ogImage: "https://cdn.kontextflux.io/ai-style/action-figureastronaut.jpeg",
            },
            pageHeader: {
                pageTitle: "AI Action Figure Generator",
                pageTagline: "Bring your heroes to life! Transform photos into awesome, collectible-style action figures using FLUX.1 Kontext."
            },
            gallerySection: {
                title: "Unleash Your Inner Toy Designer",
                description: "See how FLUX.1 Kontext turns ordinary photos into unique, detailed action figures in various genres.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/action-figure/person-before.webp", "https://cdn.kontextflux.io/gallery/action-figure/person-superhero-after.webp"], alts: ["Photo of a person", "AI generated superhero action figure by FLUX.1 Kontext"], prompt: "Superhero action figure, heroic pose." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/action-figure/pet-before.webp", "https://cdn.kontextflux.io/gallery/action-figure/pet-fantasy-after.webp"], alts: ["Photo of a pet", "AI generated fantasy creature action figure by FLUX.1 Kontext"], prompt: "Fantasy warrior pet action figure." },
                ],
            },
            featuresSection: {
                title: "Features of the AI Action Figure Generator",
                description: "Powered by FLUX.1 Kontext for incredible detail and creative freedom.",
                items: [
                    { icon: "🦸", title: "Multiple Styles", description: "Generate action figures in sci-fi, fantasy, superhero, military, and more styles." },
                    { icon: "✨", title: "Realistic Toy Look", description: "FLUX.1 Kontext creates a convincing plastic/resin toy aesthetic with articulation lines." },
                    { icon: "📸", title: "Photo to Figure", description: "Easily transform portraits or full-body shots into unique action figures." },
                    { icon: "🔧", title: "Customizable Details", description: "Use prompts to influence outfits, accessories, and poses with FLUX.1 Kontext." },
                    { icon: "🚀", title: "Fast Generation", description: "Get your custom action figure designs in minutes." },
                    { icon: "🎁", title: "Perfect for Collectors & Gifts", description: "Design unique virtual collectibles or conceptualize personalized gifts." },
                ],
            },
            faqSection: {
                title: "Action Figure Generator FAQs",
                items: [
                    { question: "How does it turn a photo into an action figure?", answer: "Upload your photo, and FLUX.1 Kontext uses AI to interpret the subject and restyle it as an action figure based on your prompt, adding toy-like characteristics." },
                    { question: "Can I specify the action figure's style or accessories?", answer: "Yes! Your text prompt guides FLUX.1 Kontext. You can specify genres (sci-fi, fantasy), clothing, accessories (weapons, helmets), and even pose." },
                    { question: "What kind of photo works best?", answer: "Clear photos of a person or character, preferably full-body or half-body, work well. Good lighting helps FLUX.1 Kontext capture details." },
                    { question: "Is the output a 3D model?", answer: "The output is a 2D image that simulates a 3D action figure. It's not a printable 3D model file but can be used as concept art." },
                    { question: "How detailed are the generated action figures by FLUX.1 Kontext?", answer: "FLUX.1 Kontext, especially the [max] model, can generate impressive levels of detail, including textures, small accessories, and facial features in the action figure style." },
                ],
            },
        },

        // Append these tools inside the `tools: [...]` array of your ImgStyle ThemeConfig.

        // 13. Anime Style
        {
            id: "anime-style",
            slug: "anime-style",
            name: "Anime Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/anime-style-a-girl-with-silver-hair-standing-in-a-futuristic-c.png",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this image into a vibrant, modern anime style.",
                    promptPrefix: "",
                    promptSuffix: ", in a vibrant modern anime art style, with clean lines and expressive features.",
                    placeholder: "A girl with silver hair standing in a futuristic city at night, anime style.",
                    promptExamples: [
                        "Turn this portrait into an anime character profile picture.",
                        "Make this landscape an anime background scene.",
                        "A cute animal sidekick in anime style."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/anime-style-a-girl-with-silver-hair-standing-in-a-futuristic-c.png",
                },
            },
            seo: {
                title: "Anime Style AI Generator | Turn Photo to Anime | kontextflux.io",
                description: "Instantly convert your photos into high-quality anime art with FLUX.1 Kontext. Create custom anime characters, avatars, and scenes in seconds. Try it now!",
                keywords: ["photo to anime", "anime style generator", "ai anime filter", "anime character creator", "turn me into anime", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/anime-style-a-girl-with-silver-hair-standing-in-a-futuristic-c.png",
            },
            pageHeader: {
                pageTitle: "AI Anime Style Converter",
                pageTagline: "Become the hero of your own story! Transform any photo into stunning anime art with the power of FLUX.1 Kontext.",
            },
            scenarioShowcase: {
                title: "Bring Your World into the Anime Universe",
                description: "From personalized avatars to unique fan art, see how FLUX.1 Kontext can 'anim-ize' your life.",
                scenarios: [
                    {
                        id: "anime-avatar",
                        shortTitle: "Create a Gaming Avatar",
                        originalTitle: "Create a Unique Anime Avatar for Social & Gaming Profiles",
                        tagline: "Your face, your character, anime style.",
                        description: "Stand out in the gaming community or on social media. Upload a selfie and let FLUX.1 Kontext transform you into a cool anime character. Perfect for Discord, Twitch, and Twitter profiles.",
                        category: "Personal Fun & Gaming",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/anime/avatar-input.webp", alt: "Photo of a person smiling", prompt: "Selfie of a person" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/anime/avatar-output.webp", alt: "Anime style avatar generated by FLUX.1 Kontext", prompt: "A cool anime character with headphones." }],
                    },
                    {
                        id: "anime-fanart",
                        shortTitle: "Create Unique Fan Art",
                        originalTitle: "Place Yourself or Friends into Your Favorite Anime World",
                        tagline: "Become part of the story.",
                        description: "Ever wanted to see what you'd look like as a titan slayer or a magic-wielding student? Upload your photo and describe the scene. FLUX.1 Kontext can create incredible fan art, putting you right in the middle of the action.",
                        category: "Creative Fun & Fan Art",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/anime/fanart-input.webp", alt: "Photo of a person in a dynamic pose", prompt: "Person posing" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/anime/fanart-output.webp", alt: "Person drawn as an anime hero by FLUX.1 Kontext", prompt: "A powerful anime hero with glowing energy." }],
                    },
                    {
                        id: "anime-storyboard",
                        shortTitle: "Visualize Your Story",
                        originalTitle: "Create Storyboard Panels for Your Comic or Animation",
                        tagline: "From idea to image, instantly.",
                        description: "For writers and creators, visualizing a scene is crucial. Describe your characters and setting, or upload a rough sketch, and let FLUX.1 Kontext generate a clean, polished anime-style panel. It's a powerful tool for storyboarding and pre-visualization.",
                        category: "Creative & Professional Work",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/anime/story-input.webp", alt: "Rough sketch of two characters talking", prompt: "A rough sketch" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/anime/story-output.webp", alt: "Clean anime storyboard panel by FLUX.1 Kontext", prompt: "Two anime characters having a serious conversation at sunset." }],
                    }
                ]
            },
            gallerySection: {
                title: "Gallery of Anime Transformations",
                description: "Explore a world where reality meets anime, powered by the creative intelligence of FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/anime/before-1.webp", "https://cdn.kontextflux.io/gallery/anime/after-1.webp"], alts: ["Original portrait", "Portrait in anime style by FLUX.1 Kontext"], prompt: "Portrait to shonen anime style." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/anime/before-2.webp", "https://cdn.kontextflux.io/gallery/anime/after-2.webp"], alts: ["Original landscape", "Landscape as anime background by FLUX.1 Kontext"], prompt: "Landscape to slice-of-life anime background." },
                ],
            },
            featuresSection: {
                title: "Why Use Our Anime Style Generator?",
                description: "Experience the best of AI-powered artistic transformation with FLUX.1 Kontext.",
                items: [
                    { icon: "🤩", title: "Expressive Features", description: "FLUX.1 Kontext captures the essence of anime art with large, expressive eyes and dynamic hairstyles." },
                    { icon: "🎨", title: "Vibrant Color Palette", description: "Automatically applies the bright and saturated colors that make anime visuals pop." },
                    { icon: "✍️", title: "Clean Line Art", description: "Generates crisp, professional-looking outlines for a polished anime aesthetic." },
                    { icon: "🎬", title: "Cinematic Scenes", description: "Transform simple landscapes into breathtaking anime background art, perfect for storytelling." },
                    { icon: "👤", title: "Character Consistency", description: "Leverage FLUX.1 Kontext to keep your generated anime character looking consistent across different scenes." },
                    { icon: "💥", title: "Dynamic Action", description: "Create characters in powerful action poses, complete with energy effects and speed lines when prompted." },
                ],
            },
            faqSection: {
                title: "Anime Style AI: Your Questions Answered",
                items: [
                    { question: "How does FLUX.1 Kontext turn a photo into anime?", answer: "FLUX.1 Kontext analyzes the content of your photo and applies the stylistic conventions of anime, such as line art, color schemes, and character features, to redraw the image in that style based on your prompt." },
                    { question: "Can I request a specific anime style, like '90s retro' or 'shonen'?", answer: "Yes! Be specific in your prompt. Phrases like 'in a 90s retro anime style' or 'as a modern shonen hero' will guide FLUX.1 Kontext to produce more tailored results." },
                    { question: "Will my pet turn into an anime animal?", answer: "Absolutely! Photos of pets can be transformed into cute anime-style creatures, powerful beasts, or adorable sidekicks." },
                    { question: "What is the difference between Anime and American Cartoon styles?", answer: "Generally, anime has distinct artistic conventions like specific eye styles, hair, and a tendency towards more detailed backgrounds and cinematic lighting. American cartoon styles often use bolder lines, more exaggerated character shapes, and different comedic timing in their visuals." },
                    { question: "Can I create a character from just a text description?", answer: "Yes. Our tool supports both image-to-image and text-to-image generation. You can describe a character from your imagination without uploading any photo at all." },
                    { question: "How can I get the best results when converting my portrait?", answer: "Use a clear, well-lit photo where your facial features are easily visible. Front-on or three-quarter views tend to work best. Specify details like hair color or expression in the prompt for more control." }
                ],
            },
        },

        // 14. Low Poly Style
        {
            id: "low-poly-style",
            slug: "low-poly-style",
            name: "Low Poly Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/low-poly-style-hero-cover-compress.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this image into a low-polygon 3D art style, 3d isometric render, ambient occlusion",
                    promptPrefix: "",
                    promptSuffix: ", in a low-polygon 3D art style, 3d isometric render, simple background, ambient occlusion.",
                    placeholder: "kawaii panda",
                    promptExamples: [
                        "Low-poly version of a classic car.",
                        "This mountain range in a minimalist low-poly aesthetic.",
                        "A low-poly island floating in the sky."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/low-poly-panda.jpeg",
                },
            },
            seo: {
                title: "Low Poly AI Generator | Create Geometric Art | kontextflux.io",
                description: "Convert your photos into stylish low-poly art with FLUX.1 Kontext. Create stunning geometric and faceted images for wallpapers, posters, and modern design projects.",
                keywords: ["low poly generator", "photo to low poly", "geometric art maker", "ai polygon art", "faceted image effect", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/low-poly-dog.jpeg",
            },
            pageHeader: {
                pageTitle: "AI Low Poly Style Generator",
                pageTagline: "Discover the beauty of simplicity. Create striking geometric art from any image with FLUX.1 Kontext.",
                heroImage: {
                    src: "https://cdn.kontextflux.io/ai-style/low-poly-style-hero.webp",
                    alt: "Low poly style example by FLUX.1 Kontext"
                }
            },
            scenarioShowcase: {
                title: "Modern Art for Your Digital Life",
                description: "Low-poly isn't just a style; it's a modern aesthetic. See how you can use it for work and play.",
                scenarios: [
                    {
                        id: "low-poly-wallpaper",
                        shortTitle: "Create a Stylish Wallpaper",
                        originalTitle: "Design a Unique Low-Poly Wallpaper for Your Devices",
                        tagline: "Your view, reimagined in polygons.",
                        description: "Tired of boring stock wallpapers? Upload your favorite travel photo and let FLUX.1 Kontext transform it into a chic low-poly masterpiece. It's a perfect way to personalize your desktop, laptop, or phone screen with modern art.",
                        category: "Personalization & Design",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/low-poly/wallpaper-input.webp", alt: "Photo of a forest landscape", prompt: "A forest at sunset" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/low-poly/wallpaper-output.webp", alt: "Low-poly style forest wallpaper by FLUX.1 Kontext", prompt: "A low-poly wallpaper of a forest." }],
                    },
                    {
                        id: "low-poly-presentation",
                        shortTitle: "Elevate Your Presentation",
                        originalTitle: "Create Modern Backgrounds for Presentations",
                        tagline: "Sleek visuals for a sharp message.",
                        description: "Make your presentation stand out. Generate a custom low-poly background related to your topic (e.g., a city skyline for a business talk) to give your slides a professional, modern, and cohesive look that doesn't distract from your content.",
                        category: "Professional Work & Education",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/low-poly/presentation-input.webp", alt: "Generic stock photo of an office", prompt: "An office meeting" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/low-poly/presentation-output.webp", alt: "Abstract low-poly background for a presentation slide, by FLUX.1 Kontext", prompt: "An abstract low-poly background with a blue and grey color scheme." }],
                    },
                    {
                        id: "low-poly-tshirt",
                        shortTitle: "Design a T-Shirt",
                        originalTitle: "Conceptualize a Geometric T-Shirt Design",
                        tagline: "Wear your art.",
                        description: "Create a cool, geometric design for a custom t-shirt. Turn a photo of your favorite animal, your car, or even your own face into a striking low-poly illustration. It's a great way to generate unique artwork for personal apparel or merchandise ideas.",
                        category: "Design & Fashion",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/low-poly/tshirt-input.webp", alt: "Photo of a wolf", prompt: "A wolf's head" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/low-poly/tshirt-output.webp", alt: "Low-poly wolf design for a t-shirt, by FLUX.1 Kontext", prompt: "A geometric low-poly design of a wolf's head, suitable for a t-shirt." }],
                    }
                ]
            },
            gallerySection: {
                title: "A Gallery of Geometric Wonders",
                description: "See how FLUX.1 Kontext deconstructs and rebuilds images into stunning faceted art.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/low-poly/before-1.webp", "https://cdn.kontextflux.io/gallery/low-poly/after-1.webp"], alts: ["Original animal photo", "Animal in low-poly style by FLUX.1 Kontext"], prompt: "A fox in low-poly style." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/low-poly/before-2.webp", "https://cdn.kontextflux.io/gallery/low-poly/after-2.webp"], alts: ["Original city photo", "Cityscape in low-poly style by FLUX.1 Kontext"], prompt: "City skyline as low-poly art." },
                ],
            },
            featuresSection: {
                title: "Why Choose Our Low Poly Generator?",
                description: "Create clean, modern, and stylized images with the precision of FLUX.1 Kontext.",
                items: [
                    { icon: "💎", title: "Geometric Facets", description: "FLUX.1 Kontext intelligently simplifies images into beautiful, triangular surfaces." },
                    { icon: "🎨", title: "Stylized Color", description: "Creates a striking look by using solid or subtly graded colors within each polygon." },
                    { icon: "🖥️", title: "Modern Aesthetic", description: "Perfect for creating trendy digital wallpapers, game assets, and presentation backgrounds." },
                    { icon: "✨", title: "Intelligent Simplification", description: "Transforms complex photos into minimalist art while retaining the core essence of the subject." },
                    { icon: "💡", title: "Content-Aware Detail", description: "FLUX.1 Kontext can apply more detail to key areas of the image while simplifying backgrounds." },
                    { icon: "🖼️", title: "Excellent for Printing", description: "The clean edges and stylized look translate beautifully to physical prints like posters and wall art." },
                ],
            },
            faqSection: {
                title: "Low Poly Style AI: Your Questions",
                items: [
                    { question: "How does the AI create a low-poly image?", answer: "FLUX.1 Kontext analyzes the key points, lines, and color areas of your image. It then generates a mesh of polygons (usually triangles) and assigns colors to them to create an abstract representation of the original." },
                    { question: "Can I control the level of detail?", answer: "Yes, you can influence the detail in your prompt. Using phrases like 'highly detailed low-poly' versus 'minimalist low-poly' or 'using large facets' can guide FLUX.1 Kontext to produce different results." },
                    { question: "Is this suitable for creating game assets?", answer: "It's an excellent tool for generating concept art and inspiration for low-poly style game assets. The 2D images can serve as a perfect reference for 3D modelers." },
                    { question: "Is the output a real 3D model file (e.g., .OBJ)?", answer: "No, the output is a 2D image (like a PNG) that simulates a 3D low-poly object. It is not a 3D model that can be opened in 3D software." },
                    { question: "What kind of photos work best for this style?", answer: "Images with strong shapes, good contrast, and clear subjects tend to produce the most striking results. Landscapes, animals, and vehicles are all great candidates." },
                    { question: "Does this style work well for human portraits?", answer: "Yes, it creates a very interesting, abstract, and artistic style of portrait. It's less about capturing a likeness and more about creating a stylized, geometric representation." }
                ],
            },
        },

        // 15. 3D Chibi Style
        {
            id: "3d-chibi-style",
            slug: "3d-chibi-style",
            name: "3D Chibi Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/3d-chibi-a-set-of-chibi-style-animal-friends-.png",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Turn the subject into a cute 3D chibi vinyl toy.",
                    promptPrefix: "",
                    promptSuffix: ", as a cute 3D chibi vinyl toy, with smooth surfaces, glossy eyes, and a dynamic pose.",
                    placeholder: "A set of Chibi-style animal friends (e.g., a fox, a bear, a rabbit) each with a distinct, simple accessory like a tiny backpack or a flower.",
                    promptExamples: [
                        "A 3D chibi of a puppy with oversized paws.",
                        "Turn this person into a 3D chibi collectible figurine.",
                        "Cute 3D chibi knight in shiny armor."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/3d-chibi-a-set-of-chibi-style-animal-friends-.png",
                },
            },
            seo: {
                title: "3D Chibi Style AI Generator | Create 3D Toy Characters | kontextflux.io",
                description: "Design adorable 3D Chibi characters from photos or text with FLUX.1 Kontext. Create cute, toy-like 3D figures for avatars, emotes, and fun projects.",
                keywords: ["3d chibi generator", "photo to 3d chibi", "cute 3d character creator", "ai vinyl toy", "chibi maker", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/3d-chibi-a-set-of-chibi-style-animal-friends-.png",
            },
            pageHeader: {
                pageTitle: "AI 3D Chibi Style Generator",
                pageTagline: "Unbox your imagination! Create adorable, collectible-style 3D Chibis with FLUX.1 Kontext.",
            },
            scenarioShowcase: {
                title: "Your Life as a Collectible Toy",
                description: "Go beyond 2D! Create fun, tangible-looking 3D chibi figures for digital expression and creative projects.",
                scenarios: [
                    {
                        id: "3d-chibi-emote",
                        shortTitle: "Design Custom Emotes",
                        originalTitle: "Design Custom 3D Chibi Emotes for Twitch & Discord",
                        tagline: "Your reactions, but 3D and cuter.",
                        description: "Level up your stream or server with unique 3D emotes. Describe a reaction like 'Hype', 'LOL', or 'Rage' and FLUX.1 Kontext will generate a high-quality 3D chibi of you performing it. They're shiny, expressive, and sure to grab attention.",
                        category: "Gaming & Social Media",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/3d-chibi/emote-input.webp", alt: "Photo of a person laughing", prompt: "Photo of a person laughing" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/3d-chibi/emote-output.webp", alt: "3D chibi 'LOL' emote generated by FLUX.1 Kontext", prompt: "3D Chibi LOL emote." }],
                    },
                    {
                        id: "3d-chibi-gift",
                        shortTitle: "Create a Gift Concept",
                        originalTitle: "Design a Personalized 3D Chibi Gift Concept",
                        tagline: "The cutest personalized present.",
                        description: "Want to give a truly unique gift? Create a 3D Chibi version of a friend, family member, or their pet. You can use the image for a custom greeting card, a framed print, or as a design concept to commission a real 3D-printed figurine.",
                        category: "Gifts & Personal",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/3d-chibi/gift-input.webp", alt: "Photo of a couple", prompt: "A couple smiling" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/3d-chibi/gift-output.webp", alt: "A cute 3D chibi couple by FLUX.1 Kontext", prompt: "A cute 3D chibi couple holding hands." }],
                    },
                    {
                        id: "3d-chibi-mascot",
                        shortTitle: "Design a Brand Mascot",
                        originalTitle: "Create a Cute 3D Mascot for Your Brand or Stream",
                        tagline: "An adorable face for your brand.",
                        description: "Every great brand needs a mascot! Design an irresistibly cute 3D chibi character to represent your stream, small business, or project. It's a fun and memorable way to connect with your audience and build a recognizable brand identity.",
                        category: "Branding & Business",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/3d-chibi/mascot-output.webp", alt: "A cute 3D chibi fox mascot by FLUX.1 Kontext", prompt: "A cute and friendly 3D chibi fox mascot wearing headphones and waving." }],
                    }
                ]
            },
            gallerySection: {
                title: "The 3D Chibi Collection",
                description: "Explore a virtual shelf of adorable 3D characters, rendered by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/3d-chibi/before-1.webp", "https://cdn.kontextflux.io/gallery/3d-chibi/after-1.webp"], alts: ["Original person photo", "Person as 3D chibi by FLUX.1 Kontext"], prompt: "Person to 3D chibi vinyl toy." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/3d-chibi/before-2.webp", "https://cdn.kontextflux.io/gallery/3d-chibi/after-2.webp"], alts: ["Original dog photo", "Dog as 3D chibi by FLUX.1 Kontext"], prompt: "Cute corgi as a 3D chibi." },
                ],
            },
            featuresSection: {
                title: "Why Generate 3D Chibis with Us?",
                description: "Create high-quality 3D-style illustrations effortlessly with FLUX.1 Kontext.",
                items: [
                    { icon: "🧸", title: "Vinyl Toy Aesthetic", description: "FLUX.1 Kontext simulates the look of real collectible figurines, complete with smooth surfaces and glossy finishes." },
                    { icon: "🤩", title: "Super-Deformed Cuteness", description: "Perfectly captures the chibi style with oversized heads, large expressive eyes, and small bodies." },
                    { icon: "💡", title: "Realistic Lighting", description: "Adds plausible highlights and shadows to give your chibi a true 3D look and feel." },
                    { icon: "✨", title: "Clean & Polished", description: "Generates high-quality images that look like professional 3D renders, perfect for digital use." },
                    { icon: "🚀", title: "Dynamic Poses", description: "Prompt FLUX.1 Kontext to create chibis in action poses—jumping, dancing, or waving—not just standing still." },
                    { icon: "🧢", title: "Customizable Accessories", description: "Easily add details like glasses, hats, headphones, or other props through your text prompt." },
                ],
            },
            faqSection: {
                title: "3D Chibi Style AI: FAQs",
                items: [
                    { question: "Is the output a real 3D model file (like .OBJ or .FBX)?", answer: "No, the tool generates a 2D image that expertly simulates a 3D rendering. It is not a 3D model file that you can use in 3D software, but it's perfect for concept art or digital use." },
                    { question: "What's the difference between this and the regular 'Chibi Style'?", answer: "The regular 'Chibi Style' creates a 2D, cartoon-like illustration. This '3D Chibi Style' aims to look like a physical 3D object, like a vinyl toy, with realistic lighting, shadows, and materials." },
                    { question: "How can I make my 3D chibi look like me?", answer: "Upload a clear photo of yourself and describe key features in the prompt, like '3D chibi with brown hair and glasses'. FLUX.1 Kontext will use the photo as a strong reference for the character." },
                    { question: "Can I create a 3D chibi version of my pet?", answer: "Yes, absolutely! Upload a photo of your pet and watch as FLUX.1 Kontext turns it into an adorable, collectible-style 3D figure." },
                    { question: "What does the 'vinyl toy' aesthetic mean?", answer: "It refers to the look of popular collectible toys like Funko Pops. This means smooth, often glossy surfaces, a high-quality polished appearance, and a design that looks like it could be a physical object." },
                    { question: "Can I specify the character's expression?", answer: "Definitely. Add 'with a happy, smiling expression' or 'with a determined, angry look' to your prompt to control the mood and personality of your 3D chibi." }
                ],
            },
        },

        // 16. American Cartoon Style
        {
            id: "american-cartoon-style",
            slug: "american-cartoon-style",
            name: "American Cartoon",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/cartoon-style.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Redraw this in a classic American cartoon style.",
                    promptPrefix: "",
                    promptSuffix: ", in the style of a classic American cartoon, with bold outlines and expressive, exaggerated features.",
                    placeholder: "A mad scientist in his lab, American cartoon style.",
                    promptExamples: [
                        "A zany animal sidekick in a 90s cartoon style.",
                        "Turn this photo into a retro cartoon character.",
                        "A heroic pose, classic comic book cartoon style."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/cartoon-style.jpeg"
                }
            },
            seo: {
                title: "American Cartoon Style AI Generator | 90s Cartoonizer | kontextflux.io",
                description: "Turn photos into classic American cartoons with FLUX.1 Kontext. Get bold lines, expressive characters, and that retro 90s cartoon vibe instantly!",
                keywords: ["american cartoon style", "photo to cartoon", "90s cartoon style", "ai cartoonizer", "cartoon me", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/cartoon-style.jpeg"
            },
            pageHeader: {
                pageTitle: "AI American Cartoon Style Generator",
                pageTagline: "Get animated! Turn your world into a zany, classic cartoon with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Fun for Everyone, Toon-Style!",
                description: "From hilarious caricatures to custom comic strips, see how this style brings fun to your photos.",
                scenarios: [
                    {
                        id: "cartoon-caricature",
                        shortTitle: "Make a Funny Caricature",
                        originalTitle: "Create a Hilarious Cartoon Caricature for a Birthday Card",
                        tagline: "Your friends, but funnier.",
                        description: "Want a truly unique gift? Upload a photo of your friend and let FLUX.1 Kontext exaggerate their features in a fun, classic cartoon style. It's perfect for a memorable birthday card or a hilarious profile picture.",
                        category: "Gifts & Fun",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/cartoon/caricature-input.webp", alt: "Photo of a person", prompt: "A photo of a person making a face" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/cartoon/caricature-output.webp", alt: "Funny American cartoon style caricature generated by FLUX.1 Kontext", prompt: "A funny cartoon caricature of a person" }]
                    },
                    {
                        id: "cartoon-comic-strip",
                        shortTitle: "Create a Comic Strip",
                        originalTitle: "Generate Panels for a Custom Comic Strip",
                        tagline: "Tell a story, one panel at a time.",
                        description: "Become a comic creator. You can generate a series of images to tell a short story or a single-panel gag. Describe the scene and action for each panel to bring your narrative to life in a classic cartoon style.",
                        category: "Storytelling & Creativity",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/cartoon/comic-output.webp", alt: "A cartoon character slipping on a banana peel, by FLUX.1 Kontext", prompt: "A cartoon character slipping on a banana peel, comic strip style." }]
                    },
                    {
                        id: "cartoon-profile-picture",
                        shortTitle: "Get a Retro PFP",
                        originalTitle: "Create a Nostalgic 90s-Style Cartoon Profile Picture",
                        tagline: "Your profile, with a dose of nostalgia.",
                        description: "Stand out on social media with a profile picture that screams retro cool. Turn a selfie into a character from a 90s-era cartoon, complete with bold colors and a fun, expressive look. It's an instant conversation starter.",
                        category: "Social Media & Personal Fun",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/cartoon/pfp-input.webp", alt: "Selfie photo", prompt: "A person's selfie" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/cartoon/pfp-output.webp", alt: "90s cartoon style profile picture by FLUX.1 Kontext", prompt: "My profile picture in a 90s cartoon style." }]
                    }
                ]
            },
            gallerySection: {
                title: "That's All, Folks! A Cartoon Gallery",
                description: "See how ordinary photos get an extraordinary cartoon makeover, powered by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/cartoon/before-1.webp", "https://cdn.kontextflux.io/gallery/cartoon/after-1.webp"], alts: ["Original photo of a person", "Person transformed into American cartoon style"], prompt: "A person transformed into a 90s cartoon character." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/cartoon/before-2.webp", "https://cdn.kontextflux.io/gallery/cartoon/after-2.webp"], alts: ["Original photo of a cityscape", "Cityscape drawn in a classic cartoon style"], prompt: "A city in the style of a classic animated show." },
                ]
            },
            featuresSection: {
                title: "American Cartoon Style Features",
                description: "Why our cartoon generator is top-notch for that classic animated look.",
                items: [
                    { icon: "✒️", title: "Bold Outlines", description: "Creates the thick, clean outlines iconic to classic American animation." },
                    { icon: "🤪", title: "Exaggerated Expressions", description: "FLUX.1 Kontext amplifies emotions for comedic or dramatic effect, just like in the cartoons." },
                    { icon: "🎨", title: "Vibrant, Solid Colors", description: "Applies a bright and punchy color palette with minimal shading for that authentic feel." },
                    { icon: "💥", title: "Dynamic & Action-Oriented", description: "Easily generate characters in action poses that feel alive and energetic." },
                    { icon: "😂", title: "Comedic & Zany Vibe", description: "This style excels at creating humor, from silly expressions to over-the-top situations." },
                    { icon: "🖼️", title: "Simple Backgrounds", description: "Often uses simple, block-color or patterned backgrounds to keep the focus on the characters and their actions." },
                ]
            },
            faqSection: {
                title: "American Cartoon Style FAQs",
                items: [
                    { question: "Can it do a specific cartoon's style?", answer: "You can guide it! Try prompting for styles like 'in the style of a 1990s cartoon,' 'like a modern adult animation,' or 'like a Hanna-Barbera cartoon.' While it won't be a perfect copy, FLUX.1 Kontext will interpret these cues." },
                    { question: "How is this different from the 'Anime Style'?", answer: "American cartoons typically have bolder lines, more varied and exaggerated character shapes, and different facial conventions compared to the often more refined aesthetic of anime." },
                    { question: "Will it work on my pet?", answer: "Absolutely! This style is perfect for turning pets into zany, talking animal sidekicks or the star of their own cartoon show." },
                    { question: "How can I make a good caricature?", answer: "For best results, upload a photo where the person has a strong facial expression. Then, add words like 'exaggerated features' or 'big expressive eyes' to your prompt to enhance the effect." },
                    { question: "Can I add text bubbles?", answer: "The AI does not generate text bubbles directly. However, the style's clean composition leaves plenty of empty space, making it easy for you to add your own text in any image editing software." }
                ]
            },
        },

        // 17. Chinese Ink Style
        {
            id: "chinese-ink-style",
            slug: "chinese-ink-style",
            name: "Chinese Ink",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style//chinese-ink-style.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this into a Chinese ink wash painting.",
                    promptPrefix: "",
                    promptSuffix: ", in a traditional Chinese ink wash painting (Shuimo) style, with minimalist brushstrokes and an emphasis on atmosphere.",
                    placeholder: "A crane standing by a waterfall, Chinese ink painting style.",
                    promptExamples: [
                        "A mountain range shrouded in mist, Shuimo style.",
                        "A simple bamboo stalk in black ink.",
                        "A koi fish in a pond, minimalist ink style."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style//chinese-ink-style.webp"
                }
            },
            seo: {
                title: "Chinese Ink Painting AI Generator (Shuimo) | kontextflux.io",
                description: "Transform photos into beautiful, minimalist Chinese ink wash paintings (Shuimo) with FLUX.1 Kontext. Create serene, atmospheric art in seconds.",
                keywords: ["chinese ink painting", "shuimo style", "ai ink wash", "sumi-e generator", "minimalist art", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style//chinese-ink-style.webp"
            },
            pageHeader: {
                pageTitle: "AI Chinese Ink Style Generator",
                pageTagline: "Capture tranquility. Create elegant ink wash paintings with the soul of a master, powered by FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Art for a Mindful Space",
                description: "Generate art that brings peace, elegance, and a touch of philosophy to your environment.",
                scenarios: [
                    {
                        id: "ink-decor",
                        shortTitle: "Create Wall Art",
                        originalTitle: "Design Serene Chinese Ink Paintings for Home Decor",
                        tagline: "Minimalist art, maximum impact.",
                        description: "Elevate your living space. Transform a photo of a bird, a tree, or a landscape into a stunning Shuimo painting. Print and frame it for a touch of minimalist elegance and tranquility in your home or office.",
                        category: "Home Decor & Art",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/ink/decor-input.webp", alt: "Photo of a single tree on a hill", prompt: "A lone tree on a hill" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/ink/decor-output.webp", alt: "Chinese ink painting of a lone tree by FLUX.1 Kontext", prompt: "A lone tree on a hill in Shuimo style." }]
                    },
                    {
                        id: "ink-meditation-visual",
                        shortTitle: "Create a Meditation Visual",
                        originalTitle: "Generate a Calming Visual for Meditation and Mindfulness",
                        tagline: "Find your focus.",
                        description: "Create a serene, minimalist image to aid in your mindfulness practice. Generating a simple image of a bamboo forest or a misty mountain can provide a beautiful and calming visual focus point to display on a screen during meditation.",
                        category: "Health & Wellness",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/ink/meditation-output.webp", alt: "Minimalist ink wash of bamboo by FLUX.1 Kontext", prompt: "A minimalist ink wash painting of a bamboo stalk." }]
                    },
                    {
                        id: "ink-book-cover",
                        shortTitle: "Design a Book Cover",
                        originalTitle: "Create an Atmospheric Cover for a Book or Journal",
                        tagline: "A cover that speaks volumes, softly.",
                        description: "Authors and designers can generate a beautiful, atmospheric ink wash cover. This style is perfect for a book of poetry, a philosophical text, a historical novel, or a personal journal, conveying depth and elegance with a single image.",
                        category: "Design & Publishing",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/ink/book-input.webp", alt: "Photo of a koi fish", prompt: "A photo of a koi fish" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/ink/book-output.webp", alt: "Ink wash painting of a koi fish for a book cover by FLUX.1 Kontext", prompt: "An elegant ink wash painting of a single koi fish, for a book cover." }]
                    }
                ]
            },
            gallerySection: {
                title: "The Art of Simplicity",
                description: "Explore the beauty of the brushstroke and the power of negative space in these AI-generated ink paintings.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/ink/before-1.webp", "https://cdn.kontextflux.io/gallery/ink/after-1.webp"], alts: ["Original photo of mountains", "Mountains rendered in Chinese ink wash style"], prompt: "Misty mountains in Shuimo style." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/ink/before-2.webp", "https://cdn.kontextflux.io/gallery/ink/after-2.webp"], alts: ["Original photo of a bird", "Bird on a branch in minimalist ink style"], prompt: "A simple bird on a branch, ink wash painting." },
                ]
            },
            featuresSection: {
                title: "Ink Wash Features",
                description: "The key elements that FLUX.1 Kontext uses to capture the soul of ink painting.",
                items: [
                    { icon: "🖌️", title: "Expressive Brushstrokes", description: "FLUX.1 Kontext emulates the varied strokes of a painter, from wet washes to dry brush effects." },
                    { icon: "🌫️", title: "Atmospheric Focus", description: "Excels at creating mood and a sense of 'qi' (life force) with mist, water, and rich atmosphere." },
                    { icon: "⚫", title: "Monochromatic Mastery", description: "Beautifully translates color photos into rich, tonal black and white compositions with deep blacks and subtle grays." },
                    { icon: "📜", title: "Subtle Texture", description: "Can hint at the texture of rice paper when prompted, adding to the authenticity of the artwork." },
                    { icon: "⬜", title: "The Art of Negative Space", description: "Understands that the empty space (Ma) is as important as the painted parts, creating balanced and thoughtful compositions." },
                    { icon: "🧘", title: "Minimalist Composition", description: "Creates simple, elegant compositions with a single subject, capturing the essence rather than every detail." },
                ]
            },
            faqSection: {
                title: "Chinese Ink Painting FAQs",
                items: [
                    { question: "What do 'Shuimo' and 'Sumi-e' mean?", answer: "Shuimo (水墨) is the Chinese word for ink wash painting. Sumi-e (墨絵) is the Japanese term for the same art form. Both refer to this style of monochrome painting using black ink." },
                    { question: "Is it always black and white?", answer: "Predominantly, yes. However, you can try prompting for 'with a single red accent' or 'with a red chop seal' to mimic the artist's signature stamp, which FLUX.1 Kontext can interpret." },
                    { question: "What is the difference between this and 'Pencil Sketch'?", answer: "'Pencil Sketch' uses lines and shading to create form. 'Chinese Ink' uses brushstrokes and water to create tone, flow, and atmosphere, often with a more minimalist approach." },
                    { question: "What kind of photos work best for this style?", answer: "Images with simple, clear subjects and a lot of open space work wonderfully. Nature scenes, birds, mountains, and flowers are all classic subjects that translate beautifully." },
                    { question: "How does the AI create the 'atmosphere'?", answer: "FLUX.1 Kontext achieves this by using techniques learned from countless paintings, such as simulating how water blends with ink to create soft edges, or generating patches of mist that partially obscure the background." },
                    { question: "What is 'negative space' and why is it important?", answer: "Negative space (the empty part of the canvas) is a key element. It gives the subject room to breathe and directs the viewer's eye. It's not just empty; it's a part of the composition that creates balance and a sense of peace." }
                ]
            },
        },
        // Append these tools inside the `tools: [...]` array of your ImgStyle ThemeConfig.

        // 18. Clay Toy Style
        {
            id: "clay-toy-style",
            slug: "clay-toy-style",
            name: "Clay Toy Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/clay-toy-style.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Render this as if it were sculpted from modeling clay.",
                    promptPrefix: "",
                    promptSuffix: ", rendered as if sculpted from modeling clay, with soft rounded edges, a matte finish, and subtle fingerprint textures.",
                    placeholder: "A claymation dinosaur roaring.",
                    promptExamples: [
                        "A cute clay penguin with a scarf.",
                        "This person as a claymation character from a stop-motion film.",
                        "A scene of a fantasy world made entirely of clay."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/clay-toy-style.webp"
                }
            },
            seo: {
                title: "Clay Toy Style AI Generator (Claymation) | kontextflux.io",
                description: "Create charming claymation-style characters and scenes with FLUX.1 Kontext. Turn photos or ideas into cute, handcrafted-looking clay toys instantly.",
                keywords: ["claymation style", "photo to clay", "ai clay generator", "stop motion style", "modeling clay art", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/clay-toy-style.webp"
            },
            pageHeader: {
                pageTitle: "AI Clay Toy Style Generator",
                pageTagline: "Mold your imagination! Create charming claymation-style art with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Craft a Whimsical Clay World",
                description: "This style is perfect for creating charming illustrations, storybook characters, and fun, unique projects.",
                scenarios: [
                    {
                        id: "clay-storybook",
                        shortTitle: "Illustrate a Storybook",
                        originalTitle: "Create Characters for a Personalized Children's Storybook",
                        tagline: "Your family, as claymation heroes.",
                        description: "Bring a children's story to life by turning photos of your family and pets into a cast of adorable clay characters. FLUX.1 Kontext makes it easy to create consistent, charming illustrations for every page with a warm, handmade feel.",
                        category: "Creative Projects & Family",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/clay/storybook-input.webp", alt: "Photo of a child smiling", prompt: "A happy child's photo" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/clay/storybook-output.webp", alt: "Child transformed into a cute claymation character by FLUX.1 Kontext", prompt: "A cute child as a claymation character" }]
                    },
                    {
                        id: "clay-greeting-card",
                        shortTitle: "Design a Unique Card",
                        originalTitle: "Craft a Greeting Card with a Handmade Feel",
                        tagline: "A card that feels like a gift.",
                        description: "Design a birthday or holiday card that stands out. The claymation style gives your message a warm, personal, and tactile quality that feels more special than a standard printed card. Create a scene, a character, or a festive object in clay style.",
                        category: "Gifts & Crafts",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/clay/card-output.webp", alt: "A claymation snowman for a holiday card, by FLUX.1 Kontext", prompt: "A cute clay snowman wearing a scarf and top hat, for a holiday card." }]
                    },
                    {
                        id: "clay-brand-mascot",
                        shortTitle: "Create a Friendly Mascot",
                        originalTitle: "Design an Approachable Mascot for a Brand",
                        tagline: "A loveable face for your business.",
                        description: "Develop a friendly and approachable mascot for a small business, YouTube channel, or educational program. The clay style is inherently disarming and trustworthy, making it perfect for brands that want to communicate warmth and creativity.",
                        category: "Branding & Business",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/clay/mascot-output.webp", alt: "A friendly clay owl mascot wearing glasses, by FLUX.1 Kontext", prompt: "A wise and friendly owl mascot made of modeling clay, wearing reading glasses." }]
                    }
                ]
            },
            gallerySection: {
                title: "The Digital Claymation Studio",
                description: "A gallery of handcrafted-looking creations, sculpted by the digital hands of FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/clay/before-1.webp", "https://cdn.kontextflux.io/gallery/clay/after-1.webp"], alts: ["Original photo of an animal", "Animal sculpted in clay style"], prompt: "A red panda made of modeling clay." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/clay/before-2.webp", "https://cdn.kontextflux.io/gallery/clay/after-2.webp"], alts: ["Original photo of a vehicle", "Vehicle imagined as a clay model"], prompt: "A vintage car made of clay." },
                ]
            },
            featuresSection: {
                title: "Clay Style Features",
                description: "What makes our clay AI so special and authentic.",
                items: [
                    { icon: "🖐️", title: "Handmade Texture", description: "FLUX.1 Kontext can add subtle details like fingerprints and tool marks when prompted, enhancing the realism." },
                    { icon: "🎨", title: "Matte Finish", description: "Perfectly mimics the non-glossy, soft look of real modeling clay." },
                    { icon: "✨", title: "Soft & Rounded", description: "Creates organic, soft-edged shapes that feel like they've been molded by hand." },
                    { icon: "💡", title: "Imperfect Charm", description: "Captures the slight imperfections and asymmetries that give claymation its unique, handcrafted charm." },
                    { icon: "🌈", title: "Vibrant Clay Colors", description: "Uses the rich, solid colors characteristic of modeling clay, making your creations pop." },
                    { icon: "🎬", title: "Stop-Motion Vibe", description: "Every image feels like a single, perfect frame from a classic stop-motion animated film." },
                ]
            },
            faqSection: {
                title: "Claymation AI FAQs",
                items: [
                    { question: "Can it make stop-motion animations?", answer: "This tool creates still 2D images. However, you can generate a sequence of images with slight changes in your prompts (e.g., 'character waving', 'character jumping') and then assemble them in a third-party tool to create a stop-motion GIF or video." },
                    { question: "How does it compare to the '3D Chibi' style?", answer: "3D Chibi style aims for a polished, smooth, often glossy vinyl toy look. Clay Toy style is more organic, with a matte texture and handcrafted imperfections, like a character from a classic stop-motion film." },
                    { question: "How does the AI make it look handmade?", answer: "When prompted, FLUX.1 Kontext can add subtle, realistic textures it has learned from analyzing real clay models, such as faint fingerprints, tool scrapes, or the natural texture of the clay itself." },
                    { question: "What photos work best?", answer: "Photos with simple, clear subjects work best. Portraits of people and animals are perfect for being turned into charming clay characters. Complex backgrounds can sometimes be distracting." },
                    { question: "Can I request specific types of clay?", answer: "Yes, you can try being specific! Prompting for 'in the style of plasticine' or 'like it's made from earthenware clay' can influence the texture and finish of the final image." },
                    { question: "Does it work for objects and vehicles too?", answer: "Absolutely. It's great for turning cars, buildings, and other objects into cute, miniature clay models, perfect for creating charming scenes and dioramas." }
                ]
            },
        },

        // 19. Fabric Style
        {
            id: "fabric-style",
            slug: "fabric-style",
            name: "Fabric Style",
            icon: "https://cdn.kontextflux.io/ai-style/fabric-style-lion.jpg",
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this scene to appear as if it's made from felt and fabric.",
                    promptPrefix: "",
                    promptSuffix: ", as if made from felt, patchwork fabric, and stitching, with a soft textile texture.",
                    placeholder: "A landscape of rolling hills made from felt.",
                    promptExamples: [
                        "A portrait made of patchwork quilt.",
                        "A cute animal made from soft felt.",
                        "A car made from denim and leather patches."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/fabric-style-lion.jpg"
                }
            },
            seo: {
                title: "Fabric & Felt Style AI Art Generator | kontextflux.io",
                description: "Create cozy, tactile art with our Fabric Style AI. FLUX.1 Kontext transforms your photos into beautiful felt, patchwork, and stitched textile creations.",
                keywords: ["fabric style art", "felt art generator", "photo to textile", "ai patchwork", "stitched art", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/fabric-style-lion.jpg"
            },
            pageHeader: {
                pageTitle: "AI Fabric Style Generator",
                pageTagline: "Sew a masterpiece with AI! Craft beautiful textile art from any image with FLUX.1 Kontext.",

            },
            scenarioShowcase: {
                title: "Weave Your Ideas into Art",
                description: "Generate unique, cozy visuals perfect for crafts, design inspiration, and heartwarming digital content.",
                scenarios: [
                    {
                        id: "fabric-greeting-card",
                        shortTitle: "Design a Greeting Card",
                        originalTitle: "Design a Unique, Handcrafted-Looking Greeting Card",
                        tagline: "Say it with stitches.",
                        description: "Create a one-of-a-kind birthday or holiday card. Transform a simple drawing or photo into a charming felt and fabric illustration. The result is a warm, personal design that feels truly special and handmade.",
                        category: "Crafts & Design",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/fabric/card-input.webp", alt: "Simple drawing of a house", prompt: "A simple house drawing" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/fabric/card-output.webp", alt: "House made of felt and fabric by FLUX.1 Kontext", prompt: "A house made from felt and fabric patches." }]
                    },
                    {
                        id: "fabric-childrens-book",
                        shortTitle: "Illustrate Children's Content",
                        originalTitle: "Create Cozy Illustrations for a Children's Book",
                        tagline: "A story that feels warm to the touch.",
                        description: "The soft, tactile nature of fabric art is perfect for children's content. Generate friendly characters and gentle scenes for a book, educational material, or video. The style is inviting, safe, and stimulates the imagination.",
                        category: "Publishing & Education",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/fabric/book-output.webp", alt: "A friendly felt lion character for a children's book, by FLUX.1 Kontext", prompt: "A friendly lion character made of felt, for a children's book." }]
                    },
                    {
                        id: "fabric-craft-inspiration",
                        shortTitle: "Visualize a Craft Project",
                        originalTitle: "Generate Inspiration for a Quilting or Sewing Project",
                        tagline: "Your next project, visualized.",
                        description: "Planning a new quilt, appliqué, or felt craft? Use the AI to quickly visualize your ideas. Turn a photo or a sketch into a fabric art concept to test color combinations and compositions before you ever cut a piece of real fabric.",
                        category: "Hobbies & Crafts",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/fabric/craft-input.webp", alt: "A complex geometric pattern", prompt: "A geometric pattern" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/fabric/craft-output.webp", alt: "A geometric pattern realized as a quilt design by FLUX.1 Kontext", prompt: "A complex geometric pattern as a patchwork quilt design." }]
                    }
                ]
            },
            gallerySection: {
                title: "A Tapestry of AI Creations",
                description: "Explore a world woven from digital threads, felt, and fabric by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/fabric/before-1.webp", "https://cdn.kontextflux.io/gallery/fabric/after-1.webp"], alts: ["Original portrait", "Portrait recreated in felt"], prompt: "A portrait made from layered felt." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/fabric/before-2.webp", "https://cdn.kontextflux.io/gallery/fabric/after-2.webp"], alts: ["Original landscape", "Landscape as a patchwork quilt"], prompt: "A landscape made of patchwork fabric." },
                ]
            },
            featuresSection: {
                title: "Fabric Art Features",
                description: "How FLUX.1 Kontext brings the texture and charm of textiles to your images.",
                items: [
                    { icon: "🧵", title: "Realistic Stitching", description: "Adds detailed stitch effects, from simple running stitches to decorative embroidery, to enhance the handmade feel." },
                    { icon: "🧩", title: "Patchwork & Appliqué", description: "Intelligently converts parts of your image into distinct fabric patches, creating a beautiful appliqué look." },
                    { icon: "☁️", title: "Soft Felt Texture", description: "Perfectly simulates the soft, matte texture of craft felt for a cozy and cute aesthetic." },
                    { icon: "🎨", title: "Diverse Textiles", description: "Prompt for different materials like 'denim', 'burlap', or 'silk' to get a variety of fabric effects." },
                    { icon: "겹", title: "Layered Dimension", description: "Creates a sense of depth by rendering layers of fabric with subtle shadows, making it look three-dimensional." },
                    { icon: "💖", title: "Cozy & Heartwarming", description: "The inherent warmth of textile art makes every creation feel comforting and personal." },
                ]
            },
            faqSection: {
                title: "Fabric Style AI FAQs",
                items: [
                    { question: "Can I specify the type of stitching?", answer: "Yes, you can try being specific in your prompt! For example, 'with thick, visible yarn stitching' or 'with delicate, silver thread embroidery' can guide FLUX.1 Kontext to produce different results." },
                    { question: "How does the AI create these textures?", answer: "The AI has learned the visual characteristics of various textiles—the weave of denim, the fuzziness of felt, the look of thread. It applies these learned textures to the shapes and colors of your source image." },
                    { question: "What's the difference between this and 'Clay Toy' style?", answer: "The core difference is the texture. Fabric Style simulates soft, woven, or pressed materials like felt and cotton. Clay Toy style simulates a solid, moldable material like modeling clay, with a totally different surface and feel." },
                    { question: "Can I use the output as a real sewing pattern?", answer: "The output is a 2D artistic image, not a technical sewing pattern. However, it's an excellent tool for creating a visual guide or inspiration for a pattern you would then draft yourself." },
                    { question: "Does it only use felt?", answer: "No, felt is a common default, but the model is versatile. You can get amazing results by prompting for 'a portrait made of layered denim' or 'a landscape made from silk ribbons'." },
                    { question: "What photos are best for this style?", answer: "Images with simple shapes and bold color areas work very well, as they translate cleanly into distinct fabric patches. Portraits and simple landscapes are excellent choices." }
                ]
            },
        },

        // 20. Jojo Style
        {
            id: "jojo-style",
            slug: "jojo-style",
            name: "Jojo Style",
            icon: "https://cdn.kontextflux.io/ai-style/jojo-style.png",
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this person into a character in the style of Jojo's Bizarre Adventure.",
                    promptPrefix: "",
                    promptSuffix: ", in the distinctive and highly stylized art style of Jojo's Bizarre Adventure, with dramatic posing, intense shading, and vibrant colors.",
                    placeholder: "A character striking a dramatic pose, Jojo style.",
                    promptExamples: [
                        "Me and my Stand, in Jojo style.",
                        "A villainous character with menacing kanji effects.",
                        "A hero portrait in the style of Part 3."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/jojo-style.png"
                }
            },
            seo: {
                title: "Jojo Style AI Art Generator | Bizarre Adventure Style | kontextflux.io",
                description: "ORA ORA ORA! Unleash your Stand and transform photos into the epic, flamboyant style of Jojo's Bizarre Adventure with FLUX.1 Kontext. It's time to get bizarre!",
                keywords: ["jojo style generator", "bizarre adventure art", "photo to jojo", "ai stand generator", "anime art generator", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/jojo-style.png",
            },
            pageHeader: {
                pageTitle: "AI Jojo Style Generator",
                pageTagline: "Unleash your Stand! Create epic, bizarre art with the power of FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Embrace the Bizarre",
                description: "Create jaw-dropping profile pictures, epic memes, and unforgettable fan art that screams 'Jojo!'.",
                scenarios: [
                    {
                        id: "jojo-profile-pic",
                        shortTitle: "Create an Epic PFP",
                        originalTitle: "Forge an Unforgettable Profile Picture in Jojo Style",
                        tagline: "Your profile, but with 100% more drama.",
                        description: "Dominate social media with a profile picture that's impossible to ignore. Upload a selfie and let FLUX.1 Kontext turn you into a Stand user, complete with a dramatic pose, intense lighting, and maybe even some menacing sound effects.",
                        category: "Social Media & Fun",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/jojo/pfp-input.webp", alt: "Photo of a person posing", prompt: "A person posing" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/jojo/pfp-output.webp", alt: "Person turned into a Jojo-style character by FLUX.1 Kontext", prompt: "An epic Jojo-style character portrait." }]
                    },
                    {
                        id: "jojo-character-concept",
                        shortTitle: "Design an Original Character",
                        originalTitle: "Create an Original Jojo-Style Character and Stand",
                        tagline: "Your own bizarre adventure starts here.",
                        description: "Bring your original character ideas to life. Describe your character, their outfit, their personality, and even their Stand power. FLUX.1 Kontext is the ultimate tool for visualizing your creations for a fanfic, TTRPG, or just for fun.",
                        category: "Creative Writing & Gaming",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/jojo/oc-output.webp", alt: "An original Jojo character with a musical-themed Stand, by FLUX.1 Kontext", prompt: "An original Jojo character with a Stand named 'Smooth Criminal' that can manipulate shadows." }]
                    },
                    {
                        id: "jojo-meme-generator",
                        shortTitle: "Generate a 'To Be Continued' Meme",
                        originalTitle: "Create Your Own 'To Be Continued' Meme",
                        tagline: "Turn any moment into a cliffhanger.",
                        description: "Take any photo of a funny or awkward situation and turn it into a classic Jojo meme. FLUX.1 Kontext can adapt the photo into the Jojo art style, making it the perfect setup for slapping on the iconic 'To Be Continued' arrow.",
                        category: "Memes & Social Fun",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/jojo/meme-input.webp", alt: "Photo of a cat about to knock over a glass", prompt: "A cat about to knock over a glass" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/jojo/meme-output.webp", alt: "Cat and glass drawn in Jojo style as a meme, by FLUX.1 Kontext", prompt: "A cat about to knock over a glass, drawn in a dramatic Jojo anime style." }]
                    }
                ]
            },
            gallerySection: {
                title: "A Bizarre Gallery",
                description: "Witness ordinary people and scenes transformed into the unmistakable, high-impact style of Jojo's Bizarre Adventure.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/jojo/before-1.webp", "https://cdn.kontextflux.io/gallery/jojo/after-1.webp"], alts: ["Original portrait", "Portrait in Jojo style"], prompt: "A hero's dramatic pose, Jojo style." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/jojo/before-2.webp", "https://cdn.kontextflux.io/gallery/jojo/after-2.webp"], alts: ["Original photo of two people", "Two characters in a Jojo-style confrontation"], prompt: "A dramatic confrontation, Jojo style." },
                ]
            },
            featuresSection: {
                title: "It's a Jojo Reference!",
                description: "The key elements FLUX.1 Kontext uses to capture the series' unique aesthetic.",
                items: [
                    { icon: "💪", title: "Dramatic Posing", description: "The AI excels at creating the iconic, impossible, and fabulous poses the series is famous for." },
                    { icon: "🎨", title: "Unique Color Palettes", description: "Applies wild, non-traditional color schemes to characters and skies for maximum visual impact." },
                    { icon: "✨", title: "Intense Shading & Lines", description: "Uses heavy blacks and detailed cross-hatching to create a chiseled, high-contrast look." },
                    { icon: "ゴ", title: "Menacing Effects", description: "Prompt for 'menacing' or 'gogogo' sound effect text to add that final, perfect touch." },
                    { icon: "🥋", title: "Flamboyant Fashion", description: "The AI has a deep understanding of the unique, often avant-garde fashion styles seen throughout the series." },
                    { icon: "🎭", title: "High-Impact Drama", description: "Generates images that feel like a key frame from an intense confrontation, full of energy and emotion." },
                ]
            },
            faqSection: {
                title: "Jojo Style AI FAQs",
                items: [
                    { question: "Can I generate a 'Stand' for my character?", answer: "Yes! Prompt something like, 'A character with a fiery phoenix Stand behind them, Jojo style.' FLUX.1 Kontext's character consistency can help create both you and your Stand." },
                    { question: "Is this based on a specific part of the anime/manga?", answer: "The AI draws from the entire series' aesthetic. You can try to guide it by prompting 'in the style of Part 3' or 'in the style of Part 5' to see if it produces a more specific look." },
                    { question: "Is this officially licensed or affiliated with the show?", answer: "No, this is a tool for creating fan art *inspired by* the show's unique art style. It is not affiliated with Hirohiko Araki, Shueisha, or David Production." },
                    { question: "Why are the colors so weird and constantly changing in the show?", answer: "That's a deliberate artistic choice by the author and animation studio! The vibrant, non-realistic colors are used to heighten emotion and drama. Our AI embraces this." },
                    { question: "What kind of photos work best for this style?", answer: "Photos with dynamic poses, strong facial expressions, or good lighting will give the AI the best material to transform into something truly 'bizarre' and dramatic." },
                    { question: "How do I get the 'menacing' text effect?", answer: "Simply add the phrase 'with menacing kanji effects' or 'with gogogo sound effects' to your text prompt. The AI will recognize this and often add the iconic characters to the image." },
                    { question: "Will the AI make my character muscular?", answer: "The art style, particularly in the early parts, is known for its heavily muscled characters. The AI will likely lean into this trope, so be prepared for a more heroic physique!" }
                ]
            },
        },

        // 21. LEGO Style
        {
            id: "lego-style",
            slug: "lego-style",
            name: "LEGO Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/lego-style.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this image into a scene made from LEGO bricks.",
                    promptPrefix: "",
                    promptSuffix: ", as if built from LEGO bricks, with visible studs and a plastic texture.",
                    placeholder: "A futuristic robot made of classic LEGO Technic pieces, showcasing exposed gears, axles, and pins",
                    promptExamples: [
                        "Turn this person into a LEGO minifigure.",
                        "This car as a LEGO model.",
                        "A landscape made entirely of LEGO bricks."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/lego-style.jpeg"
                }
            },
            seo: {
                title: "LEGO Style AI Generator | Turn Photos into Bricks | kontextflux.io",
                description: "Everything is awesome! Transform your photos and ideas into incredible LEGO brick creations with FLUX.1 Kontext. Build your world with AI.",
                keywords: ["lego style generator", "photo to lego", "ai lego builder", "brick art generator", "lego minifigure creator", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/lego-style.jpeg"
            },
            pageHeader: {
                pageTitle: "AI LEGO Style Generator",
                pageTagline: "Build anything you can imagine, one AI brick at a time, with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Build Your World, Brick by Brick",
                description: "From custom minifigures to epic landscapes, see what's possible when AI meets the brick.",
                scenarios: [
                    {
                        id: "lego-family-portrait",
                        shortTitle: "Create a Family Portrait",
                        originalTitle: "Create an Awesome LEGO Family Portrait",
                        tagline: "Your family, as minifigures.",
                        description: "Create a fun, unique family picture that everyone will love. Upload a group photo and let FLUX.1 Kontext turn everyone into their own custom LEGO minifigure. It's the perfect quirky image for a holiday card or a social media post.",
                        category: "Family & Fun",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/lego/family-input.webp", alt: "Photo of a family", prompt: "A family photo" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/lego/family-output.webp", alt: "Family as LEGO minifigures by FLUX.1 Kontext", prompt: "A family portrait of LEGO minifigures." }]
                    },
                    {
                        id: "lego-moc-visualization",
                        shortTitle: "Visualize a Custom Build",
                        originalTitle: "Brainstorm and Visualize a MOC (My Own Creation)",
                        tagline: "From imagination to blueprint.",
                        description: "Have an epic idea for a LEGO build but not sure where to start? Describe your concept, like a 'cyberpunk spaceship' or a 'fantasy castle', and let FLUX.1 Kontext generate a detailed visual. It's the ultimate brainstorming tool for LEGO builders.",
                        category: "Hobbies & Creativity",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/lego/moc-output.webp", alt: "A complex cyberpunk spaceship made of LEGOs by FLUX.1 Kontext", prompt: "A detailed cyberpunk spaceship MOC, built from LEGO bricks." }]
                    },
                    {
                        id: "lego-instruction-cover",
                        shortTitle: "Design Instruction Art",
                        originalTitle: "Create Cover Art for a Custom Build's Instructions",
                        tagline: "The 'box art' for your creation.",
                        description: "If you design and share your own LEGO builds, you need exciting cover art for the instructions. Generate a dynamic, 'official-looking' image of your completed model in action to make your creation look as appealing as possible.",
                        category: "Design & Hobbies",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/lego/instructions-input.webp", alt: "A photo of a custom LEGO car model", prompt: "A custom LEGO race car" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/lego/instructions-output.webp", alt: "Action shot of the LEGO car for instruction cover art, by FLUX.1 Kontext", prompt: "An action shot of a red LEGO race car driving on a track." }]
                    }
                ]
            },
            gallerySection: {
                title: "The Awesome Gallery",
                description: "Explore a world of amazing creations, all built from digital LEGO bricks by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/lego/before-1.webp", "https://cdn.kontextflux.io/gallery/lego/after-1.webp"], alts: ["Original portrait", "Person as a LEGO minifigure"], prompt: "A portrait as a LEGO minifigure." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/lego/before-2.webp", "https://cdn.kontextflux.io/gallery/lego/after-2.webp"], alts: ["Original landscape", "Landscape built from LEGO bricks"], prompt: "A forest scene built from LEGOs." },
                ]
            },
            featuresSection: {
                title: "Awesome AI Features",
                description: "How FLUX.1 Kontext captures the look and feel of LEGO bricks.",
                items: [
                    { icon: "🧱", title: "Authentic Brick Construction", description: "The AI understands how to build shapes and objects using classic brick forms, not just applying a texture." },
                    { icon: "🙂", title: "Classic Minifigure Style", description: "Transforms people into charming LEGO minifigures, complete with iconic hands, faces, and hairstyles." },
                    { icon: "✨", title: "Visible Studs & Gloss", description: "Adds the tell-tale studs on top of bricks and a realistic plastic sheen for an authentic toy look." },
                    { icon: "🎨", title: "Vibrant LEGO Colors", description: "Uses the bright, primary color palette that is characteristic of official LEGO sets." },
                    { icon: "🔧", title: "Recognizes Special Pieces", description: "Can incorporate specific elements like 'transparent blue bricks' for water or 'technic pieces' for engines when prompted." },
                    { icon: "🌍", title: "Builds Entire Worlds", description: "Goes beyond single objects to create entire landscapes and scenes constructed completely from bricks." },
                ]
            },
            faqSection: {
                title: "LEGO Style AI FAQs",
                items: [
                    { question: "Does this create a 3D model or building instructions?", answer: "No, this tool generates a 2D image that looks like it's made of LEGO bricks. It does not produce a 3D model file or a set of instructions for building it in real life. It's a visualization tool." },
                    { question: "Can I request specific LEGO pieces or colors?", answer: "Yes, you can try! Prompting for 'using transparent blue bricks for water' or 'a car built from red and white bricks' will strongly influence the final image." },
                    { question: "How does it turn a person into a minifigure?", answer: "The AI recognizes the human form in a photo and stylizes it according to the design rules of a LEGO minifigure: cylindrical head, C-shaped hands, distinct body shape, etc." },
                    { question: "Is this tool affiliated with The LEGO Group?", answer: "No, this tool is not affiliated with or endorsed by The LEGO Group. It is a fan-inspired tool for creating art in a similar 'interlocking brick' style." },
                    { question: "Can it build things from licensed themes like Star Wars or Harry Potter?", answer: "You can prompt for 'a wizard school castle built from bricks' or 'a space knight with a laser sword minifigure'. It will generate images inspired by these themes in the brick style." },
                    { question: "Will the generated builds be 'legal' in terms of LEGO building techniques?", answer: "Not necessarily. The AI aims for a visually authentic look, but it might use 'illegal' building techniques (connections that would stress real bricks) to achieve it. It's focused on art, not engineering." }
                ]
            },
        },

        // 22. Line Style
        {
            id: "line-style",
            slug: "line-style",
            name: "Line Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/line-art-style.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this image into a simple, clean line art illustration.",
                    promptPrefix: "",
                    promptSuffix: ", as a minimalist line art drawing, with clean, strong outlines and no shading.",
                    placeholder: "A single continuous line drawing of a face.",
                    promptExamples: [
                        "A minimalist outline of a cat.",
                        "Architectural drawing with clean lines.",
                        "A simple line drawing for a coloring book page."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/line-art-style.webp",
                }
            },
            seo: {
                title: "Line Art AI Generator | Photo to Line Drawing | kontextflux.io",
                description: "Create elegant, minimalist line art from your photos with FLUX.1 Kontext. Perfect for coloring pages, tattoo designs, and clean illustrations.",
                keywords: ["line art generator", "photo to line drawing", "minimalist art", "outline drawing", "coloring page maker", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/line-art-style.webp",
            },
            pageHeader: {
                pageTitle: "AI Line Art Generator",
                pageTagline: "Find beauty in simplicity. Create elegant line drawings from any image with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "The Power of the Line",
                description: "From relaxing hobbies to professional design, see how versatile clean line art can be.",
                scenarios: [
                    {
                        id: "line-art-tattoo",
                        shortTitle: "Design a Tattoo",
                        originalTitle: "Create a Minimalist Tattoo Design",
                        tagline: "Your idea, inked in lines.",
                        description: "Have a tattoo idea but can't draw? Describe it or upload a reference photo and let FLUX.1 Kontext generate a clean, minimalist line art version. It's the perfect way to visualize your concept to show to a real tattoo artist.",
                        category: "Design & Personal",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/line/tattoo-input.webp", alt: "Photo of a flower", prompt: "A photo of a lily flower" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/line/tattoo-output.webp", alt: "Minimalist line art of a lily by FLUX.1 Kontext", prompt: "A minimalist line art tattoo design of a lily." }]
                    },
                    {
                        id: "line-art-coloring-page",
                        shortTitle: "Make Coloring Pages",
                        originalTitle: "Create Custom Coloring Pages for Kids and Adults",
                        tagline: "Turn any photo into a relaxing activity.",
                        description: "Create personalized coloring sheets in seconds. Upload photos of your kids, your pets, or their favorite characters, and transform them into simple line drawings. It's a fantastic way to create endless, unique coloring activities.",
                        category: "Family Fun & Hobbies",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/line/coloring-input.webp", alt: "Photo of a dinosaur toy", prompt: "A toy T-Rex" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/line/coloring-output.webp", alt: "A line art coloring page of a T-Rex by FLUX.1 Kontext", prompt: "A simple line art coloring page of a T-Rex for a child." }]
                    },
                    {
                        id: "line-art-icon",
                        shortTitle: "Generate Clean Icons",
                        originalTitle: "Brainstorm Minimalist Icons for a Website or App",
                        tagline: "Simple, clear communication.",
                        description: "Need a clean, simple icon for a UI or presentation? Describe the object or concept, and FLUX.1 Kontext will generate a minimalist line art icon. It's a fast and effective way to brainstorm and create visual elements for digital projects.",
                        category: "Web & UI Design",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/line/icon-output.webp", alt: "A minimalist line art icon of a gear, by FLUX.1 Kontext", prompt: "A minimalist line art icon of a gear for settings." }]
                    }
                ]
            },
            gallerySection: {
                title: "A Gallery of Fine Lines",
                description: "See how complex photos are transformed into simple, elegant line art by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/line/before-1.webp", "https://cdn.kontextflux.io/gallery/line/after-1.webp"], alts: ["Original portrait", "Portrait as a minimalist line drawing"], prompt: "A minimalist line art portrait." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/line/before-2.webp", "https://cdn.kontextflux.io/gallery/line/after-2.webp"], alts: ["Original animal photo", "Animal as a simple outline"], prompt: "The outline of a running horse." },
                ]
            },
            featuresSection: {
                title: "Line Art Features",
                description: "How FLUX.1 Kontext masters the art of the elegant outline.",
                items: [
                    { icon: "✒️", title: "Clean & Crisp Outlines", description: "Generates smooth, consistent lines that cleanly define the subject's form." },
                    { icon: "✨", title: "Elegant Simplicity", description: "Reduces complex images to their essential shapes, creating a modern and sophisticated look." },
                    { icon: "🎨", title: "Coloring Page Ready", description: "Creates perfect outlines with empty spaces, ideal for printing and coloring for all ages." },
                    { icon: "💡", title: "Focus on Form", description: "By removing color and shading, this style puts all the emphasis on the pure form and shape of the subject." },
                    { icon: "〰️", title: "Single Line Style", description: "Can be specifically prompted to create 'single continuous line drawings' for a highly artistic effect." },
                    { icon: "🧩", title: "Versatile & Adaptable", description: "Works beautifully for portraits, landscapes, objects, and abstract concepts, making it highly versatile." },
                ]
            },
            faqSection: {
                title: "Line Art AI FAQs",
                items: [
                    { question: "What's the difference between 'Line Style' and 'Pencil Sketch'?", answer: "'Pencil Sketch' aims to replicate a hand-drawn sketch with shading, texture, and varied line weights. 'Line Style' is focused on creating clean, uniform outlines with little to no shading, similar to a vector illustration." },
                    { question: "Can I get a single continuous line drawing?", answer: "Yes, try prompting for 'a single continuous line drawing of a face'. FLUX.1 Kontext understands this specific artistic style and will attempt to create it." },
                    { question: "Is the output a true vector file (like .SVG)?", answer: "No, it's a high-resolution raster image (like a PNG). However, because the lines are so clean, it's very easy to use an 'auto trace' function in software like Adobe Illustrator to convert it into a true vector file." },
                    { question: "What photos work best for this style?", answer: "Photos with a clear subject and a relatively simple background work best. A strong silhouette helps the AI identify the most important lines to draw." },
                    { question: "Can I control the line thickness?", answer: "Yes, you can try to influence it by adding 'with thick bold lines' or 'with thin delicate lines' to your prompt. The results may vary, but it can help guide the AI." },
                    { question: "Is the background always white?", answer: "By default, the style implies a white or transparent background to emphasize the lines. You can try prompting for a colored background, but it's not the primary feature of this style." },
                    { question: "Can it handle complex scenes like a city street?", answer: "Yes, but the style's strength is in simplification. It will translate a complex scene into a network of lines, which can be a very interesting artistic effect in its own right, abstracting the complexity." }
                ]
            },
        },
        // Append these tools inside the `tools: [...]` array of your ImgStyle ThemeConfig.

        // 23. Macaron Style
        {
            id: "macaron-style",
            slug: "macaron-style",
            name: "Macaron Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/macaron-style.png",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Render this in a soft, pastel 'Macaron' color palette.",
                    promptPrefix: "",
                    promptSuffix: ", in a 'Macaron style' with a soft pastel color palette, smooth rounded aesthetic, and a sweet, gentle feel.",
                    placeholder: "A collection of cute animals in a macaron pastel style.",
                    promptExamples: [
                        "A cityscape in soft pastel pinks, blues, and yellows.",
                        "A cute character with a macaron-themed outfit.",
                        "Interior design with a macaron pastel color scheme."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/macaron-style.png"
                }
            },
            seo: {
                title: "Macaron Style AI Art Generator | Pastel Aesthetic | kontextflux.io",
                description: "Create delightfully sweet and soft images with our Macaron Style AI. FLUX.1 Kontext applies beautiful pastel color palettes and smooth, rounded aesthetics.",
                keywords: ["macaron style", "pastel aesthetic generator", "cute art", "soft color palette", "kawaii art", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/macaron-style.png"
            },
            pageHeader: {
                pageTitle: "AI Macaron Style Generator",
                pageTagline: "Add a touch of sweetness to your images with the soft pastel magic of FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "A Softer, Sweeter World",
                description: "Use this delightful style for branding, social media, or just to make your day a little cuter.",
                scenarios: [
                    {
                        id: "macaron-social-media",
                        shortTitle: "Create Cute Social Posts",
                        originalTitle: "Design an Adorable Social Media Feed",
                        tagline: "Your brand, but irresistibly cute.",
                        description: "Make your Instagram or Pinterest feed stand out with a consistent, soft, and pretty aesthetic. Generate product mockups, announcements, or lifestyle images in the Macaron style to create a friendly and approachable brand identity.",
                        category: "Branding & Social Media",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/macaron/social-input.webp", alt: "Photo of a coffee cup", prompt: "A cup of coffee" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/macaron/social-output.webp", alt: "Coffee cup in macaron pastel style by FLUX.1 Kontext", prompt: "A cute coffee cup illustration in a macaron pastel style." }]
                    },
                    {
                        id: "macaron-nursery-art",
                        shortTitle: "Design Nursery Art",
                        originalTitle: "Create Gentle Art for a Nursery or Child's Room",
                        tagline: "Sweet dreams are made of this.",
                        description: "Decorate a child's room with soft, gentle, and happy artwork. Turn ideas like 'a smiling cloud' or 'a baby elephant' into beautiful pastel illustrations that are perfect for creating a calm and loving environment for a little one.",
                        category: "Home Decor & Family",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/macaron/nursery-output.webp", alt: "A cute pastel moon and stars illustration by FLUX.1 Kontext", prompt: "A sleeping moon and friendly stars in a soft macaron pastel style." }]
                    },
                    {
                        id: "macaron-product-design",
                        shortTitle: "Conceptualize Product Designs",
                        originalTitle: "Brainstorm Cute Designs for Stationery and Accessories",
                        tagline: "Your products, but cuter.",
                        description: "Quickly generate concepts for products aimed at a 'kawaii' or cute market. Visualize patterns for phone cases, designs for stickers and notebooks, or character concepts for merchandise, all in a cohesive and appealing pastel aesthetic.",
                        category: "Design & Business",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/macaron/product-output.webp", alt: "A pattern of cute pastel cats for a phone case, by FLUX.1 Kontext", prompt: "A repeating pattern of cute, simple cats in a macaron color palette." }]
                    }
                ]
            },
            gallerySection: {
                title: "A Box of Sweet Creations",
                description: "Explore a gallery of images, all given a sweet and soft makeover by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/macaron/before-1.webp", "https://cdn.kontextflux.io/gallery/macaron/after-1.webp"], alts: ["Original object photo", "Object in macaron style"], prompt: "A vintage camera in pastel pink, macaron style." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/macaron/before-2.webp", "https://cdn.kontextflux.io/gallery/macaron/after-2.webp"], alts: ["Original food photo", "Food as cute illustration"], prompt: "A stack of pancakes in a cute, soft pastel style." },
                ]
            },
            featuresSection: {
                title: "Sweet Features",
                description: "How FLUX.1 Kontext creates the delectable Macaron aesthetic.",
                items: [
                    { icon: "🎨", title: "Perfect Pastel Palette", description: "Automatically applies a beautiful color scheme of soft pinks, mint greens, baby blues, and gentle yellows." },
                    { icon: "🍬", title: "Smooth & Rounded", description: "Gives objects and characters a soft, rounded appearance, enhancing the cute and gentle feel." },
                    { icon: "✨", title: "Clean & Gentle Mood", description: "Creates clean illustrations with soft gradients and a light, airy mood, free of harsh lines or shadows." },
                    { icon: "💖", title: "Irresistibly Cute", description: "The combination of colors and shapes is designed to maximize the 'kawaii' or cute factor of any subject." },
                    { icon: "🍰", title: "Sweet & Appetizing", description: "This style makes not just food, but any object, look delightful and appealing." },
                    { icon: "🌸", title: "Versatile Application", description: "Works wonderfully on characters, objects, landscapes, and abstract patterns, making it highly flexible." },
                ]
            },
            faqSection: {
                title: "Macaron Style AI FAQs",
                items: [
                    { question: "What exactly is 'Macaron Style'?", answer: "It's an aesthetic inspired by the famous French macarons. It's not about the food itself, but about its characteristic soft, pastel colors and smooth, rounded shapes. It evokes a feeling of sweetness, gentleness, and charm." },
                    { question: "Can I choose the specific pastel colors?", answer: "Yes. While the AI defaults to a classic macaron palette, you can specify in your prompt, for example, 'in a macaron style using only pastel blue and lavender' to guide the output." },
                    { question: "Is it only for 'cute' things?", answer: "While it excels at creating cute imagery, it can be used for many applications. Applying it to a serious object, like a skull or a car, creates an interesting artistic juxtaposition that can be very powerful." },
                    { question: "How is this different from other pastel styles?", answer: "Macaron style is not just about the pastel colors. It's also defined by the soft, rounded forms, clean lines, and a deliberate avoidance of sharp edges or complex textures, creating a uniquely gentle and smooth look." },
                    { question: "Does it work well on photos of people?", answer: "Yes, it transforms portraits into cute, simplified, and stylized illustrations, similar to a modern 'kawaii' art style. It's great for creating charming avatars." },
                    { question: "What kind of prompts work best?", answer: "Simple concepts work very well. 'A cute cat', 'a smiling cloud', 'a cup of tea'. Also, adding adjectives like 'gentle', 'soft', 'sweet', and 'charming' will help reinforce the style." }
                ]
            },
        },

        // 24. Oil Painting Style
        {
            id: "oil-painting-style",
            slug: "oil-painting-style",
            name: "Oil Painting Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/oil-painting-style.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Render this image with the rich textures of a traditional oil painting.",
                    promptPrefix: "",
                    promptSuffix: ", as a classical oil painting, with rich textures, visible brushwork, and deep colors.",
                    placeholder: "A portrait of a queen, in the style of an old master oil painting.",
                    promptExamples: [
                        "A dramatic landscape with thick impasto brushstrokes.",
                        "A still life of a bowl of fruit, classical oil painting.",
                        "A pet portrait in the style of a renaissance oil painting."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/oil-painting-style.jpeg"
                }
            },
            seo: {
                title: "Oil Painting AI Generator | Photo to Painting | kontextflux.io",
                description: "Become a digital Old Master. Transform your photos into timeless, textured oil paintings with FLUX.1 Kontext. Create stunning masterpieces for print and display.",
                keywords: ["photo to oil painting", "ai painting generator", "oil painting effect", "digital art masterpiece", "impasto effect", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/oil-painting-style.jpeg"
            },
            pageHeader: {
                pageTitle: "AI Oil Painting Generator",
                pageTagline: "Turn your photos into timeless masterpieces with the rich texture of oil paints, powered by FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Your Life as Fine Art",
                description: "Create breathtaking, classic art that's perfect for printing, gifting, or simply admiring.",
                scenarios: [
                    {
                        id: "oil-painting-portrait",
                        shortTitle: "Create a Timeless Portrait",
                        originalTitle: "Create a Regal, Timeless Portrait on Canvas",
                        tagline: "Your legacy, painted in oil.",
                        description: "Transform a standard family or pet photo into a magnificent oil painting. FLUX.1 Kontext adds rich textures and classical lighting, creating a piece of art that looks like it belongs in a museum. It's perfect for printing on canvas to create an unforgettable gift.",
                        category: "Gifts & Home Decor",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/oil/portrait-input.webp", alt: "Photo of a pet dog", prompt: "A photo of a dog" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/oil/portrait-output.webp", alt: "Dog as a classical oil painting by FLUX.1 Kontext", prompt: "A regal oil painting portrait of a dog." }]
                    },
                    {
                        id: "oil-painting-landscape",
                        shortTitle: "Transform a Landscape",
                        originalTitle: "Turn a Vacation Photo into a Dramatic Landscape Painting",
                        tagline: "Your memories, elevated to art.",
                        description: "That favorite photo from your travels deserves to be more than just a file on your phone. Turn a landscape shot into a dramatic impressionist or romanticist oil painting. The AI can enhance the colors and atmosphere to create a truly breathtaking piece of art.",
                        category: "Art & Personal Memories",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/oil/landscape-input.webp", alt: "Photo of a mountain range", prompt: "A mountain range at sunset" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/oil/landscape-output.webp", alt: "A dramatic oil painting of mountains by FLUX.1 Kontext", prompt: "A dramatic impressionist oil painting of a mountain range at sunset." }]
                    },
                    {
                        id: "oil-painting-study",
                        shortTitle: "Study the Masters",
                        originalTitle: "Recreate a Scene in the Style of a Famous Painter",
                        tagline: "Learn from the best, with AI.",
                        description: "For art students and enthusiasts, this tool is a powerful way to learn. Take a photo of a modern scene and prompt the AI to render it 'in the style of Van Gogh' or 'with the lighting of Rembrandt'. It helps to understand what makes each master's style unique.",
                        category: "Education & Study",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/oil/study-input.webp", alt: "A photo of a modern cafe", prompt: "A modern cafe interior" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/oil/study-output.webp", alt: "Cafe scene painted in the style of Van Gogh by FLUX.1 Kontext", prompt: "A modern cafe interior, painted in the style of Van Gogh." }]
                    }
                ]
            },
            gallerySection: {
                title: "The Digital Art Gallery",
                description: "Explore a collection of stunning oil paintings, created from photos by the AI artists at FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/oil/before-1.webp", "https://cdn.kontextflux.io/gallery/oil/after-1.webp"], alts: ["Original landscape photo", "Landscape as a rich oil painting"], prompt: "A landscape with thick, impasto oil paint." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/oil/before-2.webp", "https://cdn.kontextflux.io/gallery/oil/after-2.webp"], alts: ["Original portrait", "Portrait in the style of a renaissance master"], prompt: "A portrait in the style of Rembrandt." },
                ]
            },
            featuresSection: {
                title: "Masterful Features",
                description: "How FLUX.1 Kontext replicates the classic art of oil painting.",
                items: [
                    { icon: "🖌️", title: "Visible Brushwork", description: "Simulates a variety of brushstrokes, from fine details to thick, textural 'impasto' effects." },
                    { icon: "🎨", title: "Rich, Deep Colors", description: "Creates the deep, luminous, and beautifully blended colors that are characteristic of oil paints." },
                    { icon: "📜", title: "Canvas Texture", description: "Subtly adds the look of a real canvas beneath the paint when prompted, enhancing the authenticity." },
                    { icon: "💡", title: "Classical Lighting", description: "Expertly handles light and shadow (chiaroscuro) to create drama and depth, just like the Old Masters." },
                    { icon: "✨", title: "Luminous Glazing", description: "Simulates the effect of thin, transparent layers of paint, which give oil paintings their characteristic glow." },
                    { icon: "🖼️", title: "Fine Art Quality", description: "The final output has a gravitas and texture that makes it suitable for high-quality printing and framing." },
                ]
            },
            faqSection: {
                title: "Oil Painting AI FAQs",
                items: [
                    { question: "How is this different from the 'Watercolor' style?", answer: "Oil painting is opaque, textured, and rich, with visible brushstrokes and deep, blended colors. Watercolor is translucent, soft, and flowing, often with colors bleeding into each other. They represent two very different classic painting mediums." },
                    { question: "Can I request the style of a specific painter, like Rembrandt or Monet?", answer: "Yes, absolutely! Prompting 'in the style of Monet's impressionism' or 'with the dramatic lighting of Caravaggio' will guide FLUX.1 Kontext to produce a more specific and nuanced result." },
                    { question: "What is 'impasto'?", answer: "Impasto is a painting technique where paint is laid on an area of the surface in very thick layers, usually thick enough that the brush or painting-knife strokes are visible. It adds texture and dimension. You can request this in your prompt." },
                    { question: "Will the output be high resolution for printing?", answer: "Yes, our tool is designed to generate high-resolution images that are suitable for printing on canvas or fine art paper. The textural details look fantastic when printed." },
                    { question: "What photos work best for this style?", answer: "Portraits, landscapes, and still life photos are all classic subjects for oil painting and work wonderfully. Good lighting in the original photo helps the AI create a more dramatic and realistic result." },
                    { question: "How does the AI create the brushstrokes?", answer: "FLUX.1 Kontext has analyzed countless oil paintings and understands the relationship between a shape and the brushstrokes used to create it. It doesn't just apply a filter; it re-renders the image using these learned artistic techniques." },
                    { question: "Does it work well for modern subjects, like cars or cityscapes?", answer: "Yes, and the results can be stunning. Applying a classical painting style to a modern subject creates a powerful artistic contrast that is very popular in contemporary art." }
                ]
            },
        },

        // 25. Paper Cutting Style
        {
            id: "paper-cutting-style",
            slug: "paper-cutting-style",
            name: "Paper Cutting",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/paper-cut-style.jpeg",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this image to look like intricate, layered paper cutouts.",
                    promptPrefix: "",
                    promptSuffix: ", as an intricate paper cutting art piece, with distinct layers, clean silhouettes, and a sense of depth.",
                    placeholder: "A forest scene made of layered paper cutouts.",
                    promptExamples: [
                        "A delicate paper cutout of a bird and flowers.",
                        "A city skyline in a multi-layered paper art style.",
                        "A fairy tale scene made from paper cutouts."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/paper-cut-style.jpeg",
                }
            },
            seo: {
                title: "AI Paper Cutout Generator |  Create Paper Cutting Style Art",
                description: "Create stunning layered paper cutout art with our AI generator. Transform photos or text prompts into intricate, vibrant paper craft illustrations.",
                keywords: ["paper cutout generator",
                    "paper cut out style",
                    "cut out illustration style",
                    "paper cut out art style",
                    "paper style cutting",
                    "paper cut style illustrator",
                    "AI art generator",
                    "digital paper art",
                    "layered paper illustration",
                    "photo to paper cutout", "layered paper art",],
                ogImage: "https://cdn.kontextflux.io/ai-style/paper-cut-style.jpeg",
            },
            pageHeader: {
                pageTitle: "AI Paper Cutting Style Generator",
                pageTagline: "Transform your ideas and photos into intricate, multi-layered paper cut-out masterpieces with a single click. No scissors required.",
                heroImage: {
                    src: "https://cdn.kontextflux.io/ai-image/paper-cutout/hero-banner.webp",
                    alt: "A stunning, vibrant landscape illustration created in a multi-layered paper cutting style by the AI generator."
                },
                buttons: [{ label: "Get 20 free credits", link: "/login" }]
            },
            scenarioShowcase: {
                title: "Craft Your Vision with Paper Art",
                description: "Explore the delicate beauty and dimensional artistry of paper cutting, recreated by AI for endless creative possibilities.",
                scenarios: [
                    {
                        id: "unique-greeting-cards",
                        shortTitle: "Greeting Cards",
                        originalTitle: "Delicate Paper Cutout Greeting Cards",
                        tagline: "Send heartfelt wishes with unique, handcrafted art.",
                        description: "Design personalized greeting cards for any occasion. Generate intricate layered paper designs featuring floral motifs, festive scenes, or custom messages that feel truly special and handmade.",
                        category: "Design",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "a birthday cake with candles, surrounded by confetti and party hats",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/paper-cutout/birthday-cake.webp",
                                alt: "A vibrant, layered paper cutout illustration of a birthday cake."
                            }
                        ]
                    },
                    {
                        id: "childrens-book-illustrations",
                        shortTitle: "Book Illustrations",
                        originalTitle: "Enchanting Paper Cut Illustrations for Books",
                        tagline: "Bring stories to life with dimensional charm.",
                        description: "Create captivating illustrations for children's books or editorial content. The distinct layered look adds a unique tactile quality and depth to any narrative, making it visually engaging.",
                        category: "Publishing",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "A whimsical scene from a children's story: a friendly bear character waving from a house made of layered paper, with a paper sun shining above.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/paper-cutout/friendly-bear.webp",
                                alt: "A charming children's book illustration in paper cutting style featuring a bear and a house."
                            }
                        ]
                    },
                    {
                        id: "website-and-app-graphics",
                        shortTitle: "Web Graphics",
                        originalTitle: "Distinctive Web and App Interface Graphics",
                        tagline: "Elevate your digital presence with artistic flair.",
                        description: "Design unique backgrounds, icons, and decorative elements for websites and mobile applications. The clean silhouettes and layered effect provide a fresh, artistic aesthetic that stands out.",
                        category: "Digital Design",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "A layered paper cutout illustration of a stylized cityscape with clean silhouettes and subtle shadows, suitable for a website header.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/paper-cutout/cityscape.webp",
                                alt: "A stylized paper cutout cityscape for website graphics."
                            }
                        ]
                    },
                    {
                        id: "custom-wall-art",
                        shortTitle: "Wall Art",
                        originalTitle: "Unique AI-Generated Paper Cut Wall Art",
                        tagline: "Decorate spaces with bespoke art pieces.",
                        description: "Create stunning, custom wall art for home or office decor. The intricate designs and dimensional feel of paper cutting translate beautifully into digital art that can be printed and framed.",
                        category: "Decor",
                        inputImage: [],
                        outputImages: [
                            {
                                prompt: "An intricate layered paper cutout art piece depicting a serene moonlit forest with glowing paper lanterns and silhouetted animals.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/paper-cutout/moonlit-forest.webp",
                                alt: "An intricate layered paper cutout art piece of a moonlit forest."
                            }
                        ]
                    }
                ]
            },
            gallerySection: {
                title: "A Gallery of Papercraft Wonders",
                description: "Explore scenes and subjects, all meticulously 'cut' from digital paper by FLUX.1 Kontext.",
                images: [
                    // { srcs: ["https://cdn.kontextflux.io/gallery/paper-cut/before-1.webp", "https://cdn.kontextflux.io/gallery/paper-cut/after-1.webp"], alts: ["Original portrait", "Portrait in a layered paper cut style"], prompt: "A layered paper cut portrait." },
                    // { srcs: ["https://cdn.kontextflux.io/gallery/paper-cut/before-2.webp", "https://cdn.kontextflux.io/gallery/paper-cut/after-2.webp"], alts: ["Original animal photo", "Animal as an intricate paper cutout"], prompt: "A detailed paper cutout of a fox." },
                ]
            },
            featuresSection: {
                title: "Craft Digital Masterpieces with Precision and Ease",
                description: "Our AI provides the tools to generate complex paper cut-out art effortlessly, giving you creative control without the complexity.",
                items: [
                    {
                        icon: "🎨",
                        title: "Text & Image Transformation",
                        description: "Create intricate paper art from a simple text prompt or elevate your existing photos by converting them into the unique paper cut-out style."
                    },
                    {
                        icon: "🛠️",
                        title: "Authentic Layering & Depth",
                        description: "Our AI intelligently builds your image in layers, casting subtle shadows to create a convincing 3D diorama effect with a true sense of depth."
                    },
                    {
                        icon: "✂️",
                        title: "Intricate & Clean Details",
                        description: "Generate images with clean, precise edges and delicate details that mimic the skill of a master paper artist, from broad shapes to the finest lines."
                    },
                    {
                        icon: "🌈",
                        title: "Vibrant Color Palettes",
                        description: "The AI uses bold, solid colors for each layer, perfectly capturing the aesthetic of assembling an image from different sheets of colored paper."
                    },
                    {
                        icon: "💡",
                        title: "Versatile Creative Applications",
                        description: "Perfect for everything from social media graphics and branding to unique digital art and personalized gifts. If you can imagine it, you can craft it."
                    },
                    {
                        icon: "🖼️",
                        title: "High-Resolution Output",
                        description: "Export your creations in high resolution, ensuring they look stunning whether you're posting them online or printing them for a physical project."
                    }
                ]
            },
            faqSection: {
                title: "Frequently Asked Questions",
                items: [
                    {
                        question: "What is an AI Paper Cutting Style Generator?",
                        answer: "It's a tool that uses artificial intelligence to create images that look like they were made from layers of cut paper. You can generate these images from text descriptions or by transforming your own photos."
                    },
                    {
                        question: "How does the AI create the paper cut-out effect?",
                        answer: "The AI has been trained on thousands of images of paper art. It understands the core principles of the style, such as layering, shadows, and solid colors, and applies them to generate new, unique images based on your prompt."
                    },
                    {
                        question: "Can I use my own photos with this tool?",
                        answer: "Yes! The tool supports image-to-image generation. You can upload a photo, and the AI will reinterpret it in the paper cutting style, preserving the core subjects of your original image."
                    },
                    {
                        question: "What kind of images work best for transformation?",
                        answer: "Images with clear subjects and good contrast work best. Portraits, landscapes, and even logos can be transformed beautifully. The AI will simplify complex details to fit the clean, layered aesthetic."
                    },
                    {
                        question: "Is this tool free to use?",
                        answer: "When you sign up for KontextFlux.io, you receive 20 free credits to try out our AI tools, including the Paper Cutting Style Generator. After that, you can purchase more credits to continue creating."
                    },
                    {
                        question: "What are the commercial rights for the images I generate?",
                        answer: "Images you create are yours to use. Please refer to our terms of service for the full commercial usage rights and guidelines."
                    },
                    {
                        question: "Can I control the colors or the number of layers?",
                        answer: "You can guide the color palette by including color descriptions in your text prompt (e.g., 'vibrant autumn colors'). While direct control over the number of layers isn't a feature, describing the desired complexity (e.g., 'simple layers' vs. 'highly detailed and intricate layers') can influence the outcome."
                    },
                    {
                        question: "What file formats can I download my creations in?",
                        answer: "You can download your generated images in standard formats like PNG or WEBP, making them easy to use for web, print, and social media projects."
                    }
                ]
            },
            cta: {
                title: "Ready to Start Crafting Your Paper Art?",
                description: "Join KontextFlux today and receive 20 free credits to bring your creative visions to life with our AI Paper Cutting Style Generator.",
                button: {
                    text: "Start Generating for Free",
                    link: "/login"
                }
            },
        },
        // 26. Picasso Style
        {
            id: "picasso-style",
            slug: "picasso-style",
            name: "Picasso Style",
            icon: "https://cdn.kontextflux.io/ai-style/picasso-style-fruit-bowl-in-a-picasso-cubist-style.png",
            category: ToolCategory.ImageStyle,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this image into a cubist style inspired by Picasso.",
                    promptPrefix: "",
                    promptSuffix: ", in the cubist style inspired by Picasso, featuring fragmented and geometric forms from multiple viewpoints.",
                    placeholder: "A cubist painting of a person playing a guitar.",
                    promptExamples: [
                        "A fragmented still life of a bottle and fruit.",
                        "A portrait showing the front and side view simultaneously.",
                        "Deconstruct this object into geometric shapes, Picasso style."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/picasso-style-fruit-bowl-in-a-picasso-cubist-style.png"
                }
            },
            seo: {
                title: "Picasso Style AI Generator | Cubism Art from Photos | kontextflux.io",
                description: "Break the rules of perspective. Transform your photos into abstract, cubist masterpieces inspired by Picasso with FLUX.1 Kontext. Create thought-provoking art.",
                keywords: ["picasso style generator", "cubism art", "photo to cubism", "abstract art generator", "geometric art", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/picasso-style-fruit-bowl-in-a-picasso-cubist-style.png"
            },
            pageHeader: {
                pageTitle: "AI Picasso Style (Cubism) Generator",
                pageTagline: "Deconstruct reality. See your world through the revolutionary eyes of cubism with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Art That Makes You Think",
                description: "Create bold, modern art that challenges perception and starts conversations.",
                scenarios: [
                    {
                        id: "picasso-modern-art",
                        shortTitle: "Create Modern Wall Art",
                        originalTitle: "Generate Abstract Cubist Art for a Modern Interior",
                        tagline: "A conversation starter for your wall.",
                        description: "Make a bold statement in your home or office. Upload a photo of a person, pet, or object and let FLUX.1 Kontext reinterpret it as a fascinating cubist painting. It's the perfect way to create unique, abstract art that is both personal and profoundly modern.",
                        category: "Art & Home Decor",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/picasso/art-input.webp", alt: "Photo of a person's face", prompt: "A portrait photo" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/picasso/art-output.webp", alt: "Cubist portrait generated by FLUX.1 Kontext", prompt: "A cubist portrait inspired by Picasso." }]
                    },
                    {
                        id: "picasso-album-cover",
                        shortTitle: "Design an Album Cover",
                        originalTitle: "Create a Thought-Provoking Album Cover",
                        tagline: "Music for the eyes.",
                        description: "Design a cover for your music that is as experimental and complex as your sound. The cubist style is perfect for jazz, experimental rock, or electronic music, visually representing complex ideas and a break from tradition.",
                        category: "Music & Design",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/picasso/album-input.webp", alt: "Photo of a guitar", prompt: "A photo of a guitar" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/picasso/album-output.webp", alt: "A cubist painting of a guitar for an album cover, by FLUX.1 Kontext", prompt: "A cubist painting of a guitar, for an album cover." }]
                    },
                    {
                        id: "picasso-art-education",
                        shortTitle: "Understand Cubism",
                        originalTitle: "Use as an Educational Tool to Understand Cubism",
                        tagline: "Deconstruct to understand.",
                        description: "Art students can use this tool to better grasp the principles of Cubism. By taking a familiar object (like their phone or a coffee cup) and seeing it deconstructed by the AI, they can more easily understand the concepts of multiple viewpoints and geometric forms.",
                        category: "Education & Study",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/picasso/education-input.webp", alt: "Photo of a coffee cup", prompt: "A photo of a coffee cup" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/picasso/education-output.webp", alt: "A coffee cup deconstructed in the cubist style, by FLUX.1 Kontext", prompt: "A coffee cup, deconstructed in the style of cubism." }]
                    }
                ]
            },
            gallerySection: {
                title: "The Cubist Collection",
                description: "Explore photos and subjects fragmented and reassembled into fascinating cubist compositions by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/picasso/before-1.webp", "https://cdn.kontextflux.io/gallery/picasso/after-1.webp"], alts: ["Original still life photo", "Still life in a cubist style"], prompt: "A cubist still life." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/picasso/before-2.webp", "https://cdn.kontextflux.io/gallery/picasso/after-2.webp"], alts: ["Original portrait", "Portrait fragmented in Picasso's style"], prompt: "A portrait deconstructed in a cubist style." },
                ]
            },
            featuresSection: {
                title: "Cubist Features",
                description: "How FLUX.1 Kontext captures the essence of Picasso's revolutionary style.",
                items: [
                    { icon: "🧊", title: "Geometric Deconstruction", description: "Breaks down subjects into geometric shapes like cubes, spheres, and cones." },
                    { icon: "👀", title: "Multiple Viewpoints", description: "Shows subjects from several angles at once, challenging traditional perspective." },
                    { icon: "🎨", title: "Fragmented Forms", description: "Reassembles the subject in an abstract way, overlapping and interlocking the geometric shapes." },
                    { icon: "🤔", title: "Abstract & Conceptual", description: "Moves beyond literal representation to capture the essence and structure of the subject." },
                    { icon: "🎭", title: "Reimagined Perspective", description: "Flattens the sense of depth, forcing the viewer to see the subject in a completely new way." },
                    { icon: "🖌️", title: "Bold Outlines & Shading", description: "Uses strong lines to define the geometric planes and simplified shading to give them form." },
                ]
            },
            faqSection: {
                title: "Picasso Style AI FAQs",
                items: [
                    { question: "Will it look exactly like a real Picasso?", answer: "It will create an image *inspired by* Picasso's cubist period. The AI has learned the rules and aesthetics of cubism—fragmentation, multiple viewpoints, geometric shapes—and applies them to your image. It is a new, original artwork in that style." },
                    { question: "What is Cubism?", answer: "Cubism was a revolutionary art movement of the early 20th century, pioneered by Pablo Picasso and Georges Braque. It abandoned traditional perspective and instead depicted subjects from multiple viewpoints simultaneously, breaking them into geometric forms." },
                    { question: "Can I request a specific period, like Analytical vs. Synthetic Cubism?", answer: "You can try! Prompting for 'in the style of analytical cubism' (more monochrome, complex) or 'synthetic cubism' (more colorful, collage-like) may guide FLUX.1 Kontext toward a more specific result." },
                    { question: "What kind of photos work best?", answer: "Photos with clear, simple subjects like portraits, still lifes (e.g., a guitar, a bowl of fruit), or single animals often produce the most interesting and recognizable cubist results." },
                    { question: "Why does the portrait have two eyes on one side of the face?", answer: "That's a hallmark of Cubism! The artist is showing you both the front view (where you see two eyes) and the side view (the profile of the nose) at the same time on a single, flat plane." },
                    { question: "Is the output completely abstract?", answer: "Not always. The goal of cubism wasn't pure abstraction, but to show more of an object's reality than a traditional portrait could. The subject is usually still recognizable, just seen in a new and fragmented way." }
                ]
            },
        },
        // Append these tools inside the `tools: [...]` array of your ImgStyle ThemeConfig.

        // 27. Pop Art Style
        {
            id: "pop-art-style",
            slug: "pop-art-style",
            name: "Pop Art Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/pop-art.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Apply a bold, graphic Pop Art aesthetic to this image.",
                    promptPrefix: "",
                    promptSuffix: ", in the style of 1960s Pop Art, with bold contrasting colors, graphic outlines, and halftone dot patterns, inspired by Andy Warhol.",
                    placeholder: "A pop art portrait with a bright yellow background.",
                    promptExamples: [
                        "A can of soup in the style of Andy Warhol.",
                        "A comic book-style portrait with Ben-Day dots.",
                        "A repeating pattern of a celebrity face, pop art style."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/pop-art.webp",
                }
            },
            seo: {
                title: "Pop Art AI Generator | Warhol Effect from Photos | kontextflux.io",
                description: "Go Pop! Transform your photos into bold, iconic Pop Art inspired by Andy Warhol with FLUX.1 Kontext. Create vibrant, graphic art with bright colors and halftone dots.",
                keywords: ["pop art generator", "warhol effect", "photo to pop art", "halftone dots", "comic book style", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/pop-art.webp",
            },
            pageHeader: {
                pageTitle: "AI Pop Art Generator",
                pageTagline: "Make your photos iconic. Get that bold, 1960s Pop Art look with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Your 15 Minutes of Fame",
                description: "Create eye-catching, vibrant art that's perfect for posters, prints, and making a bold statement.",
                scenarios: [
                    {
                        id: "pop-art-canvas",
                        shortTitle: "Create a Canvas Print",
                        originalTitle: "Design a Vibrant Multi-Panel Pop Art Canvas",
                        tagline: "Your pet, immortalized in Pop Art.",
                        description: "Turn a favorite photo of your pet, a loved one, or even yourself into a stunning piece of wall art. Generate the image in several different color schemes, and arrange them in a grid to create a classic Warhol-style multi-panel canvas print.",
                        category: "Home Decor & Gifts",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/popart/canvas-input.webp", alt: "Photo of a cat", prompt: "A photo of a cat's face" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/popart/canvas-output.webp", alt: "Pop art portrait of a cat by FLUX.1 Kontext", prompt: "A pop art portrait of a cat with a blue background." }]
                    },
                    {
                        id: "pop-art-poster",
                        shortTitle: "Design a Retro Poster",
                        originalTitle: "Create a Bold, Retro Poster for an Event",
                        tagline: "Announce your event with a POW!",
                        description: "Design a poster for a party, concert, or sale that grabs attention from a distance. The bold graphics and vibrant colors of Pop Art are perfect for creating marketing materials that are impossible to ignore and have a cool, retro vibe.",
                        category: "Marketing & Events",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/popart/poster-input.webp", alt: "Photo of a vintage microphone", prompt: "A vintage microphone" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/popart/poster-output.webp", alt: "A pop art poster featuring a microphone, by FLUX.1 Kontext", prompt: "A pop art poster for a music night, featuring a vintage microphone." }]
                    },
                    {
                        id: "pop-art-comic",
                        shortTitle: "Make a Comic-Style Portrait",
                        originalTitle: "Create a Lichtenstein-Inspired Comic Book Portrait",
                        tagline: "Become a comic book hero.",
                        description: "Transform a portrait into a dramatic, comic book-style panel inspired by Roy Lichtenstein. This style is perfect for creating a unique avatar or a piece of art that tells a story, complete with halftone dots and a dramatic mood.",
                        category: "Art & Social Media",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/popart/comic-input.webp", alt: "Photo of a person looking surprised", prompt: "A person looking surprised" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/popart/comic-output.webp", alt: "A comic book style portrait of a surprised person, by FLUX.1 Kontext", prompt: "A dramatic comic book style portrait of a surprised person, with halftone dots." }]
                    }
                ]
            },
            gallerySection: {
                title: "The Pop Art Factory",
                description: "A gallery of bold, bright, and iconic images created by the Pop Art machine, FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/pop-art/before-1.webp", "https://cdn.kontextflux.io/gallery/pop-art/after-1.webp"], alts: ["Original portrait", "Portrait in a vibrant pop art style"], prompt: "A pop art portrait with pink and yellow." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/pop-art/before-2.webp", "https://cdn.kontextflux.io/gallery/pop-art/after-2.webp"], alts: ["Original object", "Object as a pop art piece"], prompt: "A classic telephone in pop art style." },
                ]
            },
            featuresSection: {
                title: "Iconic Features",
                description: "How FLUX.1 Kontext creates the unmistakable look of Pop Art.",
                items: [
                    { icon: "🎨", title: "Bold, Contrasting Colors", description: "Uses a palette of bright, saturated, and often non-realistic colors to make images pop." },
                    { icon: "░", title: "Halftone/Ben-Day Dots", description: "Simulates the dotted printing technique used in vintage comics and Warhol's work to create shading and texture." },
                    { icon: "✒️", title: "Graphic Outlines", description: "Emphasizes the subject with strong, clean, black outlines, similar to comic book art." },
                    { icon: "🔄", title: "Easy Repetition", description: "Generate multiple versions of the same image with different color schemes to create a classic Warhol-esque series." },
                    { icon: "🥫", title: "Celebrates the Mundane", description: "Transforms everyday objects like soup cans or bananas into high art, a key theme of the Pop Art movement." },
                    { icon: "💥", title: "High-Impact & Graphic", description: "Creates visually loud, unapologetic images that are designed to grab your attention instantly." },
                ]
            },
            faqSection: {
                title: "Pop Art AI FAQs",
                items: [
                    { question: "What are halftone or Ben-Day dots?", answer: "They are a printing technique from the 20th century that used small, colored dots to create shading and secondary colors in newspapers and comic books. Pop artists like Roy Lichtenstein and Andy Warhol adopted this technique as a key part of their style." },
                    { question: "Can I choose the colors for my pop art?", answer: "Yes! Your prompt is key. For example, 'a pop art portrait with a hot pink background and turquoise hair' will guide FLUX.1 Kontext to use those specific colors." },
                    { question: "Who were Andy Warhol and Roy Lichtenstein?", answer: "They were two of the most famous artists of the American Pop Art movement in the 1950s and 60s. Warhol was known for his silkscreen prints of celebrities and Campbell's soup cans, while Lichtenstein was famous for his large-scale paintings inspired by comic book panels." },
                    { question: "What photos work best for this style?", answer: "Clear, simple portraits or photos of single, recognizable objects work best. High contrast in the original photo helps the AI to create a bold and graphic result." },
                    { question: "How can I create a multi-panel Warhol-style image?", answer: "Generate the first image with your desired prompt. Then, re-run the same prompt but specify different colors (e.g., 'with a yellow background,' 'with a blue background'). You can then combine these separate images in any photo editing app." },
                    { question: "Is this style good for landscapes?", answer: "It can be, but it's not its primary strength. The Pop Art style typically focuses on single, iconic subjects like people or objects rather than complex scenes. Applying it to a landscape would create a very stylized, abstract result." }
                ]
            },
        },

        // 28. Rick and Morty Style
        {
            id: "rick-and-morty-style",
            slug: "rick-and-morty-style",
            name: "Rick and Morty",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/rick-and-morty-style.png",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Transform this person into a character from the Rick and Morty universe.",
                    promptPrefix: "",
                    promptSuffix: ", in the distinctive animation style of Rick and Morty, with wobbly lines, and pupils that look like asterisks.",
                    placeholder: "A mad scientist and his grandson on an alien planet, Rick and Morty style.",
                    promptExamples: [
                        "Turn me into a Rick and Morty character.",
                        "An alien creature in the style of Rick and Morty.",
                        "A Council of Ricks-style alternate version of me."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/rick-and-morty-style.png",
                }
            },
            seo: {
                title: "Rick and Morty Style AI Generator | Get Schwifty! | kontextflux.io",
                description: "Wubba Lubba Dub Dub! Turn yourself and your friends into characters from the Rick and Morty universe with FLUX.1 Kontext. Create hilarious, dimension-hopping art.",
                keywords: ["rick and morty style", "custom cartoon character", "adult animation style", "get schwifty", "photo to cartoon", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/rick-and-morty-style.png",
            },
            pageHeader: {
                pageTitle: "AI Rick and Morty Style Generator",
                pageTagline: "Get Schwifty! Jump into the multiverse and cartoon-ize yourself with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Adventures Across the Multiverse",
                description: "Create hilarious fan art, 'Morty-fy' your friends, and generate content perfect for the show's massive fan community.",
                scenarios: [
                    {
                        id: "rick-morty-pfp",
                        shortTitle: "Create a Custom PFP",
                        originalTitle: "Create a Custom Rick and Morty Profile Picture",
                        tagline: "Show them what you got.",
                        description: "Transform your selfie into a character from the show for a profile picture that's instantly recognizable to any fan. It's a great way to connect with the community on Reddit, Discord, or Twitter.",
                        category: "Social Media & Fun",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/rickmorty/pfp-input.webp", alt: "A selfie of a person", prompt: "A person's selfie" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/rickmorty/pfp-output.webp", alt: "Person as a Rick and Morty character by FLUX.1 Kontext", prompt: "A profile picture of me as a Rick and Morty character." }]
                    },
                    {
                        id: "rick-morty-meme",
                        shortTitle: "Generate a Fan Meme",
                        originalTitle: "Create Your Own Original Rick and Morty Meme",
                        tagline: "Your face, in the meme.",
                        description: "Got a hilarious idea for a meme? Don't just use a screenshot, create your own! Turn yourself or a friend into a Rick and Morty character and place them in a classic scene or create a whole new one for maximum comedic effect.",
                        category: "Memes & Fan Communities",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/rickmorty/meme-input.webp", alt: "Photo of a person shrugging", prompt: "A person shrugging" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/rickmorty/meme-output.webp", alt: "Person as a Rick and Morty character shrugging, by FLUX.1 Kontext", prompt: "A character in Rick and Morty style shrugging." }]
                    },
                    {
                        id: "rick-morty-alien",
                        shortTitle: "Design an Alien",
                        originalTitle: "Design a New Alien Species for the Rick and Morty Universe",
                        tagline: "Add to the galactic menagerie.",
                        description: "Let your imagination run wild and create a brand new alien species that would fit right into the show. Describe a weird creature from your mind and let FLUX.1 Kontext bring it to life in the show's signature art style. Perfect for fan artists and creators.",
                        category: "Creativity & Fan Art",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/rickmorty/alien-output.webp", alt: "A weird alien creature in the style of Rick and Morty, by FLUX.1 Kontext", prompt: "A gelatinous alien creature with seven eyes and a fancy hat, in the style of Rick and Morty." }]
                    }
                ]
            },
            gallerySection: {
                title: "A Gallery from Dimension C-137",
                description: "Explore photos of real people and places, reimagined through the weird and wonderful lens of the Rick and Morty art style.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/rick-morty/before-1.webp", "https://cdn.kontextflux.io/gallery/rick-morty/after-1.webp"], alts: ["Original portrait", "Person as a Rick and Morty character"], prompt: "A portrait in the style of Rick and Morty." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/rick-morty/before-2.webp", "https://cdn.kontextflux.io/gallery/rick-morty/after-2.webp"], alts: ["Original group photo", "Group as characters from the show"], prompt: "A group of friends as Rick and Morty style characters." },
                ]
            },
            featuresSection: {
                title: "Schwifty Features",
                description: "The specific details FLUX.1 Kontext uses to nail the show's art style.",
                items: [
                    { icon: "👁️", title: "Signature Asterisk Pupils", description: "The AI correctly replicates the unique, squiggly asterisk-like pupils of the characters." },
                    { icon: "〰️", title: "Wobbly, Imperfect Lines", description: "Creates the slightly shaky, thin outlines that give the show its distinct, loose animation feel." },
                    { icon: "👄", title: "Simple Facial Features", description: "Replicates the simple mouth shapes and often unibrow look characteristic of the show's human characters." },
                    { icon: "👽", title: "Bizarre & Creative Creatures", description: "Excels at generating the weird, wonderful, and often grotesque aliens the show is famous for." },
                    { icon: "🎨", title: "Distinct Color Palette", description: "Uses the show's specific palette of bright, often pastel, colors for characters and backgrounds." },
                    { icon: "🌌", title: "Sci-Fi Shenanigans", description: "The AI is great at incorporating sci-fi elements like portals, laser guns, and weird planets into the scene." },
                ]
            },
            faqSection: {
                title: "Rick and Morty Style AI FAQs",
                items: [
                    { question: "Is this officially licensed or affiliated with the show?", answer: "No, this is a tool for creating fan art *inspired by* the show's unique art style. It is not affiliated with Adult Swim or the creators of Rick and Morty." },
                    { question: "Will I have drool coming out of my mouth like Rick?", answer: "Only if you ask for it! The AI won't add character-specific traits like Rick's drool unless you specify it in your prompt, like 'me as a Rick-like character with drool'." },
                    { question: "What are the key features of the show's art style?", answer: "The most recognizable features are the wobbly line art, the asterisk-shaped pupils in the eyes, a relatively simple character design, and a bright color palette." },
                    { question: "How is this different from other cartoon styles?", answer: "It's highly specific. Compared to a style like 'American Cartoon', it has thinner, wobblier lines, a more muted color palette, and the trademark pupils. It has a very distinct look that our AI is trained to replicate." },
                    { question: "Can I create my own 'Council of Ricks' persona?", answer: "Yes! That's a perfect use case. Upload your photo and prompt something like 'an alternate dimension version of me as a member of the Council of Ricks' to get a fun, creative result." },
                    { question: "What photos work best?", answer: "Clear photos of your face work great for character conversions. Simple backgrounds are better as the AI can then create a new, more interesting alien planet or sci-fi background for you." }
                ]
            },
        },

        // 29. Vector Style
        {
            id: "vector-style",
            slug: "vector-style",
            name: "Vector Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/vector-style-icon-of-a-lightbulb-.png",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Convert this image into a clean, scalable vector graphic style.",
                    promptPrefix: "",
                    promptSuffix: ", as a clean vector graphic illustration, with solid color blocks, sharp edges, and a flat design.",
                    placeholder: "A vector illustration of people working in an office.",
                    promptExamples: [
                        "A flat vector icon of a lightbulb.",
                        "A corporate-style vector illustration for a website landing page.",
                        "Simplify this photo into a clean vector graphic."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/vector-style-icon-of-a-lightbulb-.png",
                }
            },
            seo: {
                title: "Vector Style AI Art Generator | Photo to Vector | kontextflux.io",
                description: "Create clean, modern vector-style illustrations from photos or text with FLUX.1 Kontext. Perfect for logos, icons, and corporate graphics.",
                keywords: ["vector art generator", "photo to vector", "flat illustration", "vector graphic", "ai illustrator", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/vector-style-icon-of-a-lightbulb-.png",
            },
            pageHeader: {
                pageTitle: "AI Vector Style Illustrator",
                pageTagline: "Generate clean, modern, and scalable-looking graphics instantly with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "Graphics for the Modern Age",
                description: "From branding to web design, vector-style art is essential. Generate high-quality concepts and illustrations in seconds.",
                scenarios: [
                    {
                        id: "vector-logo-concept",
                        shortTitle: "Brainstorm a Logo",
                        originalTitle: "Generate Concepts for a New Logo Design",
                        tagline: "Your brand identity, visualized.",
                        description: "Stuck on a logo idea? Describe your company or brand and let FLUX.1 Kontext generate a variety of vector-style logo concepts. It's a powerful brainstorming tool to help you find the perfect direction for your brand's visual identity.",
                        category: "Branding & Business",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/vector/logo-output.webp", alt: "Vector style logo concept for a coffee shop by FLUX.1 Kontext", prompt: "A simple, modern vector logo for a coffee shop named 'The Grind'." }]
                    },
                    {
                        id: "vector-website-illustration",
                        shortTitle: "Create Website Illustrations",
                        originalTitle: "Generate Illustrations for a Website Landing Page",
                        tagline: "Engaging visuals for your visitors.",
                        description: "Good illustrations make a website more engaging. Create custom vector-style graphics that match your brand's theme and message. It's perfect for illustrating features, services, or abstract concepts in a clean and professional way.",
                        category: "Web Design & Marketing",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/vector/website-output.webp", alt: "A vector illustration of teamwork for a website, by FLUX.1 Kontext", prompt: "A corporate vector illustration showing teamwork and collaboration." }]
                    },
                    {
                        id: "vector-infographic",
                        shortTitle: "Design Infographic Elements",
                        originalTitle: "Create Custom Icons and Elements for an Infographic",
                        tagline: "Data, but beautiful.",
                        description: "Make your data easy to understand and visually appealing. Generate a set of cohesive vector icons and illustrations to use in your infographics, reports, and presentations. This ensures a professional and consistent style throughout.",
                        category: "Data Visualization & Education",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/vector/infographic-output.webp", alt: "A set of vector icons for an infographic, by FLUX.1 Kontext", prompt: "A set of simple vector icons: a lightbulb, a chart, and a gear." }]
                    }
                ]
            },
            gallerySection: {
                title: "A Showcase of Clean Graphics",
                description: "Explore photos and ideas transformed into crisp, clean vector-style illustrations by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/vector/before-1.webp", "https://cdn.kontextflux.io/gallery/vector/after-1.webp"], alts: ["Original photo of a building", "Building as a flat vector illustration"], prompt: "A vector illustration of a modern office building." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/vector/before-2.webp", "https://cdn.kontextflux.io/gallery/vector/after-2.webp"], alts: ["Original portrait", "Portrait simplified into a vector style"], prompt: "A simplified vector portrait." },
                ]
            },
            featuresSection: {
                title: "Vector-Sharp Features",
                description: "The key elements FLUX.1 Kontext uses to create a clean, professional vector look.",
                items: [
                    { icon: "✨", title: "Sharp, Clean Edges", description: "Creates perfectly crisp lines and shapes with no blurring or feathering." },
                    { icon: "🎨", title: "Solid Color Blocks", description: "Uses solid colors or simple gradients, characteristic of the 'flat design' trend." },
                    { icon: "🏢", title: "Corporate & Modern", description: "Ideal for creating professional graphics for websites, presentations, and branding materials." },
                    { icon: "💡", title: "Intelligent Simplification", description: "Expertly simplifies complex photos into clean, digestible graphic illustrations." },
                    { icon: "🧩", title: "Great for Icons & Logos", description: "Excels at creating clear, simple, and memorable icons and logo concepts." },
                    { icon: "📈", title: "Scalable Appearance", description: "The clean style looks good at any size, from a small icon to a large billboard." },
                ]
            },
            faqSection: {
                title: "Vector Style AI FAQs",
                items: [
                    { question: "Does this output a real vector file (like .SVG or .AI)?", answer: "No. The tool generates a high-resolution raster image (like a PNG or JPG) that *looks* like a vector illustration. It does not create a mathematically-defined, scalable vector file. However, the clean output can be easily traced in a program like Adobe Illustrator to create a true vector file." },
                    { question: "How is this different from 'Line Art'?", answer: "'Line Art' focuses only on the outlines of a subject. 'Vector Style' fills in those outlines with solid colors or gradients to create a complete, flat illustration." },
                    { question: "What is 'flat design'?", answer: "Flat design is a minimalist design language that emphasizes clean, two-dimensional graphics with bright colors and a lack of ornamental details like shadows, gradients, or textures. It's the dominant style for most modern websites and apps." },
                    { question: "Can I use this for my business logo?", answer: "This is an excellent tool for brainstorming and creating concepts for a logo. For the final version, you would typically take the generated image and have a designer recreate it as a true vector file to ensure it can be scaled to any size without loss of quality." },
                    { question: "Can I specify the color palette for my brand?", answer: "Yes. In your prompt, you can specify your brand's colors, for example, 'a vector illustration of teamwork using only blue, grey, and orange' to ensure the output matches your style guide." },
                    { question: "What photos are best for 'vectorizing'?", answer: "Photos with clear subjects and good lighting work best. The AI is very good at simplifying, so even complex photos can yield interesting results, but a simpler starting point often leads to a cleaner final image." }
                ]
            },
        },

        // 30. Origami Style
        {
            id: "origami-style",
            slug: "origami-style",
            name: "Origami Style",
            category: ToolCategory.ImageStyle,
            icon: "https://cdn.kontextflux.io/ai-style/origami-style-a-dragon-made-from-folded-red-paper.png",
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "Render this image to appear as if it's constructed from folded paper.",
                    promptPrefix: "",
                    promptSuffix: ", in the style of origami, as if constructed from folded paper, with sharp creases, geometric shapes, and realistic paper texture.",
                    placeholder: "A dragon made from folded red paper",
                    promptExamples: [
                        "A dragon made from folded red paper, origami style.",
                        "A forest of origami trees.",
                        "A portrait made to look like folded paper art."
                    ],
                    promptRequired: ParamRequirement.Optional,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-style/origami-style-a-dragon-made-from-folded-red-paper.png",
                }
            },
            seo: {
                title: "Origami Style AI Art Generator | Folded Paper Art | kontextflux.io",
                description: "Fold your photos into art. Create beautiful, intricate origami-style illustrations with FLUX.1 Kontext. Generate images that look like they're crafted from folded paper.",
                keywords: ["origami style", "paper art generator", "folded paper effect", "ai papercraft", "geometric art", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/ai-style/origami-style-a-dragon-made-from-folded-red-paper.png",
            },
            pageHeader: {
                pageTitle: "AI Origami Style Generator",
                pageTagline: "Unfold your creativity. Craft stunning folded-paper art from any image with FLUX.1 Kontext."
            },
            scenarioShowcase: {
                title: "The Art of the Fold",
                description: "Generate elegant and geometric designs that are perfect for branding, invitations, and creating unique digital art.",
                scenarios: [
                    {
                        id: "origami-branding",
                        shortTitle: "Create Unique Branding",
                        originalTitle: "Design Geometric Branding Elements and Logos",
                        tagline: "Your brand, precisely folded.",
                        description: "Develop a unique visual identity with the elegance and precision of origami. Describe your brand's core concept (e.g., 'a soaring eagle for a logistics company') and let FLUX.1 Kontext generate stunning origami-style logos and icons. It conveys a sense of craft, precision, and creativity.",
                        category: "Branding & Design",
                        inputImage: [], // [],
                        outputImages: [] // []//[{ imageUrl: "https://cdn.kontextflux.io/scenarios/origami/branding-output.webp", alt: "Origami-style fox logo by FLUX.1 Kontext", prompt: "A modern logo of a fox in an origami style, clean background." }]
                    },
                    {
                        id: "origami-invitation",
                        shortTitle: "Design an Elegant Invitation",
                        originalTitle: "Create an Elegant Design for a Wedding Invitation",
                        tagline: "An invitation that unfolds beautifully.",
                        description: "Design an exquisite visual for a wedding, anniversary, or formal event invitation. An origami-style swan, heart, or pair of cranes provides a look of elegance, care, and sophisticated craft that sets the perfect tone for your special day.",
                        category: "Events & Weddings",
                        inputImage: [], // [],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/origami/invitation-output.webp", alt: "Two origami swans forming a heart, by FLUX.1 Kontext", prompt: "Two elegant origami swans whose necks form a heart, for a wedding invitation." }]
                    },
                    {
                        id: "origami-poster",
                        shortTitle: "Generate Geometric Wall Art",
                        originalTitle: "Create a Modern Poster with a Geometric Origami Animal",
                        tagline: "Sharp, modern art for your walls.",
                        description: "Decorate your space with clean, modern art. Generate a striking image of an animal, like a bear or a stag, in a complex geometric origami style. The clean lines and intricate folds create a visually stunning piece that's perfect for a minimalist or contemporary interior.",
                        category: "Home Decor & Art",
                        inputImage: [], // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/origami/poster-input.webp", alt: "Photo of a bear", prompt: "A bear" }],
                        outputImages: [] // [{ imageUrl: "https://cdn.kontextflux.io/scenarios/origami/poster-output.webp", alt: "A geometric origami bear poster by FLUX.1 Kontext", prompt: "A geometric origami poster of a bear's head, minimalist design." }]
                    }
                ]
            },
            gallerySection: {
                title: "A Collection of Folded Wonders",
                description: "Explore a menagerie of animals, objects, and scenes, all masterfully 'folded' from digital paper by FLUX.1 Kontext.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/origami/before-1.webp", "https://cdn.kontextflux.io/gallery/origami/after-1.webp"], alts: ["Original animal photo", "Animal in an origami style"], prompt: "A hummingbird made from origami." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/origami/before-2.webp", "https://cdn.kontextflux.io/gallery/origami/after-2.webp"], alts: ["Original vehicle photo", "Vehicle as a papercraft model"], prompt: "A boat made from folded paper, origami." },
                ]
            },
            featuresSection: {
                title: "Precision-Folded Features",
                description: "How FLUX.1 Kontext captures the delicate art of origami.",
                items: [
                    { icon: "📐", title: "Sharp Creases & Folds", description: "Creates the crisp, geometric folds and creases that are the hallmark of origami art." },
                    { icon: "📄", title: "Realistic Paper Texture", description: "Simulates the texture and subtle lighting of real paper to create a convincing, tangible look." },
                    { icon: "💡", title: "Authentic Lighting & Shadow", description: "Expertly uses shadows and highlights along the folds to give the 2D image a strong sense of 3D form." },
                    { icon: "✨", title: "Geometric Elegance", description: "Transforms any subject into an elegant and complex geometric structure, highlighting its form." },
                    { icon: "🦢", title: "Classic & Complex Forms", description: "Capable of generating both simple, classic origami shapes and highly complex, imaginative models." },
                    { icon: "🎨", title: "Patterned Paper Options", description: "Prompt for specific paper types like 'chiyogami' or 'washi' to create models with beautiful, intricate patterns." },
                ]
            },
            faqSection: {
                title: "Origami Style AI FAQs",
                items: [
                    { question: "How is this different from 'Paper Cutting' style?", answer: "'Origami' is about folding a single sheet of paper into a 3D form. The AI simulates this with sharp creases and a unified structure. 'Paper Cutting' is about cutting and layering multiple sheets of paper, creating a look with distinct, separate layers and silhouettes." },
                    { question: "Can I request specific types of paper, like 'chiyogami'?", answer: "Yes! Prompting for 'an origami crane made from patterned chiyogami paper' will guide FLUX.1 Kontext to apply a traditional Japanese patterned texture to the folded paper, making the result even more beautiful and specific." },
                    { question: "Is the output a 3D model that I can unfold?", answer: "No, the output is a 2D image that simulates a folded paper object. It is not a 3D model file, and it does not contain unfolding instructions (a 'crease pattern')." },
                    { question: "Will the folds be logical, like in real origami?", answer: "The AI aims for a visually convincing result that looks like real origami, but it does not follow the mathematical rules of actual paper folding. It's an artistic interpretation, not an engineering simulation." },
                    { question: "What subjects work best for this style?", answer: "Animals are a classic choice and work exceptionally well. Birds, foxes, dragons, and insects all translate beautifully into geometric, folded forms. Simple objects also work well." },
                    { question: "How does the AI create the 3D look?", answer: "It achieves the 3D illusion through masterful use of light and shadow. The AI understands that one side of a fold will catch the light while the other will be in shadow, and it applies this logic to create a convincing sense of form and depth." }
                ]
            },
        },
    ],
};