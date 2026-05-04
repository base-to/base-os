---
task: "Criar Conceitos de Logo"
order: 2
input: |
  - estrategia_de_marca: Documento aprovado com arquétipo, posicionamento e personalidade da Clínica Base
  - research_brief: Princípios de logo, anti-padrões e referências visuais do segmento
output: |
  - conceitos_de_logo: 3 conceitos distintos com justificativa semântica, variações e especificações, como parte de visuais-aprovados.md
---

# Criar Conceitos de Logo

Gerar 3 conceitos distintos de logo para a Clínica Base, cada um com abordagem visual diferente, justificativa semântica e especificações de uso. Os conceitos devem ser suficientemente distintos para representar direções criativas reais, não variações do mesmo conceito.

## Process

1. Ler `estrategia-de-marca.md` para garantir que os conceitos refletem o arquétipo Cuidador + Sábio e o posicionamento aprovado
2. Consultar `pipeline/data/anti-patterns.md` e confirmar que nenhum conceito usa elementos proibidos (árvore, coração, figura humana literal, cruz)
3. Gerar Conceito A (lettermark tipográfico com B.A.S.E.) usando Canva ou image-ai-generator
4. Gerar Conceito B (símbolo abstrato de fundação/raiz) usando Canva ou image-ai-generator
5. Gerar Conceito C (marca de conexão mãe-filho abstrata) usando Canva ou image-ai-generator
6. Para cada conceito, documentar: justificativa semântica, integração do nome, variações de cor e versatilidade

## Output Format

```markdown
## Conceitos de Logo

### Conceito A: [Nome]
**Elemento visual:** [Descrição do símbolo/tipografia]
**Justificativa semântica:** [Por que esse elemento para a Clínica Base]
**Integração do nome:** [Como "Clínica Base" se integra ao símbolo]
**Variações:**
- Principal: [cor + fundo]
- Negativa: [cor + fundo escuro]
- Monocromática: [preto ou branco]
**Versatilidade:** [favicon, bordado, relevo, monocromático]

### Conceito B: [Nome]
[Mesma estrutura]

### Conceito C: [Nome]
[Mesma estrutura]

### Conceito Recomendado
[Qual e por que, com referência à estratégia]
```

## Output Example

> Usar como referência de qualidade e nível de detalhe.

```markdown
## Conceitos de Logo

### Conceito A: Lettermark B.A.S.E.

**Elemento visual:** As quatro letras B.A.S.E. tipografadas em Playfair Display Bold. O "B" inicial recebe tratamento levemente maior (110% do tamanho das demais letras) criando hierarquia e âncora visual. Os pontos após cada letra são parte do logotipo, não pontuação: reforçam a ideia de método estruturado e sequencial.

**Justificativa semântica:** O Método B.A.S.E. é o maior ativo diferencial da clínica. Colocá-lo no centro do logo afirma que a metodologia não é um recurso da clínica, é a clínica. A escolha pela tipografia Playfair Display comunica autoridade editorial sem frieza.

**Integração do nome:** "Clínica Base" em Lato Regular abaixo do lettermark, espaçamento de letra ampliado (tracking 200), tamanho 40% do lettermark. Versão horizontal: lettermark à esquerda, "Clínica Base" à direita com separador em cobre.

**Variações:**
- Principal: B.A.S.E. em #3D2B1F, "Clínica Base" em #B87333, fundo #F5EFE6
- Negativa: B.A.S.E. em #F5EFE6, "Clínica Base" em #B87333, fundo #3D2B1F
- Monocromática: tudo em #3D2B1F sobre fundo branco

**Versatilidade:**
- Favicon: apenas o "B" isolado em #3D2B1F
- Bordado: lettermark sem "Clínica Base", threads em cobre sobre uniforme creme
- Relevo: lettermark funciona em relevo seco sem cor
- Preto e branco: contraste total, nenhum detalhe perdido

---

### Conceito B: Símbolo Fundação

**Elemento visual:** Forma geométrica abstrata: dois retângulos horizontais empilhados com leve deslocamento lateral, criando a ideia visual de uma base/fundação. O retângulo inferior é levemente mais largo, o superior é mais estreito e posicionado levemente à esquerda, criando dinamismo sem instabilidade. Juntos, formam uma letra "B" estilizada vista de perto.

**Justificativa semântica:** "Base" é literalmente o nome da clínica e a metáfora central do Método B.A.S.E. O símbolo de fundação (camadas horizontais sólidas) comunica estabilidade, permanência e estrutura, os atributos do arquétipo Sábio, com a sobreposição dinâmica comunicando o crescimento do arquétipo Cuidador.

**Integração do nome:** "Clínica Base" em Playfair Display Regular à direita do símbolo, alinhado ao centro vertical. Tamanho igual à altura total do símbolo.

**Variações:**
- Principal: símbolo em #3D2B1F, nome em #3D2B1F, detalhe do retângulo superior em #B87333
- Negativa: símbolo em #F5EFE6, nome em #F5EFE6, detalhe em #B87333, fundo #3D2B1F
- Monocromática: símbolo e nome em #1A1A1A

**Versatilidade:**
- Favicon: símbolo isolado (dois retângulos) em #3D2B1F
- Bordado: símbolo funciona bem em bordado por ser geométrico e limpo
- Relevo: excelente para placa de entrada (relevo seco)
- Preto e branco: contraste claro entre as camadas horizontais

---

### Conceito C: Marca de Conexão

**Elemento visual:** Duas formas curvas orgânicas que se encaixam perfeitamente, evocando abraço e conexão. Não são figuras humanas literais: são formas abstratas que, juntas, formam um espaço positivo central em forma de folha ou chama, símbolo de crescimento e vida. Separadas, cada forma é incompleta. Unidas, formam algo maior.

**Justificativa semântica:** A díade mãe-filho é o núcleo do Método B.A.S.E. O símbolo de conexão comunica visualmente que a terapia não acontece com a criança isolada, acontece na relação. As duas formas que só fazem sentido juntas é a metáfora visual mais honesta do posicionamento "mãe protagonista".

**Integração do nome:** As duas formas acima, "Clínica Base" em Lato Bold abaixo centralizado, linha separadora em cobre entre símbolo e nome.

**Variações:**
- Principal: formas em #3D2B1F e #7C9A7C (charcoal + verde sálvia), nome em #3D2B1F
- Negativa: formas em #F5EFE6 e #B87333, nome em #F5EFE6, fundo #3D2B1F
- Monocromática: ambas as formas em #3D2B1F com diferenciação por opacidade (100% e 70%)

**Versatilidade:**
- Favicon: as duas formas unidas como ícone
- Bordado: funciona com duas threads de cor diferente
- Relevo: formas orgânicas criam relevo elegante
- Preto e branco: diferenciação por opacidade preserva a leitura de "duas entidades"

---

### Conceito Recomendado

**Conceito A (Lettermark B.A.S.E.)** para logo principal: é o mais diferenciado no segmento (nenhum concorrente investigado usa lettermark tipográfico), reforça diretamente o diferencial do Método B.A.S.E. e funciona perfeitamente em todos os formatos testados.

**Conceito B (Símbolo Fundação)** como alternativa para aplicações institucionais (placa de entrada, uniforme) onde o lettermark pode ser menos versátil em relevo.
```

## Quality Criteria

- [ ] 3 conceitos produzidos com abordagens genuinamente distintas (tipográfica, geométrica, orgânica)
- [ ] Nenhum conceito usa árvore, coração, cruz, figura humana literal ou símbolo genérico de saúde
- [ ] Cada conceito tem justificativa semântica rastreável até o estrategia-de-marca.md
- [ ] Cada conceito tem pelo menos 3 variações de cor documentadas (principal, negativa, monocromática)
- [ ] Versatilidade verificada: favicon, bordado, relevo, preto e branco

## Veto Conditions

1. Qualquer conceito usa símbolo genérico proibido (árvore, coração, cruz, criança literal) — rejeitar e refazer esse conceito
2. Os 3 conceitos são variações do mesmo elemento (ex: 3 tipos de árvore) — rejeitar todos e refazer com abordagens distintas
