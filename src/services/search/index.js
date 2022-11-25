import api from "../api";

export const getRemedyName = (name) => api.get(`/pesquisar?nome=${name}`)
export const getRemedyLeaflet = (number) => api.get(`/medicamento/${number}`)
export const getPDF = (id) => api.get(`/pdf?id=${id}`)

