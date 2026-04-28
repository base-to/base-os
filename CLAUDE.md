# Clínica Base — Claude Code OS

## O que é esse workspace
Workspace de gestão e comunicação da Clínica Base, clínica de Terapia Ocupacional e Desenvolvimento Infantil em Sorocaba, SP. Aqui ficam os conteúdos, campanhas, financeiro e projetos que Fagner opera no dia a dia do negócio.

**Estrutura de pastas:**
- `marketing/conteudo/` — produção para Instagram, YouTube, TikTok e Substack
- `marketing/campanhas/` — planejamento e materiais de campanhas de captação
- `marketing/materiais/` — peças, criativos e assets de marca
- `financeiro/extratos/` — extratos bancários e faturas mensais (CSVs, formato AAAAMM-*.csv)
- `financeiro/relatorios/` — relatórios financeiros e controle de processamento
- `financeiro/orcamentos/` — orçamentos e propostas financeiras
- `gestao/pacientes/` — briefings e registros de acompanhamento (uso interno)
- `gestao/documentos/` — documentos internos da clínica
- `gestao/processos/` — processos e fluxos operacionais
- `projetos/` — projetos específicos (lançamentos, iniciativas, Projeto Mil Dias)
- `comercial/` — propostas e materiais comerciais
- `marca/` — identidade visual, design guide, materiais de marca
- `dados/` — drop zone para arquivos a analisar (CSV, XLSX, PDF, imagens)
- `templates/skills/` — templates de skills prontos para personalizar com /mapear
- `templates/ferramentas/catalogo.md` — APIs e ferramentas disponíveis para usar em skills

## Sobre o negócio
Clínica Base é uma clínica de Terapia Ocupacional especializada em crianças com atrasos e transtornos do neurodesenvolvimento (TEA, TDAH, dificuldades sensoriais). Fundada por Regiane Vidal (CREFITO-3 11824-TO) e gerida em parceria com Fagner, casal e sócios. Localizada em Sorocaba, SP. Opera pelo Método B.A.S.E. (Brincar, Afeto, Sensorial, Estimulação), com a mãe como protagonista do tratamento.

## O que mais fazemos aqui
- Produção de conteúdo para Instagram, YouTube, TikTok, LinkedIn e Substack
- Planejamento e execução de campanhas de marketing para captação de pacientes
- Gestão financeira da clínica
- Materiais de orientação parental para pacientes
- Gestão operacional geral

## Clientes e contexto
Modelo híbrido: prestam serviço para a DesenvolvaCentro (clínica parceira em São Paulo, B2B — principal fonte de receita atual) e atendem famílias diretamente em Sorocaba (B2C, em crescimento). Antes atuavam para múltiplas clínicas em SP — esse modelo foi reduzido à parceria atual com a DesenvolvaCentro enquanto constroem a base de pacientes próprios.

## Tom de voz
Informal mas profundo. Especialista acessível, não distante. A mãe é sempre protagonista. Fatos concretos e emoção com substância. Sem jargão clínico sem tradução.
Proibido: travessão (—), construções do tipo "não é X, é Y", urgência artificial, adjetivos vazios, clichês de saúde.

## Ferramentas conectadas
YouTube, Instagram, LinkedIn, TikTok, Notion (MCP local, token próprio), Substack, Website, Gmail, Google Calendar, Canva, Google Drive, Supermetrics, Zoom, Windsor.ai

## Skills instaladas
- `/controle-financeiro` — processa extratos e faturas mensais, categoriza transações e publica dashboard no Notion

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (se existirem e estiverem configurados):

1. `_contexto/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_contexto/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_contexto/estrategia.md` — foco atual, prioridades, o que pode esperar

Usar essas informações como base pra qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, proposta, slide, landing page), consultar `marca/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe uma skill relevante em `.claude/skills/` ou `.claude/commands/`.
Se encontrar, seguir as instruções da skill.
Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (quem são os clientes, como funciona a empresa, serviços, mercado) → adicionar em `_contexto/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato de resposta, o que evitar, como estruturar textos) → adicionar em `_contexto/preferencias.md`
- **Sobre prioridades e foco atual** (projetos em andamento, metas do momento, prazos importantes, o que é prioridade agora) → adicionar em `_contexto/estrategia.md`
- **Regra de comportamento nessa pasta** (onde salvar arquivos, como nomear, fluxos específicos) → adicionar no próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar o que foi salvo mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na verdade o arquivo se chama X"). Só perguntar quando a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante no projeto (novo cliente, nova skill, mudança de foco, novo processo, ferramenta instalada, estrutura de pastas alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize os arquivos de memória?"

Se sim, identificar o que precisa atualizar:

- **Novo cliente, serviço, ferramenta, equipe** → `_contexto/empresa.md`
- **Mudança de prioridade ou foco** → `_contexto/estrategia.md`
- **Correção de tom ou estilo** → `_contexto/preferencias.md`
- **Nova pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Mudança visual (cores, fontes, logo)** → `marca/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais que não mudam o contexto (ex: escrever um email, criar um post avulso)
- Perguntas simples ou conversas sem ação
- Mudanças que já foram salvas pelo bloco "Aprender com correções"

**Dica:** se não sabe se algo mudou, rode `/atualizar` pra uma varredura completa.

---

## Criação de skills

Quando o usuário pedir pra criar uma nova skill:

1. Verificar se existe um template relevante em `templates/skills/`. Se existir, usar como base e adaptar pro contexto do usuário
2. Perguntar: "Essa skill é específica pra esse projeto ou vai ser útil em qualquer projeto?"
   - Específica desse negócio → salvar em `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Útil em qualquer projeto → salvar em `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_contexto/empresa.md` e `_contexto/preferencias.md` pra calibrar o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, referências, exemplos), criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code
