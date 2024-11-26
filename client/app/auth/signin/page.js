"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { handleErrors } from "@/hooks/handleErrors";
import { useRequest } from "@/hooks/useRequest";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInErrors, setSignInErrors] = useState(null);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);
  const router = useRouter();

  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: { email, password },
    onSuccess: () => {
      router.push("/");
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await doRequest();
    setSignInErrors(errors);
  };

  useEffect(() => {
    setSignInErrors(errors);
  }, [errors]);

  useEffect(() => {
    const newErrors = [];
    setSubmitButtonDisable(true);
    if (email.length === 0) {
      newErrors.push({ message: "Email is required" });
    }
    if (password.length === 0) {
      newErrors.push({ message: "Password is required" });
    }
    setSubmitButtonDisable(newErrors.length > 0);
    if (newErrors.length > 0) {
      setSignInErrors(handleErrors(newErrors));
    } else {
      setSignInErrors(null);
    }
  }, [email, password]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Signup</h1>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-3 mb-3">{signInErrors}</div>
        <button
          disabled={submitButtonDisable}
          className="btn btn-primary mt-1 mx-auto"
        >
          Signin
        </button>
      </form>
    </>
  );
}
