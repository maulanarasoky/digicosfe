import type { TransactionDetails } from "./TransactionDetails";

export interface BookingDetails {
    id: number,
    name: string,
    phone: string,
    email: string,
    proof: string | null,
    address: string,
    post_code: string,
    city: string,
    booking_trx_id: string,
    quantity: number,
    is_paid: boolean,
    sub_total_amount: number,
    total_tax_amount: number,
    total_amount: number,
    transaction_details: TransactionDetails[],
}