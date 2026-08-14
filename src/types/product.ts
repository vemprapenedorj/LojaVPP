export type ProductCategory =
  | "Vestidos"
  | "Blusas"
  | "Calças"
  | "Saias"
  | "Alfaiataria"
  | "Macacões"
  | "Acessórios";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  colors: string[];
  sizes: string[];
  material: string;
  details: string[];
  badge?: string;
  featured?: boolean;
};

export type CartItem = {
  productId: string;
  size: string;
  quantity: number;
};
