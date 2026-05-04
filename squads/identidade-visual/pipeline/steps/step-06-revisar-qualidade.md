---
execution: inline
agent: identidade-visual/agents/paulo-padrao
inputFile: squads/identidade-visual/output/brand-guide.html
outputFile: squads/identidade-visual/output/revisao-final.md
on_reject: 3
---

# Step 06: Revisar Qualidade

Paulo Padrão avalia todos os artefatos produzidos pelo pipeline contra os critérios de qualidade estabelecidos em `quality-criteria.md` e emite um veredicto com pontuação detalhada. Em caso de rejeição, o pipeline retorna para o Step 3 (Vitor Visual recria os visuais).

## Context Loading

Ler os seguintes arquivos antes de iniciar a revisão:

1. `squads/identidade-visual/output/estrategia-de-marca.md` — fundação estratégica (Beatriz Branding)
2. `squads/identidade-visual/output/visuais-aprovados.md` — logo, paleta, tipografia, mockups (Vitor Visual)
3. `squads/identidade-visual/output/brand-guide.html` — brand guide completo (Carla Compilação)
4. `pipeline/data/quality-criteria.md` — rubrica completa de pontuação com limiares e pesos
5. `pipeline/data/anti-patterns.md` — lista de anti-padrões para verificação no checklist estratégico

## Instructions / Process

1. Avaliar Dimensão Logo (30%): pontuar memorabilidade, versatilidade, originalidade e relevância semântica de 1-10 cada com justificativa
2. Avaliar Dimensão Cores (25%): pontuar diferenciação, WCAG, coerência do sistema e alinhamento com arquétipo
3. Avaliar Dimensão Tipografia (20%): pontuar legibilidade, alinhamento com arquétipo, hierarquia e disponibilidade
4. Avaliar Dimensão Brand Guide (25%): pontuar completude, usabilidade, exemplos e coerência interna
5. Aplicar checklist estratégico de 7 itens (gate qualitativo)
6. Calcular média ponderada e emitir veredicto

## Output Format

```markdown
# Revisão de Qualidade — Identidade Visual Clínica Base

**Revisor:** Paulo Padrão
**Data:** [data]

## Pontuações por Dimensão

### Dimensão 1: Logo (30%)
| Subcritério | Pontuação | Justificativa |
|-------------|-----------|---------------|
| Memorabilidade | x/10 | ... |
| Versatilidade | x/10 | ... |
| Originalidade | x/10 | ... |
| Relevância Semântica | x/10 | ... |
| **Média** | **x.x/10** | |

### Dimensão 2: Cores (25%)
[Mesma estrutura]

### Dimensão 3: Tipografia (20%)
[Mesma estrutura]

### Dimensão 4: Brand Guide (25%)
[Mesma estrutura]

## Checklist Estratégico
- [ ou x] Arquétipo primário Cuidador presente
- [ ou x] Arquétipo secundário Sábio presente
- [ ou x] Mãe como protagonista no tom de voz
- [ ou x] Método B.A.S.E. referenciado
- [ ou x] Tagline não poderia ser de outra clínica
- [ ou x] Nenhum anti-padrão cometido
- [ ou x] Identidade distinta dos concorrentes
**Resultado:** x/7 itens marcados.

## Média Ponderada
| Dimensão | Pontuação | Peso | Contribuição |
|----------|-----------|------|-------------|
| Logo | x.x | 30% | x.xxx |
| Cores | x.x | 25% | x.xxx |
| Tipografia | x.x | 20% | x.xxx |
| Brand Guide | x.x | 25% | x.xxx |
| **Total** | | | **x.x/10** |

## Veredicto
[APROVADO / APROVAÇÃO CONDICIONAL / REJEIÇÃO]
[Justificativa e próximos passos]
```

## Output Example

> Revisão realista com pontuações detalhadas e veredicto fundamentado.

```markdown
# Revisão de Qualidade — Identidade Visual Clínica Base

**Revisor:** Paulo Padrão
**Data:** 2026-05-04
**Input analisado:** estrategia-de-marca.md, visuais-aprovados.md, brand-guide.html

---

## Pontuações por Dimensão

### Dimensão 1: Logo (Peso: 30%)

| Subcritério | Pontuação | Justificativa |
|-------------|-----------|---------------|
| Memorabilidade | 9/10 | Lettermark B.A.S.E. é redutível a um único elemento. Descritível em 1 frase: "as letras B.A.S.E. em serif bold". Funciona como favicon com apenas o "B." isolado. |
| Versatilidade | 7/10 | 3 variações de cor documentadas (principal, negativa, monocromática). Versão para bordado mencionada mas não especificada com thread colors. Lacuna menor, não bloqueante. |
| Originalidade | 9/10 | Nenhum dos concorrentes investigados usa lettermark tipográfico. @instituto_singular usa sans-serif all-caps. centrobaoba usa árvore. Alta diferenciação. |
| Relevância Semântica | 9/10 | B.A.S.E. no logo reforça diretamente o posicionamento. A metáfora é imediata: "o logo é o método". Coerência estratégica total. |
| **Média Dimensão Logo** | **8.5/10** | Acima do limiar mínimo de 7.0. |

### Dimensão 2: Cores (Peso: 25%)

| Subcritério | Pontuação | Justificativa |
|-------------|-----------|---------------|
| Diferenciação | 9/10 | Charcoal quente + cobre é completamente única no segmento investigado. Nenhum concorrente usa paleta editorial quente. |
| Conformidade WCAG | 8/10 | Pares principais (charcoal/creme 12.1:1, preto/creme 16.1:1) atingem AAA. Cobre/creme 3.8:1 para texto grande. Verde sálvia/creme 3.1:1 apenas para UI. |
| Coerência do Sistema | 8/10 | Proporções 60-30-10 definidas. Combinações aprovadas e proibidas listadas. |
| Alinhamento com Arquétipo | 9/10 | Charcoal comunica Sábio (autoridade), creme comunica Cuidador (acolhimento), cobre comunica excelência artesanal. |
| **Média Dimensão Cores** | **8.5/10** | Acima do limiar mínimo de 7.0. |

### Dimensão 3: Tipografia (Peso: 20%)

| Subcritério | Pontuação | Justificativa |
|-------------|-----------|---------------|
| Legibilidade | 8/10 | Lato Regular funciona em 14px. Playfair Display é display — ideal a partir de 20px, o que está corretamente documentado na hierarquia. |
| Alinhamento com Arquétipo | 9/10 | Playfair Display + Lato é o par canônico para Cuidador + Sábio: editorial com calor. |
| Hierarquia e Escala | 8/10 | 7 níveis definidos com tamanhos, pesos, altura de linha e tracking. |
| Disponibilidade | 10/10 | Ambas no Google Fonts com Open Font License. Links incluídos no brand guide. |
| **Média Dimensão Tipografia** | **8.75/10** | Acima do limiar mínimo de 7.0. |

### Dimensão 4: Brand Guide (Peso: 25%)

| Subcritério | Pontuação | Justificativa |
|-------------|-----------|---------------|
| Completude | 8/10 | 7 seções presentes. Seção de Aplicações poderia incluir template de WhatsApp e papel timbrado. |
| Usabilidade | 8/10 | Designer externo consegue aplicar sem orientação. HEX visível. Links de fontes incluídos. |
| Exemplos e Aplicações | 7/10 | Post de Instagram + cartão de visita documentados. Falta template de WhatsApp. |
| Coerência Interna | 9/10 | Nenhuma contradição entre seções. Sistema visual coeso. |
| **Média Dimensão Brand Guide** | **8.0/10** | Acima do limiar mínimo de 7.5. |

---

## Checklist Estratégico

- [x] Arquétipo primário Cuidador presente e perceptível na identidade completa
- [x] Arquétipo secundário Sábio presente e perceptível
- [x] Mãe como protagonista refletida no tom de voz do brand guide
- [x] Método B.A.S.E. referenciado na identidade (no logo e no brand guide)
- [x] Tagline "Onde o desenvolvimento começa pela mãe" não poderia ser de outra clínica
- [x] Nenhum dos anti-padrões cometido: sem árvore, sem coração, sem paleta pastel
- [x] Identidade diferente de @instituto_singular (teal), centrobaoba (verde + árvore)

**Resultado:** 7/7 itens marcados. Gate qualitativo aprovado.

---

## Média Ponderada Final

| Dimensão | Pontuação | Peso | Contribuição |
|----------|-----------|------|-------------|
| Logo | 8.5 | 30% | 2.55 |
| Cores | 8.5 | 25% | 2.125 |
| Tipografia | 8.75 | 20% | 1.75 |
| Brand Guide | 8.0 | 25% | 2.0 |
| **Total** | | | **8.425/10** |

---

## Veredicto

**APROVADO**

Média ponderada 8.425/10. Todas as dimensões acima dos limiares. Checklist estratégico 7/7. A identidade visual da Clínica Base está aprovada para entrega.

Recomendação (não bloqueante): Na próxima versão do brand guide, adicionar template de WhatsApp e papel timbrado para elevar a Dimensão Brand Guide de 8.0 para 9.0+.
```

## Veto Conditions

1. Checklist estratégico com 5 ou menos itens marcados — REJEIÇÃO AUTOMÁTICA, retornar para Step 3 (on_reject: 3)
2. Qualquer dimensão com média abaixo de 5.0 — REJEIÇÃO AUTOMÁTICA, retornar para Step 3 com especificação do que corrigir

## Quality Criteria

- [ ] Todas as 4 dimensões avaliadas com subcritérios pontuados individualmente com justificativa
- [ ] Checklist estratégico de 7 itens aplicado com resultado explícito (x/7)
- [ ] Média ponderada calculada usando os pesos corretos (30% + 25% + 20% + 25% = 100%)
- [ ] Veredicto emitido com uma das três opções: APROVADO, APROVAÇÃO CONDICIONAL ou REJEIÇÃO
- [ ] Se REJEIÇÃO: especificação exata do que precisa mudar para aprovação na próxima iteração
