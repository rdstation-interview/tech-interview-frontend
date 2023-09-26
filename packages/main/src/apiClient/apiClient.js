import { client } from '@resultadosdigitais/front-hub/http'

const api = () => client.create('workflow-service')

export const workflows = () => {
  const workflowsPath = '/workflows'

  const validateName = (name = '') => {
    const validateNamePath = `${workflowsPath}/validate-name?name=${name}`

    return api()
      .get(validateNamePath)
      .then(response => response.data)
  }

  return { validateName }
}
