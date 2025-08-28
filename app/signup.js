import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Add your sign-up logic here (API call, validation, etc.)
    alert("Sign up submitted!");
  }

  return (
    <main className="min-h-dvh flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Left panel: Sign Up Form */}
        <section className="bg-sky-400/80 flex flex-col justify-center p-10">
          <h1 className="text-4xl font-bold text-white text-center mb-8 drop-shadow">Sign Up</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter Full Name"
                className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">CvSU Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter CvSU Email"
                className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-2">Phone Number (Optional)</label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter Phone Number"
                className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-white mb-2">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                required
              />
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="studentNo"
                name="studentNo"
                type="text"
                placeholder="Student Number"
                className="flex-1 rounded-lg bg-white px-4 py-2 text-black outline-none ring-0 focus:ring-2 focus:ring-white/70"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-lime-500 text-white font-bold px-6 py-2 shadow hover:bg-lime-600 active:scale-[0.99] transition"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <span className="text-white">
              Forgot password?{" "}
              <Link href="/forgot-password" className="text-red-700 underline hover:text-red-500">
                Click here
              </Link>
            </span>
          </div>
        </section>

        {/* Right panel: Logo and Info */}
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
            <p className="text-4xl font-bold text-gray-800 leading-tight drop-shadow">iTrack</p>
            <p className="text-2xl font-semibold text-gray-700 -mt-1 drop-shadow">Async</p>
          </div>
          <p className="mt-10 text-gray-700 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}