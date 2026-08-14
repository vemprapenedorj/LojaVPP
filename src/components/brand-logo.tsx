import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center justify-center ${
        inverse
          ? "w-44 rounded-2xl bg-canvas p-3 shadow-sm"
          : "w-[4.15rem] lg:w-20"
      }`}
      aria-label="VPP Store - página inicial"
    >
      <Image
        src="/images/vpp-store-logo.png"
        alt=""
        width={1194}
        height={1012}
        sizes={inverse ? "176px" : "(min-width: 1024px) 80px, 67px"}
        preload={!inverse}
        className="h-auto w-full"
      />
    </Link>
  );
}
