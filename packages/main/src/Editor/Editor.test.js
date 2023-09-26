import { screen, render as renderBase } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import Editor from './Editor'
import { Theme } from '@resultadosdigitais/tangram-components'

const render = Component =>
  renderBase(<Theme value={Theme.kinds.lina}>{Component}</Theme>)

describe('Editor', () => {
  it('renders the title', () => {
    render(<Editor />)

    expect(screen.getByText('Desafio Frontend')).toBeInTheDocument()
  })

  describe('when workflow name is cliked', () => {
    it('renders the nameModal', () => {})

    describe('when nameModal name does not exists', () => {
      describe('and confirm is clicked', () => {
        it('validates the name successfully', () => {})
      })
    })

    describe('when nameModal name is empty', () => {
      describe('and confirm button is clicked', () => {
        it('validates the name and display an error', async () => {
          render(<Editor />)

          userEvent.click(
            screen.getByRole('button', {
              name: /Fluxo sem nome/,
            }),
          )

          const confirmButton = await screen.findByRole('button', {
            name: /Confirmar/,
          })

          await act(async () => {
            userEvent.click(confirmButton)
          })

          expect(
            screen.getByText('O nome do fluxo não pode ficar em branco'),
          ).toBeInTheDocument()
        })
      })
    })

    describe('when nameModal name exists', () => {})
  })
})
