import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect } from '@resultadosdigitais/front-hub/react'

import Editor from './Editor'

export default Connect(() => (
  <Theme value={Theme.kinds.lina}>
    <Reset />
    <Editor />
  </Theme>
))
