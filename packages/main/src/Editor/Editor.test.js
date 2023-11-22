import { Theme } from '@resultadosdigitais/tangram-components'
import { render as renderBase, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Editor from './Editor'

const render = Component =>
  renderBase(<Theme value={Theme.kinds.lina}>{Component}</Theme>)
const UNNAMED_WORKFLOW_TEXT = 'Fluxo sem nome'
const NAME_MODAL_TITLE = 'Editar nome do fluxo'
const NAME_MODAL_DESCRIPTION =
  'Utilize um nome de fácil memorização. Ele será utilizado para sua identificação dentro do RD Station.'
const NAME_MODAL_INPUT_LABEL = 'Nome do fluxo'
const SUBMIT_BUTTON_TEXT = 'Confirmar'
const EMPTY_NAME_ERROR_MESSAGE =
  'O nome do fluxo não pode ser deixado em branco.'
const NAME_IN_USE_ERROR_MESSAGE =
  'O nome que você escolheu já está sendo utilizado.'

describe('Editor', () => {
  it('renders the unnamed workflow', () => {
    render(<Editor />)

    expect(screen.getByText(UNNAMED_WORKFLOW_TEXT)).toBeInTheDocument()
  })

  it('displays the name modal when the workflow name is clicked', async () => {
    render(<Editor />)

    const renameButton = screen.getByText(UNNAMED_WORKFLOW_TEXT)

    userEvent.click(renameButton)

    const nameModalTitle = await screen.findByText(NAME_MODAL_TITLE)
    const nameModalDescription = await screen.findByText(NAME_MODAL_DESCRIPTION)
    const nameModalInput = await screen.findByLabelText(NAME_MODAL_INPUT_LABEL)
    const nameModalSubmitButton = await screen.findByText(SUBMIT_BUTTON_TEXT)

    expect(nameModalTitle).toBeInTheDocument()
    expect(nameModalDescription).toBeInTheDocument()
    expect(nameModalInput).toBeInTheDocument()
    expect(nameModalSubmitButton).toBeInTheDocument()
  })

  describe('when a name is submitted', () => {
    beforeEach(async () => {
      render(<Editor />)

      const renameButton = screen.getByText(UNNAMED_WORKFLOW_TEXT)
      userEvent.click(renameButton)
    })

    it('changes the workflow name', async () => {
      const NAME = 'Meu primeiro fluxo'
      const nameInput = await screen.findByLabelText(NAME_MODAL_INPUT_LABEL)
      const submitButton = await screen.findByText(SUBMIT_BUTTON_TEXT)

      userEvent.type(nameInput, NAME)
      userEvent.click(submitButton)

      const workflowName = await screen.findByText(NAME)

      expect(workflowName).toBeInTheDocument()
    })

    it('displays an error message if the name is empty', async () => {
      const submitButton = await screen.findByText(SUBMIT_BUTTON_TEXT)

      userEvent.click(submitButton)

      const errorMessage = await screen.findByText(EMPTY_NAME_ERROR_MESSAGE)

      expect(errorMessage).toBeInTheDocument()
    })

    it('displays an error message if the name already exists', async () => {
      const NAME = 'Dia das crianças'
      const nameInput = await screen.findByLabelText(NAME_MODAL_INPUT_LABEL)
      const submitButton = await screen.findByText(SUBMIT_BUTTON_TEXT)

      userEvent.type(nameInput, NAME)
      userEvent.click(submitButton)

      const errorMessage = await screen.findByText(NAME_IN_USE_ERROR_MESSAGE)

      expect(errorMessage).toBeInTheDocument()
    })
  })
})
