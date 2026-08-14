import {
  ArrowRight,
  ArrowSquareOut,
  ChatCircleDots,
  Heart,
  MapPin,
  Package,
  Quotes,
  ShieldCheck,
  Sparkle,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/site";
import { getWhatsAppNumber } from "@/lib/whatsapp";

const categoryCards = [
  {
    title: "Vestidos",
    subtitle: "Leves e femininos",
    image: "/images/vestido-verde.png",
    href: "/catalogo?categoria=Vestidos",
  },
  {
    title: "Alfaiataria",
    subtitle: "Estrutura com conforto",
    image: "/images/blazer-camel.png",
    href: "/catalogo?categoria=Alfaiataria",
  },
  {
    title: "Essenciais",
    subtitle: "Versatilidade diaria",
    image: "/images/blusa-marfim.png",
    href: "/catalogo",
  },
  {
    title: "Acessórios",
    subtitle: "O toque final",
    image: "/images/bolsa-camel.png",
    href: "/catalogo?categoria=Acessórios",
  },
];

const benefits = [
  {
    icon: Package,
    title: "Entrega combinada",
    text: "Prazo e valor confirmados no atendimento.",
  },
  {
    icon: ShieldCheck,
    title: "Compra acompanhada",
    text: "Tire suas dúvidas antes de finalizar.",
  },
  {
    icon: Heart,
    title: "Troca facilitada",
    text: "Política apresentada de forma clara.",
  },
  {
    icon: ChatCircleDots,
    title: "Atendimento humano",
    text: "Converse diretamente pelo WhatsApp.",
  },
];

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);
  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=Penedo%2C%20Itatiaia%20-%20RJ";
  const mapEmbedUrl =
    "https://www.google.com/maps?q=Penedo%2C%20Itatiaia%20-%20RJ&output=embed";
  const whatsappLink = `https://wa.me/${getWhatsAppNumber()}`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VPP Store",
    url: getSiteUrl(),
    description: "Loja demonstrativa de moda feminina contemporânea.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="overflow-hidden">
        <div className="shell grid items-center gap-10 py-10 md:grid-cols-[0.82fr_1.18fr] md:py-14 lg:gap-16">
          <div className="relative z-10 py-4 md:py-10">
            <p className="eyebrow">Nova coleção</p>
            <h1 className="mt-5 max-w-[10ch] font-display text-[clamp(3.4rem,7vw,6.4rem)] font-semibold leading-[0.88] tracking-[-0.045em] text-ink">
              Vista leve. Viva inteira.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-body md:text-lg md:leading-8">
              Peças femininas, versáteis e confortáveis para acompanhar a sua
              rotina com naturalidade.
            </p>
            <Link href="/catalogo" className="btn-primary mt-8 inline-flex gap-2">
              Conhecer a coleção
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-10 h-44 w-44 rounded-full bg-accent-soft md:h-56 md:w-56" />
            <Image
              src="/images/hero-vpp-store.png"
              alt="Mulher usando vestido verde sálvia em ambiente de tons naturais"
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 767px) 100vw, 58vw"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_38%]"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-xl border border-white/60 bg-surface/95 p-4 shadow-[0_16px_50px_rgba(33,30,27,.14)] backdrop-blur md:bottom-6 md:left-6 md:right-auto md:w-72">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary">
                  Destaque da semana
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  Vestido Enlace Sálvia
                </p>
              </div>
              <Link
                href="/produto/vestido-enlace-salvia"
                className="icon-button shrink-0 bg-primary text-white hover:bg-primary-hover hover:text-white"
                aria-label="Ver Vestido Enlace Sálvia"
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-surface" aria-labelledby="categorias-title">
        <div className="shell">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Escolha por categoria</p>
              <h2 id="categorias-title" className="section-title mt-3">
                Encontre o seu ritmo
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="hidden text-sm font-bold text-primary underline-offset-4 hover:underline sm:block"
            >
              Ver tudo
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {categoryCards.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group overflow-hidden rounded-xl bg-surface-muted"
              >
                <Image
                  src={category.image}
                  alt=""
                  width={384}
                  height={512}
                  sizes="(max-width: 767px) 50vw, 25vw"
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="p-4 md:p-5">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{category.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="destaques-title">
        <div className="shell">
          <div className="text-center">
              <p className="eyebrow">Seleção VPP</p>
            <h2 id="destaques-title" className="section-title mt-3">
              Favoritos da coleção
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-body">
              Modelagens versáteis, texturas naturais e uma paleta pensada para
              combinar entre si.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface" aria-labelledby="historia-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Image
            src="/images/editorial-vpp-store.png"
            alt="Duas mulheres caminhando juntas com roupas leves em ambiente natural"
            width={1536}
            height={910}
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
          />
          <div>
            <p className="eyebrow">Sobre a VPP Store</p>
            <h2 id="historia-title" className="section-title mt-4 max-w-[9ch]">
              Estilo que cabe na vida real
            </h2>
            <p className="mt-6 text-base leading-8 text-body">
              Acreditamos em roupas que fazem mais de uma coisa: acolhem o corpo,
              simplificam escolhas e deixam espaço para a sua personalidade.
            </p>
            <p className="mt-4 text-base leading-8 text-body">
              Por isso, esta coleção demonstrativa combina formas femininas,
              materiais agradáveis e cores que atravessam estações.
            </p>
            <Link href="/catalogo" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
              Descobrir as peças <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-primary py-8 text-white">
        <div className="shell grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <Icon size={26} weight="light" className="shrink-0" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-bold">{title}</h2>
                <p className="mt-1 text-xs leading-5 text-white/70">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="como-comprar" className="section-space" aria-labelledby="comprar-title">
        <div className="shell grid items-center gap-10 rounded-[1.75rem] bg-accent-soft px-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:px-12 lg:px-16">
          <div>
            <Sparkle size={30} weight="light" className="text-primary" />
            <p className="eyebrow mt-5">Compra simples</p>
            <h2 id="comprar-title" className="section-title mt-3">
              Do clique para a conversa
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["01", "Escolha", "Explore o catálogo e salve seus favoritos."],
              ["02", "Monte", "Selecione o tamanho e adicione ao carrinho."],
              ["03", "Converse", "Envie o resumo pelo WhatsApp e combine os detalhes."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-l border-primary/25 pl-5">
                <span className="text-xs font-bold text-primary">{number}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="avaliacoes"
        className="scroll-mt-24 bg-surface py-14 md:py-20"
        aria-labelledby="avaliacoes-title"
      >
        <div className="shell grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
          <div>
            <Quotes size={34} weight="light" className="text-primary" aria-hidden="true" />
            <p className="eyebrow mt-5">Avaliações</p>
            <h2 id="avaliacoes-title" className="section-title mt-3">
              Experiências compartilhadas
            </h2>
          </div>

          <div className="rounded-xl border border-border bg-canvas p-6 md:p-8">
            <span className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-primary">
              Integração preparada
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold text-ink">
              Google ou TripAdvisor
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-body">
              Este espaço receberá avaliações verificadas da plataforma escolhida
              pelo cliente. A fonte, a nota e os depoimentos serão exibidos somente
              depois da integração oficial.
            </p>
          </div>
        </div>
      </section>

      <section
        id="localizacao"
        className="scroll-mt-24 section-space"
        aria-labelledby="localizacao-title"
      >
        <div className="shell grid overflow-hidden rounded-[1.75rem] border border-border bg-surface lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="eyebrow">Contato e localização</p>
            <h2 id="localizacao-title" className="section-title mt-3">
              Estamos em Penedo
            </h2>
            <p className="mt-5 text-sm leading-7 text-body">
              A localização atual aponta para Penedo, em Itatiaia, Rio de Janeiro.
              O endereço exato poderá ser atualizado quando os dados definitivos
              da loja forem informados.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center gap-3 rounded-xl border border-border bg-canvas px-4 text-sm font-semibold text-ink transition hover:border-primary"
              >
                <MapPin size={22} className="shrink-0 text-primary" aria-hidden="true" />
                <span className="flex-1">Penedo, Itatiaia - Rio de Janeiro</span>
                <ArrowSquareOut size={18} className="text-muted" aria-hidden="true" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center gap-3 rounded-xl border border-border bg-canvas px-4 text-sm font-semibold text-ink transition hover:border-success"
              >
                <WhatsappLogo
                  size={22}
                  weight="fill"
                  className="shrink-0 text-success"
                  aria-hidden="true"
                />
                <span className="flex-1">WhatsApp: (24) 99208-7767</span>
                <ArrowSquareOut size={18} className="text-muted" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="min-h-[24rem] border-t border-border bg-surface-muted lg:min-h-[34rem] lg:border-l lg:border-t-0">
            <iframe
              src={mapEmbedUrl}
              title="Mapa interativo de Penedo, Rio de Janeiro"
              className="h-full min-h-[24rem] w-full lg:min-h-[34rem]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20" aria-labelledby="newsletter-title">
        <div className="shell flex flex-col items-center text-center">
          <p className="eyebrow">Novidades sem excesso</p>
          <h2 id="newsletter-title" className="section-title mt-3">
            Um pouco de beleza na sua caixa de entrada
          </h2>
          <p className="mb-7 mt-4 max-w-xl text-sm leading-7 text-body">
            Receba novidades da coleção e inspirações de uso. Formulário
            demonstrativo, sem envio real de dados.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
