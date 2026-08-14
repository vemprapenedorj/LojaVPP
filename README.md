# VPP Store

MVP responsivo de e-commerce de moda feminina com catálogo demonstrativo,
favoritos, carrinho persistente e fechamento assistido pelo WhatsApp.

## Stack

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Phosphor Icons
- Vitest

## Executar localmente

1. Copie `.env.example` para `.env.local` e ajuste o número de WhatsApp.
2. Instale as dependencias com `npm install`.
3. Inicie o projeto com `npm run dev`.
4. Acesse `http://localhost:3000`.

## Variaveis de ambiente

- `NEXT_PUBLIC_SITE_URL`: URL publica usada em sitemap, metadados e dados estruturados.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número com código do país e DDD, apenas dígitos.

Enquanto nenhuma variavel for definida, o projeto usa valores demonstrativos.

## Qualidade

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Conteudo

Produtos, preços, textos comerciais e políticas são demonstrativos. Revise-os e
configure o WhatsApp real antes de publicar.
