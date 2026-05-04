# Guia de Design — Clínica Base

> Você pode editar esse arquivo a qualquer momento.
> As skills de carrossel, proposta e slide leem este arquivo antes de criar qualquer visual.

> **Brand Guide oficial:** [brand-guide.html](../squads/identidade-visual/output/2026-05-04-155729/v4/brand-guide.html) — abrir no navegador para ver a identidade renderizada com 15 seções, 5 variações de logo, 8 templates de aplicação e regras de uso completas.

> **Documento de Fundação de Marca:** [Clínica Base — Fundação de Marca.pdf](../gestao/documentos/Clínica%20Base%20—%20Fundação%20de%20Marca.pdf) — Big Idea, tagline oficial, frase central, manifesto.

---

## Identidade Visual Oficial

A Clínica Base adotou em maio de 2026 uma nova identidade visual: **Editorial Quente**. Substitui completamente a paleta teal+salmão herdada do site `regianevidal.com.br`.

### Big Idea
> *A mãe é o maior instrumento terapêutico que existe.*

### Tagline oficial
> *Você é a base do seu filho.*

### Frase central (apresentação de Regiane)
> *"Atendo mães que chegam sem entender o que está acontecendo com o filho, e saem sabendo o que fazer."*

---

## Logo: Conceito I — Marca Concêntrica

Três arcos aninhados subindo de uma mesma linha-base:
- Arco externo (charcoal #3D2B1F) = a clínica
- Arco intermediário (sálvia #7C9A7C) = a mãe
- Arco interno (cobre #B87333) = a criança
- Linha base (charcoal) = a fundação compartilhada

**SVG do logo principal:**
```html
<svg viewBox="0 0 140 90" width="140" height="90" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="80" x2="130" y2="80" stroke="#3D2B1F" stroke-width="2.5"/>
  <path d="M 30 80 A 40 40 0 0 1 110 80" stroke="#3D2B1F" stroke-width="3.5" fill="none"/>
  <path d="M 45 80 A 25 25 0 0 1 95 80" stroke="#7C9A7C" stroke-width="3.5" fill="none"/>
  <path d="M 58 80 A 12 12 0 0 1 82 80" stroke="#B87333" stroke-width="3.5" fill="none"/>
</svg>
```

**Variações disponíveis no brand guide:** principal (sobre creme), negativa (sobre charcoal), monocromática preto (com opacidade 100/70/45), símbolo isolado (favicon), lockup com wordmark "Clínica Base" em Playfair Display Bold.

**Regras de uso:** espaço de respiro mínimo de 1x altura do arco maior; tamanho mínimo 32px de altura; sempre sobre fundo sólido da paleta (nunca sobre foto sem proteção).

---

## Cores — Paleta Editorial Quente

| Nome | HEX | RGB | Uso | Proporção |
|------|-----|-----|-----|-----------|
| Charcoal Quente | `#3D2B1F` | 61, 43, 31 | Cor primária, títulos, elementos principais | 40% |
| Creme | `#F5EFE6` | 245, 239, 230 | Fundo principal, respiro visual | 40% |
| Cobre | `#B87333` | 184, 115, 51 | Acento, CTAs, destaques | 10% |
| Verde Sálvia | `#7C9A7C` | 124, 154, 124 | Suporte, ícones, separadores | 7% |
| Preto Quente | `#1A1A1A` | 26, 26, 26 | Tipografia, contraste máximo | 3% |

### Combinações aprovadas
- Charcoal sobre Creme (texto principal, AAA 12.1:1)
- Cobre sobre Creme (CTAs e títulos, AA 3.8:1)
- Creme sobre Charcoal (texto em blocos escuros, AAA)
- Sálvia sobre Creme (ícones e separadores)

### Combinações proibidas
- Cobre sobre Sálvia (conflito de cores quentes)
- Sálvia sobre Charcoal em texto pequeno (contraste insuficiente)
- Branco puro `#FFFFFF` (frieza incompatível)
- Preto puro `#000000` sobre Creme (frieza)

---

## Tipografia

- **Títulos e display:** Playfair Display (Google Fonts, Open Font License) — serif editorial com autoridade emocional
- **Corpo e interface:** Lato (Google Fonts, Open Font License) — sans-serif humanista, calor sem frieza

**Hierarquia:**
| Nível | Fonte | Peso | Tamanho | Altura de Linha |
|-------|-------|------|---------|-----------------|
| H1 | Playfair Display | Bold (700) | 48-64px | 1.2 |
| H2 | Playfair Display | Bold (700) | 32-40px | 1.3 |
| H3 | Playfair Display | Regular (400) | 24-28px | 1.4 |
| Citação | Playfair Display | Italic (400) | 20-24px | 1.5 |
| Body | Lato | Regular (400) | 16-18px | 1.6 |
| Caption | Lato | Light (300) | 12-14px | 1.5 |
| CTA | Lato | Bold (700) | 14-16px | 1.0 (uppercase, tracking 0.05em) |

---

## Estilo geral

Editorial e quente, não pastel pediátrico nem azul-hospitalar. Premium e adulto, não infantil cartoon. Autoridade humanizada, não institucional. Calor terroso, não calor brilhante.

A identidade deve parecer "consultório de psicanálise editorial", não "pediatra colorida". Quando alguém ver uma peça da Clínica Base no Instagram, deve perceber como diferente em 2 segundos sem precisar ler o nome.

---

## Tom de Voz

| Dimensão | Posição |
|----------|---------|
| Formalidade | Informal com precisão |
| Emoção | Alta |
| Autoridade | Acessível (parceira, não distante) |
| Humor | Sério |
| Perspectiva | Visionária (desenvolvimento começa na família, não na clínica) |

### Sempre usar
- Linguagem direta, sem rodeios
- Fatos concretos e específicos
- Verbos de ação e transformação
- A mãe como protagonista (sujeito da frase)
- Perguntas que a mãe já está fazendo
- "Método B.A.S.E." (com pontos e maiúsculas)

### Nunca usar
- Travessão (—) — substituir por vírgula, ponto, dois-pontos
- Construção "não é X, é Y" — usar afirmativas diretas
- Palavra "cura" e derivados — substituir por desenvolvimento, progresso, evolução, vínculo
- Faixas etárias específicas (usar apenas "criança")
- Jargão clínico sem tradução
- Tom condescendente ("deixa com a gente")
- Urgência artificial ("vagas limitadas")
- Adjetivos vazios ("excelente", "qualidade superior", "atendimento humanizado")
- Clichês de saúde ("cuidamos com amor", "sua família em primeiro lugar")

---

## Hierarquia do Serviço

CRÍTICO para todos os agentes que produzem copy:

1. **Serviço principal:** sessões de Terapia Ocupacional para crianças
2. **Diferencial:** mãe como protagonista do desenvolvimento da criança
3. **Ferramenta de suporte:** coach parental (estrutura a participação da mãe; não é o serviço)

NUNCA posicionar coach parental como o produto principal. NUNCA dar a entender que a mãe fica dentro da sala durante toda a sessão (ela participa em momentos-chave, recebe ferramentas e instruções para casa).

---

## Aplicações disponíveis (com mockups renderizados)

Ver brand guide oficial para HTML/CSS de cada aplicação:
1. WhatsApp — fluxo de boas-vindas em 5 etapas (Fagner)
2. Instagram — perfil + feed 1080×1080
3. Cartão de visita 90×50mm (frente e verso)
4. Assinatura de e-mail
5. Papel timbrado A4 para laudo
6. Carrossel Instagram (8 slides — capa + conteúdo + fechamento)
7. Stories Instagram (4 formatos: pergunta, resposta, depoimento, bastidor)
8. E-book de captação (capa + página interna A4)

---

## Logo herdado (deprecated)

A identidade anterior (teal `#2DB5AE` + salmão `#E8705E` herdada do site regianevidal.com.br) foi substituída pela Editorial Quente em maio de 2026. Não usar mais a paleta teal+salmão em materiais novos.
