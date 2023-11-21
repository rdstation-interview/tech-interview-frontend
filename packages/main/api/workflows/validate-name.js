import { workflows } from '../workflows'

const isValidName = (queryName = '') => {
  if (queryName === '')
    return {
      valid: false,
      reason: 'O nome do fluxo não pode ser deixado em branco.',
    }

  const index = workflows.findIndex(
    ({ name }) => formatName(name) === formatName(queryName),
  )

  const valid = index === -1

  return {
    valid,
    reason: !valid
      ? 'O nome que você escolheu já está sendo utilizado.'
      : undefined,
  }
}

const formatName = name => {
  return name.trim().toLowerCase()
}

export const get = (req, res) => {
  const { name: queryName } = req.query

  res.json({
    value: queryName,
    ...isValidName(queryName),
  })
}
