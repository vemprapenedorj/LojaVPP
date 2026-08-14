"use client";

import { MagnifyingGlass, SlidersHorizontal } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories } from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export function CatalogClient({
  products,
  initialCategory,
}: {
  products: Product[];
  initialCategory?: ProductCategory;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "Todos">(
    initialCategory ?? "Todos",
  );
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    const filtered = products.filter((product) => {
      const matchesCategory = category === "Todos" || product.category === category;
      const matchesQuery =
        !normalizedQuery ||
        [product.name, product.category, product.description].some((value) =>
          value.toLocaleLowerCase("pt-BR").includes(normalizedQuery),
        );
      return matchesCategory && matchesQuery;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name, "pt-BR");
      return Number(b.featured) - Number(a.featured);
    });
  }, [category, products, query, sort]);

  return (
    <>
      <div className="mt-10 rounded-xl border border-border bg-surface p-4 md:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Buscar no catálogo</span>
            <MagnifyingGlass
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nome, categoria ou estilo"
              className="h-12 w-full rounded-full border border-border bg-canvas pl-12 pr-5 text-sm text-ink outline-none transition focus:border-primary"
            />
          </label>

          <label className="relative flex items-center gap-2">
            <SlidersHorizontal size={20} className="text-primary" />
            <span className="sr-only">Ordenar produtos</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="h-12 min-w-52 rounded-full border border-border bg-canvas px-4 text-sm font-semibold text-ink outline-none focus:border-primary"
            >
              <option value="featured">Destaques primeiro</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="name">Ordem alfabetica</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1" aria-label="Filtrar por categoria">
          {["Todos", ...categories].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item as ProductCategory | "Todos")}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition ${
                category === item
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-canvas text-body hover:border-primary hover:text-primary"
              }`}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-muted" aria-live="polite">
          {filteredProducts.length} {filteredProducts.length === 1 ? "produto" : "produtos"}
        </p>
      </div>

      {filteredProducts.length ? (
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Nenhuma peça encontrada
          </h2>
          <p className="mt-3 text-sm text-body">
            Tente remover um filtro ou buscar por outro termo.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("Todos");
            }}
            className="btn-secondary mt-6 inline-flex"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  );
}
