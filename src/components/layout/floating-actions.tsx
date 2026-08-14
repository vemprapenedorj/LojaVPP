"use client";

import { ArrowUp } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getWhatsAppNumber } from "@/lib/whatsapp";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setShowBackToTop(window.scrollY > 560);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setShowBackToTop(false);
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <aside
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-center gap-3 sm:right-6"
      aria-label="Ações rápidas"
    >
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-primary text-white shadow-[0_8px_24px_rgba(23,62,54,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary-hover active:translate-y-0"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp size={22} weight="bold" aria-hidden="true" />
        </button>
      )}

      <a
        href={`https://wa.me/${getWhatsAppNumber()}`}
        target="_blank"
        rel="noreferrer"
        className="relative h-14 w-14 overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_10px_30px_rgba(23,62,54,0.28)] transition duration-200 hover:-translate-y-0.5 active:translate-y-0"
        aria-label="Conversar com a VPP Store pelo WhatsApp"
        title="Falar pelo WhatsApp"
      >
        <Image
          src="/whatsapp-icon.jpg"
          alt=""
          fill
          sizes="56px"
          className="object-cover"
        />
      </a>
    </aside>
  );
}
