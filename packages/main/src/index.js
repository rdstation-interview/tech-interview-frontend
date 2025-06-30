import { Reset, Theme } from '@resultadosdigitais/tangram-components'
import { startMirage } from 'api/server'
import Editor from './Editor'
import { render } from 'react-dom'

if (process.env.NODE_ENV === 'development') {
  startMirage()
}

render(
  <Theme value={Theme.kinds.lina}>
    <Reset />
    <Editor />
  </Theme>,
  document.getElementById('root'),
)
