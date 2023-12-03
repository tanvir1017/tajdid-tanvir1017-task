import { z } from "zod";
export type ProductTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
};

export const productSchema = z.object({
  title: z.string().min(1, "Title can't be empty"),
  price: z.string().min(1, "Price can't be empty!"),
  description: z.string(),
});

export type TProductSchema = z.infer<typeof productSchema>;
