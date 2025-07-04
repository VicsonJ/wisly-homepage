import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/"); // Redirect to home after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-4">Login</h1>
      <input
        className="w-full max-w-sm p-2 mb-2 rounded text-black"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full max-w-sm p-2 mb-4 rounded text-black"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 hover:bg-green-600 w-full max-w-sm py-2 rounded mb-2"
      >
        Log In
      </button>
      {error && <p className="text-red-400">{error}</p>}
      <p>
        Don't have an account?{" "}
        <Link className="text-blue-400 underline" to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}