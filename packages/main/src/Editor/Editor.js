import { Text } from '@resultadosdigitais/tangram-components'
import styled from 'styled-components'

const Root = styled.div`
  background: var(--neutral-surface-high-emphasis);
  height: 100vh;
`

function App() {
  return (
    <Root>
      <Text token={Text.tokens.TEXT_XL_BOLD}>Editor</Text>
    </Root>
  )
}

export default App
