"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EmployerLogin: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    console.log("Logging in with", { email, password });
    router.push("/dashboard"); // Example redirection after login
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-4xl font-display font-bold text-center mb-6">
         I'm lovin'  
          <span className="text-[#F9D00F]"> it</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-postadress
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F9D00F] focus:border-[#F9D00F] outline-none"
              placeholder="namn@exempel.se"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Lösenord
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F9D00F] focus:border-[#F9D00F] outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F9D00F] text-black font-bold py-2 rounded-lg hover:opacity-90 transition"
          >
            Logga in
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmployerLogin;
