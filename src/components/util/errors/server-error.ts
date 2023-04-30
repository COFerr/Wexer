export class ServerError extends Error {
    constructor () {
      super('Ocorreu um problema ao conectar aos nossos servidores')
      this.name = 'NotFoundError'
    }
  }
  