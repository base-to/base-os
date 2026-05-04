---
execution: inline
agent: identidade-visual/agents/beatriz-branding
outputFile: squads/identidade-visual/output/estrategia-de-marca.md
---

# Step 01: Estratégia de Marca

Beatriz Branding define a fundação estratégica completa da identidade visual da Clínica Base, sem a qual nenhuma decisão visual pode ser tomada. Este é o passo mais crítico do pipeline.

## Context Loading

Ler os seguintes arquivos antes de iniciar:

1. `_opensquad/_memory/company.md` — quem é a Clínica Base, o que faz, para quem, como funciona
2. `pipeline/data/research-brief.md` — arquétipos de marca, psicologia das cores, investigação competitiva, taglines recomendadas
3. `pipeline/data/domain-framework.md` — Etapa 1: Definir Posicionamento e Arquétipo de Marca
4. `pipeline/data/anti-patterns.md` — o que nunca fazer na comunicação e identidade da Clínica Base
5. `pipeline/data/tone-of-voice.md` — o sistema de 6 tons de voz para calibrar a seção de Tom de Voz

## Instructions / Process

1. A partir de `company.md`, identificar: o problema real que a Clínica Base resolve para a mãe (não o serviço, o problema), o diferencial do Método B.A.S.E., e por que a mãe como protagonista é estrutural
2. Aplicar os arquétipos de marca do `research-brief.md` e confirmar Cuidador (primário) + Sábio (secundário) com justificativas baseadas na operação real
3. Criar a frase de posicionamento no formato: "Para [público], a Clínica Base é a [categoria] que [diferencial único]" e aplicar o teste de especificidade
4. Gerar 5 conceitos de tagline, filtrar e apresentar 2 finalistas com recomendação
5. Definir 3 pilares da marca, personalidade (com 5 pares de adjetivos) e diretrizes visuais iniciais para Vitor Visual

## Output Format

```markdown
# Estratégia de Marca — Clínica Base

## 1. Contexto do Negócio
## 2. Problema que Resolvemos
## 3. Arquétipo de Marca
### Primário: [Nome] — [justificativa]
### Secundário: [Nome] — [justificativa]
## 4. Posicionamento
**Frase de posicionamento:** "[...]"
**Teste de especificidade:** [...]
## 5. Tagline
**Finalista 1:** "[...]" — [por que]
**Finalista 2:** "[...]" — [por que]
**Recomendação:** [qual e por que]
## 6. Pilares da Marca
## 7. Personalidade da Marca
## 8. Tom de Voz
## 9. Diferenciais Competitivos
## 10. Diretrizes Visuais Iniciais
```

## Output Example

> Referência de qualidade para o output desta etapa.

```markdown
# Estratégia de Marca — Clínica Base

## 1. Contexto do Negócio
A Clínica Base é uma clínica de Terapia Ocupacional especializada em crianças com atrasos e transtornos do neurodesenvolvimento: TEA, TDAH, dificuldades sensoriais. Fundada por Regiane Vidal (CREFITO-3 11824-TO) em Sorocaba, SP. Opera pelo Método B.A.S.E. (Brincar, Afeto, Sensorial, Estimulação).

## 2. Problema que Resolvemos
Mães de crianças com atrasos do neurodesenvolvimento vivem entre o mundo clínico (laudos, CID-10) e a vida real (a criança que tenta se comunicar, brincar, dormir). A Clínica Base resolve o gap: o Método B.A.S.E. coloca a mãe dentro do processo terapêutico.

## 3. Arquétipo de Marca
### Primário: Cuidador
O Método B.A.S.E. foi construído ao redor do vínculo afetivo e da mãe como protagonista. Isso não é estratégia de marca — é a estrutura operacional do negócio. O arquétipo Cuidador reflete o que a clínica JÁ É.
### Secundário: Sábio
Sem o Sábio, o Cuidador vira "mais uma clínica carinhosa". Com o Sábio, vira "especialista que cuida com evidência". Regiane Vidal com CREFITO-3 confere a autoridade técnica.

## 4. Posicionamento
**Frase de posicionamento:** "Para mães de crianças com atrasos do neurodesenvolvimento em Sorocaba, a Clínica Base é a única clínica de Terapia Ocupacional que coloca a mãe dentro da terapia pelo Método B.A.S.E."
**Teste de especificidade:** Não poderia ser de nenhum outro concorrente — "mãe dentro da terapia" e "Método B.A.S.E." são exclusivos.

## 5. Tagline
**Finalista 1:** "Onde o desenvolvimento começa pela mãe" — clara, específica, diferenciada, mãe como protagonista explícito
**Finalista 2:** "Terapia Ocupacional com base na relação que importa" — jogo com o nome, tom mais técnico
**Recomendação:** Finalista 1 para comunicação principal.

## 6. Pilares da Marca
**Pilar 1: Método B.A.S.E.** — metodologia própria, estruturada, com nome
**Pilar 2: Mãe Protagonista** — dentro da sessão, não na sala de espera
**Pilar 3: Resultado Visível** — crianças reais com progresso concreto e observável

## 7. Personalidade da Marca
Especialista, mas acessível. Calorosa, mas não sentimental. Estruturada, mas não burocrática.

## 8. Tom de Voz
Informal mas profundo. Sem jargão não traduzido. Sem urgência artificial. Proibido: travessão.

## 9. Diferenciais Competitivos
1. Método proprietário com nome (B.A.S.E.)
2. Mãe dentro da sessão — posicionamento único no segmento investigado
3. Relação mãe-filho como alavanca terapêutica primária

## 10. Diretrizes Visuais Iniciais
- Paleta: tons terrosos quentes (charcoal, creme, cobre)
- Tipografia: serif com autoridade + sans-serif humanista
- Logo: abstrato ou tipográfico, sem figuras humanas literais, sem árvores, sem corações
```

## Veto Conditions

1. Arquétipo primário não é Cuidador — rejeitar e refazer. O Cuidador é inegociável dado o Método B.A.S.E. e a estrutura operacional da clínica.
2. Tagline aprovada não contém referência ao Método B.A.S.E., ao desenvolvimento infantil ou à mãe como protagonista — rejeitar e refazer com teste de especificidade aplicado.

## Quality Criteria

- [ ] Arquétipo primário Cuidador e secundário Sábio com justificativas baseadas na operação real
- [ ] Tagline passa no teste de especificidade (não poderia ser de outra clínica)
- [ ] 3 pilares da marca definidos, ao menos um refletindo o Método B.A.S.E.
- [ ] Mãe como protagonista aparece explicitamente em pelo menos 2 elementos do documento
- [ ] Diretrizes visuais iniciais incluem indicações de paleta, tipografia e logo para Vitor Visual
