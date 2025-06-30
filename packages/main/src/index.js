import { Connect } from '@resultadosdigitais/front-hub/react'
import { Reset, Theme } from '@resultadosdigitais/tangram-components'
import { startMirage } from 'api/server'
import Editor from './Editor'

if (process.env.NODE_ENV === 'development') {
  startMirage()
}

export default Connect(() => (
  <Theme value={Theme.kinds.lina}>
    <Reset />
    <Editor />
  </Theme>
))
