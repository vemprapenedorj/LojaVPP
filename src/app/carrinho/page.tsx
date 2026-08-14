import type { Metadata } from "next";
import { CartView } from "@/components/cart/cart-view";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Carrinho",
  description: "Revise sua seleção e envie o pedido para a VPP Store pelo WhatsApp.",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <div className="shell section-space">
      <div className="mb-9">
        <p className="eyebrow">Sua seleção</p>
        <h1 className="section-title mt-3">Carrinho</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-body">
          Ajuste as quantidades e envie o resumo completo para continuar o
          atendimento pelo WhatsApp.
        </p>
      </div>
      <CartView products={products} />
    </div>
  );
}
