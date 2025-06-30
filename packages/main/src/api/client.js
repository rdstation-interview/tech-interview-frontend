export const validateWorkflowName = (name = '') => {
  const path = `/api/workflows/validate-name?name=${name}`
  return fetch(path).then(response => response.json())
}
