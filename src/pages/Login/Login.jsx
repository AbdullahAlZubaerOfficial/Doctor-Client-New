import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.emailOrUsername.value.trim();
    const password = form.password.value.trim();

    if (!inputValue || !password) {
      return Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill in all fields",
      });
    }

    setLoading(true);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let emailToLogin = "";

      if (emailRegex.test(inputValue)) {
        emailToLogin = inputValue;
      } else {
        // Username case
        const res = await fetch(
          `http://localhost:5100/users/username/${inputValue}`
        );

        if (!res.ok) {
          throw new Error("Username not found");
        }

        const data = await res.json();
        if (!data.email) {
          throw new Error("Invalid username");
        }
        emailToLogin = data.email;
      }

      await signIn(emailToLogin, password);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful ✅",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "Invalid credentials. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email or Username</span>
                </label>
                <input
                  name="emailOrUsername"
                  type="text"
                  className="input input-bordered"
                  placeholder="Email or username"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={loading}>
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </fieldset>
          </form>

          <div className="text-center mb-6">
            <p>
              New Here?{" "}
              <Link to="/signup" className="link link-primary">
                SignUp
              </Link>
            </p>
          </div>

          <div className="px-6 pb-6">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
