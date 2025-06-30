// src/mirage.js
import { createServer } from 'miragejs'

export function startMirage({ environment = 'development' } = {}) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'api'

      this.get('/workflows/validate-name', (_, request) => {
        const { name } = request.queryParams
        const workflows = [
          { id: 'WF01', name: 'Dia das crianças' },
          { id: 'WF02', name: 'Dia das mães' },
          { id: 'WF03', name: 'Dia dos pais' },
        ]

        // Implemente aqui as validações necessárias

        return null
      })
    },
  })
}
