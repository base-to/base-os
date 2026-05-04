---
task: "Montar Brand Guide"
order: 5
input: |
  - visuais_aprovados: Documento com logo aprovado, paleta completa, tipografia e mockups (squads/identidade-visual/output/visuais-aprovados.md)
  - tone_of_voice: Sistema de 6 tons de voz da Clínica Base (pipeline/data/tone-of-voice.md)
  - anti_patterns: Lista de anti-padrões para seção de uso incorreto (pipeline/data/anti-patterns.md)
output: |
  - brand_guide: Documento HTML completo e interativo da identidade visual da Clínica Base — salvo em squads/identidade-visual/output/brand-guide.html
---

# Montar Brand Guide

Compilar todos os elementos visuais aprovados em um brand guide HTML completo, interativo e utilizável por qualquer designer externo sem orientação adicional. O documento é o produto final do pipeline de identidade visual da Clínica Base.

## Process

1. Ler `visuais-aprovados.md` para extrair: logo aprovado (especificações), paleta completa (HEX, RGB, CMYK, proporções), tipografia (par, hierarquia, specimen) e mockups
2. Ler `tone-of-voice.md` para compilar a seção de Tom de Voz com os 6 tons e exemplos
3. Ler `anti-patterns.md` para selecionar os 5 anti-padrões mais relevantes para a seção de Uso Incorreto
4. Criar o HTML com as 7 seções usando image-creator para renderizar swatches, specimens e mockups embutidos
5. Verificar acessibilidade do documento (contraste, HTML semântico, responsividade mobile)

## Output Format

O brand guide deve ser um arquivo HTML completo com:
- Navegação por âncoras entre seções
- Swatches de cor com código HEX visível
- Specimen tipográfico com texto real da Clínica Base
- Mockups como imagens embutidas ou descrições detalhadas
- CSS inline ou em tag style (sem dependências externas)

## Output Example

> Estrutura HTML realista do brand guide. Usar como referência de completude e organização.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brand Guide — Clínica Base</title>
  <style>
    :root {
      --charcoal: #3D2B1F;
      --creme: #F5EFE6;
      --cobre: #B87333;
      --salvia: #7C9A7C;
      --preto: #1A1A1A;
    }
    body { font-family: 'Lato', sans-serif; background: var(--creme); color: var(--preto); margin: 0; }
    nav { background: var(--charcoal); padding: 16px 32px; }
    nav a { color: var(--creme); text-decoration: none; margin-right: 24px; font-size: 14px; letter-spacing: 0.05em; }
    h1, h2, h3 { font-family: 'Playfair Display', serif; }
    .section { padding: 64px 32px; max-width: 960px; margin: 0 auto; }
    .swatch { display: inline-block; width: 80px; height: 80px; border-radius: 4px; margin: 8px; vertical-align: top; }
    .swatch-label { font-size: 12px; font-family: 'Lato', sans-serif; margin-top: 4px; }
    .do-box { border-left: 4px solid var(--salvia); padding: 16px; margin: 16px 0; background: rgba(124,154,124,0.1); }
    .dont-box { border-left: 4px solid #C0392B; padding: 16px; margin: 16px 0; background: rgba(192,57,43,0.05); }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>

<nav>
  <a href="#introducao">Introdução</a>
  <a href="#logo">Logo</a>
  <a href="#cores">Cores</a>
  <a href="#tipografia">Tipografia</a>
  <a href="#voz">Tom de Voz</a>
  <a href="#aplicacoes">Aplicações</a>
  <a href="#incorreto">Uso Incorreto</a>
</nav>

<section id="introducao" class="section">
  <h1>Identidade Visual — Clínica Base</h1>
  <p style="font-size:20px; color: var(--charcoal);">Onde o desenvolvimento começa pela mãe.</p>
  <p>A Clínica Base é uma clínica de Terapia Ocupacional em Sorocaba, SP, especializada em crianças com atrasos do neurodesenvolvimento. Este brand guide documenta a identidade visual completa e serve como referência para qualquer aplicação da marca.</p>
  <h3>Arquétipo de Marca</h3>
  <p><strong>Primário: Cuidador</strong> — generoso, presente, acolhedor, confiável.</p>
  <p><strong>Secundário: Sábio</strong> — especialista, método, evidência, clareza.</p>
</section>

<section id="logo" class="section" style="background: white;">
  <h2>Sistema de Logo</h2>
  <p>O logo principal da Clínica Base é o Lettermark B.A.S.E. em Playfair Display Bold, com "Clínica Base" em Lato Regular como complemento.</p>
  <h3>Variações</h3>
  <p><strong>Principal:</strong> Charcoal sobre Creme — para uso padrão</p>
  <p><strong>Negativa:</strong> Creme sobre Charcoal — para fundos escuros</p>
  <p><strong>Monocromática:</strong> Charcoal sobre branco — para documentos impressos</p>
  <h3>Área de Proteção</h3>
  <p>Manter espaço mínimo de 1x a altura do símbolo em todos os lados do logo.</p>
  <h3>Tamanho Mínimo</h3>
  <p>Digital: 120px de largura. Impresso: 25mm de largura.</p>
</section>

<section id="cores" class="section">
  <h2>Paleta de Cores</h2>
  <div>
    <div class="swatch" style="background:#3D2B1F;"></div>
    <div style="display:inline-block; margin:8px; vertical-align:top;">
      <strong>Charcoal Quente</strong><br>
      HEX: #3D2B1F<br>RGB: 61, 43, 31<br>CMYK: 0, 30, 49, 76<br>Uso: 40%
    </div>
  </div>
  <div>
    <div class="swatch" style="background:#F5EFE6; border:1px solid #ddd;"></div>
    <div style="display:inline-block; margin:8px; vertical-align:top;">
      <strong>Creme</strong><br>
      HEX: #F5EFE6<br>RGB: 245, 239, 230<br>CMYK: 0, 2, 6, 4<br>Uso: 40%
    </div>
  </div>
  <div>
    <div class="swatch" style="background:#B87333;"></div>
    <div style="display:inline-block; margin:8px; vertical-align:top;">
      <strong>Cobre</strong><br>
      HEX: #B87333<br>RGB: 184, 115, 51<br>CMYK: 0, 38, 72, 28<br>Uso: 10%
    </div>
  </div>
</section>

<section id="tipografia" class="section" style="background: white;">
  <h2>Tipografia</h2>
  <p><strong>Display:</strong> <a href="https://fonts.google.com/specimen/Playfair+Display">Playfair Display</a> — Bold para títulos, Regular para subtítulos</p>
  <p><strong>Corpo:</strong> <a href="https://fonts.google.com/specimen/Lato">Lato</a> — Regular para texto corrido, Bold para destaques</p>
  <div style="margin-top:32px;">
    <p style="font-family:'Playfair Display',serif; font-size:48px; font-weight:700; color:var(--charcoal); margin:0;">Onde o desenvolvimento começa pela mãe.</p>
    <p style="font-family:'Playfair Display',serif; font-size:28px; color:var(--charcoal);">Método B.A.S.E. — Terapia Ocupacional</p>
    <p style="font-family:'Lato',sans-serif; font-size:16px; color:var(--preto); line-height:1.6;">A Clínica Base coloca a mãe dentro da sessão — não na sala de espera. Cada encontro é conduzido pelo Método B.A.S.E.</p>
    <p style="font-family:'Lato',sans-serif; font-size:12px; color:var(--preto);">Regiane Vidal — CREFITO-3 11824-TO — Sorocaba, SP</p>
  </div>
</section>

<section id="voz" class="section">
  <h2>Tom de Voz</h2>
  <div class="do-box">
    <strong>Especialista Acessível (tom padrão):</strong>
    "A criança que não consegue ficar na cadeira não está sendo rebelde. O sistema vestibular dela precisa de apoio, e a Terapia Ocupacional trabalha exatamente isso."
  </div>
  <div class="dont-box">
    <strong>Nunca usar:</strong> Travessão (—), urgência artificial, adjetivos vazios, jargão sem tradução.
  </div>
</section>

<section id="aplicacoes" class="section" style="background: white;">
  <h2>Aplicações</h2>
  <p>Template de Instagram, cartão de visita e header de site seguem a paleta Editorial Quente com tipografia Playfair + Lato. Ver mockups em visuais-aprovados.md para especificações completas.</p>
</section>

<section id="incorreto" class="section">
  <h2>Uso Incorreto</h2>
  <div class="dont-box">Nunca distorcer as proporções do logo.</div>
  <div class="dont-box">Nunca usar cores fora da paleta aprovada.</div>
  <div class="dont-box">Nunca usar o logo sobre fundo que não passa o teste de contraste WCAG.</div>
  <div class="dont-box">Nunca substituir Playfair Display por outra fonte serif sem aprovação.</div>
  <div class="dont-box">Nunca usar paleta pastel (rosa, lavanda, azul bebê) em nenhuma aplicação da marca.</div>
</section>

</body>
</html>
```

## Quality Criteria

- [ ] As 7 seções estão presentes: Introdução, Logo, Cores, Tipografia, Tom de Voz, Aplicações, Uso Incorreto
- [ ] Cada cor tem HEX visível no brand guide
- [ ] Fontes linkadas para Google Fonts diretamente no documento
- [ ] Seção de Uso Incorreto tem pelo menos 5 proibições com explicação
- [ ] HTML é válido e renderiza corretamente em browser moderno
- [ ] Conteúdo usa texto real da Clínica Base (nome, tagline, CREFITO, cidade)

## Veto Conditions

1. Brand guide sem seção de Uso Incorreto — rejeitar: é a seção que mais protege a marca no uso diário por terceiros
2. Brand guide sem especificações técnicas de cor (apenas swatches visuais sem HEX/RGB) — rejeitar: designer externo precisa dos códigos para reproduzir com precisão
