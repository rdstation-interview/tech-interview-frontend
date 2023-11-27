import {
  Button,
  ButtonGroup,
  Navbar,
  Text,
} from '@resultadosdigitais/tangram-components'
import { Pen } from '@resultadosdigitais/tangram-react-icons'
import styled from 'styled-components'

// Você pode chamar o endpoint de validação coma a função a seguir
// import { validateName } from '../api'

const Root = styled.div`
  background: var(--neutral-surface-high-emphasis);
  height: 100vh;
`

function App() {
  return (
    <Root>
      <Navbar>
        <Navbar.Section>
          <Text>Desafio Frontend</Text>
        </Navbar.Section>

        <Navbar.Section fluid>
          <Button
            kind={Button.kinds.tertiary}
            endIcon={<Pen title="Renomear fluxo" />}
          >
            Fluxo sem nome
          </Button>
        </Navbar.Section>

        <Navbar.Section>
          <ButtonGroup>
            <Button kind={Button.kinds.tertiary}>Sair do Editor</Button>
            <Button>Salvar</Button>
          </ButtonGroup>
        </Navbar.Section>
      </Navbar>
    </Root>
  )
}

export default App
