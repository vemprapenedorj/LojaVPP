---
type: project
created: 2026-08-14
updated: 2026-08-14
---

# Decisoes tecnicas da VPP Store

## MVP

- Nome definitivo: VPP Store.
- Publico: consumidoras de moda feminina contemporanea.
- Catalogo: conteudo demonstrativo tipado e facil de substituir.
- Fluxos: home, catalogo, produto, favoritos e carrinho.
- Conversao: pedido formatado e enviado por WhatsApp.
- Persistencia: carrinho e favoritos no navegador.
- Fora do MVP: autenticacao, banco de dados, estoque real, pagamento online e painel administrativo.

## Arquitetura

- Next.js App Router com TypeScript estrito.
- Server Components para paginas e conteudo estatico.
- Client Components pequenos para carrinho, favoritos, busca, filtros e menus.
- Tailwind CSS v4 com tokens derivados do DESIGN.md.
- Dados demonstrativos isolados em uma camada de dominio.

