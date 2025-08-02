import { useState } from "react";
import image1 from "../assets/10178378.jpg";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans bg-gradient-to-br from-gray-100 via-white to-gray-50 overflow-x-hidden">
      {/* Left Illustration */}
      <div className="md:w-1/2 relative hidden md:flex">
        <img
          src={image1}
          alt="Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-10">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
              QuickDesk
            </h1>
            <p className="text-gray-200 text-lg max-w-md">
              Streamline your support workflow with our modern helpdesk solution.
            </p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl px-6 sm:px-8 py-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {isLogin ? "Welcome Back 👋" : "Create an Account"}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {isLogin
                ? "Login to manage your support tickets"
                : "Start solving with QuickDesk"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="text-sm text-gray-700">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-cyan-700 hover:bg-cyan-800 text-white py-3 rounded-xl font-semibold tracking-wide transition"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-cyan-600 font-medium hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
