# @resultadosdigitais/frontend-interview

Repositório destinado à pratica de Code Session em nossas entrevistas de frontend.

# Setup

- [ ] Deixe as portas 3000 e 5000 com visibilidade pública
- [ ] Altere o endpoint de desenvolvimento no [front-hub.confg.js](https://github.com/rdstation-interview/tech-interview-frontend/blob/main/packages/main/front-hub.config.js#L36), substituindo o http://localhost:5000 pelo endereço gerado pelo codespaces para esta porta.

# Scripts disponíveis`

- Execute o script que inicializa a API: `yarn main fake api`
- Execute o script que inicializa o projeto: `yarn main start`
- Execute o script que inicializa os testes: `yarn main test --watchAll`

## Atenção

Sempre que um arquivo da API for atualizado, você precisa reinicializar a API.

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
