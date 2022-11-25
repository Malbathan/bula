import api from "../api";

export const getRemedyLeaflet = (name) => api.get(`/pesquisar?nome=${name}`)



