"use client";

import { Bag, Check, Heart } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/providers/store-provider";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, isFavorite, toggleFavorite } = useStore();
  const [added, setAdded] = useState(false);
  const favorite = isFavorite(product.id);

  function handleAdd() {
    addToCart(product.id, product.sizes[0]);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
    <article className="product-card group">
      <div className="relative overflow-hidden rounded-[0.55rem] bg-surface-muted">
        <Link href={`/produto/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={384}
            height={512}
            className="aspect-[3/4] h-auto w-full object-cover transition duration-300 ease-out group-hover:scale-[1.015]"
          />
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-surface px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-primary shadow-sm">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          className="icon-button absolute right-3 top-3 shadow-sm"
          aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          aria-pressed={favorite}
        >
          <Heart size={19} weight={favorite ? "fill" : "regular"} />
        </button>
      </div>

      <div className="px-1 pb-1 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
          {product.category}
        </p>
        <Link href={`/produto/${product.slug}`} className="mt-1 block">
          <h3 className="text-base font-semibold text-ink transition group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex min-h-6 items-center gap-2">
          <strong className="text-sm text-ink">{formatCurrency(product.price)}</strong>
          {product.originalPrice && (
            <span className="text-xs text-muted line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full border border-primary px-2 text-xs font-bold text-primary transition hover:bg-primary hover:text-white sm:gap-2 sm:px-4 sm:text-sm"
        >
          {added ? <Check size={18} /> : <Bag size={18} />}
          {added ? "Adicionado" : "Adicionar"}
        </button>
      </div>
    </article>
  );
}
