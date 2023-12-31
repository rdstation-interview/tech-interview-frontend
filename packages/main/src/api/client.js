import { client } from '@resultadosdigitais/front-hub/http'

const api = () => client.create('workflow-service')

export const getWorkflows = () => {
  const path = `/workflows`

  return api()
    .get(path)
    .then(response => response.data)
}

export const validateName = (name = '') => {
  const path = `/validate-name?name=${name}`

  return api()
    .get(path)
    .then(response => response.data)
}
