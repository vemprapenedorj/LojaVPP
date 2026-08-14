import type { Metadata } from "next";
import { FavoritesView } from "@/components/favorites/favorites-view";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Reveja as peças que você guardou na VPP Store.",
  robots: { index: false, follow: true },
};

export default function FavoritesPage() {
  return (
    <div className="shell section-space">
      <div className="mb-9">
        <p className="eyebrow">Sua curadoria</p>
        <h1 className="section-title mt-3">Favoritos</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-body">
          Reúna aqui as peças que chamaram sua atenção antes de decidir.
        </p>
      </div>
      <FavoritesView products={products} />
    </div>
  );
}
