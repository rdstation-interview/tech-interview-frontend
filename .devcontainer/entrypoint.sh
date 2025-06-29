#!/bin/bash

echo "npmScopes:" >~/.yarnrc.yml
echo "  resultadosdigitais:" >>~/.yarnrc.yml
echo "    npmRegistryServer: ${JFROG_NPM_REPOSITORY}" >>~/.yarnrc.yml
echo "    npmAlwaysAuth: true" >>~/.yarnrc.yml
echo "    npmAuthIdent: ${JFROG_USERNAME}:${JFROG_TOKEN}" >>~/.yarnrc.yml

echo "> JFrog Repository ready"

exec bash
