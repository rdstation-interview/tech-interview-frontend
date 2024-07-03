FROM mcr.microsoft.com/devcontainers/javascript-node:0-16-bullseye

WORKDIR /var/app
COPY . .

# Definir ARGs para receber as variáveis de ambiente
ARG JFROG_NPM_REPOSITORY
ARG JFROG_USERNAME
ARG JFROG_TOKEN

ENTRYPOINT [ ".devcontainer/entrypoint.sh" ]
