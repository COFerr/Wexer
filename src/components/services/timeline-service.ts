import { NotFoundError, ServerError, UnauthozidedError } from "../util/errors"
import { httpClient } from "./http-client"

type Response = {
  _id: string
  patientId: string
  occurrences: string[]
  serviceName: string
  createdOn: string,
  modifiedOn: string
}

export const timelineService = {
  getAll: async (): Promise<Response[]> => {
    const response = await httpClient.request<Response[]>({
      url: '/timeline',
      method: 'get',
      headers: {
        Authorization: localStorage.getItem('token') ?? null
      }
    })

    switch (response.status) {
      case 200: return response.data
      case 401: throw new UnauthozidedError()
      default: throw new ServerError()
    }
  },
  get: async (timelineId: string) => {
    const response = await httpClient.request<Response>({
      url: `/timeline/${timelineId}`,
      method: 'get',
      headers: {
        Authorization: localStorage.getItem('token') ?? null
      }
    })

    switch (response.status) {
      case 200: return response.data
      case 401: throw new UnauthozidedError()
      case 404: throw new NotFoundError()
      default: throw new ServerError()
    }
  }
}