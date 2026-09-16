import zod from 'zod';

export const paymentValidation = zod.object({
    proof: zod.instanceof(File).refine((file) => file.size > 0, "Proof of payment is required"),
});