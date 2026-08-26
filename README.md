# Automação de UI com Cypress — Hub de Leitura

## Objetivo

Projeto de automação de testes de interface para o Hub de Leitura, desenvolvido durante a formação em Engenharia de Qualidade de Software.

Neste projeto desenvolvi testes end-to-end para validar fluxos da aplicação e reduzir riscos de regressão.

## O que desenvolvi

- Estruturação de testes E2E com Cypress.
- Validação de fluxos críticos da interface.
- Interação com elementos da aplicação e validação dos resultados.
- Uso de dados de teste e organização dos cenários.
- Execução dos testes em modo interativo e headless.
- Investigação de problemas de seletores, sincronização e configuração do ambiente.

## Tecnologias

- Cypress 14.5.4
- JavaScript
- Node.js
- Faker.js
- Git e GitHub

## Pré-requisitos

- Node.js e npm instalados.
- Git instalado.
- Aplicação Hub de Leitura disponível conforme a configuração utilizada pelos testes.

## Instalação

```bash
git clone https://github.com/priottomarcos7-coder/hub-de-leitura-teste-ui-task.git
cd hub-de-leitura-teste-ui-task
npm install
```

## Execução

Execução dos testes em Chrome:

```bash
npm test
```

Abertura da interface do Cypress:

```bash
npm run cy:open
```

O projeto também possui o script `cy:report` para execução com gravação no Cypress Cloud, quando configurado com credenciais válidas.

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
run-cypress.js
README.md
```

## Resultado esperado

O Cypress apresenta o resultado de cada cenário, permitindo identificar testes aprovados e falhas que precisam de investigação.

## Repositório

https://github.com/priottomarcos7-coder/hub-de-leitura-teste-ui-task

## Autor

Marcos Priotto

Projeto desenvolvido como parte da formação em Engenharia de Qualidade de Software na EBAC.