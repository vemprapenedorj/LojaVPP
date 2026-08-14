import Link from "next/link";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-xl rounded-[1.25rem] border border-border bg-surface px-6 py-14 text-center md:px-12">
      <p className="eyebrow">Sua seleção</p>
      <h2 className="mt-3 font-display text-4xl font-semibold text-ink">{title}</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-body">
        {description}
      </p>
      <Link href="/catalogo" className="btn-primary mt-7 inline-flex">
        Explorar o catálogo
      </Link>
    </div>
  );
}
