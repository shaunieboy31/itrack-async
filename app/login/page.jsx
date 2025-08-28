// app/login/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  // Add a submit handler to prevent reload (optional)
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Add login logic here
    alert("Login submitted!");
  }

  return (
    <main className="min-h-dvh flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Left panel */}
        <section className="bg-gray-200 flex flex-col items-center justify-center p-10">
          <Image
            src="/logo.svg"
            alt="iTrack Async logo"
            width={120}
            height={120}
            className="mb-6"
            priority
          />
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 leading-tight">iTrack</p>
            <p className="text-2xl font-semibold text-gray-700 -mt-1">Async</p>
          </div>

          <p className="mt-10 text-gray-700">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </section>

        {/* Right panel */}
        <section className="bg-sky-400/95 flex items-center justify-center p-10">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold text-white text-center mb-8">Login</h1>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="studentNo" className="block text-white mb-2">
                  Student Number
                </label>
                <input
                  id="studentNo"
                  name="studentNo"
                  type="text"
                  placeholder="Enter Student Number"
                  className="w-full rounded-lg bg-white px-4 py-2 outline-none ring-0 focus:ring-2 focus:ring-white/70 text-black"
                  autoComplete="username"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-white mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  className="w-full rounded-lg bg-white px-4 py-2 outline-none ring-0 focus:ring-2 focus:ring-white/70 text-black"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 text-white font-bold py-2 shadow hover:bg-blue-700 active:scale-[0.99] transition"
              >
                LOGIN
              </button>
            </form>

            <p className="mt-4 text-center text-white">
              Forgot password?{" "}
              <Link href="/forgot-password" className="text-red-200 underline hover:text-red-100">
                Click here
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
