import { workflows } from '../workflows'

const isValidName = (queryName = '') => {
  if (queryName === '') return false

  const index = workflows.findIndex(
    ({ name }) => formatName(name) === formatName(queryName),
  )

  return index === -1
}

const formatName = name => {
  return name.trim().toLowerCase()
}

export const get = (req, res) => {
  const { name: queryName } = req.query

  res.json({
    value: queryName,
    valid: isValidName(queryName),
  })
}
