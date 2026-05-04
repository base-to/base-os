---
execution: subagent
agent: identidade-visual/agents/carla-compilacao
model_tier: powerful
inputFile: squads/identidade-visual/output/visuais-aprovados.md
outputFile: squads/identidade-visual/output/brand-guide.html
---

# Step 05: Montar Brand Kit

Carla Compilação compila todos os elementos visuais aprovados em um brand guide HTML completo, interativo e utilizável por qualquer designer externo sem orientação adicional. Este step executa como subagente com o modelo mais poderoso disponível dado o volume e a complexidade de compilação.

## Context Loading

Ler os seguintes arquivos antes de iniciar:

1. `squads/identidade-visual/output/visuais-aprovados.md` — input principal: logo, paleta, tipografia, mockups
2. `squads/identidade-visual/output/estrategia-de-marca.md` — para a seção de Introdução do brand guide
3. `pipeline/data/tone-of-voice.md` — para a seção de Tom de Voz com os 6 tons e exemplos
4. `pipeline/data/anti-patterns.md` — para a seção de Uso Incorreto
5. `pipeline/data/quality-criteria.md` — para verificar completude do brand guide contra os critérios

## Instructions / Process

1. Extrair de `visuais-aprovados.md` todos os elementos especificados: logo aprovado, paleta (HEX, RGB, CMYK, proporções, ratios WCAG), par tipográfico (hierarquia, specimen), mockups
2. Compilar a Seção 1 (Introdução) usando estrategia-de-marca.md: missão, arquétipo, tagline aprovada
3. Compilar a Seção 2 (Logo System): 5 variações do logo aprovado, área de proteção, tamanho mínimo
4. Compilar a Seção 3 (Paleta de Cores): swatches com HEX visível, tabela completa, ratios WCAG, proporções de uso, combinações aprovadas e proibidas
5. Compilar a Seção 4 (Tipografia): specimen com texto real da clínica, tabela de hierarquia, links Google Fonts
6. Compilar a Seção 5 (Tom de Voz): 6 tons com exemplos reais de copy da Clínica Base
7. Compilar a Seção 6 (Aplicações): mockups aprovados como referência visual para uso em Instagram, WhatsApp, cartão de visita
8. Compilar a Seção 7 (Uso Incorreto): 5+ proibições com exemplos do que não fazer

## Output Format

Arquivo HTML completo com:
- Tag `<!DOCTYPE html>` e `<html lang="pt-BR">`
- `<meta charset="UTF-8">` e `<meta name="viewport">`
- Link para Google Fonts (Playfair Display + Lato)
- CSS em `<style>` tag (sem dependências externas)
- Navegação por âncoras entre as 7 seções
- Swatches de cor como `<div>` com `background-color` e HEX visível
- Specimen tipográfico como HTML renderizado (não imagem)
- Seção de Uso Incorreto com destaque visual vermelho

## Output Example

> Estrutura HTML realista mostrando o nível de detalhe esperado.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brand Guide — Clínica Base</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
  <style>
    /* variáveis de cor */
    :root { --charcoal:#3D2B1F; --creme:#F5EFE6; --cobre:#B87333; --salvia:#7C9A7C; --preto:#1A1A1A; }
    /* reset e base */
    body { font-family:'Lato',sans-serif; background:var(--creme); color:var(--preto); margin:0; padding:0; }
    /* navegação */
    nav { background:var(--charcoal); padding:16px 32px; position:sticky; top:0; z-index:100; }
    nav a { color:var(--creme); text-decoration:none; margin-right:24px; font-size:13px; letter-spacing:0.05em; }
    /* seções */
    .section { padding:64px 32px; max-width:900px; margin:0 auto; }
    .section-dark { background:var(--charcoal); color:var(--creme); }
    /* tipografia */
    h1,h2,h3 { font-family:'Playfair Display',serif; }
    h1 { font-size:48px; color:var(--charcoal); }
    h2 { font-size:32px; border-bottom:2px solid var(--cobre); padding-bottom:8px; }
    /* swatches */
    .swatch-row { display:flex; gap:16px; flex-wrap:wrap; margin:24px 0; }
    .swatch { width:100px; }
    .swatch-color { height:80px; border-radius:8px; margin-bottom:8px; }
    .swatch-info { font-size:12px; font-family:'Lato',sans-serif; line-height:1.4; }
    /* uso incorreto */
    .dont { border-left:4px solid #C0392B; background:rgba(192,57,43,0.05); padding:16px; margin:12px 0; }
    /* responsivo */
    @media(max-width:600px) { .section { padding:32px 16px; } h1 { font-size:32px; } }
  </style>
</head>
<body>

<nav>
  <a href="#intro">Introdução</a>
  <a href="#logo">Logo</a>
  <a href="#cores">Cores</a>
  <a href="#tipo">Tipografia</a>
  <a href="#voz">Tom de Voz</a>
  <a href="#apps">Aplicações</a>
  <a href="#erros">Uso Incorreto</a>
</nav>

<div class="section" id="intro">
  <h1>Clínica Base — Brand Guide</h1>
  <p style="font-family:'Playfair Display',serif; font-size:22px; color:var(--cobre);">Onde o desenvolvimento começa pela mãe.</p>
  <p>A Clínica Base é uma clínica de Terapia Ocupacional em Sorocaba, SP. Opera pelo Método B.A.S.E. (Brincar, Afeto, Sensorial, Estimulação) com a mãe como protagonista do tratamento. Este documento é a referência oficial da identidade visual.</p>
  <p><strong>Arquétipo:</strong> Cuidador (primário) + Sábio (secundário)</p>
</div>

<div class="section" id="logo" style="background:white;">
  <h2>Sistema de Logo</h2>
  <p>Logo principal: Lettermark B.A.S.E. em Playfair Display Bold. "Clínica Base" em Lato Regular abaixo.</p>
  <h3>Variações</h3>
  <p><strong>Principal:</strong> #3D2B1F sobre #F5EFE6 — uso padrão em todos os materiais</p>
  <p><strong>Negativa:</strong> #F5EFE6 sobre #3D2B1F — para fundos escuros</p>
  <p><strong>Monocromática:</strong> #3D2B1F sobre branco — documentos impressos</p>
  <p><strong>Ícone isolado:</strong> "B." em #3D2B1F — favicon e apps</p>
  <h3>Área de Proteção</h3>
  <p>Espaço mínimo de 1x a altura do símbolo em todos os lados. Nunca violar essa área.</p>
  <h3>Tamanho Mínimo</h3>
  <p>Digital: 120px de largura. Impresso: 25mm de largura.</p>
</div>

<div class="section" id="cores">
  <h2>Paleta de Cores</h2>
  <div class="swatch-row">
    <div class="swatch">
      <div class="swatch-color" style="background:#3D2B1F;"></div>
      <div class="swatch-info"><strong>Charcoal Quente</strong><br>#3D2B1F<br>RGB 61,43,31<br>Uso: 40%</div>
    </div>
    <div class="swatch">
      <div class="swatch-color" style="background:#F5EFE6; border:1px solid #ddd;"></div>
      <div class="swatch-info"><strong>Creme</strong><br>#F5EFE6<br>RGB 245,239,230<br>Uso: 40%</div>
    </div>
    <div class="swatch">
      <div class="swatch-color" style="background:#B87333;"></div>
      <div class="swatch-info"><strong>Cobre</strong><br>#B87333<br>RGB 184,115,51<br>Uso: 10%</div>
    </div>
    <div class="swatch">
      <div class="swatch-color" style="background:#7C9A7C;"></div>
      <div class="swatch-info"><strong>Verde Sálvia</strong><br>#7C9A7C<br>RGB 124,154,124<br>Uso: 7%</div>
    </div>
    <div class="swatch">
      <div class="swatch-color" style="background:#1A1A1A;"></div>
      <div class="swatch-info"><strong>Preto Quente</strong><br>#1A1A1A<br>RGB 26,26,26<br>Uso: 3%</div>
    </div>
  </div>
  <h3>Contraste WCAG 2.1</h3>
  <p>Charcoal/Creme: 12.1:1 (AAA). Preto/Creme: 16.1:1 (AAA). Cobre/Creme: 3.8:1 (AA texto grande).</p>
</div>

</body>
</html>
```

## Veto Conditions

1. Brand guide entregue sem as 7 seções completas — rejeitar e completar antes de passar para Paulo Padrão
2. Brand guide sem swatches de cor com HEX visível — rejeitar: designer externo precisa dos códigos

## Quality Criteria

- [ ] HTML válido que renderiza em Chrome/Safari/Firefox moderno
- [ ] 7 seções completas com conteúdo real da Clínica Base
- [ ] Navegação por âncoras funcionando entre seções
- [ ] Swatches de cor com HEX visível
- [ ] Links para Google Fonts incluídos no head
- [ ] Seção de Uso Incorreto com 5+ proibições
- [ ] CSS responsivo (funciona em dispositivo móvel)
