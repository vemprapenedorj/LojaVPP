"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-full bg-surface px-5 py-4 text-sm font-semibold text-primary" role="status">
        Cadastro demonstrativo concluído. Obrigada pelo interesse!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
      <label htmlFor="newsletter-email" className="sr-only">
        Seu melhor e-mail
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Seu melhor e-mail"
        className="h-14 w-full rounded-full border border-border bg-surface px-6 pr-16 text-sm text-ink outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1.5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-hover"
        aria-label="Cadastrar e-mail"
      >
        <ArrowRight size={20} />
      </button>
    </form>
  );
}
