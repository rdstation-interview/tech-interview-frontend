import {
  Brand,
  Button,
  ButtonGroup,
  Form,
  Input,
  Modal,
  Navbar,
  Text,
} from '@resultadosdigitais/tangram-components'
import { Pen } from '@resultadosdigitais/tangram-react-icons'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { workflows } from '../apiClient/apiClient'

const Root = styled.div`
  background: var(--neutral-surface-high-emphasis);
  height: 100vh;
`

function App() {
  const nameRef = useRef(null)
  const [nameModalOpen, setNameModalOpen] = useState(false)
  const [isValidName, setIsValidName] = useState(true)

  const openNameModal = () => setNameModalOpen(true)
  const closeNameModal = () => setNameModalOpen(false)

  const onChangeName = async () => {
    const { value: name } = nameRef.current

    const { valid } = await workflows().validateName(name)

    setIsValidName(valid)

    if (valid) closeNameModal()
  }

  return (
    <Root>
      <Navbar>
        <Brand />

        <Navbar.Section>
          <Text>Desafio Frontend</Text>
        </Navbar.Section>

        <Navbar.Section fluid>
          <Button
            kind={Button.kinds.tertiary}
            endIcon={<Pen title="Renomear fluxo" />}
            onClick={openNameModal}
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
      <Text token={Text.tokens.TEXT_XL_BOLD}>Editor</Text>

      <Modal
        open={nameModalOpen}
        onClose={closeNameModal}
        aria-describedby="modalDescription"
        aria-labelledby="modalTitle"
      >
        <Modal.Header id="modalTitle">Editar nome do fluxo</Modal.Header>

        <Modal.Content>
          <Text>
            Utilize um nome de fácil memorização. Ele será utilizado para sua
            identificação dentro do RD Station.
          </Text>
          <Form.Control error={!isValidName}>
            <Form.Label htmlFor="inputField">Nome do fluxo</Form.Label>
            <Input
              ref={nameRef}
              id="inputField"
              name="inputField"
              autoComplete="off"
            />
            {!isValidName && (
              <Form.Feedback id="nameFeedback">Ocorreu um erro</Form.Feedback>
            )}
          </Form.Control>
        </Modal.Content>

        <Modal.Actions>
          <ButtonGroup>
            <Button kind={Button.kinds.secondary} onClick={closeNameModal}>
              Cancelar
            </Button>
            <Button onClick={onChangeName}>Confirmar</Button>
          </ButtonGroup>
        </Modal.Actions>
      </Modal>
    </Root>
  )
}

export default App
