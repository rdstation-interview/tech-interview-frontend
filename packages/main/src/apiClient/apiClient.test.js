import { workflows } from './apiClient'

describe('api', () => {
  describe('workflows', () => {
    describe('validate-name', () => {
      it('validate an empty string', async () => {
        await expect(workflows().validateName('')).resolves.toBe(
          'peanut butter',
        )
      })
    })
  })
})
