import type { Metadata } from "next";
import { CatalogClient } from "@/components/catalog/catalog-client";
import { categories, products } from "@/data/products";
import type { ProductCategory } from "@/types/product";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Explore vestidos, blusas, alfaiataria, saias, macacões e acessórios da VPP Store.",
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string | string[] }>;
}) {
  const { categoria } = await searchParams;
  const categoryValue = Array.isArray(categoria) ? categoria[0] : categoria;
  const initialCategory = categories.includes(categoryValue as ProductCategory)
    ? (categoryValue as ProductCategory)
    : undefined;

  return (
    <div className="shell section-space">
      <div className="max-w-2xl">
        <p className="eyebrow">Coleção VPP</p>
        <h1 className="section-title mt-3">Peças para viver e repetir</h1>
        <p className="mt-5 text-base leading-8 text-body">
          Descubra uma seleção demonstrativa de modelagens leves, cores naturais
          e combinações que simplificam o vestir.
        </p>
      </div>
      <CatalogClient products={products} initialCategory={initialCategory} />
    </div>
  );
}
