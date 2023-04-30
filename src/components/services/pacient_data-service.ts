import { httpClient } from "./http-client"

type Response = {
    _id: string,
    userId: string,
    name: string,
    birthdate: string,
    profession: string,
    schooling: string,
    demands: string,
    personalAnnotations: string
}

export const pacientDataService = async (): Promise<Response> => {
    const response = await httpClient.request<Response>({
      url: '/patient/64348d31d1f55efc1d6dcdda',
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