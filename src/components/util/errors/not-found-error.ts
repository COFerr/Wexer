export class NotFoundError extends Error {
    constructor () {
      super('Registro não encontrado ou inválido')
      this.name = 'NotFoundError'
    }
  }
  