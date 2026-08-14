import type { CartItem, Product } from "@/types/product";
import { formatCurrency } from "@/lib/format";

const DEMO_WHATSAPP_NUMBER = "5524992087767";

export function getWhatsAppNumber() {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEMO_WHATSAPP_NUMBER
  ).replace(/\D/g, "");
}

export function buildOrderMessage(cart: CartItem[], products: Product[]) {
  const productMap = new Map(products.map((product) => [product.id, product]));
  const lines = cart.flatMap((item) => {
    const product = productMap.get(item.productId);
    if (!product) return [];

    const subtotal = product.price * item.quantity;
    return [
      `- ${item.quantity}x ${product.name} | Tam. ${item.size} | ${formatCurrency(subtotal)}`,
    ];
  });

  const total = cart.reduce((sum, item) => {
    const product = productMap.get(item.productId);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  return [
    "Olá, VPP Store! Gostaria de finalizar este pedido:",
    "",
    ...lines,
    "",
    `Total dos produtos: ${formatCurrency(total)}`,
    "",
    "Pode me ajudar com a entrega e o pagamento?",
  ].join("\n");
}

export function buildWhatsAppUrl(
  cart: CartItem[],
  products: Product[],
  phone = getWhatsAppNumber(),
) {
  const message = buildOrderMessage(cart, products);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
