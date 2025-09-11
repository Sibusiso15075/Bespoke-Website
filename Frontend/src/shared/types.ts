import z from "zod";


export const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    category: z.string(),
    variants: z.string(), // (B) for Black, (W) for White,etc.
});

export type Product = z.infer<typeof ProductSchema>;

export const FilterOptionSchema = z.object({
    label: z.string(),
    value: z.string(),
})

export type FilterOption = z.infer<typeof FilterOptionSchema>;