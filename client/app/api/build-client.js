import axios from "axios";

const buildClient = (headersEntry = {}, credential = true, url = "") => {
  const baseUrl = typeof window === "undefined" ? url : "/";

  const client = axios.create({
    baseURL: baseUrl,
    headers: headersEntry,
    credentials: "include",
    withCredentials: credential,
  });

  client.interceptors.request.use((config) => {
    console.log(`Making request to ${config.baseURL}${config.url}`);
    return config;
  });

  client.interceptors.response.use(
    (response) => {
      console.log("Response received:", response.data);
      return response;
    },
    (error) => {
      console.log("Error in response:", {
        message: error.message,
        response: error.response ? error.response.data : null,
        config: error.config,
      });
      return Promise.reject(error);
    },
  );

  return client;
};

export default buildClient;
