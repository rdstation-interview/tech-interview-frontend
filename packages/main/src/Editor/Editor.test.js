import { render } from '@testing-library/react'
import { screen, act } from '@testing-library/react'

import Editor from './Editor'

describe('Editor', () => {
  it('should render title', () => {
    render(<Editor />)

    expect(screen.getByText('Editor')).toBeInTheDocument()
  })
})
