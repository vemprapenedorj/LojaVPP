"use client";

import {
  Minus,
  Plus,
  Trash,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { EmptyState } from "@/components/empty-state";
import { useStore } from "@/components/providers/store-provider";
import { formatCurrency } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

export function CartView({ products }: { products: Product[] }) {
  const {
    cart,
    clearCart,
    isHydrated,
    removeFromCart,
    setQuantity,
  } = useStore();
  const productMap = new Map(products.map((product) => [product.id, product]));
  const items = cart.flatMap((item) => {
    const product = productMap.get(item.productId);
    return product ? [{ item, product }] : [];
  });
  const total = items.reduce(
    (sum, { item, product }) => sum + item.quantity * product.price,
    0,
  );

  if (!isHydrated) {
    return (
      <div className="grid gap-8 lg:grid-cols-[1fr_23rem]" aria-label="Carregando carrinho">
        <div className="h-72 animate-pulse rounded-xl bg-surface-muted" />
        <div className="h-72 animate-pulse rounded-xl bg-surface-muted" />
      </div>
    );
  }

  if (!items.length) {
    return (
      <EmptyState
        title="Seu carrinho está vazio"
        description="Escolha suas peças, selecione os tamanhos e volte aqui para enviar o pedido pelo WhatsApp."
      />
    );
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_23rem]">
      <section aria-labelledby="itens-carrinho" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 id="itens-carrinho" className="text-sm font-bold text-ink">
            Itens selecionados
          </h2>
          <button
            type="button"
            onClick={clearCart}
            className="min-h-11 text-xs font-bold text-muted underline-offset-4 hover:text-error hover:underline"
          >
            Limpar carrinho
          </button>
        </div>

        {items.map(({ item, product }) => (
          <article
            key={`${item.productId}-${item.size}`}
            className="grid grid-cols-[6rem_1fr] gap-4 rounded-xl border border-border bg-surface p-3 sm:grid-cols-[7.5rem_1fr_auto] sm:p-4"
          >
            <Link href={`/produto/${product.slug}`} className="row-span-2 sm:row-span-1">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={160}
                height={214}
                className="aspect-[3/4] w-full rounded-lg object-cover"
              />
            </Link>

            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-muted">
                {product.category}
              </p>
              <Link href={`/produto/${product.slug}`}>
                <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">
                  {product.name}
                </h3>
              </Link>
              <p className="mt-2 text-xs text-muted">Tamanho: {item.size}</p>
              <strong className="mt-3 block text-sm text-ink">
                {formatCurrency(product.price)}
              </strong>
            </div>

            <div className="col-start-2 flex items-end justify-between gap-4 sm:col-auto sm:flex-col sm:items-end">
              <button
                type="button"
                onClick={() => removeFromCart(product.id, item.size)}
                className="icon-button text-muted hover:text-error"
                aria-label={`Remover ${product.name} do carrinho`}
              >
                <Trash size={19} />
              </button>

              <div className="flex items-center rounded-full border border-border bg-canvas">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(product.id, item.size, item.quantity - 1)
                  }
                  className="icon-button h-10 w-10"
                  aria-label={`Diminuir quantidade de ${product.name}`}
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-7 text-center text-sm font-bold text-ink" aria-live="polite">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(product.id, item.size, item.quantity + 1)
                  }
                  className="icon-button h-10 w-10"
                  aria-label={`Aumentar quantidade de ${product.name}`}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="sticky top-28 rounded-xl border border-border bg-surface p-6" aria-labelledby="resumo-title">
        <p className="eyebrow">Proximo passo</p>
        <h2 id="resumo-title" className="mt-2 font-display text-3xl font-semibold text-ink">
          Resumo do pedido
        </h2>
        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-body">Produtos</dt>
            <dd className="font-semibold text-ink">{formatCurrency(total)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-body">Entrega</dt>
            <dd className="text-right text-muted">A combinar</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-border pt-4">
            <dt className="font-bold text-ink">Total parcial</dt>
            <dd className="text-lg font-bold text-ink">{formatCurrency(total)}</dd>
          </div>
        </dl>

        <a
          href={buildWhatsAppUrl(cart, products)}
          target="_blank"
          rel="noreferrer"
          className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-success px-5 text-sm font-bold text-white transition hover:brightness-90"
        >
          <WhatsappLogo size={21} weight="fill" />
          Finalizar no WhatsApp
        </a>
        <p className="mt-4 text-center text-xs leading-5 text-muted">
          O WhatsApp abrirá com produtos, tamanhos, quantidades e total preenchidos.
        </p>
        <div className="mt-5 rounded-lg bg-canvas p-4 text-xs leading-5 text-body">
          Este e um ambiente demonstrativo. Confirme disponibilidade, entrega,
          pagamento e política de troca no atendimento.
        </div>
      </aside>
    </div>
  );
}
