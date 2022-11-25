import axios from "axios";
import { settings } from "../../helpers/settings";

const api = axios.create({
  baseURL: settings.API_URL
});

api.interceptors.request.use(async (config) => {
  try {
    
      Object.assign(config, {
        ...config,

      })
    
    return Promise.resolve(config)
  } catch (e) {
    return Promise.resolve(config)
  }
})

export default api;