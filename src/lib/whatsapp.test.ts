import { describe, expect, it } from "vitest";
import { products } from "@/data/products";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const cart = [
  { productId: "vpp-001", size: "M", quantity: 2 },
  { productId: "vpp-008", size: "Único", quantity: 1 },
];

describe("WhatsApp checkout", () => {
  it("gera um resumo legível com itens, tamanhos e total", () => {
    const message = buildOrderMessage(cart, products);

    expect(message).toContain("2x Vestido Enlace Sálvia | Tam. M");
    expect(message).toContain("1x Bolsa Trama Camel | Tam. Único");
    expect(message.replace(/\s/g, " ")).toContain(
      "Total dos produtos: R$ 799,70",
    );
  });

  it("gera um link wa.me com telefone e mensagem codificada", () => {
    const url = buildWhatsAppUrl(cart, products, "5582988887777");

    expect(url).toMatch(/^https:\/\/wa\.me\/5582988887777\?text=/);
    expect(decodeURIComponent(url)).toContain("VPP Store");
  });
});
