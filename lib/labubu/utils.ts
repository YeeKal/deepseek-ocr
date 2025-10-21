export type LabubuWallPaperCard = {
    title: string;
    description: string;
    cover: string;
    is_dynamic: boolean;
    url: string;
    device: string;
}

//  import json from "labubu.json";

import datas from "@/resources/labubu/labubu.json";


export const labubuWallPaperCards: LabubuWallPaperCard[] = datas as LabubuWallPaperCard[];

export const labubuWallPaperCardsGroupedByDevice = labubuWallPaperCards.reduce((acc, item) => {
    if (!acc[item.device]) {
        acc[item.device] = [];
    }
    acc[item.device].push(item);
    return acc;
}, {} as Record<string, LabubuWallPaperCard[]>);
export const labubuLive = labubuWallPaperCards.filter((item) => item.is_dynamic === true);

export const labubuPhoneWallpaper = labubuWallPaperCards.filter((item) => item.device === "phone" && item.is_dynamic === false);