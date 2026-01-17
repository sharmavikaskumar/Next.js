"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("INVALID EMAIL OR PASSWORD");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4  text-black  text-center">LOGIN</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          className="border w-full   text-black    px-3 py-2 mb-3"
          placeholder="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border w-full  text-black  px-3 py-2 mb-4"
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full py-2"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
