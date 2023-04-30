import { httpClient } from "./http-client"

type Response = {
  id: string,
  name: string,
  email: string,
  iat: number,
  exp: number,
}

export const userDataService = async (): Promise<Response> => {
    const response = await httpClient.request<Response>({
      url: '/user',
      method: 'get',
      headers: {
        Authorization: localStorage.getItem('token') ?? null
      }
    });
  
    if (response.status === 200) {
      return response.data
    }
  
    throw new Error('Autenticação expirada')
  }