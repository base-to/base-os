# Domain Framework: Criação de Identidade Visual de Marca

## Visão Geral

Este framework define a metodologia operacional para criação de identidade visual da Clínica Base, do zero até o brand guide completo. Cada etapa tem critérios de decisão, gates de qualidade e entregáveis definidos.

---

## Etapa 1: Definir Posicionamento e Arquétipo de Marca

### Objetivo
Estabelecer a fundação estratégica que guiará todas as decisões visuais. Sem estratégia, visual é decoração.

### Processo

**1.1 Mapeamento do contexto**
- Ler company.md para entender o negócio, público e diferenciais
- Identificar o principal problema que a clínica resolve (não o serviço, o problema)
- Mapear o estado emocional do público antes e depois do tratamento

**1.2 Escolha do arquétipo**
- Avaliar os 12 arquétipos contra a personalidade real da marca
- Priorizar autenticidade sobre aspiração (o arquétipo deve refletir o que a marca JÁ É)
- Definir arquétipo primário (dominante) e arquétipo secundário (complementar)
- Documentar por que esse arquétipo foi escolhido (justificativa baseada em evidência)

**1.3 Definição de posicionamento**
- Criar a frase de posicionamento: "Para [público], a Clínica Base é a [categoria] que [diferencial único]"
- Testar contra: "Poderia ser de qualquer outra clínica?" — se sim, refazer
- Definir os 3 pilares da marca (atributos inegociáveis)

**1.4 Criação de tagline**
- Gerar 5 conceitos de tagline baseados no posicionamento
- Filtrar contra: genérica? já usada? difícil de pronunciar? não reflete B.A.S.E.?
- Selecionar 2 finalistas para aprovação

**1.5 Definição de personalidade**
- Descrever a marca como pessoa: quem é, como fala, o que valoriza
- Definir 5 pares de adjetivos: o que a marca é vs o que não é
- Exemplo: "Calorosa, mas não sentimental" / "Especialista, mas não distante"

### Critérios de Decisão — Etapa 1
- Arquétipo primário é Cuidador? Se não, rejeitar.
- Tagline menciona B.A.S.E. ou desenvolvimento infantil? Se não, rejeitar.
- Posicionamento é diferenciado de clínicas genéricas de TO? Se não, refazer.
- Mãe aparece explicitamente como protagonista? Se não, incluir.

### Entregável
`estrategia-de-marca.md` — documento completo com: arquétipo, tagline, posicionamento, personalidade, pilares da marca

---

## Etapa 2: Definir Sistema de Cores

### Objetivo
Estabelecer uma paleta que comunica o arquétipo escolhido, diferencia da concorrência e passa em testes de acessibilidade.

### Processo

**2.1 Pesquisa competitiva visual**
- Mapear paletas de 5 concorrentes diretos (já feito na investigação)
- Identificar cores saturadas no segmento (a evitar por ser clichê)
- Identificar oportunidade de diferenciação cromática

**2.2 Seleção da cor primária**
- A cor primária representa o arquétipo. Para Cuidador + Sábio: tons terrosos quentes ou azuis profundos
- Verificar: está saturada no segmento? — teal (#00B4C5) já é usado pelo @instituto_singular
- Confirmar que a cor primária funciona em fundos claros E escuros

**2.3 Seleção da paleta completa**
- Cor primária: identidade forte, uso predominante
- Cor de fundo: respiro visual, acessível
- Cor de acento: energia, CTAs, destaques (máximo 10% de uso)
- Cor de suporte: elementos secundários, progress indicators
- Cor de tipografia: contraste máximo

**2.4 Verificação WCAG**
- Verificar contraste de cada par principal contra WCAG 2.1 AA (ratio mínimo 4.5:1 para texto normal)
- Verificar contraste de cada par para WCAG AAA quando possível (ratio 7:1)
- Documentar todos os ratios calculados

**2.5 Especificação técnica completa**
- HEX para digital
- RGB para digital
- CMYK para impressão
- Pantone para produção gráfica profissional (opcional mas recomendado)
- Nome humano para cada cor (facilita comunicação com fornecedores)

### Critérios de Decisão — Etapa 2
- Cor primária é diferente de todas as concorrentes investigadas?
- Todos os pares principais passam WCAG AA?
- A paleta completa tem entre 4 e 6 cores (nem carente nem sobrecarregada)?
- A paleta funciona em impressão preto e branco?

### Entregável
Tabela de cores com especificações completas, ratios de contraste e exemplos de uso

---

## Etapa 3: Definir Tipografia

### Objetivo
Selecionar o par tipográfico que reforça o arquétipo e garante legibilidade em todos os formatos.

### Processo

**3.1 Definir necessidades tipográficas**
- Listar todos os formatos onde a tipografia será usada: posts de Instagram, site, WhatsApp, material impresso, apresentações
- Identificar restrições: fontes que precisam estar disponíveis no Google Fonts? Sim, para democratizar o acesso.

**3.2 Selecionar fonte de display (títulos)**
- Deve comunicar o arquétipo: serif para autoridade e calor (Cuidador + Sábio)
- Deve ser distinta o suficiente para criar personalidade visual
- Deve funcionar em tamanho grande (display) sem perder elegância
- Candidata principal: Playfair Display (elegante, editorial, autoridade com calor)

**3.3 Selecionar fonte de texto (corpo)**
- Deve complementar a fonte de display sem competir
- Deve ter excelente legibilidade em tamanhos pequenos (12-14px)
- Deve ter pesos variados (Light, Regular, Bold no mínimo)
- Candidata principal: Lato (humanista, legível, calorosa sem ser informal)

**3.4 Definir hierarquia tipográfica**
- H1: tamanho, peso, espaçamento de letra
- H2: tamanho, peso, espaçamento de letra
- H3: tamanho, peso
- Corpo: tamanho, peso, altura de linha
- Caption/Legenda: tamanho, peso

**3.5 Criar specimen (mostra tipográfica)**
- Mostrar cada nível hierárquico com texto real da clínica
- Verificar legibilidade em 16px (tamanho mínimo para acessibilidade)
- Verificar contraste de cor sobre fundo principal

### Critérios de Decisão — Etapa 3
- A fonte de display comunica autoridade e calor simultaneamente?
- O par tipográfico complementa sem gerar conflito visual?
- A hierarquia cobre pelo menos 4 níveis?
- Ambas as fontes estão disponíveis gratuitamente no Google Fonts?

### Entregável
Especificação tipográfica completa com specimen e guia de uso por contexto

---

## Etapa 4: Criar Conceitos de Logo

### Objetivo
Desenvolver 3 conceitos distintos de logo, cada um com abordagem visual diferente, para avaliação e seleção.

### Processo

**4.1 Briefing criativo**
- Reler estrategia-de-marca.md e paleta e tipografia aprovadas
- Identificar os 3 principais conceitos metafóricos do negócio: base/fundação, desenvolvimento/crescimento, relação mãe-filho
- Definir que nenhum conceito pode usar os mesmos símbolos (3 abordagens distintas)

**4.2 Geração de 3 conceitos**
- Conceito A: Abordagem tipográfica/lettermark — foca nas letras B.A.S.E.
- Conceito B: Abordagem simbólica abstrata — foca em forma geométrica com significado
- Conceito C: Abordagem icônica — foca em símbolo figurativo estilizado (conexão, encontro)

**4.3 Para cada conceito, especificar**
- Elemento visual principal e justificativa semântica
- Como o nome "Clínica Base" se integra ao símbolo
- Variações de cor: versão principal, versão negativa, versão monocromática
- Contextos de uso ideais

**4.4 Teste de versatilidade de cada conceito**
- Funciona em 32x32px? (favicon)
- Funciona bordado? (uniforme)
- Funciona em relevo? (placa)
- Funciona sem cor? (fax, papel térmico)

**4.5 Renderização**
- Criar versão digital limpa de cada conceito
- Mostrar em contexto (mockup de fundo claro e escuro)
- Apresentar para aprovação com justificativa de cada escolha

### Critérios de Decisão — Etapa 4
- Cada conceito é suficientemente distinto dos outros 2?
- Nenhum conceito usa árvore, coração, cruz vermelha ou figuras humanas literais?
- Cada conceito funciona em preto e branco?
- O nome da clínica está legível em todos os conceitos?

### Entregável
3 conceitos de logo com justificativa semântica, variações e especificações de uso

---

## Etapa 5: Renderizar Mockups

### Objetivo
Mostrar os elementos aprovados (logo + paleta + tipografia) em aplicações reais para validar coerência visual.

### Processo

**5.1 Seleção de aplicações para mockup**
- Post de Instagram (1080x1080px)
- Stories de Instagram (1080x1920px)
- Cartão de visita (frente e verso)
- Header de site
- Template de WhatsApp com foto

**5.2 Renderização**
- Usar logo selecionado (ou os 3 conceitos para comparação)
- Aplicar paleta correta (primária + acento + fundo)
- Aplicar hierarquia tipográfica
- Incluir conteúdo real (não Lorem Ipsum): nome da clínica, tagline, número de contato, CREFITO

**5.3 Verificação de consistência**
- Todos os mockups usam a mesma paleta?
- A hierarquia tipográfica é consistente entre formatos?
- O logo é sempre usado dentro da área de proteção mínima?
- Combinações de cor nos mockups são todas aprovadas?

**5.4 Documentação de uso**
- Para cada aplicação: tamanho, margens, posição do logo
- Regras de "não fazer" baseadas nos mockups

### Critérios de Decisão — Etapa 5
- Os mockups parecem de uma só marca (coerência)?
- A identidade parece profissional e diferenciada dos concorrentes?
- O arquétipo Cuidador + Sábio é perceptível visualmente?

### Entregável
Conjunto de mockups renderizados em PDF ou imagens de alta resolução + documento de especificações

---

## Etapa 6: Compilar Brand Guide

### Objetivo
Consolidar todos os elementos aprovados em um documento único, completo, utilizável por qualquer fornecedor ou parceiro.

### Processo

**6.1 Estrutura do brand guide**
1. Introdução: missão, valores, arquétipo
2. Logo System: versões, área de proteção, uso incorreto
3. Paleta de Cores: HEX, RGB, CMYK, Pantone, proporções de uso
4. Tipografia: famílias, hierarquia, specimen, tamanhos mínimos
5. Tom de Voz: 6 tons com exemplos
6. Aplicações: templates aprovados
7. Uso Incorreto: o que nunca fazer

**6.2 Formato de entrega**
- HTML interativo (principal — compartilhável por link)
- PDF exportado do HTML (para impressão)
- Arquivos fonte (fontes .otf/.ttf, paleta .ase, logo .svg/.ai)

**6.3 Verificação de completude**
- Todos os 7 seções estão presentes?
- Há exemplos de uso correto E incorreto?
- O documento pode ser usado sem o criador presente?

**6.4 Revisão de qualidade**
- Pontuação por dimensão (logo, cor, tipografia, brand guide) conforme quality-criteria.md
- Emitir veredicto APPROVE, CONDITIONAL APPROVE, ou REJECT

### Critérios de Decisão — Etapa 6
- O brand guide tem exemplos visuais reais (não só descrições textuais)?
- Um designer externo consegue aplicar a identidade apenas com o brand guide?
- Todos os arquivos de fonte estão especificados com link de download?
- Há pelo menos 3 exemplos de uso incorreto?

### Entregável
`brand-guide.html` — documento completo e interativo da identidade visual da Clínica Base
