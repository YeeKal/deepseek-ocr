import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types";
import { imgModels } from "@/lib/ai-tools/config"; // Assuming imgModels is defined elsewhere
import { isDev } from "../utils";
/**
 * NOTE: I'm defining a new, conceptual ModelType for video generation.
 * You would need to add this to your core types definition.
 * 
 * export enum ModelType {
 *   // ... existing types
 *   ZoomOutVideo, // Represents a model that takes an image/prompt and generates a zoom-out video.
 * }
 */

export const AiVideo: ThemeConfig = {
    id: ToolCategory.VideoGeneration, // Assuming you have a VideoGeneration category
    iconType: "video",
    slug: "ai-video",
    tools: [
        // 1. Default Tool for the "AI Video" Theme (Main Landing Page)
        {
            id: ToolCategory.VideoGeneration,
            slug: "ai-video",
            name: "AI Video Generator",
            category: ToolCategory.VideoGeneration,
            isDefaultToolForTheme: true,
            editorConfig: {
                // The editor on the main page defaults to the most popular tool
                modelTypes: [ModelType.ImageToVideo], 
                isExclusive: true,
                imgRequired: ParamRequirement.Required,
                defaultModelId: imgModels[6].id,
                promptEngine: {
                    defaultPrompt: "[Zoom out] The camera zoom out  from the subject to reveal their city, then rapidly the continent, and finally the spherical real Earth suspended in the dark, starry cosmos,  like google earth trailer.",
                    promptPrefix: "",
                    promptSuffix: "", 
                    placeholder: "",
                    promptExamples: [
                        "A selfie on a mountain peak.",
                        "My dog sitting in a park.",
                        "A logo on an office building."
                    ],
                    promptRequired: ParamRequirement.Disabled,
                    exampleImgUrl: "https://cdn.kontextflux.io/video/earth-zoom-input.png",
                }
            },
              seo: {
        title: "AI Video Generator: Create Stunning Videos from Photo & Text | kontextflux.io",
        description: "Transform photos and text into captivating videos with our powerful AI Video Generator. Instantly produce viral effects like the Zoom Out Earth, craft cinematic clips, and bring your unique ideas to life in seconds. No editing skills required!",
        keywords: [
            "ai video generator", "photo to video ai", "text to video ai", "ai video creation", "ai video effects", "viral video generator", "zoom out earth ai", "cinematic ai video", "ai video creator", "online video maker"
        ],
    },
    pageHeader: {
        pageTitle: "The Ultimate AI Video Generation Studio",
        pageTagline: "Turn your photos, text, and concepts into incredible, professional-grade videos. Create everything from viral social media sensations to cinematic intros with the power of advanced AI.",
        videoSrc: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/a-girl-stand.mp4",
        videoPoster: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/a-girl-stand.jpg"
    },
    scenarioShowcase: {
        title: "Where Your Ideas Transform into Engaging Motion",
        description: "Explore the boundless potential of AI video generation. See how simple inputs can be effortlessly transformed into dynamic, professional-quality videos tailored for any purpose or platform.",
        scenarios: [
            {
                id: "video-social-media",
                shortTitle: "Dominate Social Media with Viral Videos",
                originalTitle: "Go Viral on TikTok, Instagram Reels & YouTube Shorts with One Click",
                tagline: "Create scroll-stopping effects that capture attention instantly.",
                description: "Our intuitive AI video tools are engineered to produce short, punchy, and visually stunning clips, perfectly optimized for social media engagement. Leverage captivating effects like the Zoom Out Earth to create videos that not only grab attention but also drive massive views and shares across all your platforms.",
                category: "Social Media & Viral Trends",
                inputImage: [],
                outputImages: []
            },
            {
                id: "video-marketing",
                shortTitle: "Craft High-Impact Marketing Ads",
                originalTitle: "Generate Engaging Short-Form Ads & Product Showcases for Your Business",
                tagline: "Illuminate your product or service in an entirely new light.",
                description: "Produce dynamic, professional video advertisements without the need for expensive film crews or complex editing software. Simply start with a compelling photo of your product, service, or brand, and let our AI create a cinematic reveal, an animated product walkthrough, or an eye-catching visual effect. Ideal for boosting your social media marketing campaigns and digital advertising efforts.",
                category: "Marketing & Business Growth",
                inputImage: [],
                outputImages: []
            },
            {
                id: "video-storytelling",
                shortTitle: "Visualize Your Stories & Concepts",
                originalTitle: "Bring Your Creative Writing, Scripts, and Complex Ideas to Life Visually",
                tagline: "If a picture paints a thousand words, an AI video tells a million stories.",
                description: "For authors, screenwriters, educators, and creative professionals, our AI video generator offers an unprecedented tool: transform a detailed text description of a scene, a mood, or a complex concept into a vivid, short conceptual video clip. It's an incredibly powerful method for pre-visualizing narratives, setting atmospheric tones, or illustrating key moments in your story with dynamic visuals.",
                category: "Creativity & Advanced Storytelling",
                inputImage: [],
                outputImages: []
            },
            {
                id: "video-education",
                shortTitle: "Enhance Educational Content",
                originalTitle: "Simplify Complex Concepts for Engaging Educational Videos",
                tagline: "Make learning visually captivating and easy to grasp.",
                description: "Revolutionize your educational materials. Use AI to convert lectures, historical facts, or scientific explanations into digestible, visually rich video segments. Transform dry text into animated diagrams, historical reenactments, or conceptual visualizations that help students and learners effortlessly grasp difficult subjects, making education more dynamic and memorable.",
                category: "Education & E-learning",
                inputImage: [],
                outputImages: []
            },
            {
                id: "video-personal-branding",
                shortTitle: "Elevate Your Personal Brand",
                originalTitle: "Create Professional Video Intros and Outros for Personal Branding",
                tagline: "Define your digital presence with unique motion graphics.",
                description: "Build a stronger, more memorable personal brand online. Whether you're a streamer, blogger, or influencer, our AI helps you create custom video intros, outros, or brand explainers. Convert your profile picture or logo into an animated sequence, or use text prompts to generate a unique visual identity that resonates with your audience and elevates your online presence.",
                category: "Personal Branding & Influencers",
                inputImage: [],
                outputImages: []
            }
        ]
    },
    gallerySection: {
        title: "Showcase: Incredible AI-Generated Videos",
        description: "Explore a curated collection of stunning creations from our diverse suite of AI video tools. Witness how each dynamic clip was brought to life in mere seconds from a simple photo upload or a concise text prompt.",
        images: []
    },
    featuresSection: {
        title: "The Future of Video Creation: Accessible & Powerful",
        description: "Our comprehensive suite of AI video tools empowers you to create anything you can imagine, with unprecedented speed and simplicity. Discover how KontextFlux.io is revolutionizing video production:",
        items: [
            { icon: "💡", title: "Photo & Text to Video Generation", description: "Start your creative process with just a single image or a descriptive text prompt. Our advanced AI interprets your vision and instantly transforms it into a dynamic, compelling video clip." },
            { icon: "⏱️", title: "One-Click Creation & Instant Results", description: "Forget complex timelines, tedious keyframes, or steep learning curves. Our intuitive tools are engineered for ultimate simplicity. Generate breathtaking video effects and complete clips with just a single button click, saving you countless hours." },
            { icon: "🎬", title: "Cinematic Quality, Optimized for Web", description: "While we don't offer 4K, our AI models are meticulously trained to produce high-resolution, visually stunning videos with smooth motion, realistic lighting, and professional-grade aesthetics, perfectly optimized for all major online platforms." },
            { icon: "📈", title: "Access Viral Social Effects", description: "Stay ahead of the curve and ensure your content goes viral. Instantly access and apply trending video effects, including the highly sought-after Zoom Out Earth, ensuring your content remains relevant, fresh, and achieves maximum visibility on social media." },
            { icon: "☁️", title: "Ultra-Fast Cloud Rendering", description: "Complex video processing and rendering happens entirely on our robust, high-performance cloud servers, not on your local device. This means you receive your final, high-quality video in mere seconds, drastically cutting down on traditional rendering times from hours to moments." },
            { icon: "🧑‍🎨", "title": "No Experience Required", "description": "You absolutely do not need to be a seasoned video editor, graphic designer, or motion graphics expert to create incredible video content. If you can type a description or upload a photo, you possess all the skills necessary to produce professional-looking videos with our AI." },
        ],
    },
    faqSection: {
        title: "Frequently Asked Questions About AI Video Generation",
        items: [
            { question: "How does AI video generation work?", answer: "Our cutting-edge AI models are trained on extensive datasets of videos and images. They master the ability to create natural motion, understand complex camera paths, and generate entirely new visual imagery. For 'photo-to-video' tools, the AI meticulously analyzes your input image, intelligently constructs a dynamic 3D scene around it, and then animates a seamless camera movement. For 'text-to-video', the AI interprets your written words to spontaneously generate a visual scene or animation from scratch." },
            { question: "What types of videos can I create with your AI tools?", answer: "Currently, our standout feature is the incredibly popular 'Zoom Out Earth' effect, which transforms a single photo into a breathtaking journey from ground to space. We are continuously expanding our suite of innovative tools, with ongoing development for AI-powered animated slideshows, dynamic text-to-video animations, and advanced video style transfer effects. Stay tuned for exciting new additions!" },
            { question: "Are the AI video tools free to use?", answer: "We offer a convenient free plan that allows you to explore our AI video generation tools and download your initial creations. Please note that videos generated under the free plan will include a watermark. For unwatermarked, high-quality outputs, and access to premium features, we offer flexible paid subscription plans designed to suit a range of creative and professional needs." },
            { question: "What formats can I upload and download?", answer: "For input, you can typically upload standard image formats such as JPEG and PNG. Your final AI-generated video will be delivered as a high-quality MP4 file, ensuring broad compatibility with all leading social media platforms, video editing software, and presentation tools." },
            { question: "Can I use the videos I create for commercial purposes?", answer: "Absolutely. All videos created using our platform are licensed for commercial use. This means you can confidently use them for marketing campaigns, compelling social media advertisements, professional presentations, client projects, and any other commercial application where you aim to make a significant visual impact. We encourage you to review our full terms of service for complete details." },
            { question: "How is my data used when I upload a photo?", answer: "We prioritize your privacy and data security. Your uploaded photos are used exclusively for the purpose of generating your requested video. They are processed securely using industry-standard protocols and are not utilized for any other purpose, shared with third parties, or added to any training datasets. All uploaded files are automatically deleted from our servers after a short, defined period to ensure your privacy." },
            { question: "What resolution are the generated videos?", "answer": "Our AI-generated videos are optimized for high-definition (HD) quality, delivering crisp and clear visuals that are perfect for online platforms. This resolution ensures quick loading times and excellent playback on mobile devices, desktops, and all popular social media channels, providing a fantastic viewing experience." }
        ]
    },
        },
        {
            id: "earth-zoom-out",
            slug: "earth-zoom-out-ai",
            name: "Earth Zoom Out AI",
            category: ToolCategory.VideoGeneration,
            isDefaultToolForTheme: false,
            icon: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/earth-zoom-out-hero-cover.webp",
            editorConfig: {
                // Assuming a new model type for this functionality
                modelTypes: [ModelType.ImageToVideo], 
                isExclusive: true,
                imgRequired: ParamRequirement.Required, // An initial image is key for this effect
                defaultModelId: imgModels[6].id, // Assuming a new `videoModels` array
                promptEngine: {
                    defaultPrompt: "[Zoom out] The camera zoom out  from the subject to reveal their city, then rapidly the continent, and finally the entire Earth,  like google earth trailer.",
                    // defaultPrompt: " The camera zoom out  from the subject to reveal their city, then rapidly the continent, and finally the spherical Earth suspended in the dark, starry cosmos,  like google earth trailer.",
                    promptPrefix: "",
                    // The suffix is less important here as the core effect is the zoom, but can guide the initial scene.
                    promptSuffix: "", 
                    placeholder: "Upload your photo to start the Earth zoom out effect.",
                    promptExamples: [
                        "A selfie on a mountain peak.",
                        "My dog sitting in a park.",
                        "A logo on an office building.",
                        "A car parked on a scenic road."
                    ],
                    promptRequired: ParamRequirement.Disabled, // The main control is the image upload
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/earth-zoom-out-hero-cover.webp",
                }
            },
    seo: {
        title: "Zoom Out Earth AI: Create Cinematic Zoom Videos Online | kontextflux.io",
        description: "Create stunning Zoom Out Earth AI videos from any photo. Our powerful AI generator transforms your image into a breathtaking cinematic journey from ground to space. Elevate your content with unique perspectives.",
        keywords: [
            "zoom out earth ai", "zoom out earth", "earth zoom out", "ai video generator", "zoom out earth effect", "online zoom out video", "photo to video ai", "cinematic zoom ai", "viral video effect", "tiktok trend", "kontextflux ai"
        ],
        ogImage: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/earth-zoom-out-hero-cover.webp",
    },
    pageHeader: {
        pageTitle: "Zoom Out Earth AI",
        pageTagline: "Transform a single photo into an epic cinematic journey to space. Create the captivating Zoom Out Earth effect with ease. Perfect for social media, marketing, and storytelling. No editing skills required! ",
        videoSrc: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/a-girl-stand.mp4",
        videoPoster: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/a-girl-stand.jpg",
        heroImage: {
            src: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/earth-zoom-out-hero.webp",
            alt: "Zoom Out Earth AI video effect starting from a person",
        }

    },
    scenarioShowcase: {
        title: "From Your World to the Whole World: Unleash the Zoom Out Earth Effect",
        description: "Discover how the Zoom Out Earth AI effect can transform your content, creating breathtaking perspectives and impactful narratives for any project.",
        scenarios: [
            {
                id: "zoom-out-social",
                shortTitle: "Elevate Social Media Content",
                originalTitle: "Create Engaging & Shareable Posts for Social Media Platforms",
                tagline: "Capture attention, go viral.",
                description: "Make your social media content stand out. Start with a selfie, a short clip of a pet, or a memorable moment, and let our AI seamlessly Zoom Out Earth to space. This effect is perfect for creating highly shareable content on TikTok, Instagram Reels, and YouTube Shorts, guaranteeing to captivate your audience and boost engagement.",
                category: "Social Media & Trends",
                // videoDetail: {
                //     videoUrl: "https://cdn.kontextflux.io/scenarios/earth-zoom/tiktok-output.mp4",
                //     posterImage: "https://cdn.kontextflux.io/scenarios/earth-zoom/tiktok-output-poster.jpg",
                //     alt: "Engaging Zoom Out Earth video for social media starting from a person, generated by FLUX.1 AI",
                // },
                inputImage: [
                    {
                        prompt: "Engaging Zoom Out Earth video for social media starting from a person",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/fanshion-young-man-22-05-38.webp",
                        alt: "Engaging Zoom Out Earth video for social media starting from a person",
                    }

                ],
                outputImages: [
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/fanshion-young-man-22-05-48.webp",
                        alt: "Professional Zoom Out Earth video intro transitioning",
                    },
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/fanshion-young-man-22-05-52.webp",
                        alt: "Professional Zoom Out Earth video intro showcasing a global perspective",
                    },
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/fanshion-young-man-22-06-00.webp",
                        alt: "Professional Zoom Out Earth video intro transitioning to earth",
                    }
                ]
            },
            {
                id: "zoom-out-intro",
                shortTitle: "Craft Stunning Video Intros",
                originalTitle: "Design Professional Intros for YouTube Videos or Presentations",
                tagline: "Start with a global impact.",
                description: "Hook your audience from the very first second. Begin with an image of your logo on a building, a compelling shot of your product, or a visual representing your topic. Then, effortlessly Zoom Out Earth to show its global context. This powerful effect adds a professional, cinematic quality to any YouTube intro, corporate presentation, or documentary, setting a memorable and impactful tone.",
                category: "Marketing & Professional",
                inputImage: [
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/raincoat-woman-22-07-20.webp",
                        alt: "Professional Zoom Out Earth video intro starting from a logo",
                    }

                ],
                outputImages: [
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/raincoat-woman-22-07-59.webp",
                        alt: "Professional Zoom Out Earth video intro transitioning to a global view",
                    },
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/raincoat-woman-22-08-07.webp",
                        alt: "Professional Zoom Out Earth video intro showcasing a global perspective",
                    },
                    
                ],
                videoDetail: {
                    videoUrl: "https://cdn.kontextflux.io/scenarios/earth-zoom/intro-output.mp4",
                    posterImage: "https://cdn.kontextflux.io/scenarios/earth-zoom/intro-output-poster.jpg",
                    alt: "Professional Zoom Out Earth video intro starting from a logo, generated by FLUX.1 AI",
                }
            },
            {
                id: "zoom-out-storytelling",
                shortTitle: "Enhance Storytelling & Narration",
                originalTitle: "Deepen Your Narrative with a 'Sense of Place' Reveal",
                tagline: "Show where your story unfolds.",
                description: "For filmmakers and content creators, establishing a location with profound impact is key. Utilize the Zoom Out Earth effect to set the scene in an exceptionally powerful way. Start with a photo of a key character or a pivotal location in your narrative, then seamlessly pull back to reveal the city, country, and even the entire continent, providing your audience with a powerful sense of scale and geographic context for your story.",
                category: "Creative & Storytelling",
                inputImage: [
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/stylish-young-man-22-02-58.webp",
                        alt: "Professional Zoom Out Earth video intro starting from a character",
                    }

                ],
                outputImages: [
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/stylish-young-man-22-03-13.webp",
                        alt: "character Zoom Out Earth video intro transitioning to a global view",
                    },
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/stylish-young-man-22-03-28.webp",
                        alt: "character Zoom Out Earth video intro showcasing a global perspective",
                    },
                    
                ],
                videoDetail: {
                    videoUrl: "https://cdn.kontextflux.io/scenarios/earth-zoom/storytelling-output.mp4",
                    posterImage: "https://cdn.kontextflux.io/scenarios/earth-zoom/storytelling-output-poster.jpg",
                    alt: "Cinematic Zoom Out Earth video for storytelling, starting from a character in a city, generated by FLUX.1 AI",
                }
            },
            {
                id: "zoom-out-travel-vlog",
                shortTitle: "Elevate Travel Vlogs",
                originalTitle: "Make Your Travel Vlogs Unforgettable with Grand Reveals",
                tagline: "From local gem to global journey.",
                description: "Transform your travel vlogs. Start with a stunning shot of a local landmark, a vibrant street market, or a unique cultural experience. Use the Zoom Out Earth effect to dramatically reveal its location within the wider region, country, or even the entire globe, giving your viewers an unparalleled sense of the journey and the significance of the place.",
                category: "Travel & Lifestyle",
               inputImage: [
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/young-man-black-22-10-00.webp",
                        alt: "Professional Zoom Out Earth video intro starting from a travel location",
                    }

                ],
                outputImages: [
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/young-man-black-22-10-09.webp",
                        alt: "a travel location Zoom Out Earth video intro transitioning to a global view",
                    },
                    {
                        prompt: "",
                        imageUrl: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/young-man-black-22-10-12.webp",
                        alt: "a travel location Zoom Out Earth video intro showcasing a global perspective",
                    },
                    
                ],
                videoDetail: {
                    videoUrl: "https://cdn.kontextflux.io/scenarios/earth-zoom/travel-vlog-output.mp4",
                    posterImage: "https://cdn.kontextflux.io/scenarios/earth-zoom/travel-vlog-output-poster.jpg",
                    alt: "Dynamic Zoom Out Earth video for travel vlogs, starting from a landmark, generated by FLUX.1 AI",
                }
            },
            {
                id: "zoom-out-education",
                shortTitle: "Enhance Educational Content",
                originalTitle: "Visualize Global Concepts in Educational Videos & Lectures",
                tagline: "Learning on a global scale.",
                description: "Bring abstract concepts to life in educational settings. Start with an image of a historical site, a natural phenomenon, or a specific cultural artifact. Employ the Zoom Out Earth effect to show its exact geographical context, then reveal its place on the continent and the world. This powerfully visual technique can make geography, history, and current events more engaging and comprehensible for students and learners of all ages.",
                category: "Education & Information",
                inputImage: [],
                outputImages: [],
                videoDetail: {
                    videoUrl: "https://cdn.kontextflux.io/scenarios/earth-zoom/education-output.mp4",
                    posterImage: "https://cdn.kontextflux.io/scenarios/earth-zoom/education-output-poster.jpg",
                    alt: "Educational Zoom Out Earth video showing a historical site's global context, generated by FLUX.1 AI",
                }
            }
        ]
    },
    gallerySection: {
        title: "Explore a Universe of Possibilities with Zoom Out Earth",
        description: "Watch how KontextFlux.io transforms static photos into incredible, planet-scale journeys with our Zoom Out Earth effect. Each mesmerizing video began with just a single image.",
        images: []
    },
    featuresSection: {
        title: "Why Our Zoom Out Earth AI is a Game-Changer",
        description: "We've made a complex, cinematic effect incredibly simple, lightning-fast, and universally accessible. Here’s how our Zoom Out Earth generator stands out:",
        items: [
            { icon: "📸", title: "From Any Photo", description: "Start with any image you desire: a selfie, a sprawling landscape, your brand logo, or even a cherished pet photo. Our AI intelligently analyzes your picture and seamlessly constructs the world around it, ready for the Zoom Out Earth effect." },
            { icon: "🚀", title: "Incredibly Fast Rendering", description: "Forget countless hours of complex 3D rendering. Your stunning Zoom Out Earth video is typically ready in under a minute, processed rapidly on our high-speed, dedicated cloud servers. Get viral-ready content, fast." },
            { icon: "✨", title: "Seamless AI Transitions", description: "Our AI does far more than simply zoom. It intelligently generates plausible, high-resolution satellite and aerial imagery, creating a smooth, continuous, and truly breathtaking pull-back from your ground-level shot all the way into outer space, achieving the perfect Zoom Out Earth effect." },
            { icon: "👍", title: "Amazingly Easy to Use", description: "No prior editing skills are required. Zero complex keyframes to set. Just upload your chosen photo, click one intuitive button, and your captivating Zoom Out Earth video is ready for download. It's truly that simple to achieve a professional-grade effect." },
            { icon: "💧", title: "No Watermarks on Paid Plans", description: "Our free trial allows you to experience the magic of Zoom Out Earth with a watermark. Premium plans offer high-quality, watermark-free videos, unlocking the full potential for professional use." },
            { icon: "💡", title: "Optimized for Online Sharing", description: "While not 4K, our generated videos are perfectly optimized for online platforms, ensuring crisp, engaging visuals that load quickly and look fantastic on social media, websites, and presentations." }
        ]
    },
    faqSection: {
        title: "Your Zoom Out Earth AI Questions, Answered",
        items: [
            { question: "Is the Zoom Out Earth AI effect free to use?", answer: "You can try our Zoom Out Earth generator with a free trial, which includes a watermark on the output video. For high-quality, watermark-free videos, you'll need to subscribe to one of our premium plans. We offer flexible options to suit your creative needs." },
            { question: "How does the AI turn one photo into a Zoom Out Earth video?", answer: "Our advanced AI leverages several cutting-edge techniques. First, it constructs a 'depth map' from your input photo to precisely understand foreground and background elements. Next, it employs sophisticated generative AI to seamlessly create plausible aerial and satellite imagery extending outward from your starting point. Finally, it animates a dynamic 3D camera path through this newly generated virtual environment to achieve the perfect Zoom Out Earth effect." },
            { question: "What kind of photos work best for the Zoom Out Earth effect?", answer: "For optimal results, utilize a clear, well-lit photo with a distinct and well-defined subject. Portraits, images of prominent single objects or buildings, and landscapes with a clear focal point typically yield the best Zoom Out Earth videos. Try to avoid overly busy backgrounds or heavily filtered images, as these can hinder the AI's analytical capabilities." },
            { question: "What is the resolution of the generated Zoom Out Earth video?", answer: "Our Zoom Out Earth videos are generated at a high-definition (HD) resolution, perfectly optimized for online sharing across social media platforms like TikTok, Instagram Reels, YouTube Shorts, and websites. While not 4K, the quality is designed to be visually crisp and engaging for digital consumption." },
            { question: "How long can the generated Zoom Out Earth video be?", answer: "Our standard Zoom Out Earth effect generates a concise, highly impactful video clip of approximately 7-10 seconds. This duration is perfectly optimized for quickly grabbing attention and maximizing engagement on popular social media platforms." },
            { question: "Can I use the generated Zoom Out Earth videos for my business or marketing?", answer: "Absolutely. The clean, professional output from our Zoom Out Earth generator is ideally suited for marketing campaigns, compelling social media advertisements, professional presentation openers, and any other commercial application where you aim to make a significant and lasting visual impact on your audience." },
            { question: "Is the satellite imagery in the Zoom Out Earth video real?", answer: "No, the aerial and satellite imagery featured in our Zoom Out Earth videos is not derived from real-world data like Google Earth or NASA. It is entirely generated by our proprietary AI to create a visually consistent, seamlessly flowing, and artistic effect. The primary goal is a breathtaking cinematic look, not cartographic accuracy." },
            { question: "Can I customize the Zoom Out Earth speed or camera path?", answer: "Currently, our tool is precisely optimized for delivering the most popular and visually appealing Zoom Out Earth effect with a single, effortless click. While we are continuously enhancing our features, we are actively exploring options for more advanced user controls and customization in future updates to give you even more creative freedom." }
        ]
    },
}
    ]
};

// page header
// scenario
// feature
// how to step
// faq