export class UnauthozidedError extends Error {
    constructor () {
      super('Usuário não autenticado')
      this.name = 'Unauthozided'
    }
  }