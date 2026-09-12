import type { Cosmetic } from "./Cosmetic";

export interface TransactionDetails{
    id: number,
    price: number,
    cosmetic_id: number,
    quantity: number,
    cosmetic: Cosmetic,
}