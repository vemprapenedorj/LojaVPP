"use client";

import { Bag, Check, Heart, WhatsappLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { useStore } from "@/components/providers/store-provider";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);
  const { addToCart, isFavorite, toggleFavorite } = useStore();
  const favorite = isFavorite(product.id);
  const whatsappUrl = buildWhatsAppUrl(
    [{ productId: product.id, size, quantity: 1 }],
    [product],
  );

  function handleAdd() {
    addToCart(product.id, size);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="mt-7">
      <div>
        <p className="text-sm font-bold text-ink">Escolha o tamanho</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              className={`min-h-11 min-w-12 rounded-full border px-4 text-sm font-bold transition ${
                size === option
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface text-body hover:border-primary"
              }`}
              aria-pressed={size === option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
        <button type="button" onClick={handleAdd} className="btn-primary flex gap-2">
          {added ? <Check size={20} /> : <Bag size={20} />}
          {added ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
        </button>
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          className="btn-secondary flex gap-2"
          aria-pressed={favorite}
        >
          <Heart size={20} weight={favorite ? "fill" : "regular"} />
          <span className="sm:sr-only">
            {favorite ? "Remover dos favoritos" : "Favoritar"}
          </span>
        </button>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-success px-6 text-sm font-bold text-success transition hover:bg-success hover:text-white"
      >
        <WhatsappLogo size={21} weight="fill" />
        Comprar esta peça pelo WhatsApp
      </a>
      <p className="mt-3 text-center text-xs leading-5 text-muted">
        O tamanho escolhido será incluído automaticamente na mensagem.
      </p>
    </div>
  );
}
