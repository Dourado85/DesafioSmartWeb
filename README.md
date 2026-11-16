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

| ID     | Problema identificado                                                                    | Referência na apostila                  | Solução prevista                                                           |
| ------ | ---------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------- |
| SW-001 | Ausência de DOCTYPE, idioma, charset e viewport.                                         | Unidade 2 – 2.1                         | Corrigir a estrutura inicial do documento HTML.                            |
| SW-002 | Utilização de elementos obsoletos, como `font` e `marquee`, e atributos de apresentação. | Unidade 2 – 2.1 e 2.2                   | Substituir elementos obsoletos por HTML semântico e estilização CSS.       |
| SW-003 | Utilização de tabelas para organização do layout.                                        | Unidade 2 – 2.5                         | Substituir tabelas de layout por estruturas semânticas e CSS.              |
| SW-004 | Imagens sem descrição alternativa (`alt`).                                               | Unidade 2 – 2.4; Unidade 5 – 5.2        | Adicionar textos alternativos adequados às imagens.                        |
| SW-005 | Campos de formulário sem associação adequada com rótulos.                                | Unidade 2 – 2.3; Unidade 5 – 5.2        | Implementar elementos `label` associados aos respectivos campos.           |
| SW-006 | Layout com largura fixa e ausência de responsividade.                                    | Unidade 3 – 3.7                         | Implementar comportamento responsivo para diferentes resoluções.           |
| SW-007 | Uso excessivo de `!important` e remoção do contorno de foco.                             | Unidade 3 – 3.2; Unidade 5 – 5.2        | Revisar especificidade CSS e preservar indicadores de foco acessíveis.     |
| SW-008 | Uso de eventos JavaScript diretamente no HTML (`onclick`).                               | Unidade 6 – 6.5; Unidade 8              | Separar os eventos JavaScript da estrutura HTML.                           |
| SW-009 | Utilização de `var` na declaração de variáveis.                                          | Unidade 6 – 6.3 e 6.7                   | Adotar `const` e `let`, conforme a necessidade de cada variável.           |
| SW-010 | Problemas na lógica de montagem e exibição do catálogo.                                  | Unidade 6; Unidade 8                    | Corrigir condições, iterações e renderização dos produtos.                 |
| SW-011 | Falhas na pesquisa e nos filtros de produtos.                                            | Unidade 6; Unidade 8                    | Corrigir a lógica de pesquisa e permitir a combinação dos filtros.         |
| SW-012 | Problemas na inicialização, soma e limpeza do carrinho.                                  | Unidade 6                               | Corrigir o controle de itens, quantidades e valores totais.                |
| SW-013 | Erros de referência e validação no formulário.                                           | Unidade 6; Unidade 8 – 8.3              | Corrigir referências aos campos e implementar validações adequadas.        |
| SW-014 | Utilização de `alert()` para apresentar mensagens ao usuário.                            | Unidade 5 – 5.4; Unidade 6; Unidade 8   | Implementar mensagens de feedback integradas à interface.                  |
| SW-015 | Perguntas frequentes dependentes exclusivamente de eventos de mouse.                     | Unidade 5; Unidade 8                    | Permitir interação por mouse e teclado, com indicação do estado.           |
| SW-016 | Uso de `innerHTML` com dados de entrada e utilização de `document.write`.                | Unidade 6; Unidade 8; Unidade 11 – 11.4 | Revisar a manipulação do DOM e evitar inserção insegura de conteúdo.       |
| SW-017 | Código CSS e JavaScript sem separação efetiva em arquivos externos.                      | Unidade 1; Unidade 8                    | Organizar os estilos e scripts em arquivos próprios e vinculá-los ao HTML. |

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

## 📋 8. Estratégia de desenvolvimento e validação

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

## 🤖 9. Declaração de utilização de Inteligência Artificial

Durante o desenvolvimento do projeto, foi utilizada a ferramenta **ChatGPT, da OpenAI**, como recurso de apoio educacional e técnico.

A utilização da ferramenta teve como objetivo auxiliar a equipe na compreensão dos problemas identificados, interpretação dos conceitos apresentados na apostila, análise de alternativas de implementação e elaboração de critérios de validação.

### 9.1 Finalidades de utilização

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

## 📸 10. Evidências do projeto

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

## 📖 11. Diário de Bordo e controle de versão

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

## 📚 12. Referências

- Apostila da disciplina Desenvolvimento Web I.
- Roteiro do Desafio SmartWeb — Informática e Redes.
- Documentação oficial HTML.
- Documentação oficial CSS.
- Documentação oficial JavaScript.
- Diretrizes de acessibilidade para conteúdo web (WCAG).

---

## ✅ 13. Considerações finais

O projeto **Resgate da SmartWeb — Informática e Redes** representa uma oportunidade de aplicar, de forma prática, os conhecimentos adquiridos na disciplina Desenvolvimento Web I.

Além da correção dos problemas técnicos identificados, a proposta busca desenvolver uma visão mais ampla sobre qualidade de software, organização de código, acessibilidade, responsividade, usabilidade e validação funcional.

A execução incremental permite acompanhar a evolução da aplicação, documentar as decisões técnicas e manter a rastreabilidade das alterações por meio das evidências, do Diário de Bordo e do histórico de commits.

A equipe Carmelo tem como objetivo entregar uma aplicação mais organizada, acessível, responsiva e funcional, respeitando os requisitos estabelecidos no roteiro do desafio e preservando as características e informações originais da SmartWeb.

**Equipe Carmelo**  
_Faculdade Senac AM – FATESE | 2026_
