import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const footerGroups = [
  {
    title: "Comprar",
    links: [
      ["Catálogo", "/catalogo"],
      ["Favoritos", "/favoritos"],
      ["Carrinho", "/carrinho"],
    ],
  },
  {
    title: "Atendimento",
    links: [
      ["Como comprar", "/#como-comprar"],
      ["Trocas e devoluções", "/#beneficios"],
      ["Fale conosco", "/#localizacao"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <BrandLogo inverse />
          <p className="mt-5 text-sm leading-7 text-white/70">
            Moda feminina contemporânea para vestir dias reais com leveza,
            presença e conforto.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em]">
              {group.title}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {group.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VPP Store. Projeto demonstrativo.</p>
          <p>Preços, produtos e políticas sujeitos a revisão antes da publicação.</p>
        </div>
      </div>
    </footer>
  );
}
