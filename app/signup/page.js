"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const studentNo = form.studentNo.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validation
    if (!fullName || !email || !studentNo || !password || !confirmPassword) {
      setAlertMsg("Please input required information on all of the fields.");
      setShowAlert(true);
      return;
    }
    if (!email.endsWith("@cvsu.edu.ph")) {
      setAlertMsg("Please use your Cavite State University - Student Email (@cvsu.edu.ph).");
      setShowAlert(true);
      return;
    }
    if (password !== confirmPassword) {
      setAlertMsg("Password and Confirm Password do not match.");
      setShowAlert(true);
      return;
    }

    // Simulate account exists (replace with your actual API logic)
    // if (accountExists) {
    //   setAlertMsg("account-exists");
    //   setShowAlert(true);
    //   return;
    // }

    // Simulate success
    setSuccess(true);
  }

  return (
    <main className="min-h-dvh flex items-center justify-center bg-gray-100 p-4">
      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center">
            <Image src="/logo.svg" alt="iTrack Async logo" width={120} height={120} className="mb-6" priority />
            <div className="bg-sky-400 rounded-lg p-8 w-[400px] text-center shadow">
              <p className="text-2xl font-bold text-white mb-2 drop-shadow">
                Account created successfully!
              </p>
              <p className="text-white mb-6">
                Please wait for further instruction through email
              </p>
              <button
                className="bg-gray-400 text-white font-bold px-8 py-2 rounded-lg shadow"
                onClick={() => router.push("/login")}
              >
                Proceed to Login
              </button>
            </div>
          </div>
        </div>
      )}

      {showAlert && alertMsg === "account-exists" ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-rose-400 rounded-xl p-8 shadow-lg w-[400px] flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4">Alert Message</h2>
            <Image src="/alert.svg" alt="Alert" width={80} height={80} className="mb-4" />
            <div className="bg-white rounded-lg p-6 w-full text-center mb-4">
              <p className="font-bold text-xl mb-4 text-black drop-shadow">
                Account already existed.
              </p>
              <p className="font-semibold text-black mb-2 drop-shadow">
                If your account is lost, you can recover it by clicking the recover button below.
              </p>
              <p className="font-semibold text-black mb-4 drop-shadow">
                If you think there's something wrong, contact the administrator.
              </p>
              <div className="flex gap-4 justify-center mt-4">
                <button
                  className="bg-lime-500 text-white font-bold px-8 py-2 rounded-lg shadow hover:bg-lime-600 active:scale-[0.99] transition"
                  onClick={() => {
                    setShowAlert(false);
                    // TODO: Add navigation to recover page
                  }}
                >
                  Recover
                </button>
                <button
                  className="bg-sky-400 text-white font-bold px-8 py-2 rounded-lg shadow hover:bg-sky-500 active:scale-[0.99] transition"
                  onClick={() => {
                    setShowAlert(false);
                    router.push("/login");
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-rose-400 rounded-xl p-8 shadow-lg w-[400px] flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4">Alert Message</h2>
            <Image src="/alert.svg" alt="Alert" width={80} height={80} className="mb-4" />
            <div className="bg-white rounded-lg p-6 w-full text-center mb-4">
              <p className="font-bold text-xl mb-4 text-gray-800 drop-shadow">
                {alertMsg === "Please input required information on all of the fields." ? (
                  <>
                    Please input required information on all of the fields.
                    <ul className="text-left font-semibold text-black drop-shadow mt-4">
                      <li>• Full Name</li>
                      <li>• Cavite State University - Student Email</li>
                      <li>• Student Number</li>
                      <li>• Password</li>
                      <li>• Confirm Password</li>
                    </ul>
                  </>
                ) : (
                  alertMsg
                )}
              </p>
            </div>
            <button
              className="bg-gray-400 text-white font-bold px-8 py-2 rounded-lg shadow"
              onClick={() => setShowAlert(false)}
            >
              Understood
            </button>
          </div>
        </div>
      )}
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
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </section>

        {/* Right panel */}
        <section className="bg-sky-400/95 flex items-center justify-center p-10">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold text-white text-center mb-8">Sign Up</h1>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-white mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Cavite State University - Student Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your CvSU email"
                  className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="studentNo" className="block text-white mb-2">
                  Student Number
                </label>
                <input
                  id="studentNo"
                  name="studentNo"
                  type="text"
                  placeholder="Enter Student Number"
                  className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
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
                  className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                  autoComplete="new-password"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-white mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                  autoComplete="new-password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 text-white font-bold py-2 shadow hover:bg-blue-700 active:scale-[0.99] transition"
              >
                SIGN UP
              </button>
            </form>
            <p className="mt-4 text-center text-white">
              Already have an account?{" "}
              <Link href="/login" className="text-red-200 underline hover:text-red-100">
                Login here
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
