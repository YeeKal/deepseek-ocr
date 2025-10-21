import { ThemeConfig, ToolCategory, ParamRequirement, ModelType } from "@/lib/types";
import { imgModels } from "@/lib/ai-tools/config"; // Assuming imgModels is defined elsewhere

export const ImgEditor: ThemeConfig = {
    id: ToolCategory.ImageEditing,
    iconType: "image",
    slug: "image-editor",
    tools: [
        {
            id: ToolCategory.ImageEditing, // This is the general Image Editor landing page tool
            slug: "image-editor",
            name: "Image Editor",
            category: ToolCategory.ImageEditing,
            isDefaultToolForTheme: true,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Optional,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "",
                    promptPrefix: "",
                    promptSuffix: "",
                    placeholder: "Add a volcanic background with lava flows, then change the dinosaur's mouth to show fire, and finally adjust the lighting to a dramatic orange hue.",
                    promptExamples: [
                        "Change the sky to a sunset and add a flock of birds.",
                        "Make the cat wear a tiny hat and glasses.",
                        "Apply a vintage film style to this photo."
                    ],
                    promptRequired: ParamRequirement.Required,
                    exampleImgUrl: "https://cdn.kontextflux.io/img-editor/dinosaur-with-volcabo.png"
                }
            },
            seo: {
                title: "Free AI Image Editor | Edit Photos with FLUX.1 Kontext | kontextflux.io",
                description: "Transform your photos with kontextflux.io's powerful AI Image Editor. Remove objects, change styles, apply effects, and more with **FLUX.1 Kontext** models.",
                keywords: [
                    "ai image editor",
                    "photo editor online",
                    "flux.1 kontext editor",
                    "free photo editing",
                    "ai photo enhancement",
                    "image text editor",
                    "online image manipulation"
                ],
                ogImage: "https://cdn.kontextflux.io/og-images/ai-image-editor.jpg",
            },
            pageHeader: {
                pageTitle: "AI Powered Image Editor",
                pageTagline: "Unleash creative transformations on your photos. Our **FLUX.1 Kontext** powered editor makes complex edits simple with natural language prompts.",
            },
            gallerySection: {
                title: "Diverse Editing Capabilities at Your Fingertips",
                description: "Explore a range of stunning transformations, from subtle enhancements to complete stylistic overhauls, all achieved with our AI Image Editor powered by **FLUX.1 Kontext**.",
                images: [
                    {
                        srcs: ["https://cdn.kontextflux.io/gallery/editor/generic-before-1.webp", "https://cdn.kontextflux.io/gallery/editor/generic-after-1.webp"],
                        alts: ["Image before AI edit", "Image after AI edit by FLUX.1 Kontext"],
                        prompt: "Change clothing color to green and add a blurred background.",
                    },
                    {
                        srcs: ["https://cdn.kontextflux.io/gallery/editor/generic-before-2.webp", "https://cdn.kontextflux.io/gallery/editor/generic-after-2.webp"],
                        alts: ["Photo before style application", "Photo after AI style application by FLUX.1 Kontext"],
                        prompt: "Apply a dramatic cinematic lighting effect.",
                    },
                    {
                        srcs: ["https://cdn.kontextflux.io/gallery/editor/complex-edit-before.webp", "https://cdn.kontextflux.io/gallery/editor/complex-edit-after.webp"],
                        alts: ["Image before complex AI edit", "Image after complex AI edit with multiple changes by FLUX.1 Kontext"],
                        prompt: "Turn the day scene into a starry night, add a glowing moon, and make the building look ancient.",
                    }
                ],
            },
            featuresSection: {
                title: "Why Use Our AI Image Editor with FLUX.1 Kontext?",
                description: "Experience intuitive, powerful, and fast image editing, all driven by the advanced capabilities of **FLUX.1 Kontext** AI.",
                items: [
                    { icon: "✨", title: "Intuitive Prompt-Based Editing", description: "Simply describe the changes you want. Our **FLUX.1 Kontext** AI understands and executes complex instructions." },
                    { icon: "🎯", title: "Precision Local Edits", description: "Target specific areas or objects within your image for modification without affecting the rest, thanks to **FLUX.1 Kontext**'s understanding." },
                    { icon: "🎨", title: "Versatile Style Application", description: "Instantly apply artistic styles, change aesthetics, or give your photo a completely new look with **FLUX.1 Kontext**." },
                    { icon: "🚀", title: "Rapid Results", description: "See your edits come to life in seconds, allowing for quick iterations and a fluid creative workflow." },
                    { icon: "🧠", title: "Deep Contextual Understanding", description: "**FLUX.1 Kontext** intelligently understands image content and your text prompts, leading to more natural and coherent edits." },
                    { icon: "🪄", title: "Complex Edits Made Easy", description: "Achieve sophisticated results like object removal, style transfer, or background replacement effortlessly with **FLUX.1 Kontext**." },
                ],
            },
            faqSection: {
                title: "AI Image Editor: Common Questions",
                items: [
                    { question: "How does the AI Image Editor work with FLUX.1 Kontext?", answer: "Upload your image and provide a text prompt describing the desired changes. Our editor, powered by **FLUX.1 Kontext** models, interprets your request and intelligently modifies the image with high precision." },
                    { question: "What types of edits can I perform?", answer: "Remove objects, change colors, alter backgrounds, apply artistic styles, add elements, enhance details, and much more. The possibilities are vast with **FLUX.1 Kontext**'s instruction-following capabilities." },
                    { question: "Is this editor free to use?", answer: "kontextflux.io offers free editing credits or a trial. For extended use and access to premium **FLUX.1 Kontext** models, please consult our pricing page." },
                    { question: "Do I need technical skills to use the FLUX.1 Kontext editor?", answer: "No! If you can describe the edit, you can use our tool. **FLUX.1 Kontext** handles the complexity of understanding and applying your edits." },
                    { question: "How accurate are the AI edits with FLUX.1 Kontext?", answer: "**FLUX.1 Kontext** models are known for their state-of-the-art precision and contextual understanding, leading to accurate, natural-looking edits. The clarity of your prompt also helps in achieving desired results." },
                    { question: "What makes FLUX.1 Kontext ideal for image editing?", answer: "**FLUX.1 Kontext** excels at deep contextual understanding of both the image and your text prompt. This allows for highly targeted edits, character consistency, style referencing, and realistic manipulation, setting it apart from other models." },
                    { question: "Can I edit any part of the image specifically?", answer: "Yes, by describing the area and the change (e.g., 'change the red car to blue', 'add sunglasses to the person on the left'), **FLUX.1 Kontext** can make highly localized or broad edits based on your instructions." },
                    { question: "How does the AI handle complex backgrounds when editing a subject?", answer: "**FLUX.1 Kontext** is designed for superior contextual understanding. It attempts to make edits to subjects while realistically integrating with or preserving the background details as appropriate, ensuring a seamless final image." }
                ],
            },
        },

        // --- Specific Editing Tools ---

        // 1. Watermark Remover (Existing, with minor enhancements)
        {
            id: "watermark-remover-tool",
            slug: "ai-watermark-remover",
            name: "AI Watermark Remover",
            category: ToolCategory.ImageEditing,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Required,
                defaultModelId: imgModels[1].id, // Assuming FLUX.1 Kontext [pro] or similar
                promptEngine: {
                    defaultPrompt: "Remove all visible watermarks from this image.",
                    promptPrefix: "",
                    promptSuffix: "",
                    placeholder: "",
                    promptExamples: [
                        "Remove the date stamp from the photo.",
                        "Clean all overlay text watermarks.",
                        "Eliminate the translucent watermark pattern."
                    ],
                    promptRequired: ParamRequirement.Disabled,
                    exampleImgUrl: `https://cdn.kontextflux.io/home-gallery/cat-with-sign-flux-kontext.png`,
                },
            },
            seo: {
                title: "AI Watermark Remover | Free & Online | FLUX.1 Kontext | kontextflux.io",
                description: "Effortlessly remove watermarks from your images online with kontextflux.io's AI Watermark Remover. Powered by **FLUX.1 Kontext** for clean, seamless results. Try it free!",
                keywords: ["ai watermark remover", "remove watermark online", "flux.1 kontext", "photo clean up tool", "image watermark removal", "free watermark remover"],
                ogImage: "https://cdn.kontextflux.io/og-images/ai-watermark-remover.jpg",
            },
            pageHeader: {
                pageTitle: "AI Watermark Remover",
                pageTagline: "Clean your images effortlessly. Our **FLUX.1 Kontext** AI intelligently identifies and removes watermarks with precision.",

            },
            gallerySection: {
                title: "See Watermarks Vanish with the Power of AI",
                description: "Witness how **FLUX.1 Kontext** seamlessly removes various watermarks, leaving your images clean and professional. Upload and try it yourself!",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/watermark/before-1.webp", "https://cdn.kontextflux.io/gallery/watermark/after-1.webp"], alts: ["Image with text watermark", "Image after AI watermark removal by FLUX.1 Kontext"], prompt: "Remove text watermark." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/watermark/before-2.webp", "https://cdn.kontextflux.io/gallery/watermark/after-2.webp"], alts: ["Image with logo watermark", "Image after AI logo removal by FLUX.1 Kontext"], prompt: "Erase logo watermark from the image." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/watermark/complex-before.webp", "https://cdn.kontextflux.io/gallery/watermark/complex-after.webp"], alts: ["Image with complex watermark pattern", "Image after AI removal of complex watermark pattern by FLUX.1 Kontext"], prompt: "Remove the repeating pattern watermark." },
                ],
            },
            featuresSection: {
                title: "Advanced Watermark Removal with FLUX.1 Kontext",
                description: "Leveraging **FLUX.1 Kontext** for superior performance in watermark detection and flawless removal.",
                items: [
                    { icon: "✨", title: "Seamless Reconstruction", description: "Our AI intelligently reconstructs areas behind watermarks for a natural, untouched look using **FLUX.1 Kontext**." },
                    { icon: "🎯", title: "Accurate Detection", description: "Effectively identifies various watermarks—from bold logos to faint text and complex patterns—with **FLUX.1 Kontext**." },
                    { icon: "🚀", title: "Fast & Efficient", description: "Remove watermarks in seconds, streamlining your workflow significantly." },
                    { icon: "🖼️", title: "Preserves Image Quality", description: "**FLUX.1 Kontext** aims to remove watermarks without degrading original image quality, maintaining details and textures." },
                    { icon: "👍", title: "User-Friendly Interface", description: "Simple to use. Upload your image, and let our **FLUX.1 Kontext** powered tool do the heavy lifting." },
                    { icon: "🛡️", title: "Handles Complexity", description: "**FLUX.1 Kontext**'s advanced capabilities help tackle challenging watermarks on diverse and intricate backgrounds." },
                ],
            },
            faqSection: {
                title: "AI Watermark Remover: Your Questions Answered",
                items: [
                    { question: "How does the AI remove watermarks using FLUX.1 Kontext?", answer: "**FLUX.1 Kontext** is trained to identify common and uncommon watermark patterns. It then intelligently 'inpaints' or reconstructs the image areas they occupy, blending the result seamlessly with the surrounding pixels." },
                    { question: "Is it legal to remove watermarks?", answer: "Removing watermarks from images you don't own the rights to can infringe on copyright. Please use this tool responsibly and only on images you have the explicit right to modify." },
                    { question: "What types of watermarks can FLUX.1 Kontext remove?", answer: "It can effectively remove text watermarks, logo watermarks, date stamps, and transparent overlays. The success rate is very high, even on complex backgrounds, thanks to **FLUX.1 Kontext**'s contextual understanding." },
                    { question: "Will FLUX.1 Kontext leave traces or blurs after removing a watermark?", answer: "**FLUX.1 Kontext** aims for seamless and artifact-free removal. In most cases, it leaves minimal to no visible traces. Slight imperfections might occur with extremely complex or opaque watermarks covering critical, detailed areas." },
                    { question: "Can this tool remove watermarks from videos?", answer: "This tool is specifically designed for still images. Video watermark removal requires different specialized technology." },
                    { question: "How is AI watermark removal better than manual methods?", answer: "AI removal with **FLUX.1 Kontext** is significantly faster, more consistent, and often produces more natural-looking results compared to tedious manual editing methods, especially for non-professionals." },
                    { question: "Does FLUX.1 Kontext work on semi-transparent or colored watermarks?", answer: "Yes, **FLUX.1 Kontext**'s contextual understanding and inpainting capabilities allow it to effectively deal with varying opacities and colors of watermarks." },
                    { question: "Can it handle watermarks on complex patterns or textures?", answer: "While very challenging for most tools, **FLUX.1 Kontext** is designed to analyze surrounding textures and patterns to attempt a faithful reconstruction, making it more effective than simpler tools on complex backgrounds." }
                ],
            },
        },

        // 2. Background Remover (New Tool)
        {
            id: "background-remover-tool",
            slug: "ai-background-remover",
            name: "AI Background Remover",
            category: ToolCategory.ImageEditing,
            editorConfig: {
                modelTypes: [ModelType.BackgroundRemover],
                isExclusive: false,
                imgRequired: ParamRequirement.Required,
                defaultModelId: imgModels[5].id, // FLUX.1 Kontext [pro] or similar
                promptEngine: {
                    defaultPrompt: "",
                    promptPrefix: "",
                    promptSuffix: "",
                    placeholder: "",
                    promptExamples: [
                        "Make background transparent.",
                        "Cut out the product from its background.",
                        "Isolate the person and remove everything else."
                    ],
                    promptRequired: ParamRequirement.Disabled, // The core function is clear, but users might add specifics
                    exampleImgUrl: `https://cdn.kontextflux.io/assert/rembg/remov-shoes.webp`,
                },
            },
            seo: {
                title: "Free AI Background Remover | Transparent Background | kontextflux.io",
                description: "Automatically remove backgrounds from images in seconds with **FLUX.1 Kontext**. Get a transparent background or change it to something new. Perfect for products, portraits, and more!",
                keywords: ["ai background remover", "transparent background", "remove bg", "photo background editor", "ecommerce product images", "free background removal", "FLUX.1 Kontext"],
                ogImage: "https://cdn.kontextflux.io/assert/rembg/rembg-hero-cover.webp",
            },
            pageHeader: {
                pageTitle: "AI Background Remover",
                pageTagline: "Instantly remove image backgrounds with one click. Create transparent backgrounds or swap them out effortlessly.",
                heroImage: {
                    src: "https://cdn.kontextflux.io/assert/rembg/rembg-hero.webp",
                    alt: "AI Background Remover Hero Image"
                }
            },
            scenarioShowcase:
            {
                title: "Practical Scenarios for AI Background Removal",
                description: "See how our AI Background Remover can transform your images for various use cases",
                scenarios: [
                    {
                        id: "rembg-ecommerce",
                        shortTitle: "Product Shots",
                        originalTitle: "E-Commerce: Clean Product Photos that Sell",
                        tagline: "Go from cluttered photo to marketplace-ready in one click.",
                        description: "Instantly remove any background to create professional, high-impact product photos. Generate clean white backgrounds required by Amazon and other marketplaces, or create transparent PNGs to use in your marketing materials. Stop losing sales due to distracting backgrounds.",
                        category: "E-Commerce / Online Sellers",
                        inputImage: [{
                            prompt: "Original photo of a designer shoe.",
                            imageUrl: "https://cdn.kontextflux.io/assert/rembg/raymond-burrage--ZEf18O1JB0-unsplash-rembg-combine.webp",
                            alt: "shoees photographed with a natural background and removed background",
                        }],
                        outputImages: [

                        ],
                    },

                    {
                        id: "rembg-marketing",
                        shortTitle: "Marketing Ads",
                        originalTitle: "Marketing: Design Stunning Ads and Social Media Posts",
                        tagline: "Unleash your creativity. Place any subject in any campaign.",
                        description: "Don't let the original background limit your creative vision. Instantly lift subjects, products, or logos from their photos to seamlessly integrate them into advertisements, banners, and social media graphics. Create compelling composite images without complex manual editing.",
                        category: "Marketers / Graphic Designers",
                        inputImage: [{
                            prompt: "Original photo of a car on a street.",
                            imageUrl: "https://cdn.kontextflux.io/assert/rembg/bradley-pelish-cqs2C31A954-unsplash-rembg-combine.webp",
                            alt: "A modern electric car parked on a city street",
                        }],
                        outputImages: [

                        ],
                    },
                    {
                        id: "rembg-graphics",
                        shortTitle: "Logos & Graphics",
                        originalTitle: "Graphic Design: Instantly Extract Logos and Graphics",
                        tagline: "Never ask for a transparent version again. Speed up your workflow.",
                        description: "Stop wasting time manually tracing logos. If you've been given a logo as a JPG with a solid background, our AI can instantly knock out the background to give you a clean, transparent PNG. Perfect for using on websites, presentations, and branding mockups.",
                        category: "Graphic Designers / Web Designers",
                        inputImage: [{
                            prompt: "A company logo provided as a JPG with a white background.",
                            imageUrl: "https://cdn.kontextflux.io/assert/rembg/apple-logo-combine.webp",
                            alt: "A logo with a solid white background",
                        }],
                        outputImages: [

                        ],
                    }]
            },
            gallerySection: {
                title: "Flawless Cutouts, Every Time",
                description: "See how AI precisely removes backgrounds from various images, handling tricky details like hair and complex edges with ease.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/background-remover/product-before.webp", "https://cdn.kontextflux.io/gallery/background-remover/product-after.webp"], alts: ["Product image with original background", "Product image with background removed by FLUX.1 Kontext AI"], prompt: "Remove background for e-commerce." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/background-remover/portrait-before.webp", "https://cdn.kontextflux.io/gallery/background-remover/portrait-after.webp"], alts: ["Portrait with cluttered background", "Portrait with transparent background via FLUX.1 Kontext"], prompt: "Isolate person, remove background." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/background-remover/car-before.webp", "https://cdn.kontextflux.io/gallery/background-remover/car-after.webp"], alts: ["Car image with outdoor background", "Car image with background removed by AI"], prompt: "Cut out car from background." },
                ],
            },
            featuresSection: {
                title: "Why Choose Our FLUX.1 Kontext Background Remover?",
                description: "Achieve professional results quickly and easily with our AI-powered background removal tool.",
                items: [
                    { icon: "✂️", title: "Automatic & Instant", description: "No manual work needed. **FLUX.1 Kontext** automatically detects and removes the background in seconds." },
                    { icon: "✨", title: "Clean & Precise Edges", description: "Get sharp, clean cutouts, even with challenging areas like hair, fur, or intricate objects, thanks to **FLUX.1 Kontext**." },
                    { icon: " прозрачный ", title: "Transparent or Colored Backgrounds", description: "Download with a transparent background (PNG) or choose a new solid color or custom image." },
                    { icon: "🛍️", title: "E-commerce Ready", description: "Perfect for creating professional product photos for online stores, marketplaces, and ads." },
                    { icon: "🎨", title: "Creative Freedom", description: "Easily place your subject into new environments or designs once the background is removed." },
                    { icon: "⏱️", title: "Time-Saving", description: "Save hours of manual editing. Let **FLUX.1 Kontext** do the complex work for you instantly." },
                ],
            },
            faqSection: {
                title: "Background Remover FAQs",
                items: [
                    { question: "How does the AI Background Remover work?", answer: "Upload your image, and our **FLUX.1 Kontext** powered AI analyzes it to identify the foreground subject and separate it from the background. The background is then removed, typically leaving a transparent area." },
                    { question: "What kind of images work best?", answer: "Images with clear subjects and reasonably distinct backgrounds work best, but **FLUX.1 Kontext** is designed to handle a wide variety of complexities, including fine details like hair." },
                    { question: "Can I get a transparent background?", answer: "Yes, the most common output is an image with a transparent background, usually in PNG format." },
                    { question: "Is this tool free?", answer: "We offer a number of free background removals. For higher volume or advanced features, please check our pricing." },
                    { question: "How accurate is the FLUX.1 Kontext AI for background removal?", answer: "**FLUX.1 Kontext** offers state-of-the-art accuracy for background removal, providing clean edges and preserving subject details." },
                    { question: "Can I replace the removed background with a new image?", answer: "Yes, after removing the original background, you can typically add a new background color or upload another image to serve as the new background using our general Image Editor." },
                    { question: "Does it work on logos or graphics?", answer: "Yes, it can remove backgrounds from logos, graphics, and signatures, provided they are in a supported image format." }
                ],
            },
        },

        // 3. AI Headshot Generator (New Tool)
        {
            id: "headshot-generator-tool",
            slug: "ai-headshot-generator",
            name: "AI Headshot Generator",
            category: ToolCategory.ImageEditing, // Or potentially ImageGeneration if it generates *new* faces based on inputs
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Required, // Requires at least one input photo
                defaultModelId: imgModels[1].id, // Potentially FLUX.1 Kontext [max] for higher quality
                promptEngine: {
                    defaultPrompt: "Generate a professional business headshot with a neutral studio background, wearing a dark blue suit.",
                    promptPrefix: "",
                    promptSuffix: "",
                    placeholder: "",
                    promptExamples: [
                        "Professional headshot, light grey background, smiling.",
                        "Creative headshot, artistic blurry background, looking confident.",
                        "Corporate team headshot, consistent style.",
                        "Friendly author headshot for a book cover."
                    ],
                    promptRequired: ParamRequirement.Disabled,
                    exampleImgUrl: `https://cdn.kontextflux.io/img-editor/white-shirt-girl-headshot-crop.jpg`,
                },
            },
            seo: {
                title: "AI Headshot Generator | Professional Business Headshots Online | kontextflux.io",
                description: "Create stunning, professional AI headshots in minutes with **FLUX.1 Kontext**. Upload your photos and get a variety of styles for LinkedIn, corporate profiles, and personal branding.",
                keywords: ["ai headshot generator", "professional headshots", "linkedin profile picture", "ai business photos", "corporate headshots", "virtual photographer", "FLUX.1 Kontext", "online headshot creator"],
                ogImage: "https://cdn.kontextflux.io/og-images/ai-headshot-generator.jpg",
            },
            pageHeader: {
                pageTitle: "AI Headshot Generator",
                pageTagline: "Get studio-quality professional headshots without the photoshoot. **FLUX.1 Kontext** transforms your selfies into polished portraits."
            },
            gallerySection: {
                title: "Transform Your Image with AI-Generated Headshots",
                description: "Explore diverse styles from formal corporate looks to creative personal branding, all generated by **FLUX.1 Kontext** from your photos.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/headshot/input-1.webp", "https://cdn.kontextflux.io/gallery/headshot/output-corporate-1.webp"], alts: ["Input photo for AI headshot", "Professional corporate AI headshot generated by FLUX.1 Kontext"], prompt: "Corporate headshot, dark suit, studio background." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/headshot/input-2.webp", "https://cdn.kontextflux.io/gallery/headshot/output-creative-1.webp"], alts: ["Casual input photo", "Creative outdoor AI headshot by FLUX.1 Kontext"], prompt: "Creative headshot, outdoor park background, warm lighting." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/headshot/input-3.webp", "https://cdn.kontextflux.io/gallery/headshot/output-linkedin-1.webp"], alts: ["Selfie input for headshot", "Polished LinkedIn AI headshot by FLUX.1 Kontext"], prompt: "LinkedIn profile picture, smart casual, blurred office background." },
                ],
            },
            featuresSection: {
                title: "Why Use FLUX.1 Kontext for Your AI Headshots?",
                description: "Generate high-quality, diverse, and realistic headshots effortlessly with our cutting-edge AI.",
                items: [
                    { icon: "👔", title: "Variety of Styles", description: "Choose from professional, casual, creative, indoor, outdoor, and more styles to perfectly match your needs." },
                    { icon: "📸", title: "Studio Quality Results", description: "**FLUX.1 Kontext** delivers high-resolution, photorealistic headshots that look professionally taken." },
                    { icon: "⏱️", title: "Fast & Convenient", description: "Get multiple headshot options in minutes from just a few uploaded photos. No studio needed!" },
                    { icon: "🎨", title: "Customizable Backgrounds & Attire", description: "Guide the AI with prompts to get the desired background, clothing, and overall mood." },
                    { icon: "👥", title: "Consistent Team Headshots", description: "Ideal for businesses wanting a unified look for their team's professional profiles." },
                    { icon: "💯", title: "Impressive Realism", description: "**FLUX.1 Kontext** excels at creating natural-looking features and expressions, ensuring you look your best." },
                ],
            },
            faqSection: {
                title: "AI Headshot Generator: Your Questions Answered",
                items: [
                    { question: "How does the AI Headshot Generator work?", answer: "You upload a few clear photos of yourself. Our **FLUX.1 Kontext** AI then analyzes your facial features and generates a variety of new headshots in different styles, outfits, and backgrounds based on your selections or prompts." },
                    { question: "How many photos do I need to upload?", answer: "Typically, 5-10 clear photos of your face from different angles and with varied expressions work best to train the **FLUX.1 Kontext** AI." },
                    { question: "What kind of quality can I expect from FLUX.1 Kontext headshots?", answer: "You can expect high-resolution, professional-quality headshots. **FLUX.1 Kontext**, especially the [max] model, is designed for premium, realistic outputs." },
                    { question: "Can I choose the style of my headshot?", answer: "Yes! You can select from predefined styles (e.g., corporate, casual) or use text prompts to specify attire, background, lighting, and mood for your **FLUX.1 Kontext** generated headshots." },
                    { question: "Is my data and photos safe?", answer: "We prioritize your privacy. Please refer to our privacy policy for details on how we handle your data. Uploaded photos are typically used only for generation and not stored long-term without consent." },
                    { question: "How long does it take to get my AI headshots?", answer: "Generation time can vary but usually takes from a few minutes to an hour, depending on the package and current server load." },
                    { question: "Can I use these headshots for LinkedIn or my company website?", answer: "Absolutely! The headshots generated by **FLUX.1 Kontext** are perfect for professional profiles, company websites, business cards, and personal branding." }
                ],
            },
        },

        // 4. Magic Eraser (Object/Text Remover - New Tool)
        {
            id: "magic-eraser-tool",
            slug: "ai-magic-eraser",
            name: "AI Magic Eraser",
            category: ToolCategory.ImageEditing,
            editorConfig: {
                modelTypes: [ModelType.TIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Required,
                defaultModelId: imgModels[1].id, // FLUX.1 Kontext [pro] or similar for inpainting
                promptEngine: {
                    defaultPrompt: "",
                    promptPrefix: "", // User will typically brush/select the area
                    promptSuffix: "",
                    placeholder: "Just describe what to remove (e.g., remove the glasses).",
                    promptExamples: [
                        "Remove the text from the sign.",
                        "Erase the photobomber in the background.",
                        "Delete the trash can from the street view.",
                        "Remove blemishes from the portrait."
                    ],
                    promptRequired: ParamRequirement.Required, // While a brush is primary, a supporting prompt can help FLUX.1 Kontext
                    exampleImgUrl: `https://cdn.kontextflux.io/
img-editor/brooke-cagleremove-glasses.png`,
                },
            },
            seo: {
                title: "AI Magic Eraser | Remove Objects & Text From Photos Online | kontextflux.io",
                description: "Effortlessly remove unwanted objects, people, text, or blemishes from your photos with the **FLUX.1 Kontext** AI Magic Eraser. Clean up your images in one click!",
                keywords: ["ai magic eraser", "remove object from photo", "photo cleanup tool", "ai object remover", "remove text from image", "image inpainting", "content aware fill", "FLUX.1 Kontext", "photo retouching"],
                ogImage: "https://cdn.kontextflux.io/og-images/ai-magic-eraser.jpg",
            },
            pageHeader: {
                pageTitle: "AI Magic Eraser",
                pageTagline: "Remove unwanted elements from your photos like magic! **FLUX.1 Kontext** intelligently erases objects, text, and defects, leaving a clean, natural finish."
            },
            gallerySection: {
                title: "Watch Unwanted Elements Disappear",
                description: "**FLUX.1 Kontext** makes it easy to clean up your photos. See how it seamlessly removes objects, people, text, and blemishes.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/magic-eraser/object-before.webp", "https://cdn.kontextflux.io/gallery/magic-eraser/object-after.webp"], alts: ["Photo with unwanted object", "Photo after object removal with FLUX.1 Kontext AI Magic Eraser"], prompt: "Remove the distracting bag from the beach." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/magic-eraser/text-before.webp", "https://cdn.kontextflux.io/gallery/magic-eraser/text-after.webp"], alts: ["Image with text overlay", "Image after text removal with FLUX.1 Kontext AI Magic Eraser"], prompt: "Erase the writing on the wall." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/magic-eraser/person-before.webp", "https://cdn.kontextflux.io/gallery/magic-eraser/person-after.webp"], alts: ["Photo with unwanted person", "Photo after person removal with FLUX.1 Kontext AI Magic Eraser"], prompt: "Remove the person walking in the background." },
                ],
            },
            featuresSection: {
                title: "Key Features of the FLUX.1 Kontext Magic Eraser",
                description: "Experience the power of **FLUX.1 Kontext** for flawless photo cleanup and object removal.",
                items: [
                    { icon: "🪄", title: "One-Click Removal", description: "Simply select or brush over the unwanted element, and **FLUX.1 Kontext** erases it." },
                    { icon: "✨", title: "Seamless Reconstruction", description: "Our AI intelligently fills the removed area, perfectly blending it with the surrounding background using **FLUX.1 Kontext**'s inpainting." },
                    { icon: "🧹", title: "Remove Anything", description: "Erase people, objects, text, watermarks, blemishes, logos, and any other distractions." },
                    { icon: "🎯", title: "Precision Control", description: "Accurately remove even small or complex objects without affecting the rest of your image." },
                    { icon: "🖼️", title: "Natural Results", description: "**FLUX.1 Kontext** ensures the edited area looks natural and untouched, preserving image quality." },
                    { icon: "⏱️", title: "Instant Photo Cleanup", description: "Save time on tedious manual editing. Get professional retouching results in seconds." },
                ],
            },
            faqSection: {
                title: "AI Magic Eraser: Frequently Asked Questions",
                items: [
                    { question: "How does the AI Magic Eraser work?", answer: "You mark the object or area you want to remove (often by brushing over it). **FLUX.1 Kontext** then analyzes the surrounding pixels and intelligently reconstructs the area, making the unwanted element disappear." },
                    { question: "What can I remove with the Magic Eraser?", answer: "You can remove virtually any unwanted element: people, objects, text, logos, watermarks, acne, wrinkles, stains, etc. **FLUX.1 Kontext** is very versatile." },
                    { question: "Is it easy to use?", answer: "Yes! It's designed for simplicity. Just upload your photo, select the eraser tool, mark what you want to remove, and let **FLUX.1 Kontext** do the rest." },
                    { question: "Will the removed area look natural?", answer: "**FLUX.1 Kontext** excels at 'content-aware fill' or 'inpainting', which means it tries to make the filled area look as natural and seamless as possible by understanding the image context." },
                    { question: "Can it remove text from an image?", answer: "Yes, the AI Magic Eraser powered by **FLUX.1 Kontext** is very effective at removing text from images, even on complex backgrounds." },
                    { question: "How is this different from a clone tool?", answer: "While a clone tool manually copies pixels, our **FLUX.1 Kontext** AI intelligently generates new pixels that best fit the context of the surrounding area, often leading to much cleaner and more natural results." },
                    { question: "Does it work on complex backgrounds?", answer: "Yes, **FLUX.1 Kontext**'s deep contextual understanding allows it to perform well even on images with complex or textured backgrounds, which are typically challenging for simpler tools." }
                ],
            },
        },

        // 5. AI Hairstyle Changer (New Tool)
        {
            id: "hairstyle-changer-tool",
            slug: "ai-hairstyle-changer",
            name: "AI Hairstyle Changer",
            category: ToolCategory.ImageEditing,
            editorConfig: {
                modelTypes: [ModelType.TIToImage, ModelType.TIIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Required,
                defaultModelId: imgModels[1].id, // FLUX.1 Kontext [max] for better realism
                promptEngine: {
                    defaultPrompt: "",
                    promptPrefix: "For the person in the uploaded image, ",
                    promptSuffix: ". Ensure the new hairstyle looks natural and fits their facial features.",
                    placeholder: "e.g., Try a long wavy blonde hairstyle.",
                    promptExamples: [
                        "Give me a short pixie cut, ash blonde.",
                        "Show me with a vibrant red shoulder-length hairstyle.",
                        "Add bangs and change hair color to black.",
                        "Try a modern men's fade haircut."
                    ],
                    promptRequired: ParamRequirement.Required,
                    exampleImgUrl: `https://cdn.kontextflux.io/home-gallery/cat-with-sign-flux-kontext.png`,
                },
            },
            seo: {
                title: "AI Hairstyle Changer | Virtual Haircut & Hair Color Try On | kontextflux.io",
                description: "Virtually try on new hairstyles and hair colors with **FLUX.1 Kontext** AI. Upload your photo and experiment with different haircuts, styles, and colors risk-free!",
                keywords: ["ai hairstyle changer", "virtual hairstyle try on", "haircut simulator", "try on hairstyles", "hair color changer app", "ai hair stylist", "FLUX.1 Kontext", "online haircut app"],
                ogImage: "https://cdn.kontextflux.io/og-images/ai-hairstyle-changer.jpg",
            },
            pageHeader: {
                pageTitle: "AI Hairstyle Changer",
                pageTagline: "Discover your next look! Virtually try on hairstyles and colors with **FLUX.1 Kontext** before you commit to a change."
            },
            gallerySection: {
                title: "Experiment with Endless Hairstyles & Colors",
                description: "From chic bobs to flowing waves, bold colors to subtle highlights, see yourself in a new light with **FLUX.1 Kontext**'s realistic hairstyle simulations.",
                images: [
                    { srcs: ["https://cdn.kontextflux.io/gallery/hairstyle/before-1.webp", "https://cdn.kontextflux.io/gallery/hairstyle/after-bob-1.webp"], alts: ["Person before AI hairstyle change", "Person with AI-generated bob hairstyle by FLUX.1 Kontext"], prompt: "Short bob, dark brown." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/hairstyle/before-2.webp", "https://cdn.kontextflux.io/gallery/hairstyle/after-long-blonde-1.webp"], alts: ["Woman before AI hair color change", "Woman with AI-generated long blonde hairstyle by FLUX.1 Kontext"], prompt: "Long wavy blonde hair." },
                    { srcs: ["https://cdn.kontextflux.io/gallery/hairstyle/male-before-1.webp", "https://cdn.kontextflux.io/gallery/hairstyle/male-after-fade-1.webp"], alts: ["Man before AI hairstyle change", "Man with AI-generated modern fade haircut by FLUX.1 Kontext"], prompt: "Men's fade haircut, styled top." },
                ],
            },
            featuresSection: {
                title: "Why Try Hairstyles with FLUX.1 Kontext?",
                description: "Our AI Hairstyle Changer offers a fun, realistic, and easy way to explore new looks.",
                items: [
                    { icon: "💇‍♀️", title: "Vast Style Library", description: "Try on countless hairstyles: long, short, curly, straight, bangs, fades, and more for all genders." },
                    { icon: "🎨", title: "Hair Color Chameleon", description: "Experiment with a full spectrum of hair colors, from natural shades to bold fantasy tones, powered by **FLUX.1 Kontext**." },
                    { icon: "✨", title: "Hyper-Realistic Results", description: "**FLUX.1 Kontext** renders hairstyles that look natural, adapting to your head shape and lighting." },
                    { icon: "🤳", title: "Easy to Use", description: "Simply upload your photo, choose a style or describe it, and see your transformation in seconds." },
                    { icon: "💡", title: "Face Shape Suggestions (Coming Soon)", description: "Get AI recommendations for styles that best suit your facial features." },
                    { icon: "🤩", title: "Risk-Free Experimentation", description: "Avoid haircut regrets! See how you'll look before visiting the salon, thanks to **FLUX.1 Kontext**." },
                ],
            },
            faqSection: {
                title: "AI Hairstyle Changer: Your Styling Questions",
                items: [
                    { question: "How does the AI Hairstyle Changer work?", answer: "Upload a clear photo of your face. Then, you can select from a gallery of hairstyles or use a text prompt to describe the hairstyle and color you want to try. **FLUX.1 Kontext** will then generate an image of you with that new hairstyle." },
                    { question: "How realistic are the FLUX.1 Kontext hairstyle try-ons?", answer: "**FLUX.1 Kontext** aims for high realism, taking into account lighting, hair texture, and how the style would naturally fit your head shape. The [max] model offers particularly impressive results." },
                    { question: "Can I try different hair colors as well?", answer: "Yes! **FLUX.1 Kontext** allows you to experiment with a wide range of hair colors, from natural browns and blondes to vibrant reds, blues, and even multi-toned effects." },
                    { question: "What kind of photo should I upload for the best results?", answer: "A clear, well-lit, front-facing photo where your face and current hair (if possible, tied back) are visible works best. Avoid photos with hats or heavy shadows." },
                    { question: "Does it work for all hair types and genders?", answer: "Yes, our tool and **FLUX.1 Kontext** are designed to provide a wide variety of hairstyles suitable for different hair types, lengths, and for all genders." },
                    { question: "Is this app free to use?", answer: "We offer a selection of free hairstyle try-ons. For access to the full library of styles, colors, and premium **FLUX.1 Kontext** features, we have subscription options." },
                    { question: "Can FLUX.1 Kontext suggest hairstyles for my face shape?", answer: "While direct face shape analysis and suggestion is a feature we are developing, **FLUX.1 Kontext** can be guided by prompts that include your face shape (e.g., 'hairstyle for oval face') to generate suitable options." }
                ],
            },
        },
        {
            id: "ai-product-photo",
            slug: "ai-product-photo",
            name: "AI Product Photo Generator",
            category: ToolCategory.ImageEditing,
            icon: "https://cdn.kontextflux.io/ai-image/ai-product-photo/camera-photo.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage, ModelType.TIIToImage],
                isExclusive: false,
                imgRequired: ParamRequirement.Required,
                defaultModelId: imgModels[1].id,
                promptEngine: {
                    defaultPrompt: "",
                    promptPrefix: "",
                    promptSuffix: "",
                    placeholder: "A professional product photograph of the subject, with natural studio lighting and a subtle, out-of-focus background. Create a realistic, high-end commercial look. 8K, photorealistic, sharp focus on the product.",
                    promptExamples: [
                        "On a rustic wooden table, surrounded by coffee beans.",
                        "Floating in a minimalist space with a soft shadow.",
                        "On a reflective black surface with dramatic side lighting.",
                        "In a lifestyle setting, held by a model (add 'include model' to your prompt)."
                    ],
                    promptRequired: ParamRequirement.Required,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-image/ai-product-photo/camera-photo.webp"
                },
            },
            seo: {
                title: "Free AI Product Photo Generator | Create Pro Photos Instantly",
                description: "Instantly turn your basic product images into stunning, professional AI product photography. Perfect for e-commerce, ads, and social media. Free to try.",
                keywords: ["ai product photo", "ai product images", "ai product photography", "ecommerce photography", "ai for ecommerce", "product background generator", "free product photo editor"],
                ogImage: "https://cdn.kontextflux.io/ai-image/ai-product-photo/camera-photo.webp"
            },
            pageHeader: {
                pageTitle: "AI Product Photo Generator",
                pageTagline: "From Plain to Professional in One Click. Instantly create stunning, realistic AI product photos for any platform.",
                videoPoster: "https://cdn.kontextflux.io/ai-image/ai-product-photo/3d-illustration-shop.png"
            },
            scenarioShowcase: {
                title: "Transform Your Products, Elevate Your Brand",
                description: "See how a single click can generate professional-grade photography for every business need.",
                scenarios: [
                    {
                        id: "product-ecommerce",
                        shortTitle: "E-commerce Stores",
                        originalTitle: "Standardize and Elevate Your E-commerce Listings",
                        tagline: "Create a clean, consistent look for your entire catalog.",
                        description: "Transform simple, plain-background product shots into a professional, uniform gallery that builds trust and boosts sales. Our AI places your product in a perfect studio setting with ideal lighting.",
                        category: "E-commerce",
                        inputImage: [
                            {
                                prompt: "A single white sneaker on a plain background",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/ai-product-photo/product-2.webp",
                                alt: "A basic product photo of a sneaker."
                            }],
                        outputImages: [
                        ],
                    },
                    {
                        id: "product-social-media",
                        shortTitle: "Social Media Content",
                        originalTitle: "Generate Scroll-Stopping Lifestyle Shots for Social Media",
                        tagline: "Create endless content from a single product image.",
                        description: "Stop boring your audience. Turn a simple product image into a vibrant lifestyle photo perfect for Instagram, Facebook, or Pinterest. Generate dozens of creative scenes in minutes.",
                        category: "Social Media",
                        inputImage: [{
                            prompt: "A jar of face cream.",
                            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-product-photo/product-3.webp",
                            alt: "A basic product photo of a cosmetic jar."
                        }],
                        outputImages: [
                        ],
                    },
                    {
                        id: "product-advertising",
                        shortTitle: "Digital Advertising",
                        originalTitle: "Create High-Impact Ad Creatives that Convert",
                        tagline: "Test dozens of ad concepts without expensive photoshoots.",
                        description: "Generate powerful, eye-catching imagery for your ad campaigns. Place your product in dramatic or aspirational settings to capture attention and drive clicks.",
                        category: "Advertising",
                        inputImage: [{
                            prompt: "A can of soda.",
                            imageUrl: "https://cdn.kontextflux.io/ai-image/ai-product-photo/product-4.webp", alt: "A basic product photo of a soda can."
                        }],
                        outputImages: [
                        ],
                    },
                    {
                        id: "product-website",
                        shortTitle: "Website & Hero Images",
                        originalTitle: "Craft Stunning Hero Images for Your Website",
                        tagline: "Make a powerful first impression with a bespoke hero image.",
                        description: "Your website's hero image is the first thing visitors see. Create a stunning, high-quality visual that places your product in a compelling, brand-aligned environment, instantly elevating your web presence.",
                        category: "Website Design",
                        inputImage: [
                            {
                                prompt: "A modern wireless headphone.",
                                imageUrl: "https://cdn.kontextflux.io/ai-image/ai-product-photo/product-6.webp",
                                alt: "A basic product photo of headphones."
                            }],
                        outputImages: [
                        ],
                    },
                ],
            },
            gallerySection: {
                title: "Before & After AI Transformation",
                description: "See how our AI instantly upgrades simple images into professional product photography.",
                images: [
                ],
            },
            featuresSection: {
                title: "Why Use the AI Product Photo Generator?",
                description: "Save time, cut costs, and create higher-quality product visuals than ever before.",
                items: [
                    { icon: "⚡️", title: "Instant Results", description: "Go from a basic image to a studio-quality photograph in seconds, not days. No waiting for photographers or editors." },
                    { icon: "💰", title: "Drastically Cut Costs", description: "Eliminate the need for expensive photoshoots, location rentals, props, and models. Generate unlimited concepts for free." },
                    { icon: "🎨", title: "Infinite Creativity", description: "Describe any scene, background, or style you can imagine. Create everything from clean studio shots to epic lifestyle scenes." },
                    { icon: "📈", title: "Boost Your Sales", description: "High-quality, professional images are proven to increase customer trust and conversion rates on e-commerce sites and ad platforms." },
                    { icon: "✨", title: "Perfect Product Preservation", description: "Our AI is trained to keep your product's details, labels, and shape intact while seamlessly blending it into the new background." },
                    { icon: "🖱️", title: "Incredibly Easy to Use", description: "If you can upload a photo and write a simple sentence, you have all the skills you need. No technical or design experience required." },
                ],
            },
            faqSection: {
                title: "AI Product Photo - FAQs",
                items: [
                    { question: "How does this tool work?", answer: "Simply upload an image of your product (ideally on a plain background). Our AI then uses your text prompt—or a default professional setting—to generate a brand new, realistic image with a new background and lighting." },
                    { question: "What kind of images should I upload for the best results?", answer: "For optimal results, upload a clear, well-lit image of your product on a simple, contrasting background (like white or grey). This helps the AI easily identify the product." },
                    { question: "Can I create images with my product on a person?", answer: "Yes. While the AI won't use a specific model's face, you can add phrases like 'held by a woman's hand' or 'worn by a model' to your prompt to generate lifestyle scenes that include people." },
                    { question: "Will the AI change how my product looks?", answer: "No, the tool is designed for excellent product preservation. It keeps important details like logos, labels, textures, and shape intact while changing the environment around it." },
                    { question: "Is this actually free to use?", answer: "Yes, you can generate product photos for free. Our free tier provides credits for you to try the tool. If you need to create a large volume of images, you can upgrade to a paid plan for more credits." },
                    { question: "Can I use the generated images for commercial purposes?", answer: "Yes, images you create on KontextFlux.io, including those generated on paid plans, can be used for commercial purposes like advertising, e-commerce listings, and marketing materials." },
                    { question: "What if I don't know what to write in the prompt?", answer: "No problem! Even if you leave the prompt blank, the tool will use our specially designed default prompt to automatically place your product in a clean, professional studio setting." },
                    { question: "Can I create a consistent background for all my products?", answer: "Absolutely. By using the exact same prompt for each product, you can generate a series of images with a consistent background style, perfect for creating a professional-looking e-commerce catalog." },
                ],
            },
        },
        {
            id: "outfit-collage-maker",
            slug: "ai-outfit-collage-maker",
            name: "AI Outfit Collage Maker",
            category: ToolCategory.ImageEditing,
            icon: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/girl-with-white-weather-group-compare.webp",
            editorConfig: {
                modelTypes: [ModelType.TIToImage, ModelType.TIIToImage],
                isExclusive: true,
                imgRequired: ParamRequirement.Required,
                defaultModelId: imgModels[10].id,
                promptEngine: {
                    defaultPrompt: "Create a clean, well-organized flat lay photography composition featuring all the clothing items from the upload image,evenly distributed around the center with balanced spacing, arranged neatly on a plain white or light-gray seamless pure background. Include every garment (e.g., top, pants, dress, jacket, skirt) and visible accessories (shoes, bag, hat, jewelry) laid flat and fully visible. Use soft, even lighting with subtle shadows to maintain a realistic yet minimalist aesthetic. Isolate every individual clothing and accessory item exclusively. No overlap between clothing items. NOT add any other items, clothing.  Ensure accurate colors, textures, and proportions. Style: modern, editorial fashion look — ideal for e-commerce, lookbooks, or wardrobe planning. Do not include people, mannequins, or cluttered backgrounds.",
                    promptPrefix: "",
                    promptSuffix: "",
                    placeholder: "",
                    promptExamples: [

                    ],
                    promptRequired: ParamRequirement.Disabled,
                    exampleImgUrl: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/flat-lay-outfits-white-weather.webp"
                },
            },
            seo: {
                title: "AI Outfit Collage Maker | Turn OOTD Photos into Flat Lays | kontextflux.io",
                description: "Instantly transform your OOTD photos into chic outfit collages with our AI Outfit Flat Lay Generator. Upload a photo and get a perfect, shareable styleboard for Pinterest and Instagram in seconds. Try it free!",
                keywords: ["ai outfit collage maker", "ai outfit flat lay generator", "ootd to flat lay", "virtual closet", "styleboard creator", "digital outfit planner", "outfit maker online", "create outfit collage"],
                ogImage: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/girl-with-white-weather-group-compare.webp",
            },
            pageHeader: {
                pageTitle: "AI Outfit Collage Maker",
                pageTagline: "From a simple photo of your outfit to a stunning flat lay in one click. Your personal style, professionally showcased.",
                heroImage: {
                    src: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/outfir-flat-lay-banner.webp",
                    alt: "AI Outfit Collage Maker converting an OOTD photo into a flat lay"
                }
            },
            scenarioShowcase: {
                title: "Create Perfect Outfit Layouts for Any Occasion",
                description: "Discover how our AI Outfit Collage Maker can streamline your fashion content and style planning.",
                scenarios: [
                    {
                        id: "outfit-collage-influencer",
                        shortTitle: "Social Media",
                        originalTitle: "Social Media: Create Viral Fashion Content",
                        tagline: "Stop spending hours editing. Generate stunning posts in seconds.",
                        description: "Effortlessly turn your daily looks into high-quality, shareable content. Our AI creates clean, aesthetic outfit collages perfect for your Instagram feed, Pinterest boards, or fashion blog. Grow your audience with professional visuals that make your style pop.",
                        category: "Fashion Influencers / Content Creators",
                        inputImage: [{
                            prompt: "",
                            imageUrl: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/girl-school-uniform-compare.webp",
                            alt: "Before and after showing a user's outfit photo transformed into an outfit flat lay.",
                        }],
                        outputImages: []
                    },
                    {
                        id: "outfit-collage-reseller",
                        shortTitle: "Online Sellers",
                        originalTitle: "E-Commerce: Professional Listings for Resellers",
                        tagline: "Make your clothes stand out and sell faster.",
                        description: "Create professional flat lay images for your Poshmark, Depop, or Vinted store without a complicated photoshoot setup. Just upload a photo of the item on a mannequin or yourself, and our tool will generate a clean, marketplace-ready collage that helps attract buyers and drive sales.",
                        category: "Online Sellers / E-Commerce",
                        inputImage: [{
                            prompt: "",
                            imageUrl: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/gitl-orange-shirt-group-compare.webp",
                            alt: "flat-lay-casual-look for a girl",
                        }],
                        outputImages: [
                          
                        ]
                    },
                    {
                        id: "outfit-collage-shopping",
                        shortTitle: "Shop the Look",
                        originalTitle: "Style Inspiration: Deconstruct Looks to Shop Them",
                        tagline: "Love an outfit? Break it down to find and shop the key pieces.",
                        description: "Ever see an outfit and want to find a similar piece? Upload an inspiration photo (or one of your own favorites) to deconstruct it. Our AI isolates each item, creating a clean collage that makes it easier to use visual search (like Google Lens) to find and shop for similar items online. It's the perfect tool for turning inspiration into your next purchase.",
                        category: "Style Shoppers / Fashion Enthusiasts",
                        inputImage: [{
                            prompt: "",
                            imageUrl: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/anime-girl-blue-group-compare.webp",
                            alt: "anime-girl-blue-group-compare",
                        }],
                        outputImages: [

                        ]
                    },
                    {
                        id: "outfit-collage-stylist",
                        shortTitle: "Stylists",
                        originalTitle: "Stylists: Create Client Lookbooks Instantly",
                        tagline: "Build beautiful, professional styleboards in a fraction of the time.",
                        description: "Elevate your styling services by creating personalized digital lookbooks for clients. Quickly convert photos of their existing wardrobe or new finds into clean style collages. This online outfit maker is the perfect tool for presenting your vision and helping clients visualize their new looks.",
                        category: "Personal Stylists / Image Consultants",
                        inputImage: [{
                            prompt: "",
                            imageUrl: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/girl-green-stand-group-compare.webp",
                            alt: "A curated outfit on a person is converted into a clean flat lay for a client lookbook.",
                        }],
                        outputImages: []
                    }
                ]
            },
            featuresSection: {
                title: "Why Use Our AI Outfit Flat Lay Generator?",
                description: "Go from a simple photo to a perfect outfit grid with technology designed for fashion lovers.",
                items: [
                    { icon: "✨", title: "Fully Automatic Transformation", description: "No manual editing needed. Just upload your OOTD photo, and our AI automatically detects, isolates, and arranges each clothing item into a beautiful flat lay." },
                    { icon: "✂️", title: "Precise & Clean Cutouts", description: "Powered by Google's advanced Nano Banana model, our tool ensures every item—from shirts to shoes and accessories—is cut out with sharp, clean edges." },
                    { icon: "🎨", title: "Customizable Backgrounds", description: "Choose a classic white background for a minimalist look, or select from a palette of colors to match your personal brand or aesthetic." },
                    { icon: "📐", title: "Aesthetic Auto-Arrangement", description: "Our AI doesn't just remove the background; it intelligently arranges your clothes into a visually pleasing and balanced composition, saving you design time." },
                    { icon: "📱", title: "Social Media Ready", description: "Export your final outfit collage in the perfect aspect ratio for Instagram Posts, Stories, or Pinterest Pins. Your content will be ready to share in seconds." },
                    { icon: "💰", title: "Free to Get Started", description: "Sign up to get 20 free credits. Each outfit collage generation costs 10 credits. If you need more, you can easily upgrade to a paid plan." },
                ],
            },
            gallerySection: {
                title: "From Your OOTD to a Perfect Flat Lay, Instantly",
                description: "Explore a gallery of transformations. Our AI intelligently isolates each item from your OOTD photos, handling different styles and backgrounds to produce a flawless outfit collage every time.",
                images: [

                ],
            },
            faqSection: {
                title: "Frequently Asked Questions",
                items: [
                    { question: "How does the AI Outfit Collage Maker work?", answer: "You upload a photo of a person wearing an outfit (your OOTD). Our AI, powered by the Google Nano Banana model, identifies each piece of clothing, removes the person and the background, and then arranges the items into a neat flat lay on a clean background." },
                    { question: "Is there an app that helps you put together outfits?", answer: "Yes! Our tool functions as an online outfit maker with your own clothes. By converting your OOTD photos into collages, you can build a digital closet and see how different items look together without trying them on." },
                    { question: "How do I make outfit collages for Instagram or Pinterest?", answer: "This is the perfect tool for that. Simply generate your collage from a photo and use our built-in resizing options to export it in the ideal format for Instagram (1:1 or 4:5) or Pinterest (2:3). It makes creating content fast and easy." },
                    { question: "What kind of photos work best?", answer: "For best results, use a photo where the outfit is clearly visible, well-lit, and not heavily obstructed. A full-body shot against a relatively simple background will yield the most accurate cutout." },
                    { question: "What is the best online outfit maker with your own clothes?", answer: "While there are many manual collage tools, our AI-powered generator is one of the best for automatically creating a flat lay from a single photo, saving you the time and effort of cutting out and arranging items yourself." },
                    { question: "Can I change the layout or background of the final collage?", answer: "After the initial AI generation, you can choose from different background colors. Advanced editing features for manually rearranging items may be available in future updates." },
                    { question: "How many credits does it cost to generate one collage?", answer: "Each outfit collage generation costs 10 credits. New users who sign up receive 20 free credits to try the tool. You can upgrade to a paid subscription for more credits and features." },
                    { question: "Can I use this to create styleboards or moodboards?", answer: "Absolutely. Our tool is an excellent styleboard creator. You can process multiple outfits and combine the final images using any graphic design tool to create comprehensive lookbooks or fashion moodboards." },
                ],
            },
        }
    ]
};

