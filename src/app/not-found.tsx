import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell section-space text-center">
      <p className="eyebrow">Página não encontrada</p>
      <h1 className="mx-auto mt-4 max-w-xl font-display text-6xl font-semibold leading-none text-ink">
        Essa peça saiu da vitrine
      </h1>
      <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-body">
        O endereço pode ter mudado ou o produto não está mais disponível nesta
        demonstração.
      </p>
      <Link href="/catalogo" className="btn-primary mt-7 inline-flex">
        Voltar ao catálogo
      </Link>
    </div>
  );
}
