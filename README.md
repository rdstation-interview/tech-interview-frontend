# @resultadosdigitais/frontend-interview

Repositório destinado à pratica de Code Session em nossas entrevistas de frontend.

# Setup

- [ ] Aguarde até que o arquivo de log `READY.log` apareça na raiz do projeto. Isso indica que as dependências foram instaladas com sucesso.
- [ ] Altere o endpoint de desenvolvimento no [front-hub.confg.js](https://github.com/rdstation-interview/tech-interview-frontend/blob/main/packages/main/front-hub.config.js#L36), substituindo o http://localhost:5000 pelo endereço gerado pelo codespaces para esta porta.
- [ ] Execute os testes em um terminal
- [ ] Execute a api em outro terminal
- [ ] Execute o projeto em outro terminal

> [!WARNING]
> **Sempre que um arquivo da API for atualizado, você precisa reinicializar a API.**

# Scripts disponíveis`

- Execute o script que inicializa o projeto: `yarn start`
- Execute o script que inicializa a API: `yarn api`
- Execute o script que inicializa os testes: `yarn test`

# Dicas

Você precisa focar em 4 arquivos:

1. packages/main/src/Editor/Editor.js
2. packages/main/src/Editor/Editor.test.js
3. packages/main/src/api/client.js
4. packages/main/src/api/mock/validate-name.js

E os componentes mais usados são:

- [Modal](https://tangram.rdstation.com.br/examples/components/modal/)
- [Input](https://tangram.rdstation.com.br/examples/components/input)
- [Text](https://tangram.rdstation.com.br/examples/components/text/)
- [Button](https://tangram.rdstation.com.br/examples/components/button/)
