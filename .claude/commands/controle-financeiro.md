---
name: controle-financeiro
description: >
  Processa extratos bancários e faturas de cartão mensais da Clínica Base,
  categoriza as transações com IA, calcula indicadores financeiros e publica
  um dashboard atualizado no Notion.
  Use quando quiser analisar as finanças do mês ou atualizar o dashboard.
---

# /controle-financeiro — Dashboard Financeiro Clínica Base

## Dependências

- Extratos em `financeiro/extratos/` (formato: `AAAAMM-extrato.csv` e `AAAAMM-fatura.csv`)
- Notion MCP configurado (`notion` — via token da Clínica Base)
- Controle de processados em `financeiro/relatorios/processados.json`

---

## Passo 1 — Identificar o que há de novo

1. Listar todos os arquivos em `financeiro/extratos/` com Glob
2. Identificar os meses disponíveis: pares onde existem tanto `AAAAMM-extrato.csv` quanto `AAAAMM-fatura.csv`
3. Ler `financeiro/relatorios/processados.json`
4. Comparar: quais meses ainda não estão registrados como processados?

**Se não houver nada novo:**
> "Todos os extratos disponíveis já foram processados. O mês mais recente é [mês]. Quer reprocessar algum?"

**Se houver meses novos:**
> "Encontrei [N] mês(es) novo(s): [lista]. Vou processar agora."

Processar um mês por vez, na ordem cronológica.

---

## Passo 2 — Processar cada mês novo

### 2a — Ler e normalizar as transações

**Extrato (`AAAAMM-extrato.csv`):**
- Colunas: `Data`, `Valor`, `Identificador`, `Descrição`
- Formato de data: DD/MM/YYYY
- Positivo = entrada; Negativo = saída

**Fatura (`AAAAMM-fatura.csv`):**
- Colunas: `date`, `title`, `amount`
- Formato de data: YYYY-MM-DD
- Positivo = compra (saída); Negativo = pagamento recebido (ignorar — já aparece no extrato como "Pagamento de fatura")

**Excluir das análises (movimentos internos):**
- Registros de "Pagamento de fatura" no extrato (duplicata das compras da fatura)
- "Aplicação RDB" e "Resgate RDB" (movimento interno de investimento)
- Itens de IOF na fatura (embutido no valor do item pai)
- Pagamentos de fatura com valor negativo na fatura (são estornos/pagamentos, já tratados no extrato)

**Resultado esperado:** uma lista unificada de transações com os campos:
`data | descrição | valor | origem (extrato/fatura)`

---

### 2b — Categorizar as transações

Propor uma categoria para cada transação com base na descrição. Usar as categorias abaixo como referência:

**Receitas:**
- `Receita de atendimentos` — pagamentos de famílias/convênios pelos atendimentos
- `Outros recebimentos` — qualquer entrada que não seja atendimento clínico

**Despesas operacionais:**
- `Pró-labore` — transferências para Regiane (pró-labore ou retirada)
- `Plano de saúde` — Porto Seguro Saúde e similares
- `Impostos e tributos` — Receita Federal, DAS, ISS, INSS
- `Conselho profissional` — CREFITO e similares
- `Aluguel e espaço físico` — aluguel, condomínio, IPTU
- `Ferramentas e software` — Canva, Google, Hotmart, Adaptaorg e similares
- `Telecomunicações` — Telefônica, operadoras, internet
- `Marketing e publicidade` — anúncios, impulsionamentos, agências
- `Material clínico` — materiais e equipamentos para atendimento
- `Cursos e capacitação` — formações, cursos, mentorias (ex: O Novo Mercado, ISG)
- `Outras despesas` — qualquer saída que não se encaixe acima

**Excluídas dos indicadores:**
- `Transferência interna` — movimentos entre contas próprias
- `Investimento` — RDB, poupança, aportes

Apresentar a tabela com as categorizações propostas:

```
| Data       | Descrição (resumida)         | Valor      | Categoria proposta       |
|------------|------------------------------|------------|--------------------------|
| 10/01/2026 | Pix recebido - DESENVOLVA... | R$ 7.724,52| Receita de atendimentos  |
| 10/01/2026 | Pix enviado - REGIANE...     | -R$ 5.000  | Pró-labore               |
...
```

Perguntar:
> "Essas categorizações fazem sentido? Me fala se quiser mudar alguma antes de eu calcular os indicadores."

Aguardar confirmação ou ajustes. Aplicar as correções e confirmar a lista final antes de continuar.

---

### 2c — Calcular indicadores

Com as transações aprovadas, calcular:

| Indicador | Fórmula |
|-----------|---------|
| Receita bruta | Soma das entradas de "Receita de atendimentos" + "Outros recebimentos" |
| Despesas totais | Soma de todas as saídas (exceto "Transferência interna" e "Investimento") |
| Resultado líquido | Receita bruta − Despesas totais |
| Margem de lucro | (Resultado líquido / Receita bruta) × 100 |
| Custos fixos | Soma das despesas que não variam com volume (plano de saúde, software, telecom, aluguel, conselho) |
| Custos variáveis | Soma das despesas que variam com volume (material clínico, marketing, outras) |
| Margem de contribuição | ((Receita bruta − Custos variáveis) / Receita bruta) × 100 |
| Ponto de equilíbrio | Custos fixos / (Margem de contribuição / 100) |
| Pró-labore total | Soma das transferências categorizadas como "Pró-labore" |

---

### 2d — Publicar no Notion

Usar o MCP do Notion (`notion`). Seguir a estrutura:

```
Dashboard Financeiro — Clínica Base   ← página raiz
├── Visão Anual                        ← tabela mês a mês
├── Janeiro 2026                       ← uma página por mês
├── Fevereiro 2026
└── ...
```

**Fluxo de publicação:**

1. **Verificar se a página raiz existe:**
   - Usar `list_databases` ou `search` para buscar "Dashboard Financeiro — Clínica Base"
   - Se não existir: criar a página e pedir ao Fagner para compartilhá-la com a integração "Claude Code" no Notion antes de continuar

2. **Criar a página do mês** (ex: "Janeiro 2026") dentro da página raiz, com as seções:

   **Seção 1 — Resumo do mês**
   - Bloco de indicadores: Receita, Despesas, Resultado, Margem de lucro, Margem de contribuição, Ponto de equilíbrio

   **Seção 2 — Por categoria**
   - Tabela: Categoria | Total | % da receita

   **Seção 3 — Movimentações completas**
   - Tabela: Data | Descrição | Valor | Categoria

3. **Atualizar a Visão Anual:**
   - Verificar se a página "Visão Anual" existe (criar se não)
   - Adicionar ou atualizar a linha do mês na tabela:
     `Mês | Receita | Despesas | Resultado | Margem de lucro | Margem de contribuição`

---

## Passo 3 — Registrar o mês como processado

Atualizar `financeiro/relatorios/processados.json`:

```json
{
  "202601": {
    "processado_em": "AAAA-MM-DD",
    "notion_page_id": "id-da-pagina-do-mes"
  }
}
```

Confirmar ao Fagner:
> "Pronto. [Mês] publicado no Notion com [N] transações categorizadas. Resultado do mês: [valor] ([margem]% de margem)."

---

## Regras

- Nunca inventar valores — usar apenas os dados dos CSVs
- Sempre pedir revisão das categorias antes de calcular e publicar
- Se faltar extrato ou fatura de um mês, avisar e pular
- Não duplicar transações (pagamento de fatura aparece em ambos os arquivos — usar só a fatura)
- Manter as categorias consistentes entre meses para a visão anual fazer sentido
- Se o Notion retornar erro de permissão, lembrar ao Fagner de compartilhar a página com a integração "Claude Code"
