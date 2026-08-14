---
version: alpha
name: VPP Store
description: E-commerce editorial de moda feminina com atmosfera acolhedora, produto em primeiro plano e conversao sem agressividade visual.
colors:
  primary: "#173E36"
  primary-hover: "#0F2D27"
  primary-soft: "#DCE7E1"
  secondary: "#A7AD91"
  accent: "#C9876C"
  accent-soft: "#E9CBC2"
  canvas: "#FCFAF7"
  surface: "#FFFFFF"
  surface-muted: "#F5F1EC"
  ink: "#211E1B"
  body: "#514C47"
  muted: "#756E67"
  border: "#E7E0D8"
  white: "#FFFFFF"
  rating: "#B5792F"
  success: "#356C55"
  error: "#A83E3E"
typography:
  display-xl:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -0.03em
  display-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.015em
  title-lg:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.005em
  body-lg:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  body-md:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label-md:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.01em
  label-sm:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 18px
  xl: 28px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-sm: 64px
  section: 96px
  section-lg: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 13px 23px
    height: 48px
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 44px
  product-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 12px
  category-card:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 13px 18px
    height: 48px
---

# VPP Store

## Overview

Sistema visual-base para uma loja de moda feminina contemporanea. A direcao combina a leveza editorial e a fotografia natural das referencias com uma estrutura de e-commerce clara e confiavel. A personalidade deve parecer elegante, serena, humana e acessivel — nunca luxuosa de forma fria nem promocional em excesso.

As imagens de referencia orientam composicao, ritmo e hierarquia. Nao reutilizar os nomes Umora ou Velora, seus logotipos, slogans, textos, fotografias, ilustracoes botanicas ou a disposicao exata de qualquer tela.

Publico principal: mulheres adultas interessadas em pecas versateis, femininas e confortaveis, com uma experiencia de compra simples e segura.

## Colors

- **Primary / Verde Floresta (`#173E36`)**: botoes principais, links ativos, faixa de prova social e rodape. Deve concentrar a acao.
- **Secondary / Salvia (`#A7AD91`)**: fundos de apoio, etiquetas suaves e detalhes editoriais.
- **Accent / Terracota (`#C9876C`)**: pequenos destaques, selos de novidade e detalhes sazonais; nunca competir com o CTA.
- **Accent Soft / Rosa Argila (`#E9CBC2`)**: formas de fundo e blocos editoriais discretos.
- **Canvas / Marfim Claro (`#FCFAF7`)**: fundo principal luminoso, com calor suficiente para nao parecer branco hospitalar.
- **Surface (`#FFFFFF`)**: cards, formularios e areas que precisam se separar do canvas.
- **Ink (`#211E1B`)**: titulos e texto de maior contraste.
- **Body (`#514C47`)** e **Muted (`#756E67`)**: textos corridos e metadados.
- **Border (`#E7E0D8`)**: divisores e contornos de baixa intensidade.

O storefront usa apenas tema claro. Nao alternar automaticamente para fundos grafite ou pretos conforme a preferencia do dispositivo.

Regra de proporcao: 70% neutros quentes, 20% verde/salvia e no maximo 10% terracota/rosa. Manter contraste WCAG AA para texto e controles.

## Typography

Usar **Cormorant Garamond** para chamadas editoriais e titulos de secao. Usar **Manrope** para navegacao, precos, descricoes, formularios e controles. Ambas sao fontes abertas e substituem as tipografias proprietarias sugeridas pelas referencias.

- Desktop hero: `{typography.display-xl}`; reduzir para 48px em tablet e 42px em mobile.
- Titulos de secao: `{typography.headline-lg}` ou `{typography.headline-md}`.
- Nome de produto: `{typography.title-md}`.
- Preco: 15–16px / 700 em Manrope; preco anterior em muted com tachado.
- Etiquetas: `{typography.label-sm}`, caixa alta apenas para microcopy curta.
- Corpo: `{typography.body-md}`; evitar linhas maiores que 68 caracteres.

## Layout

- Grid desktop de 12 colunas, `max-width: 1280px`, gutters de 32px.
- Tablet: 8 colunas, gutters de 24px. Mobile: 4 colunas, gutters de 16px.
- Cabecalho: 80px desktop, 64px mobile; logo a esquerda, navegacao central e utilitarios a direita.
- Hero desktop: divisao 5/7 entre conteudo e fotografia; altura recomendada de 620–680px.
- Secoes principais usam 96px de espacamento vertical; mobile usa 64px.
- Grade de categorias: 4 colunas desktop, 2 tablet/mobile.
- Grade de produtos: 4 colunas desktop, 2 tablet, 2 mobile com cards compactos; 1 coluna apenas abaixo de 360px.

Ordem recomendada da homepage:

1. Barra de beneficio opcional.
2. Cabecalho e navegacao.
3. Hero editorial com um CTA principal.
4. Categorias em quatro cards.
5. Mais vendidos.
6. Historia/manifesto em composicao imagem + texto.
7. Faixa de beneficios e numeros de confianca.
8. Depoimentos.
9. Newsletter.
10. Rodape completo.

## Elevation & Depth

O sistema e predominantemente plano. Separar superficies por contraste tonal, borda e espacamento.

- Card padrao: `0 1px 2px rgba(33,30,27,.04), 0 8px 24px rgba(33,30,27,.06)`.
- Card flutuante do hero: `0 16px 50px rgba(33,30,27,.14)`.
- Cabecalho fixo: borda inferior `1px solid #DED6CE`; sem sombra em repouso.
- Hover de produto: elevar imagem em `translateY(-2px)` e aumentar a sombra suavemente em 180ms.
- Nao usar gradientes de marca; a profundidade vem da fotografia e de blocos de cor solida.

## Shapes

- Botoes e campos: pill (`{rounded.full}`).
- Cards de produto e categoria: 12px.
- Blocos editoriais e imagens de destaque: 18–28px.
- Icones: traco fino de 1.5–2px, terminais arredondados, sem preenchimentos pesados.
- Formas organicas podem aparecer atras de fotografias, mas limitadas a uma por composicao.

## Components

### Header

Logo tipografico simples, navegacao com ate cinco itens e icones de busca, conta e sacola. O item ativo recebe sublinhado de 1px em verde. No mobile, usar menu lateral e preservar busca e sacola no topo.

### Hero

Headline editorial de duas ou tres linhas, texto de apoio curto, um CTA principal e opcionalmente um link secundario. A fotografia deve ocupar a maior area e mostrar tecido, movimento e luz natural. Um unico card flutuante de produto e permitido, sem carrossel pesado.

### Category Card

Imagem em proporcao 4:5, titulo curto e link discreto. A categoria inteira e clicavel; evitar botoes repetidos em cada card.

### Product Card

Imagem 4:5, acao de favorito no topo direito, badge opcional no topo esquerdo, nome, avaliacao, preco e variacoes de cor. Mostrar botao de compra apenas em hover no desktop; no mobile, manter um controle compacto sempre visivel.

### Trust Band

Fundo `{colors.primary}`, texto branco e quatro itens: entrega, pagamento, troca e atendimento. Pode incluir uma segunda linha de metricas; manter icones simples e numeros verificaveis.

### Testimonials

Cards claros com nota, frase curta, nome e contexto da compra. Fotos de avatar sao opcionais e nunca devem dominar.

### Newsletter

Faixa em rosa argila ou marfim, titulo serifado e campo pill com botao integrado. Pedir apenas e-mail; incluir consentimento e politica de privacidade.

### Motion

- Duracao: 160–220ms para controles; 300–450ms para secoes.
- Curva: `cubic-bezier(.2,.8,.2,1)`.
- Respeitar `prefers-reduced-motion`.
- Evitar parallax forte, carrosseis automaticos e animacoes que atrapalhem a compra.

## Do's and Don'ts

### Do

- Usar fotografia com luz natural, tons quentes e textura real de tecido.
- Dar prioridade visual a produto, preco e CTA.
- Manter uma unica acao primaria por bloco.
- Alternar secoes marfim, superficie clara e verde escuro para criar ritmo.
- Garantir alvos de toque de pelo menos 44px e foco de teclado visivel.
- Escrever textos proprios e usar imagens licenciadas ou produzidas para a marca.

### Don't

- Nao copiar nomes, slogans, logotipos, fotografias ou ornamentos botanicos das referencias.
- Nao usar rosa, verde e terracota com a mesma intensidade.
- Nao transformar todos os controles em pills; cards continuam com raio medio.
- Nao sobrecarregar a homepage com pop-ups, contadores ou selos promocionais.
- Nao usar texto cinza claro em fundo creme.
- Nao esconder preco, frete ou politica de troca atras de interacoes desnecessarias.

## Responsive Behavior

- Abaixo de 768px, empilhar o hero com texto primeiro e imagem depois.
- Reduzir o card flutuante do hero a uma faixa de produto abaixo da imagem ou removê-lo.
- Transformar navegacao em drawer; manter sacola e busca acessiveis.
- Fazer a trust band deslizar horizontalmente apenas se todos os itens nao couberem, sem autoplay.
- Usar `clamp()` na tipografia e preservar a hierarquia sem quebras artificiais.
- Testar em 320px, 375px, 768px, 1024px e 1440px.
