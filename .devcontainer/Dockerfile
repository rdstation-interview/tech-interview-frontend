FROM mcr.microsoft.com/devcontainers/javascript-node:0-16-bullseye

WORKDIR /var/app
COPY . .

# Definir ARGs para receber as variáveis de ambiente
ARG JFROG_NPM_REPOSITORY
ARG JFROG_USERNAME
ARG JFROG_TOKEN

RUN echo "npmScopes:" >~/.yarnrc.yml
RUN echo "  resultadosdigitais:" >>~/.yarnrc.yml
RUN echo "    npmRegistryServer: ${JFROG_NPM_REPOSITORY}" >>~/.yarnrc.yml
RUN echo "    npmAlwaysAuth: true" >>~/.yarnrc.yml
RUN echo "    npmAuthIdent: ${JFROG_USERNAME}:${JFROG_TOKEN}" >>~/.yarnrc.yml

RUN echo "> Executing 'yarn install' on web"
RUN yarn install

ENTRYPOINT [ ".devcontainer/entrypoint.sh" ]
