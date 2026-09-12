import type { Cosmetic } from "./Cosmetic";

export interface Category {
    id: number,
    name: string,
    slug: string,
    photo: string,
    cosmetics_count: number,
    cosmetics: Cosmetic[],
    popular_cosmetics: Cosmetic[],
}