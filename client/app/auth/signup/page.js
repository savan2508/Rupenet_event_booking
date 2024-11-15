"use client";

import { useEffect, useState } from "react";
import { useRequest } from "@/app/_hooks/useRequest";
import { handleErrors } from "@/app/_hooks/handleErrors";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpErrors, setSignUpErrors] = useState(null);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);
  const router = useRouter();

  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: { email, password },
    onSuccess: () => {
      router.push("/");
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await doRequest();
    setSignUpErrors(errors);
  };

  useEffect(() => {
    setSignUpErrors(errors);
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
      setSignUpErrors(handleErrors(newErrors));
    } else {
      setSignUpErrors(null);
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
        <div className="mt-3 mb-3">{signUpErrors}</div>
        <button
          disabled={submitButtonDisable}
          className="btn btn-primary mt-1 mx-auto"
        >
          Signup
        </button>
      </form>
    </>
  );
}
