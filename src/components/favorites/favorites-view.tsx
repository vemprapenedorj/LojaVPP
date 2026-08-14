"use client";

import { EmptyState } from "@/components/empty-state";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/components/providers/store-provider";
import type { Product } from "@/types/product";

export function FavoritesView({ products }: { products: Product[] }) {
  const { favorites, isHydrated } = useStore();
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id),
  );

  if (!isHydrated) {
    return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4" aria-label="Carregando favoritos">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="aspect-[3/4] animate-pulse rounded-xl bg-surface-muted" />
        ))}
      </div>
    );
  }

  if (!favoriteProducts.length) {
    return (
      <EmptyState
        title="Sua lista está esperando"
        description="Toque no coração de uma peça para guardar suas escolhas e comparar com calma."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
      {favoriteProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
