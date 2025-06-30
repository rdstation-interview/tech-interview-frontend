import {
  Button,
  ButtonGroup,
  Form,
  Input,
  Modal,
  Navbar,
  Text,
} from '@resultadosdigitais/tangram-components'
import { Pen } from '@resultadosdigitais/tangram-react-icons'
import styled from 'styled-components'

// Você pode chamar o endpoint de validação coma a função a seguir
import { validateWorkflowName } from '../api'
import { useState } from 'react'

const Root = styled.div`
  background: var(--neutral-surface-high-emphasis);
  height: 100vh;
`

function App() {
  const [open, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen(prev => !prev)
  }

  const onSubmit = event => {
    event.stopPropagation()
    console.log(event)
  }

  return (
    <Root>
      <Modal open={open}>
        <Form submit={onSubmit}>
          <Modal.Header>Editar nome do fluxo</Modal.Header>

          <Modal.Content>
            <Text>
              Utilize um nome de fácil memorização. Ele será utilizado para sua
              identificação dentro do RD Station.
            </Text>
            <Form.Control>
              <Form.Label htmlFor="name">Nome do fluxo</Form.Label>
              <Input id="name" name="name" />
            </Form.Control>
          </Modal.Content>

          <Modal.Actions>
            <ButtonGroup>
              <Button kind={Button.kinds.secondary}>Cancelar</Button>
              <Button type="submit">Renomear</Button>
            </ButtonGroup>
          </Modal.Actions>
        </Form>
      </Modal>

      <Navbar>
        <Navbar.Section>
          <Text>Desafio Frontend</Text>
        </Navbar.Section>

        <Navbar.Section fluid>
          <Button
            kind={Button.kinds.tertiary}
            endIcon={<Pen title="Renomear fluxo" />}
            onClick={toggleModal}
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
