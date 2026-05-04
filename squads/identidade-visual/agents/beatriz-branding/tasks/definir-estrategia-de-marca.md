---
task: "Definir Estratégia de Marca"
order: 1
input: |
  - company_context: Perfil completo da Clínica Base a partir de company.md (quem são, o que fazem, público, método, diferencial)
  - research_brief: Arquétipos de marca, psicologia das cores, princípios de logo, investigação competitiva (pipeline/data/research-brief.md)
output: |
  - estrategia-de-marca: Documento completo de estratégia de marca com arquétipo, tagline, posicionamento, personalidade e pilares — salvo em squads/identidade-visual/output/estrategia-de-marca.md
---

# Definir Estratégia de Marca

Produzir o documento de estratégia de marca da Clínica Base, que serve como fundação para todas as decisões visuais do pipeline. Sem essa estratégia aprovada, nenhum elemento visual é criado. O documento define quem a Clínica Base é, como fala, o que a diferencia e qual arquétipo guia sua identidade.

## Process

1. Ler `_opensquad/_memory/company.md` para entender o negócio, o público, o Método B.A.S.E. e os diferenciais reais da clínica
2. Ler `pipeline/data/research-brief.md` para carregar os arquétipos de marca, a investigação competitiva e a paleta recomendada
3. Definir arquétipo primário (Cuidador) e secundário (Sábio) com justificativas baseadas na operação real do negócio
4. Criar frase de posicionamento no formato: "Para [público], a Clínica Base é a [categoria] que [diferencial único]" e testar especificidade
5. Gerar 5 conceitos de tagline, filtrar pelos critérios de especificidade e selecionar 2 finalistas com recomendação

## Output Format

```markdown
# Estratégia de Marca — Clínica Base

## 1. Contexto do Negócio
[Resumo de quem é a clínica, o que faz, para quem]

## 2. Problema que Resolvemos
[O problema real da mãe, não o serviço]

## 3. Arquétipo de Marca
### Primário: [Nome]
[Justificativa baseada na operação real]
### Secundário: [Nome]
[Justificativa baseada no diferencial técnico]

## 4. Posicionamento
**Frase de posicionamento:** "[...]"
**Teste de especificidade:** [Poderia ser de outra clínica? Por que não?]

## 5. Tagline
**Finalista 1:** "[...]"
**Finalista 2:** "[...]"
**Recomendação:** [qual e por que]

## 6. Pilares da Marca
**Pilar 1:** [nome e descrição]
**Pilar 2:** [nome e descrição]
**Pilar 3:** [nome e descrição]

## 7. Personalidade da Marca
[Descrição em prosa + 5 pares de adjetivos]

## 8. Tom de Voz
[Resumo do tom com proibições explícitas]

## 9. Diferenciais Competitivos
[Lista numerada com o que diferencia da concorrência investigada]

## 10. Diretrizes Visuais Iniciais
[Indicações gerais para Vitor Visual]
```

## Output Example

> Usar como referência de qualidade, não como template rígido.

```markdown
# Estratégia de Marca — Clínica Base

## 1. Contexto do Negócio

A Clínica Base é uma clínica de Terapia Ocupacional especializada em crianças com atrasos e transtornos do neurodesenvolvimento: TEA, TDAH, dificuldades sensoriais. Fundada por Regiane Vidal (CREFITO-3 11824-TO) em Sorocaba, SP. Opera pelo Método B.A.S.E. (Brincar, Afeto, Sensorial, Estimulação). Modelo híbrido: atende a DesenvolvaCentro (parceira em SP, principal receita) e famílias diretamente em Sorocaba.

## 2. Problema que Resolvemos

Mães de crianças com atrasos do neurodesenvolvimento vivem em dois mundos paralelos: o da clínica (laudos, CID-10, prontuários) e o da vida real (onde a criança existe, brinca, chora e tenta se comunicar). A Clínica Base resolve o gap entre esses dois mundos. O Método B.A.S.E. coloca a mãe dentro do processo: não como espectadora, mas como protagonista ativa da terapia.

## 3. Arquétipo de Marca

### Primário: Cuidador (The Caregiver)
A essência da Clínica Base é cuidar, da criança e da mãe. O Cuidador é generoso, presente, confiável. Não abandona. Não usa jargão para se proteger. Fala com clareza e calor ao mesmo tempo. Justificativa: o Método B.A.S.E. foi construído explicitamente ao redor do vínculo afetivo e da mãe como protagonista. Isso não é estratégia — é a estrutura operacional do negócio.

### Secundário: Sábio (The Sage)
A Clínica Base não é só afeto. É método. É formação clínica. É Regiane Vidal com CREFITO-3 11824-TO. O Sábio confere autoridade técnica que impede o posicionamento de escorregar para o sentimental vago. Justificativa: sem o Sábio, o Cuidador vira "mais uma clínica carinhosa". Com o Sábio, vira "especialista que cuida com evidência".

## 4. Posicionamento

**Frase de posicionamento:** "Para mães de crianças com atrasos do neurodesenvolvimento em Sorocaba, a Clínica Base é a única clínica de Terapia Ocupacional que coloca a mãe dentro da terapia pelo Método B.A.S.E."

**Teste de especificidade:** Não — "mãe dentro da terapia" e "Método B.A.S.E." são próprios da Clínica Base. Nenhum dos concorrentes investigados ocupa esse posicionamento.

## 5. Tagline

**Finalista 1:** "Onde o desenvolvimento começa pela mãe"
Clara, específica, diferenciada. Remete ao Método B.A.S.E. sem precisar nomeá-lo. Mãe como protagonista explícito.

**Finalista 2:** "Terapia Ocupacional com base na relação que importa"
Jogo de palavras com o nome da clínica. "Relação" remete à díade mãe-filho. Mais técnica.

**Recomendação:** Finalista 1 para comunicação principal. Finalista 2 para contextos técnicos (site, LinkedIn).

## 6. Pilares da Marca

**Pilar 1: Método B.A.S.E.**
A terapia não é genérica. É um método estruturado com propósito claro em cada sessão. Brincar com intenção terapêutica. Afeto como ferramenta clínica. Sensorial como sistema de comunicação. Estimulação como resultado mensurável.

**Pilar 2: Mãe Protagonista**
A mãe não sai para a sala de espera. Entra na sessão, aprende, replica em casa. O terapeuta amplifica o que a mãe já faz.

**Pilar 3: Resultado Visível**
Não tratamos documentos ou diagnósticos. Tratamos crianças reais que vão para escola, aprendem a pegar lápis, abraçam a mãe. O resultado é concreto e observável no cotidiano.

## 7. Personalidade da Marca

A Clínica Base é como a terapeuta que você queria ter encontrado no primeiro diagnóstico. Ela sabe tudo, mas não te faz sentir burra. Séria no consultório e humana no corredor. Não usa jargão sem traduzir. Nunca diz "não se preocupe" sem explicar o porquê.

Pares de adjetivos:
- Especialista, mas acessível (não distante)
- Calorosa, mas não sentimental
- Estruturada, mas não burocrática
- Confiante, mas não arrogante
- Séria, mas não fria

## 8. Tom de Voz

Informal mas profundo. Fala de igual para igual com a mãe, com autoridade clínica clara. Evita jargão não traduzido. Usa exemplos concretos do cotidiano. Sem urgência artificial. Sem adjetivos vazios.
Proibido: travessão, "não é X é Y", urgência artificial.

## 9. Diferenciais Competitivos

1. Método proprietário com nome (B.A.S.E.) — nenhum concorrente investigado tem metodologia própria nomeada
2. Mãe dentro da sessão, não na sala de espera — posicionamento relacional único no segmento
3. Relação mãe-filho como alavanca terapêutica primária — não é um recurso, é a estrutura
4. Presença digital com profundidade (não só posts de diagnóstico, mas histórias reais)

## 10. Diretrizes Visuais Iniciais

- Paleta: tons terrosos quentes (charcoal, creme, cobre, verde sálvia)
- Tipografia: serif com autoridade (Playfair Display) + sans-serif humanista (Lato)
- Logo: abstrato ou tipográfico, sem figuras humanas literais, sem árvores, sem corações
- Estética: editorial profissional, não clínica hospitalar, não infantil cartoon
```

## Quality Criteria

- [ ] Arquétipo primário é Cuidador e secundário é Sábio, ambos com justificativa baseada na operação real
- [ ] Tagline contém referência ao desenvolvimento infantil, ao Método B.A.S.E. ou à mãe como protagonista
- [ ] Posicionamento diferencia a Clínica Base de clínicas genéricas de TO com especificidade real
- [ ] A mãe como protagonista aparece explicitamente em pelo menos dois pilares da marca
- [ ] Pilares refletem os quatro elementos do Método B.A.S.E.: Brincar, Afeto, Sensorial, Estimulação

## Veto Conditions

1. Arquétipo escolhido não é Cuidador como primário — rejeitar e refazer sem negociação
2. Tagline genérica que poderia ser de qualquer outra clínica ("Cuidado com amor", "Saúde e bem-estar") — rejeitar e refazer com teste de especificidade aplicado
