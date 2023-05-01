import { NotFoundError, ServerError, UnauthozidedError } from "../util/errors";
import { httpClient } from "./http-client";

type event = {
  _id: string;
  patientId: string;
  occurrences: occurrence[];
  serviceName: string;
  createdOn: string;
  modifiedOn: string;
};

type occurrence = {
  payment: {};
  _id: string;
  title: string;
  content: string;
  files: [];
  type: string;
  createdOn: string;
  modifiedOn: string;
  __v: number;
};

type timelines = {
  timelines: {};
};

type timeline = {
  timeline: {
    _id: string;
    patientId: string;
    occurrences: occurrence[] | string[];
    serviceName: string;
    createdOn: string;
    modifiedOn: string;
  };
};

export const timelineService = {
  getAll: async (): Promise<timelines[]> => {
    const response = await httpClient.request<timelines[]>({
      url: "/timeline",
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token") ?? null,
      },
    });

    switch (response.status) {
      case 200:
        return response.data;
      case 401:
        throw new UnauthozidedError();
      default:
        throw new ServerError();
    }
  },
  get: async (timelineId: string) => {
    const response = await httpClient.request<timeline>({
      url: `/timeline/${timelineId}`,
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token") ?? null,
      },
    });

    switch (response.status) {
      case 200:
        return response.data;
      case 401:
        throw new UnauthozidedError();
      case 404:
        throw new NotFoundError();
      default:
        throw new ServerError();
    }
  },
};
