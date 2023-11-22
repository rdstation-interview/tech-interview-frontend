import { client } from '@resultadosdigitais/front-hub/http'

const api = () => client.create('workflow-service')

export const getWorkflows = () => {
  const path = `/workflows`

  return api()
    .get(path)
    .then(response => response.data)
}

export const validateWorkflowName = (name = '') => {
  const path = `/workflows/validate-name?name=${name}`

  return api()
    .get(path)
    .then(response => response.data)
}
