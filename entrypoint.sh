#!/bin/bash

echo "npmScopes:" >~/.yarnrc.yml
echo "  resultadosdigitais:" >>~/.yarnrc.yml
echo "    npmRegistryServer: ${JFROG_NPM_REPOSITORY}" >>~/.yarnrc.yml
echo "    npmAlwaysAuth: true" >>~/.yarnrc.yml
echo "    npmAuthIdent: ${JFROG_USERNAME}:${JFROG_TOKEN}" >>~/.yarnrc.yml

echo "> Executing 'yarn install' on web"
yarn install

if [ "$#" == 0 ]; then
     yarn main start
fi

exec $@