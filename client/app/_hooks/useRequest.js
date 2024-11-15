import axios from "axios";
import { useState } from "react";
import { handleErrors } from "@/app/_hooks/handleErrors";

export function useRequest({ url, method, body }) {
  const [errors, setErrors] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  const doRequest = async () => {
    try {
      const response = await axios[method](`${apiUrl}${url}`, body);
      setErrors(null);
      console.log(response);
      return response;
    } catch (err) {
      const errorsJsx = handleErrors(err.response.data.errors);
      setErrors(errorsJsx);
    }
  };
  return { doRequest, errors };
}
