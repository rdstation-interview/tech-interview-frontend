export const workflows = [
  { id: 'wf01', name: 'Dia das crianças' },
  { id: 'wf02', name: 'Dia das mães' },
  { id: 'wf03', name: 'Dia dos pais' },
]

export const get = (req, res) => {
  res.json(workflows)
}
