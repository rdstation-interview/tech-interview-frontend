/**
 * Fluxos existentes podem ser importados da seguinte maneira
 * import { workflows } from './workflows'
 */

/**
 * Em caso de uma requisição GET para esse endpoint, a função abaixo será executada.
 * @param {Object} req - A request. Use a propriedade "query" para ler as query strings da URL.
 * @param {Object} res - A response. Use a função "json" para formatar sua resposta.
 */
export const get = (req, res) => {
  res.json({
    status: 200,
  })
}
