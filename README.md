# 💻 Resgate da SmartWeb — Informática e Redes

![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow)
![Disciplina](https://img.shields.io/badge/Disciplina-Desenvolvimento%20Web%20I-blue)
![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)

> Projeto acadêmico de recuperação e modernização do site institucional da **SmartWeb Informática**, desenvolvido como atividade prática da disciplina **Desenvolvimento Web I**, do 2º período do curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas.

O desafio consiste em analisar, corrigir e aprimorar uma aplicação web originalmente construída com problemas de estrutura HTML, organização CSS, acessibilidade, responsividade e funcionamento JavaScript.

O desenvolvimento será realizado de forma incremental, com registro das correções no Diário de Bordo, histórico de commits Git e evidências do processo.

---

## 📌 1. Identificação do projeto

| Informação  | Descrição                             |
| ----------- | ------------------------------------- |
| Instituição | Faculdade Senac AM – FATESE           |
| Curso       | Análise e Desenvolvimento de Sistemas |
| Disciplina  | Desenvolvimento Web I                 |
| Período     | 2º período                            |
| Ano         | 2026                                  |
| Equipe      | Carmelo                               |
| Professor   | João Marcos Aires Duarte              |

### 👥 Integrantes da equipe

| Integrante                  | Matrícula   |
| --------------------------- | ----------- |
| Gabriela                    | A preencher |
| George Dourado Matos Freire | 2026.15.139 |
| Ítalo Augusto               | A preencher |
| Marcos                      | A preencher |

---

## 🎯 2. Objetivos do projeto

- Recuperar a aplicação original da SmartWeb.
- Corrigir problemas estruturais e funcionais.
- Melhorar a organização e manutenção do código.
- Implementar responsividade para diferentes dispositivos.
- Aprimorar acessibilidade e usabilidade.
- Validar as funcionalidades por meio de testes.
- Registrar cada evolução com evidências e commits.
- Aplicar os conhecimentos desenvolvidos durante a disciplina.

---

## 🛠️ 3. Tecnologias e ferramentas

| Tecnologia / Ferramenta | Finalidade                     |
| ----------------------- | ------------------------------ |
| HTML5                   | Estrutura e semântica          |
| CSS3                    | Estilização e responsividade   |
| JavaScript              | Comportamento e interatividade |
| Visual Studio Code      | Ambiente de desenvolvimento    |
| Live Server             | Execução local                 |
| Git                     | Controle de versão             |
| GitHub                  | Repositório e colaboração      |

---

## 🚀 4. Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Dourado85/DesafioSmartWeb.git
   ```

2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão Live Server, caso ainda não esteja instalada.
4. Abra o arquivo HTML principal.
5. Clique em **Go Live** para executar a aplicação no navegador.

---

## 📂 5. Organização do projeto

```text
DesafioSmartWeb/
├── CSS/
│   └── estilo.css
├── JS/
│   └── app.js
├── Evidencias/
│   ├── Antes/
│   └── Depois/
├── DIARIO.md
├── README.md
└── smartwebinformatica-desafio.html
```

A estrutura poderá evoluir durante a modernização, respeitando a organização definida para a entrega do desafio.

---

## 🔎 6. Matriz de diagnóstico dos problemas

A matriz apresenta os problemas identificados na análise inicial do código-fonte, suas respectivas referências na apostila e a solução prevista para cada ocorrência.

## Matriz de Problemas Identificados e Soluções

| ID     | Problema identificado                                                                      | Seção da apostila                      | Como corrigir                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| SW-001 | Ausência de configurações obrigatórias na estrutura inicial do HTML.                       | Unidade 2 — 2.1                        | Adicionar DOCTYPE, idioma, charset, viewport e título da página.                                                                                 |
| SW-002 | Utilização de elementos obsoletos, como `font` e `marquee`, e atributos de apresentação.   | Unidade 2 — 2.1 e 2.2                  | Substituir elementos obsoletos por HTML5 semântico e regras CSS.                                                                                 |
| SW-003 | Utilização de tabelas para organização do layout.                                          | Unidade 2 — 2.5; Unidade 3 — 3.3 a 3.6 | Substituir tabelas de layout por Flexbox e Grid, mantendo tabelas apenas para dados tabulares.                                                   |
| SW-004 | Imagens sem texto alternativo e possíveis falhas no carregamento dos arquivos.             | Unidade 2 — 2.4; Unidade 5 — 5.2       | Adicionar `alt` adequado e verificar a existência e os caminhos dos arquivos de imagem.                                                          |
| SW-005 | Campos do formulário sem identificação por rótulos associados.                             | Unidade 2 — 2.3; Unidade 5 — 5.2       | Adicionar elementos `label` associados aos respectivos campos.                                                                                   |
| SW-006 | Layout com largura fixa e ausência de adaptação para diferentes resoluções.                | Unidade 3 — 3.7 e 3.8                  | Implementar abordagem mobile-first, dimensões relativas e breakpoints da Ficha da Equipe.                                                        |
| SW-007 | CSS com excesso de `!important`, remoção do foco visual e regras de estilo conflitantes.   | Unidade 3 — 3.2; Unidade 5 — 5.2       | Simplificar seletores, revisar especificidade e preservar indicadores visíveis de foco.                                                          |
| SW-008 | Eventos JavaScript declarados diretamente nos elementos HTML.                              | Unidade 6 — 6.5                        | Remover eventos inline e registrar os manipuladores com `addEventListener()`.                                                                    |
| SW-009 | Utilização de `var` e ausência de padronização nas declarações e comparações.              | Unidade 6 — 6.2, 6.3 e 6.7             | Utilizar `const` e `let`, corrigir comparações e declarar adequadamente as variáveis.                                                            |
| SW-010 | Erros na lógica de montagem e exibição do catálogo de produtos.                            | Unidade 6; Unidade 8 — 8.1 e 8.2       | Corrigir laços, condições, identificadores e renderização dos produtos.                                                                          |
| SW-011 | Falhas na busca e nos filtros por linha de produtos.                                       | Unidade 6 — 6.2 e 6.5                  | Corrigir a filtragem, permitir busca sem distinção entre maiúsculas e minúsculas e combinar busca com filtros.                                   |
| SW-012 | Erros no gerenciamento do pedido, quantidades, contador e cálculo do total.                | Unidade 6 — 6.2 e 6.7                  | Corrigir a estrutura do carrinho, os cálculos, o contador e a função de limpeza.                                                                 |
| SW-013 | Falhas na validação e no envio do formulário de contato.                                   | Unidade 6; Unidade 8 — 8.3             | Corrigir referências, validações e envio, exibindo mensagens específicas junto aos campos sem recarregar a página.                               |
| SW-014 | Utilização de `alert()` para apresentar mensagens e resultados ao usuário.                 | Unidade 5 — 5.4; Unidade 6             | Substituir caixas de diálogo por mensagens informativas na própria página.                                                                       |
| SW-015 | Perguntas frequentes dependentes exclusivamente de eventos do mouse.                       | Unidade 5 — 5.2 e 5.3; Unidade 8 — 8.2 | Implementar abertura e fechamento por clique e teclado, utilizando estados acessíveis.                                                           |
| SW-016 | Uso de `innerHTML` com dados de entrada e utilização de `document.write()`.                | Unidade 6; Unidade 11 — 11.4           | Utilizar `textContent` para dados do usuário e remover métodos que possam comprometer a segurança e a estrutura do documento.                    |
| SW-017 | Código CSS e JavaScript sem separação efetiva em arquivos externos.                        | Unidade 1 — 1.2; Unidade 8 — 8.1       | Organizar o projeto em `index.html`, `css/estilos.css` e `js/app.js`, com referências externas e comentários de autoria.                         |
| SW-018 | Falha na navegação entre as quatro seções do site.                                         | Unidade 6 — 6.5; Unidade 8 — 8.2       | Corrigir a divergência entre os identificadores das seções e implementar a alternância correta, com indicação visual e semântica da seção ativa. |
| SW-019 | Botões de cópia não identificam e não copiam corretamente os contatos.                     | Unidade 6 — 6.5; Unidade 5 — 5.4       | Corrigir os identificadores dos contatos, implementar a cópia correta e apresentar confirmação na página.                                        |
| SW-020 | Contraste insuficiente entre textos e cores de fundo.                                      | Unidade 5 — 5.2                        | Ajustar as combinações de cores para atingir contraste mínimo de 4.5:1 para textos comuns.                                                       |
| SW-021 | Mensagens dinâmicas sem comunicação adequada para leitores de tela.                        | Unidade 5 — 5.3; Unidade 8 — 8.3       | Utilizar regiões e atributos ARIA apropriados, como `aria-live`, para anunciar atualizações e mensagens.                                         |
| SW-022 | Ausência de tratamento para usuários que preferem movimento reduzido.                      | Unidade 5 — 5.2                        | Implementar `prefers-reduced-motion` para reduzir ou desativar animações e transições.                                                           |
| SW-023 | JavaScript com responsabilidades misturadas e funções pouco organizadas.                   | Unidade 6 — 6.7; Unidade 8 — 8.1 e 8.2 | Separar dados, renderização e tratamento de eventos em funções com responsabilidades específicas.                                                |
| SW-024 | Informações transmitidas exclusivamente por cores, sem identificação textual complementar. | Unidade 5 — 5.1 e 5.2                  | Adicionar identificação textual ou outro indicador acessível para informações visuais, como o status das portas.                                 |

**Observação:** a matriz descreve os problemas identificados e os critérios de correção. A conclusão de cada item depende da implementação, dos testes e das evidências correspondentes.

**Observação:** a identificação de um problema não significa que sua correção já foi concluída. O status de cada item deverá ser atualizado conforme a implementação, validação e registro do commit correspondente.

### 📌 Controle de evolução dos problemas

| Status                | Significado                                               |
| --------------------- | --------------------------------------------------------- |
| Não iniciado          | Problema identificado, aguardando implementação.          |
| Em andamento          | Correção em desenvolvimento.                              |
| Concluído             | Correção implementada e validada.                         |
| Pendente de validação | Implementação realizada, aguardando testes ou evidências. |

---

## 🧩 7. Funcionalidade extra da equipe

### Contador de itens por linha

A funcionalidade adicional definida para a equipe consiste em implementar um contador de produtos por categoria.

**Comportamento esperado:**

- Exibir a quantidade de produtos de cada categoria.
- Atualizar os contadores durante a pesquisa.
- Atualizar os valores quando os filtros forem utilizados.
- Considerar somente os produtos visíveis na listagem.
- Manter os valores consistentes com o conteúdo apresentado ao usuário.

**Critérios de validação:**

1. Verificar a quantidade inicial de produtos por categoria.
2. Realizar uma pesquisa por nome, código ou descrição.
3. Verificar se os contadores refletem os produtos encontrados.
4. Aplicar filtros por categoria.
5. Confirmar se os valores são atualizados corretamente.
6. Limpar a pesquisa e os filtros e verificar a restauração dos totais.

---

## 📋 8. Ficha da Equipe — Requisitos exclusivos

Conforme estabelecido no Roteiro do Desafio SmartWeb, a equipe deverá implementar os requisitos específicos definidos pelo professor em sala de aula.

Esses requisitos devem estar presentes na aplicação final e devidamente justificados nesta documentação.

### 8.1 Requisitos definidos para a equipe Carmelo

| Item                  | Definição                   | Aplicação no projeto                                                                      |
| --------------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| Código da equipe      | A confirmar                 | Prefixo das variáveis CSS e comentários de autoria no início de cada arquivo.             |
| Cor de destaque       | A confirmar (hexadecimal)   | Cor principal do site, respeitando contraste mínimo de 4.5:1 em relação ao texto.         |
| Breakpoint principal  | A confirmar (px)            | Ponto de adaptação do layout de uma para várias colunas, seguindo abordagem mobile-first. |
| Produto extra         | A confirmar                 | Inclusão do 13º produto nos dados do JavaScript, na posição indicada pelo roteiro.        |
| Pergunta extra do FAQ | A confirmar                 | Inclusão da 8ª pergunta, com resposta elaborada pela equipe.                              |
| Recurso extra         | Contador de itens por linha | Exibição e atualização dinâmica da quantidade de produtos por categoria.                  |

### 8.2 Justificativa do recurso extra

O recurso adicional definido para a equipe Carmelo é o **Contador de Itens por Linha**.

A funcionalidade tem como objetivo apresentar a quantidade de produtos disponíveis em cada categoria do catálogo, proporcionando melhor visualização e acompanhamento dos resultados apresentados ao usuário.

**Comportamento esperado:**

- Exibir a quantidade de produtos por categoria.
- Atualizar os contadores conforme a pesquisa realizada.
- Atualizar os valores quando os filtros forem aplicados.
- Considerar os produtos efetivamente exibidos na listagem.
- Restaurar as quantidades quando a pesquisa e os filtros forem removidos.

**Critérios de validação:**

1. Conferir os contadores na exibição inicial do catálogo.
2. Pesquisar produtos por nome, código ou descrição.
3. Aplicar filtros por categoria.
4. Verificar se os contadores acompanham os resultados apresentados.
5. Limpar os filtros e confirmar a restauração das quantidades.

### 8.3 Justificativa dos requisitos

Os requisitos exclusivos da equipe complementam os objetivos de modernização da SmartWeb, permitindo aplicar conceitos de HTML, CSS e JavaScript, além de reforçar a responsividade, a acessibilidade e a experiência de utilização da aplicação.

---

## 📋 9. Estratégia de desenvolvimento e validação

O desenvolvimento será realizado de maneira incremental, seguindo o ciclo:

1. Identificação do sintoma.
2. Localização da causa no código-fonte.
3. Consulta à seção correspondente da apostila.
4. Implementação da correção.
5. Atualização da aplicação e execução dos testes.
6. Captura das evidências Antes e Depois.
7. Registro no Diário de Bordo.
8. Criação de commit individual ou por conjunto coerente de correções.

### Critérios gerais de validação

| Verificação     | Critério esperado                               |
| --------------- | ----------------------------------------------- |
| HTML            | Zero erros de validação W3C                     |
| JavaScript      | Nenhum erro no Console                          |
| Acessibilidade  | Lighthouse igual ou superior a 90               |
| Responsividade  | Testes em 360px, 768px e 1280px                 |
| Zoom            | Funcionamento com ampliação de 200%             |
| Interação       | Operação por mouse e teclado                    |
| Funcionalidades | Comportamento conforme os requisitos do desafio |

---

## 🤖 10. Declaração de utilização de Inteligência Artificial

Durante o desenvolvimento do projeto, foi utilizada a ferramenta **ChatGPT, da OpenAI**, como recurso de apoio educacional e técnico.

A utilização da ferramenta teve como objetivo auxiliar a equipe na compreensão dos problemas identificados, interpretação dos conceitos apresentados na apostila, análise de alternativas de implementação e elaboração de critérios de validação.

### 10.1 Finalidades de utilização

| Etapa           | Como a IA foi utilizada                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| Diagnóstico     | Apoio na interpretação dos erros e identificação de possíveis causas no HTML, CSS e JavaScript.         |
| Análise técnica | Orientação sobre boas práticas de estruturação, semântica, acessibilidade e organização do código.      |
| Correções       | Sugestões de alternativas para corrigir problemas de lógica, eventos, formulários e manipulação do DOM. |
| Responsividade  | Apoio na compreensão de media queries, Flexbox, Grid e adaptação de layouts.                            |
| Testes          | Elaboração de cenários, critérios de aceitação e verificações funcionais.                               |
| Documentação    | Apoio na organização do README, Diário de Bordo e mensagens de commit.                                  |

**Estrutura HTML (SW-001)**

> Analise a estrutura inicial deste documento HTML e identifique quais configurações obrigatórias estão ausentes. Explique a finalidade do DOCTYPE, do atributo lang, da codificação UTF-8 e da meta viewport. Apresente somente as alterações necessárias, preservando o restante do código.

**Elementos obsoletos (SW-002)**

> Identifique os elementos HTML obsoletos presentes neste trecho de código. Explique como substituí-los por recursos HTML5 e CSS3, mantendo a aparência e o conteúdo original da página.

**Layout com tabelas (SW-003)**

> Analise este trecho HTML e identifique se a tabela está sendo utilizada para apresentar dados ou somente organizar o layout. Caso seja utilizada para layout, sugira uma estrutura semântica com CSS, preservando o conteúdo existente.

**Acessibilidade de imagens e formulários (SW-004 e SW-005)**

> Avalie a acessibilidade deste HTML. Identifique imagens sem texto alternativo e campos de formulário sem associação com elementos label. Apresente as correções necessárias e explique como validar a navegação por leitores de tela e teclado.

**Responsividade (SW-006)**

> Analise este CSS e identifique regras que impedem a adaptação da página para telas menores. Sugira uma solução responsiva utilizando media queries, Flexbox ou Grid, considerando larguras de 360px, 768px e 1280px.

**Organização e acessibilidade CSS (SW-007)**

> Revise este arquivo CSS e identifique o uso excessivo de !important e a remoção de indicadores de foco. Sugira uma organização de estilos que respeite a especificidade e mantenha a acessibilidade por teclado.

**Eventos JavaScript (SW-008)**

> Analise os eventos declarados diretamente no HTML e demonstre como transferi-los para o arquivo JavaScript externo, utilizando addEventListener. Preserve o comportamento atual da aplicação.

**Declaração de variáveis (SW-009)**

> Analise este código JavaScript e indique quais variáveis podem utilizar const e quais precisam utilizar let. Explique a diferença entre as duas declarações e apresente uma versão corrigida.

**Catálogo de produtos (SW-010)**

> Analise a função responsável por montar o catálogo de produtos. Identifique possíveis erros de condição, índices e renderização. Corrija a lógica sem alterar os nomes, descrições ou preços dos produtos.

**Pesquisa e filtros (SW-011)**

> Revise a implementação da pesquisa e dos filtros do catálogo. Garanta que a pesquisa considere nome, descrição e código do produto, sem diferenciar letras maiúsculas e minúsculas, e que possa ser combinada com o filtro de categoria.

**Carrinho de compras (SW-012)**

> Analise a lógica do carrinho de compras. Identifique problemas na inicialização do array, inclusão de produtos, agrupamento de itens iguais, atualização de quantidades, cálculo do total e limpeza do carrinho. Apresente uma solução mantendo os dados originais dos produtos.

**Validação de formulário (SW-013)**

> Revise este formulário e identifique erros de referência aos elementos e condições de validação. Implemente validações para os campos obrigatórios, impeça o recarregamento indevido da página e apresente mensagens específicas para cada campo.

**Feedback ao usuário (SW-014)**

> Sugira uma alternativa acessível ao uso de alert() para apresentar mensagens de sucesso, erro e confirmação. A solução deve utilizar elementos da própria interface e permitir que tecnologias assistivas identifiquem as mensagens.

**Perguntas frequentes (SW-015)**

> Analise o componente de perguntas frequentes. Implemente abertura e fechamento por mouse e teclado, com indicação do estado expandido ou recolhido, preservando o conteúdo das respostas.

**Segurança na manipulação do DOM (SW-016)**

> Analise este código JavaScript e identifique riscos relacionados ao uso de innerHTML com dados de entrada e document.write. Sugira uma implementação mais segura utilizando métodos apropriados de manipulação do DOM e considerando prevenção contra XSS.

**Separação dos arquivos (SW-017)**

> Oriente como separar corretamente o HTML, CSS e JavaScript em arquivos externos. Demonstre como vincular os arquivos ao documento HTML, mantendo a organização e o funcionamento da aplicação.

---

## 📸 11. Evidências do projeto

As evidências serão organizadas conforme a evolução de cada problema identificado.

```text
Evidencias/
├── Antes/
│   ├── SW-001-antes.png
│   ├── SW-002-antes.png
│   └── ...
└── Depois/
    ├── SW-001-depois.png
    ├── SW-001-front.png
    ├── SW-002-depois.png
    └── ...
```

---

## 📖 12. Diário de Bordo e controle de versão

Todas as atividades serão registradas no arquivo `DIARIO.md`, contendo:

- Identificação do problema.
- Sintoma observado.
- Causa identificada.
- Referência à apostila.
- Solução implementada.
- Evidências produzidas.
- Commit correspondente.
- Responsável pela atividade.

Cada correção deverá ser registrada em commit, seguindo preferencialmente o padrão Conventional Commits.

Exemplos:

```bash
fix(html): corrigir estrutura inicial do documento
fix(css): ajustar responsividade do layout
fix(js): corrigir cálculo do carrinho
docs: atualizar diario de bordo
```

---

## 📚 13. Referências

- Apostila da disciplina Desenvolvimento Web I.
- Roteiro do Desafio SmartWeb — Informática e Redes.
- Documentação oficial HTML.
- Documentação oficial CSS.
- Documentação oficial JavaScript.
- Diretrizes de acessibilidade para conteúdo web (WCAG).

---

## ✅ 14. Considerações finais

O projeto **Resgate da SmartWeb — Informática e Redes** representa uma oportunidade de aplicar, de forma prática, os conhecimentos adquiridos na disciplina Desenvolvimento Web I.

Além da correção dos problemas técnicos identificados, a proposta busca desenvolver uma visão mais ampla sobre qualidade de software, organização de código, acessibilidade, responsividade, usabilidade e validação funcional.

A execução incremental permite acompanhar a evolução da aplicação, documentar as decisões técnicas e manter a rastreabilidade das alterações por meio das evidências, do Diário de Bordo e do histórico de commits.

A equipe Carmelo tem como objetivo entregar uma aplicação mais organizada, acessível, responsiva e funcional, respeitando os requisitos estabelecidos no roteiro do desafio e preservando as características e informações originais da SmartWeb.

**Equipe Carmelo**  
_Faculdade Senac AM – FATESE | 2026_
