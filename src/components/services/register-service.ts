import { httpClient } from "./http-client"

type Request = {
  email: string
  password: string
  name: string
}

type Response = {
  message: string
}

export const registerService = async ({ email, password, name }: Request): Promise<Response> => {
  const response = await httpClient.request<Response>({
    url: '/user',
    method: 'post',
    data: {
      email,
      password,
      name,
    }
  });

  if (response.status === 201) {
    return response.data
  }

  throw new Error('Falha no cadastro. Por favor, tente em alguns instantes.')
}