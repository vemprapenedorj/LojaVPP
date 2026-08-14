"use client";

import {
  Bag,
  Heart,
  List,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { useStore } from "@/components/providers/store-provider";
import { getWhatsAppNumber } from "@/lib/whatsapp";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#localizacao", label: "Localização" },
];

function SocialIconLink({
  href,
  label,
  src,
}: {
  href: string;
  label: string;
  src: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-surface bg-surface shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary-soft"
      aria-label={label}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="44px"
        loading="eager"
        className="object-cover"
      />
    </a>
  );
}

function UtilityLink({
  href,
  label,
  count,
  children,
}: {
  href: string;
  label: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="icon-button relative" aria-label={label}>
      {children}
      {!!count && (
        <span className="absolute -right-0.5 -top-0.5 flex min-h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[0.6rem] font-bold leading-none text-white">
          {count}
        </span>
      )}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, favorites } = useStore();

  return (
    <>
      <div className="bg-primary text-white">
        <div className="shell flex min-h-11 items-center justify-center">
          <p className="text-[0.68rem] font-semibold tracking-wide sm:text-xs">
            <span className="sm:hidden">Pedidos pelo WhatsApp</span>
            <span className="hidden sm:inline">
              Projeto demonstrativo - pedidos pelo WhatsApp
            </span>
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-canvas/95 backdrop-blur-md">
        <div className="shell flex h-16 items-center justify-between gap-4 lg:h-20">
          <BrandLogo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href === "/catalogo" && pathname === "/catalogo";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <div
              className="flex items-center gap-1"
              aria-label="Redes sociais e contato"
            >
              <SocialIconLink
                href="https://www.instagram.com/"
                label="Abrir Instagram"
                src="/icon-instagram.jpg"
              />
              <SocialIconLink
                href={`https://wa.me/${getWhatsAppNumber()}`}
                label="Conversar com a VPP Store pelo WhatsApp"
                src="/whatsapp-icon.jpg"
              />
            </div>
            <div className="hidden items-center gap-1 sm:flex">
              <UtilityLink href="/catalogo" label="Buscar produtos">
                <MagnifyingGlass size={20} aria-hidden="true" />
              </UtilityLink>
              <UtilityLink
                href="/favoritos"
                label={`${favorites.length} produtos favoritos`}
                count={favorites.length}
              >
                <Heart size={20} aria-hidden="true" />
              </UtilityLink>
            </div>
            <UtilityLink
              href="/carrinho"
              label={`${cartCount} itens no carrinho`}
              count={cartCount}
            >
              <Bag size={20} aria-hidden="true" />
            </UtilityLink>
            <button
              type="button"
              className="icon-button lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-border bg-surface px-4 py-4 lg:hidden"
            aria-label="Principal mobile"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-border/70 py-4 text-sm font-semibold text-ink last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/favoritos"
                onClick={() => setIsOpen(false)}
                className="border-b border-border/70 py-4 text-sm font-semibold text-ink last:border-0 sm:hidden"
              >
                Favoritos
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
