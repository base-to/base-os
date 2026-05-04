---
task: "Renderizar Mockup"
order: 4
input: |
  - conceitos_de_logo: Os 3 conceitos aprovados ou o conceito selecionado
  - paleta_tipografia: Sistema de cores e tipografia aprovados
  - estrategia_de_marca: Tagline e texto real da Clínica Base para usar no mockup
output: |
  - mockups: Conjunto de mockups renderizados mostrando logo + paleta + tipografia em aplicações reais, como parte de visuais-aprovados.md
---

# Renderizar Mockup

Produzir mockups visuais que mostram a identidade completa (logo + paleta + tipografia) em aplicações reais da Clínica Base. O objetivo não é apresentação bonita, é teste de coerência: verificar se todos os elementos funcionam juntos como sistema visual unificado.

## Process

1. Confirmar qual conceito de logo foi selecionado (ou usar os 3 para comparação no mockup)
2. Usar image-creator para renderizar mockup de post de Instagram (1080x1080px) com logo, paleta e hierarquia tipográfica
3. Usar image-creator para renderizar mockup de cartão de visita (frente e verso, 9x5cm)
4. Verificar coerência visual: mesma paleta, mesma tipografia, logo na área de proteção correta
5. Documentar especificações de cada aplicação para uso futuro

## Output Format

```markdown
## Mockups

### Mockup 1: Post Instagram (1080x1080px)
[Imagem renderizada ou descrição detalhada]
**Elementos:** Logo [posição], tagline [fonte + tamanho], background [cor]
**Texto usado:** [conteúdo real da clínica]

### Mockup 2: Cartão de Visita
**Frente:** [descrição com posição de logo, nome, CREFITO]
**Verso:** [descrição com tagline, contato, paleta]

### Mockup 3: [Formato adicional]
[Mesma estrutura]

### Verificação de Coerência
- [ ] Paleta consistente entre todos os mockups
- [ ] Tipografia consistente (hierarquia aplicada corretamente)
- [ ] Logo dentro da área de proteção em todos os formatos
- [ ] Combinações de cor são todas aprovadas (sem combinações proibidas)
```

## Output Example

> Usar como referência de nível de detalhe e especificação.

```markdown
## Mockups — Clínica Base

### Mockup 1: Post de Instagram — Conteúdo Educacional

**Dimensões:** 1080x1080px
**Fundo:** #F5EFE6 (Creme)
**Elemento superior:** Logo Conceito A (Lettermark B.A.S.E.) em #3D2B1F, posicionado no canto superior esquerdo com margem de 48px
**Headline:** Playfair Display Bold, 48px, #3D2B1F
Texto: "Seu filho não está sendo difícil."
**Subtítulo:** Lato Regular, 20px, #3D2B1F
Texto: "O sistema sensorial dele pede ajuda de um jeito que parece birra."
**CTA:** Lato Bold, 16px, #B87333, tracking 0.05em
Texto: "LINK NA BIO"
**Separador:** Linha horizontal 2px em #B87333, posicionada acima do CTA
**Rodapé:** Lato Light, 12px, #3D2B1F
Texto: "Clínica Base | Terapia Ocupacional | Sorocaba, SP"

---

### Mockup 2: Post de Instagram — Versão Fundo Escuro

**Dimensões:** 1080x1080px
**Fundo:** #3D2B1F (Charcoal Quente)
**Logo:** Variação negativa (letras em #F5EFE6)
**Headline:** Playfair Display Bold, 48px, #F5EFE6
Texto: "Onde o desenvolvimento começa pela mãe."
**Destaque:** Lato Bold, 20px, #B87333
Texto: "Método B.A.S.E. — Clínica Base"
**Rodapé:** Lato Light, 12px, #F5EFE6, opacity 70%
Texto: "Terapia Ocupacional | Sorocaba, SP | CREFITO-3 11824-TO"

---

### Mockup 3: Cartão de Visita

**Dimensões:** 90x50mm (padrão brasileiro)
**Frente:**
- Fundo: #F5EFE6
- Logo Conceito A em #3D2B1F, canto superior esquerdo, altura 12mm
- Nome: Playfair Display Bold, 11pt, #3D2B1F — "Regiane Vidal"
- Título: Lato Regular, 9pt, #3D2B1F — "Terapeuta Ocupacional"
- CREFITO: Lato Light, 8pt, #3D2B1F — "CREFITO-3 11824-TO"
- Linha separadora: 0.5pt, #B87333
- Contato: Lato Regular, 8pt, #3D2B1F — "(15) 99999-9999 | clinicabase.com.br"

**Verso:**
- Fundo: #3D2B1F
- Tagline: Playfair Display Regular Italic, 14pt, #F5EFE6, centralizada
  Texto: "Onde o desenvolvimento começa pela mãe."
- Linha decorativa: 1pt, #B87333, sob a tagline
- Logo versão negativa, canto inferior direito, altura 8mm

---

### Verificação de Coerência Visual

- [x] Paleta #3D2B1F + #F5EFE6 + #B87333 consistente em todos os mockups
- [x] Playfair Display para títulos e Lato para corpo aplicados em todos os formatos
- [x] Logo sempre com área de proteção mínima de 1x altura do símbolo
- [x] Combinações de cor usadas são todas da lista de combinações aprovadas
- [x] Nenhum elemento visual contradiz o arquétipo Cuidador + Sábio
- [x] Tom visual editorial e profissional, sem elementos infantis ou pastéis

### Resultado do Teste de Coerência
Sistema visual coeso. Os 3 mockups pertencem claramente à mesma marca, com personalidade editorial quente distinta dos concorrentes investigados. Aprovado para compilação do brand guide.
```

## Quality Criteria

- [ ] Pelo menos 2 mockups renderizados em formatos reais de uso da Clínica Base
- [ ] Mockups usam conteúdo real (nome, tagline, CREFITO, cidade), sem placeholder
- [ ] Verificação de coerência concluída com checklist explícito
- [ ] Versão com fundo claro (#F5EFE6) e versão com fundo escuro (#3D2B1F) testadas
- [ ] Especificações de cada mockup documentadas (dimensões, margens, tamanhos tipográficos)

## Veto Conditions

1. Mockup usa combinação de cor proibida (Cobre sobre Charcoal, Verde sobre Charcoal) — corrigir antes de avançar
2. Mockups de diferentes formatos parecem ser de marcas diferentes (incoerência) — revisar aplicação da paleta e tipografia até coerência visual clara
