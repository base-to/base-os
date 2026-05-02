# Skill: prestacaodecontas-pmd

**Trigger:** `/prestacaodecontas-pmd`  
**Escopo:** local — específica do Projeto Mil Dias / Clínica Base  
**Objetivo:** Produzir a prestação de contas mensal ou bimestral do Projeto Mil Dias para a Excenter Foundation — do zero ao PDF final.

---

## Contexto do projeto

O Projeto Mil Dias é uma iniciativa social da Clínica Base que atende gestantes e mães em situação de vulnerabilidade no Jardim Tatiana, Sorocaba, SP. É financiado mensalmente pela Excenter Foundation. A prestação de contas é entregue em inglês, em formato PDF com identidade visual própria.

Arquivos de referência obrigatórios (ler sempre ao iniciar):
- `projetos/mil dias/territorio-jardim-tatiana.md` — diagnóstico social do território
- `projetos/mil dias/depoimentos/` — depoimentos de mães atendidas
- `projetos/mil dias/Imagens/` — logo e fotos do território
- Relatório anterior em `projetos/mil dias/prestacoes-de-conta/` — para manter continuidade de linguagem

---

## Etapa 1 — Coleta de dados

Perguntar ao Fagner:

1. **Período:** qual mês (ou bimestre) esse relatório cobre?
2. **Atividades realizadas:** o que aconteceu? (visitas, grupos, parcerias, entregas, eventos)
3. **O que não aconteceu e por quê:** houve impedimentos, atrasos, contexto externo?
4. **Famílias e crianças alcançadas:** números de participantes, se houver
5. **Parcerias novas ou movimentações institucionais**
6. **Depoimento:** há algum relato de mãe atendida para incluir? (ler pasta depoimentos/)
7. **Próximos passos:** o que está planejado para o próximo período?
8. **Fotos:** há imagens novas para incluir? (verificar `projetos/mil dias/Imagens/`)

Registrar tudo em um rascunho em `projetos/mil dias/rascunho-[periodo].md` antes de montar o HTML.

---

## Etapa 2 — Estrutura do relatório HTML

O relatório é um arquivo HTML de múltiplas páginas, cada uma com `min-height: 1123px` (A4 a 96dpi). O arquivo final vai em `projetos/mil dias/prestacoes-de-conta/` com nome no formato `AAAA-MM[-MM]-mes[-mes].html`.

### Identidade visual

```css
--navy:  #1F2B4A;   /* azul escuro principal */
--cream: #EDEAE2;   /* fundo claro */
--gold:  #C8A96E;   /* dourado / accent */
--white: #FFFFFF;
```

Fontes: `Montserrat` (títulos, labels, bold) e `Georgia` (corpo de texto, itálico em citações).  
Logo: `../Imagens/Mil Dias - Logo.png` — sempre na capa, largura 420px.

### Estrutura de páginas (referência: relatório fev/mar 2026)

| Página | Conteúdo |
|--------|----------|
| 1 — Capa | Logo, título do período, subtítulo "Accountability Report", nome da fundação |
| 2 — Território | Mapa/foto do Jardim Tatiana + diagnóstico social resumido (dados de territorio-jardim-tatiana.md) |
| 3 — Atividades | O que foi realizado no período, com contexto narrativo |
| 4 — Impacto | Números alcançados + depoimento de mãe atendida (em inglês, sem tradução em português) |
| 5 — Próximos passos | O que está planejado, parcerias em andamento |
| 6 — Encerramento | Assinatura da Regiane Vidal, agradecimento à Excenter Foundation |

Adaptar a quantidade de páginas conforme o volume de conteúdo.

### CSS crítico (não alterar)

```css
@page { margin: 0; size: 794px 1123px; }

.page {
  width: 794px;
  min-height: 1123px;
  background: #EDEAE2;
  position: relative;
  overflow: hidden;
  page-break-after: always;
  break-after: page;
  box-sizing: border-box;
}
.page:last-child { page-break-after: avoid; break-after: avoid; }

@media print {
  body { background: transparent; }
  .page {
    width: 794px !important;
    height: 1123px !important;
    min-height: unset !important;
    margin: 0 !important;
    page-break-after: always;
    break-after: page;
    overflow: hidden;
    position: relative !important;
  }
  .page:last-child { page-break-after: avoid; break-after: avoid; }
  .curves { position: absolute !important; bottom: 0 !important; }
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
```

**Atenção:** não usar `var(--nome)` em propriedades que aparecem em `@media print` — usar hex direto. O Chrome headless não resolve variáveis CSS no contexto de impressão de forma confiável.

---

## Etapa 3 — Geração do PDF

O Chrome headless não consegue escrever em pastas com espaços no caminho (o projeto fica em `projetos/mil dias/`). Pipeline obrigatório:

```bash
HTML_SRC="c:/Users/Razer-Blade-15/OneDrive/Documentos/BASE-OS/ccos-baseto/projetos/mil dias/prestacoes-de-conta/NOME-DO-ARQUIVO.html"
TMP_HTML="C:/Users/Razer-Blade-15/Downloads/mil-dias-tmp.html"
TMP_PDF="C:/Users/Razer-Blade-15/Downloads/mil-dias-tmp.pdf"
DEST_PDF="c:/Users/Razer-Blade-15/OneDrive/Documentos/BASE-OS/ccos-baseto/projetos/mil dias/prestacoes-de-conta/NOME-DO-ARQUIVO.pdf"

# 1. Substitui caminhos relativos por absolutos (imagens não carregam de pasta copiada)
sed 's|../Imagens/|file:///C:/Users/Razer-Blade-15/OneDrive/Documentos/BASE-OS/ccos-baseto/projetos/mil%20dias/Imagens/|g' "$HTML_SRC" > "$TMP_HTML"

# 2. Gera PDF no Downloads (sem espaços no caminho)
"C:/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless --disable-gpu --no-margins --print-to-pdf-no-header \
  --run-all-compositor-stages-before-draw \
  --print-to-pdf="$TMP_PDF" \
  "file:///$TMP_HTML"

sleep 3

# 3. Move para a pasta do projeto
cp "$TMP_PDF" "$DEST_PDF" && echo "PDF gerado: $DEST_PDF"
```

---

## Etapa 4 — Revisão e entrega

Após gerar o PDF:
1. Abrir o PDF e verificar visualmente todas as páginas
2. Checar: logo aparece corretamente, imagens carregadas, quebras de página sem corte de conteúdo, curvas no rodapé sem sobrepor texto
3. Confirmar com o Fagner antes de enviar à Excenter Foundation

---

## Nomenclatura de arquivos

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Mensal | `AAAA-MM-mes.html/.pdf` | `2026-01-janeiro.html` |
| Bimestral | `AAAA-MM-MM-mes-mes.html/.pdf` | `2026-02-03-fev-mar.html` |
| Rascunho | `rascunho-mes[-mes]-AAAA.md` | `rascunho-fev-mar-2026.md` |

---

## Problemas conhecidos e soluções

| Problema | Causa | Solução |
|----------|-------|---------|
| PDF com margens brancas | Chrome adiciona margens por padrão | Usar `--no-margins` + `@page { margin: 0 }` |
| Cores diferentes no PDF | Chrome não preserva cores sem flag | Adicionar `-webkit-print-color-adjust: exact` |
| PDF não gerado (erro de caminho) | Espaço em "mil dias" no path | Gerar em Downloads, copiar depois |
| Imagens não aparecem no PDF | Caminhos relativos quebram ao copiar HTML | Substituir com `sed` para `file:///` absoluto |
| Curvas sobrepondo texto | `position: absolute` + conteúdo maior que 1123px | Reduzir altura das curvas ou dividir em mais páginas |
| "Projeto" visível na logo | Logo antiga (logo-mil-dias.png) | Usar `../Imagens/Mil Dias - Logo.png` |
