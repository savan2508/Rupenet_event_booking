import axios from "axios";
import { useState } from "react";
import { handleErrors } from "@/app/_hooks/handleErrors";

export function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](`${apiUrl}${url}`, body);

      if (onSuccess) {
        onSuccess(response);
      }
      return response;
    } catch (err) {
      const errorsJsx = handleErrors(err.response.data.errors);
      setErrors(errorsJsx);
      return null;
    }
  };
  return { doRequest, errors };
}
