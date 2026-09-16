import zod from 'zod';

export const orderValidation = zod.object({
    name: zod.string().min(1, "Name is required"),
    email: zod.email("Invalid email"),
    phone: zod.string().min(1, "Phone number is required"),
    post_code: zod.string().min(1, "Post code is required"),
    address: zod.string().min(1, "Address is required"),
    city: zod.string().min(1, "City is required"),
});

export const trackingValidation = zod.object({
    order_trx_id: zod.string().min(1, "Order ID is required"),
    email: zod.email("Invalid email"),
});