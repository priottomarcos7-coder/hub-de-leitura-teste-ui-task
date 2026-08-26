# Automação de UI com Cypress — Hub de Leitura

## Objetivo

Projeto de automação de testes de interface para o Hub de Leitura, desenvolvido durante a formação em Engenharia de Qualidade de Software.

Neste projeto desenvolvi testes end-to-end para validar fluxos da aplicação, buscando identificar falhas de comportamento e reduzir riscos de regressão.

## O que desenvolvi

- Estruturação de testes E2E com Cypress.
- Validação de fluxos críticos da interface.
- Interação com elementos da aplicação e validação de resultados.
- Organização dos cenários e dados de apoio.
- Execução em modo interativo e headless.
- Investigação de problemas de seletores, sincronização e configuração do ambiente.

## Tecnologias

- Cypress
- JavaScript
- Node.js
- Git e GitHub

## Pré-requisitos

- Node.js e npm instalados.
- Git instalado.
- Aplicação Hub de Leitura disponível conforme a configuração do projeto.

## Instalação

```bash
git clone https://github.com/priottomarcos7-coder/hub-de-leitura-teste-ui-task.git
cd hub-de-leitura-teste-ui-task
npm install
```

## Execução

```bash
npx cypress open
```

Para execução headless:

```bash
npx cypress run
```

## Estratégia de testes

A estratégia prioriza fluxos críticos da interface e cenários capazes de detectar regressões. Durante o desenvolvimento foram analisados seletores, sincronização e comportamento dos testes.

## Estrutura

```text
cypress/
├── e2e/
├── fixtures/
└── support/

cypress.config.js
package.json
README.md
```

## Resultado esperado

O Cypress apresenta os cenários aprovados e eventuais falhas, permitindo investigar o comportamento da aplicação.

## Repositório

https://github.com/priottomarcos7-coder/hub-de-leitura-teste-ui-task

## Autor

Marcos Priotto

Projeto desenvolvido como parte da formação em Engenharia de Qualidade de Software na EBAC.