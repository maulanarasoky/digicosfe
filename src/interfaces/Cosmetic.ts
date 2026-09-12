import type { Benefit } from "./Benefit";
import type { Brand } from "./Brand";
import type { Category } from "./Category";
import type { Photo } from "./Photo";
import type { Testimonial } from "./Testimonial";

export interface Cosmetic {
    id: number,
    price: number,
    duration: number,
    name: string,
    slug: string,
    is_popular: boolean,
    category: Category,
    brand: Brand,
    thumbnail: string,
    benefits: Benefit[],
    photos: Photo[],
    testimonials: Testimonial[],
    about: string,
}