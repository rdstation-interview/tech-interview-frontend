export const workflows = [
  { id: 'WF01', name: 'Dia das crianças' },
  { id: 'WF02', name: 'Dia das mães' },
  { id: 'WF03', name: 'Dia dos pais' },
]

export const get = (req, res) => {
  res.json(workflows)
}
