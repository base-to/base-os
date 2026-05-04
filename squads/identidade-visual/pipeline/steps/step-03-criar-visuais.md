---
execution: inline
agent: identidade-visual/agents/vitor-visual
inputFile: squads/identidade-visual/output/estrategia-de-marca.md
outputFile: squads/identidade-visual/output/visuais-aprovados.md
---

# Step 03: Criar Visuais

Vitor Visual cria todos os elementos visuais da identidade: 3 conceitos de logo, paleta de cores com especificações completas, par tipográfico com hierarquia e mockups de aplicação. Todos os elementos devem ser rastreáveis até a `estrategia-de-marca.md` aprovada no Step 01.

## Context Loading

Ler os seguintes arquivos antes de iniciar:

1. `squads/identidade-visual/output/estrategia-de-marca.md` — input principal: arquétipo, posicionamento, personalidade, diretrizes visuais
2. `pipeline/data/research-brief.md` — seções de psicologia das cores, princípios de logo e tipografia
3. `pipeline/data/anti-patterns.md` — lista completa do que nunca usar
4. `pipeline/data/domain-framework.md` — Etapas 2 a 5: Sistema de Cores, Tipografia, Logo, Mockups

## Instructions / Process

1. Executar task `criar-conceitos-de-logo.md`: gerar 3 conceitos distintos (lettermark B.A.S.E., símbolo abstrato de fundação, marca de conexão) com justificativas semânticas e variações de cor
2. Executar task `definir-paleta-e-tipografia.md`: selecionar paleta Editorial Quente (#3D2B1F, #F5EFE6, #B87333, #7C9A7C, #1A1A1A) com ratios WCAG e definir par Playfair Display + Lato com hierarquia completa
3. Executar task `renderizar-mockup.md`: renderizar pelo menos 2 mockups (post de Instagram e cartão de visita) mostrando logo + paleta + tipografia integrados
4. Compilar tudo em `visuais-aprovados.md` com estrutura clara por seção

## Output Format

```markdown
# Visuais Aprovados — Clínica Base

## Conceitos de Logo
### Conceito A: [Nome]
[especificação completa]
### Conceito B: [Nome]
[especificação completa]
### Conceito C: [Nome]
[especificação completa]
### Conceito Recomendado
[qual e por que]

## Sistema de Cores
[tabela HEX, RGB, CMYK, uso, proporção]
### Ratios de Contraste WCAG
[tabela de pares]
### Combinações Aprovadas e Proibidas

## Sistema Tipográfico
### Fonte de Display
### Fonte de Corpo
### Hierarquia Tipográfica
[tabela H1 a caption]
### Specimen

## Mockups
### Mockup 1: Post Instagram
### Mockup 2: Cartão de Visita
### Verificação de Coerência Visual
```

## Output Example

> Referência de qualidade e nível de detalhe esperado.

```markdown
# Visuais Aprovados — Clínica Base

## Conceitos de Logo

### Conceito A: Lettermark B.A.S.E.
Elemento: B.A.S.E. em Playfair Display Bold com "B" em 110% para hierarquia visual. Pontos entre letras reforçam ideia de método estruturado.
Justificativa: O Método B.A.S.E. é o diferencial central. O lettermark coloca o método no centro da identidade.
Versão principal: #3D2B1F sobre #F5EFE6. Versão negativa: #F5EFE6 sobre #3D2B1F. Monocromática: tudo em #3D2B1F.

### Conceito B: Símbolo Fundação
Elemento: Dois retângulos horizontais empilhados com deslocamento lateral leve, formando base visual e "B" estilizado.
Justificativa: "Base" como metáfora visual. Estabilidade do arquétipo Sábio + dinamismo do crescimento.

### Conceito C: Marca de Conexão
Elemento: Duas formas curvas que se encaixam formando espaço central positivo. Abstrato, evoca abraço e relação mãe-filho.
Justificativa: Díade mãe-filho como núcleo do Método B.A.S.E.

### Conceito Recomendado
Conceito A para logo principal — mais diferenciado no segmento e mais direto na comunicação do diferencial.

## Sistema de Cores

| Nome | HEX | RGB | Uso | Proporção |
|------|-----|-----|-----|-----------|
| Charcoal Quente | #3D2B1F | 61, 43, 31 | Cor primária, títulos | 40% |
| Creme | #F5EFE6 | 245, 239, 230 | Fundo principal | 40% |
| Cobre | #B87333 | 184, 115, 51 | Acento, CTAs | 10% |
| Verde Sálvia | #7C9A7C | 124, 154, 124 | Suporte | 7% |
| Preto Quente | #1A1A1A | 26, 26, 26 | Tipografia | 3% |

### Ratios WCAG 2.1
Charcoal sobre Creme: 12.1:1 (AAA). Preto sobre Creme: 16.1:1 (AAA). Cobre sobre Creme: 3.8:1 (AA texto grande).

## Sistema Tipográfico
Display: Playfair Display (Google Fonts, Open Font License)
Corpo: Lato (Google Fonts, Open Font License)

H1: Playfair Display Bold, 48-64px, altura 1.2
H2: Playfair Display Bold, 32-40px, altura 1.3
Body: Lato Regular, 16-18px, altura 1.6
Caption: Lato Light, 12-14px, altura 1.5

## Mockups

### Mockup 1: Post Instagram 1080x1080px
Fundo #F5EFE6. Logo Conceito A em #3D2B1F canto superior esquerdo. Headline Playfair Bold 48px: "Seu filho não está sendo difícil." Subtítulo Lato Regular 20px. CTA Lato Bold 16px em #B87333.

### Mockup 2: Cartão de Visita 90x50mm
Frente: fundo #F5EFE6, logo, "Regiane Vidal", CREFITO-3 11824-TO, contato.
Verso: fundo #3D2B1F, tagline em #F5EFE6 centralizada, logo versão negativa.

### Verificação de Coerência
Paleta consistente. Tipografia aplicada corretamente. Logo dentro da área de proteção. Sistema visual coeso.
```

## Veto Conditions

1. Qualquer conceito de logo usa símbolo proibido (árvore, coração, figura humana literal) — rejeitar esse conceito e gerar substituto imediatamente
2. A paleta inclui azul hospitalar genérico ou teal já ocupado por concorrente — rejeitar e redefinir cor primária

## Quality Criteria

- [ ] 3 conceitos de logo produzidos com abordagens genuinamente distintas
- [ ] Paleta com 5 cores e todos os ratios WCAG calculados (pares de texto passam AA no mínimo)
- [ ] Par tipográfico com hierarquia de 5+ níveis e ambas as fontes no Google Fonts
- [ ] 2+ mockups renderizados com conteúdo real da Clínica Base
- [ ] Conceito de logo recomendado com justificativa estratégica
- [ ] Nenhum dos 12 anti-padrões de anti-patterns.md cometido
