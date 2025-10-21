import { GalleryImageConfig, ThemeMiniConfig, ToolConfig, ToolMiniConfig, ToolCategory } from "../types";
import { ImgGenerator } from "./img-generator-config";
import { ImgEditor } from "./img-editor-config";
import { ImgStyle } from "./img-style-config";
import { ImgModels } from "@/lib/ai-tools/img-models-config"
import {AiVideo} from "@/lib/ai-video/video-effects-config";
import {FunTools} from "@/lib/ai-tools/ai-fun-tools";
import { KontextLoraTheme } from "@/lib/ai-tools/kontext-lora-config";
import { Image, Type, Boxes, Palette } from "lucide-react";
// Helper to find theme and its tools
export const textToIcon = {
    "image": Image,
    "type": Type,
    "boxes": Boxes,
    "palette": Palette
}
export const themes = [ImgEditor,ImgStyle,ImgGenerator,  ImgModels,AiVideo, KontextLoraTheme, FunTools]

//  current theme mini config
//  all theme mini config
// current tool data

export const allThemeMiniConfig:ThemeMiniConfig[] = themes.map(t => {
    const index = t.tools.findIndex(tt => tt.isDefaultToolForTheme)
    if (index < 0 || index == undefined) {
        return null
    }

    const defaultTool = t.tools[index]
    return {
        iconType: t.iconType,
        slug: defaultTool.slug,
        name: defaultTool.name,
        tools: t.tools.map(tt => ({
            id: tt.id,
            slug: tt.isDefaultToolForTheme ? `/${tt.slug}` : `/${defaultTool.slug}/${tt.slug}`,
            name: tt.name,
            ...(tt.defaultAspectRatio ? { defaultAspectRatio: tt.defaultAspectRatio } : {}),
            defaultModel: tt.editorConfig.defaultModelId || defaultTool.editorConfig.defaultModelId,
            placeholder: tt.editorConfig.promptEngine.placeholder,
            promptRequired: tt.editorConfig.promptEngine.promptRequired,
            imgRequired: tt.editorConfig.imgRequired,
            exampleImgUrl: tt.editorConfig.promptEngine.exampleImgUrl,
            modelTypes: tt.editorConfig.modelTypes,
            isExclusive: tt.editorConfig.isExclusive,
            ...(tt.paramSchema? {paramItems:tt.paramSchema.params}:{} )
        }))
    }
}).filter((config): config is ThemeMiniConfig => config !== null)

export function getCurrentThemeMiniConfig(themeSlug: string, toolSlug?: string): { themeMiniConfig?: ThemeMiniConfig; currentTool?: ToolConfig; currentToolMini?: ToolMiniConfig} {
    const index = themes.findIndex(t => t.slug == themeSlug)
    if (index < 0) {
        return {}
    }

    const themeConfig = themes[index];

    const defaultIndex = themeConfig.tools.findIndex(tt => tt.isDefaultToolForTheme)

    if (defaultIndex < 0 || defaultIndex == undefined) {
        return {}
    }
    const defaultTool = themeConfig.tools[defaultIndex]


    const themeMiniConfig = {
        iconType: themeConfig.iconType,
        slug: defaultTool.slug,
        name: defaultTool.name,
        tools: themeConfig.tools.map(tt => ({
            id: tt.id,
            slug: tt.isDefaultToolForTheme ? `/${tt.slug}` : `/${defaultTool.slug}/${tt.slug}`,
            name: tt.name,
            ...(tt.defaultAspectRatio ? { defaultAspectRatio: tt.defaultAspectRatio } : {}),
            defaultModel: tt.editorConfig.defaultModelId || defaultTool.editorConfig.defaultModelId,
            placeholder: tt.editorConfig.promptEngine.placeholder,
            promptRequired: tt.editorConfig.promptEngine.promptRequired,
            imgRequired: tt.editorConfig.imgRequired,
            exampleImgUrl:tt.editorConfig.promptEngine.exampleImgUrl,
            modelTypes: tt.editorConfig.modelTypes,
            isExclusive: tt.editorConfig.isExclusive,
            ...(tt.paramSchema? {paramItems:tt.paramSchema.params}:{} )
        }))
    }

    if(!toolSlug){
        return {
            themeMiniConfig: themeMiniConfig,
            currentTool: defaultTool,
            currentToolMini: themeMiniConfig.tools[defaultIndex]
        }
    }

    const currentToolIndex = themeConfig.tools.findIndex(tt => tt.slug == toolSlug)
    if (currentToolIndex < 0 || currentToolIndex == undefined) {
        return {
            themeMiniConfig: themeMiniConfig,
            currentTool: defaultTool,
            currentToolMini: themeMiniConfig.tools[defaultIndex]
        }
    }

    return {
        themeMiniConfig: themeMiniConfig,
        currentTool: themeConfig.tools[currentToolIndex],
        currentToolMini: themeMiniConfig.tools[currentToolIndex]
    }
}


export const themeSlugParams = allThemeMiniConfig.map(t => ({
    slug: t.slug,
    name: t.name,
    icon: t.iconType && t.iconType in textToIcon ? textToIcon[t.iconType as keyof typeof textToIcon] : Image
}))



export const fakeGalleryImageConfig: GalleryImageConfig[] = [
  {
    srcs: ["https://cdn.kontextflux.io/img-generator/cute-adorable-black-cat.png"],
    alts: ["context-understanding"],
    prompt: `a cute adorable black cat chibi holding a sign "I You", hyperdetailed fantasy art, 3d digital art, sharp focus, masterpiece, fine art`
  },
  {
    srcs: ["https://cdn.kontextflux.io/img-generator/t-shirt-design-featuring-the-phrase.png"],
    alts: ["object-replacement"],
    prompt:"T-shirt design featuring the phrase “My spirit guide is my spotter” A spirit orb with sparkly eyes hovering behind a barbell on a rack. Cosmic background elements like stars and moons, simple color palette. plain white flat background"
  },
    {
      srcs: ["https://cdn.kontextflux.io/img-generator/close-up-of-a-rusted--iron-keyhole--weathered-and-.png"],
      alts: ["character-insertion"],
      prompt:`Close-up of a rusted, iron keyhole. Weathered and aged, with visible corrosion and pitting. A single, dramatic beam of light shines through the keyhole, illuminating dust motes in the air. The word "FLUX KONTEXT" is scrawled across the surface in a chalky, hand-written style`
    },
    {
      srcs: ["https://cdn.kontextflux.io/img-generator/dragon-scale.jpg"],
      alts: ["local-editing"],
      prompt:`Extreme close-up of a dragon's scales, shimmering with iridescent colors. Each scale is a tiny, overlapping shield, with fine, intricate details. Volcanic, fiery light reflects off the scales, creating a dynamic interplay of light and shadow.`
    },


    {
      srcs: ["https://cdn.kontextflux.io/img-generator/a-cute-adorable-black-cat-chibi-2.png"],
      alts: ["style-transfer"],
      prompt:`a cute adorable black cat chibi holding a sign "I You", hyperdetailed fantasy art, 3d digital art, sharp focus, masterpiece, fine art`
    },
    {
      srcs: ["https://cdn.kontextflux.io/img-generator/a-cute-adorable-black-cat-chibi-1.png"],
      alts: ["realism-enhancement"],
      prompt:`a cute adorable black cat chibi holding a sign "I You", hyperdetailed fantasy art, 3d digital art, sharp focus, masterpiece, fine art`
    },
    {
      srcs: ["https://cdn.kontextflux.io/img-generator/a-close-up-shot-of-female-kpop-idol-in-elegant-kim.png"],
      alts: ["object-replacement"],
      prompt:`a close up shot of female kpop idol in elegant Kimonos adorned with maple leaf (Momiji) patterns, offering an instant immersion into the rich colors and serene beauty of Japanese autumn.`
    },
    {
      srcs: ["https://cdn.kontextflux.io/img-generator/a-dynamic-mascot-logo-illustration-of-a-stoic-ninj.png"],
      alts: ["background-change"],
      prompt:`A dynamic mascot logo illustration of a stoic ninja figure with intense, focused eyes peering out from beneath a black bandana and a matching naruti headband. His spiky black hair cascades around a shadowed face, conveying a sense of mystery and readiness, with the bandana flowing naturally behind him. The figure stands centered against a deep charcoal grey background, subtly illuminated by a single directional light source emphasizing his sharp features and the texture of his clothing. The logo features the text "GRESVAL, Dibujos G.V." displayed in bold white font beneath the figure, reinforcing the character's stealthy and professional nature.`
    },
    {
      srcs: ["https://cdn.kontextflux.io/img-generator/grunge-textured-poster--funny-smiley-face.png"],
      alts: ["color-grading"],
      prompt: `grunge textured poster, funny smiley face, text writes"Have a good day Done"`
    }
  ];