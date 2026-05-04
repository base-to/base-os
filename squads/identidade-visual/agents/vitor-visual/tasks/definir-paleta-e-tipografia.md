---
task: "Definir Paleta e Tipografia"
order: 3
input: |
  - estrategia_de_marca: Arquétipo, personalidade e diretrizes visuais aprovadas
  - research_brief: Seções de psicologia das cores, tipografia e anti-padrões
output: |
  - paleta_tipografia: Especificação completa de paleta (5 cores) e par tipográfico (2 fontes) com hierarquia, como parte de visuais-aprovados.md
---

# Definir Paleta e Tipografia

Estabelecer o sistema de cores e o par tipográfico da Clínica Base, com especificações técnicas completas (HEX, RGB, proporções de uso, ratios de contraste WCAG) e hierarquia tipográfica definida para todos os níveis de uso.

## Process

1. Ler `estrategia-de-marca.md` para confirmar o arquétipo (Cuidador + Sábio) e as diretrizes visuais iniciais definidas por Beatriz Branding
2. Selecionar a paleta de cores a partir da recomendação do research-brief.md, verificando diferenciação dos concorrentes investigados
3. Calcular os ratios de contraste WCAG 2.1 para os pares de cores principais
4. Selecionar o par tipográfico (Playfair Display + Lato), verificar disponibilidade no Google Fonts e definir hierarquia completa
5. Criar specimen tipográfico com texto real da Clínica Base em cada nível hierárquico

## Output Format

```markdown
## Sistema de Cores

| Nome | HEX | RGB | CMYK | Uso | Proporção |
|------|-----|-----|------|-----|-----------|
[tabela completa]

### Ratios de Contraste WCAG
[tabela de pares com ratios e nível de aprovação]

### Regra de Uso
[60-30-10 ou proporções específicas]

## Sistema Tipográfico

### Fonte de Display
Nome: [...]
Peso: [...]
Google Fonts: [link]

### Fonte de Corpo
Nome: [...]
Pesos: [...]
Google Fonts: [link]

### Hierarquia
| Nível | Fonte | Peso | Tamanho | Altura de Linha |
|-------|-------|------|---------|----------------|
[tabela completa H1 a caption]

### Specimen
[Exemplos de cada nível com texto real da Clínica Base]
```

## Output Example

> Usar como referência de qualidade e completude.

```markdown
## Sistema de Cores — Clínica Base

### Paleta Principal

| Nome | HEX | RGB | CMYK | Pantone | Uso | Proporção |
|------|-----|-----|------|---------|-----|-----------|
| Charcoal Quente | #3D2B1F | 61, 43, 31 | 0, 30, 49, 76 | 476 C | Cor primária, títulos, elementos principais | 40% |
| Creme | #F5EFE6 | 245, 239, 230 | 0, 2, 6, 4 | 9101 C | Fundo principal, respiro visual | 40% |
| Cobre | #B87333 | 184, 115, 51 | 0, 38, 72, 28 | 7526 C | Acento, CTAs, destaques | 10% |
| Verde Sálvia | #7C9A7C | 124, 154, 124 | 19, 0, 19, 40 | 5777 C | Suporte, progresso, separadores | 7% |
| Preto Quente | #1A1A1A | 26, 26, 26 | 0, 0, 0, 90 | Neutral Black | Tipografia, contraste máximo | 3% |

### Ratios de Contraste WCAG 2.1

| Par de Cores | Ratio | Nível | Uso |
|-------------|-------|-------|-----|
| Charcoal sobre Creme | 12.1:1 | AAA | Texto normal aprovado |
| Preto Quente sobre Creme | 16.1:1 | AAA | Texto normal aprovado |
| Cobre sobre Creme | 3.8:1 | AA | Texto grande e UI aprovado |
| Verde Sálvia sobre Creme | 3.1:1 | AA | UI apenas, não para texto pequeno |
| Creme sobre Charcoal | 12.1:1 | AAA | Texto em fundo escuro aprovado |

### Regra 60-30-10
- 60%: Creme como fundo (respiro, abertura, acolhimento)
- 30%: Charcoal Quente como elemento dominante (autoridade, presença)
- 10%: Cobre como acento (energia, CTA, destaque)
- Verde Sálvia e Preto Quente: elementos de suporte, não estruturais

### Combinações Aprovadas
- Charcoal sobre Creme: texto principal
- Cobre sobre Creme: títulos de destaque e CTAs
- Creme sobre Charcoal: texto em blocos escuros
- Verde Sálvia sobre Creme: elementos de progresso e ícones

### Combinações Proibidas
- Cobre sobre Charcoal (ratio muito baixo, ilegível)
- Verde Sálvia sobre Charcoal (baixo contraste)
- Cobre sobre Verde Sálvia (conflito de cores quentes sem contraste)

---

## Sistema Tipográfico — Clínica Base

### Fonte de Display: Playfair Display
- Classificação: Serif Display
- Personalidade: Editorial, elegante, autoridade com calor
- Pesos disponíveis: Regular (400), Bold (700), Black (900), Italic
- Google Fonts: https://fonts.google.com/specimen/Playfair+Display
- Licença: Open Font License (uso comercial aprovado)
- Uso: Títulos, headlines, logotipo, citações em destaque

### Fonte de Corpo: Lato
- Classificação: Sans-serif humanista
- Personalidade: Limpa, legível, calorosa
- Pesos disponíveis: Thin (100), Light (300), Regular (400), Bold (700), Black (900)
- Google Fonts: https://fonts.google.com/specimen/Lato
- Licença: Open Font License (uso comercial aprovado)
- Uso: Texto corrido, legendas, botões, interface, corpo de posts

### Hierarquia Tipográfica

| Nível | Fonte | Peso | Tamanho (px) | Altura de Linha | Tracking |
|-------|-------|------|--------------|----------------|---------|
| H1 | Playfair Display | Bold (700) | 48-64 | 1.2 | -0.02em |
| H2 | Playfair Display | Bold (700) | 32-40 | 1.3 | -0.01em |
| H3 | Playfair Display | Regular (400) | 24-28 | 1.4 | 0 |
| Citação | Playfair Display | Italic (400) | 20-24 | 1.5 | 0 |
| Body | Lato | Regular (400) | 16-18 | 1.6 | 0 |
| Destaque | Lato | Bold (700) | 16-18 | 1.6 | 0 |
| Caption | Lato | Light (300) | 12-14 | 1.5 | 0.02em |
| CTA | Lato | Bold (700) | 14-16 | 1 | 0.05em |

### Specimen — Texto Real da Clínica Base

**H1 (Playfair Display Bold, 48px)**
Onde o desenvolvimento começa pela mãe

**H2 (Playfair Display Bold, 32px)**
Método B.A.S.E.: Brincar, Afeto, Sensorial, Estimulação

**H3 (Playfair Display Regular, 24px)**
Terapia Ocupacional com a mãe dentro da sessão

**Citação (Playfair Display Italic, 20px)**
"A primeira vez que entrei na sessão com minha filha, entendi que eu também fazia parte do tratamento."

**Body (Lato Regular, 16px)**
A Clínica Base atua em Sorocaba com o Método B.A.S.E., que coloca a mãe como protagonista ativa do processo terapêutico. Cada sessão é conduzida com a mãe presente, aprendendo e replicando em casa.

**Destaque (Lato Bold, 16px)**
Agendamentos para junho disponíveis a partir de 15 de maio.

**Caption (Lato Light, 12px)**
Regiane Vidal — CREFITO-3 11824-TO — Sorocaba, SP
```

## Quality Criteria

- [ ] Paleta tem exatamente 5 cores com HEX, RGB e proporções de uso definidas
- [ ] Todos os pares de texto principal passam WCAG 2.1 AA (ratio mínimo 4.5:1)
- [ ] Par tipográfico tem justificativa estratégica vinculada ao arquétipo
- [ ] Hierarquia tipográfica cobre pelo menos 5 níveis (H1, H2, H3, body, caption)
- [ ] Specimen usa texto real da Clínica Base (não Lorem Ipsum)
- [ ] Ambas as fontes têm licença Open Font (uso comercial aprovado e gratuito)

## Veto Conditions

1. Paleta inclui azul hospitalar genérico (#0066CC ou próximos) ou teal (#00B4C5) já ocupado por concorrente — rejeitar e redefinir cor primária
2. Qualquer par de texto corrido não passa WCAG AA (ratio abaixo de 4.5:1) — rejeitar e ajustar cor até aprovação
