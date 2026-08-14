# VPP Store MVP

## Goal

Construir um storefront responsivo de moda feminina com catalogo demonstrativo, favoritos, carrinho persistente e fechamento do pedido pelo WhatsApp.

## Tasks

- [x] Criar o scaffold Next.js, TypeScript, Tailwind v4 e scripts de qualidade -> Verify: dependencias instaladas e dev server inicia.
- [x] Modelar produtos, categorias e utilitarios de preco/WhatsApp -> Verify: TypeScript valida os dados sem `any`.
- [x] Criar layout global, header, footer e providers de carrinho/favoritos -> Verify: navegacao e contadores respondem no navegador.
- [x] Implementar homepage baseada no DESIGN.md -> Verify: hero, categorias, produtos, manifesto, beneficios e newsletter renderizam.
- [x] Implementar catalogo com busca, categoria e ordenacao -> Verify: filtros alteram a grade e o estado vazio funciona.
- [x] Implementar pagina de produto -> Verify: slug valido renderiza e slug invalido retorna 404.
- [x] Implementar favoritos e carrinho -> Verify: adicionar, remover, alterar quantidade e persistir apos recarregar.
- [x] Implementar pedido por WhatsApp e SEO tecnico -> Verify: link contem resumo do pedido; sitemap, robots, metadata e JSON-LD existem.
- [x] Executar lint, tipos, testes, build e auditoria visual responsiva -> Verify: todos os comandos passam sem erros.

## Done When

- [x] Os seis fluxos do MVP funcionam em desktop e mobile.
- [x] A implementacao segue o DESIGN.md e usa VPP Store em todos os textos de marca.
- [x] Build, lint, tipos e testes passam.

## Notes

- O numero de WhatsApp sera configuravel por variavel publica; usar valor demonstrativo enquanto o numero real nao for fornecido.
- Produtos e depoimentos sao demonstrativos e nao devem ser publicados como afirmacoes reais sem revisao.
