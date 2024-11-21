import axios from "axios";

const buildClient = ({ headers = {} }) => {
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_API_BASE_URL ||
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local"
      : "/";

  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};

export default buildClient;
