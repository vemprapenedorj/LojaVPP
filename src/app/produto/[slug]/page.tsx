import {
  ArrowLeft,
  CheckCircle,
  Ruler,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductPurchasePanel } from "@/components/product/product-purchase-panel";
import { getProductBySlug, products } from "@/data/products";
import { formatCurrency } from "@/lib/format";
import { getSiteUrl } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 384, height: 512, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);
  const siteUrl = getSiteUrl();
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    brand: { "@type": "Brand", name: "VPP Store" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/produto/${product.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="shell py-8 md:py-12">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          <ArrowLeft size={18} /> Voltar ao catálogo
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="overflow-hidden rounded-[1.5rem] bg-surface-muted">
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={768}
              height={1024}
              priority
              sizes="(max-width: 1023px) 100vw, 54vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>

          <div className="lg:py-5">
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-4 font-display text-[clamp(2.8rem,6vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <strong className="text-xl text-ink">{formatCurrency(product.price)}</strong>
              {product.originalPrice && (
                <span className="text-sm text-muted line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-body">
              {product.description}
            </p>

            <ProductPurchasePanel product={product} />

            <div className="mt-9 grid gap-4 border-t border-border pt-7 sm:grid-cols-2">
              <div className="flex gap-3">
                <Ruler size={22} className="shrink-0 text-primary" />
                <div>
                  <h2 className="text-sm font-bold text-ink">Material</h2>
                  <p className="mt-1 text-xs leading-5 text-muted">{product.material}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ShieldCheck size={22} className="shrink-0 text-primary" />
                <div>
                  <h2 className="text-sm font-bold text-ink">Compra assistida</h2>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    Confirme medidas, entrega e pagamento no WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-7 space-y-3 border-t border-border pt-7">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3 text-sm text-body">
                  <CheckCircle size={18} className="text-success" weight="fill" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="section-space bg-surface" aria-labelledby="relacionados-title">
        <div className="shell">
          <p className="eyebrow">Continue explorando</p>
          <h2 id="relacionados-title" className="section-title mt-3">
            Você também pode gostar
          </h2>
          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
