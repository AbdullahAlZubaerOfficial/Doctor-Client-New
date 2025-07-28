import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const AdminDefaultLogin = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.emailOrUsername.value;
    const password = form.password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailToLogin = "";

    if (emailRegex.test(inputValue)) {
      emailToLogin = inputValue;
    } else {
      try {
        const res = await fetch(
          `https://doctor-server-green.vercel.app/users/username/${inputValue}`
        );
        const data = await res.json();

        if (!data.email) {
          throw new Error("Invalid username");
        }
        emailToLogin = data.email;
      } catch (error) {
        return Swal.fire({
          icon: "error",
          title: "Login Failed 😢",
          text: "Invalid username or email",
        });
      }
    }

    signIn(emailToLogin, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully ✅",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/users");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed 😢",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            {" "}
            <span className="text-green-500"> Admin </span> Login{" "}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label name="email" className="label">
                Email or Username
              </label>
              <input
                name="emailOrUsername"
                className="input"
                placeholder="Email"
                defaultValue={"testing"}
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                defaultValue={87654321}
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          {/* <span className="text-center mb-6">
            New Here!{" "}
            <Link to="/signup">
              {" "}
              <span className="underline text-blue-500"> SignUp</span>{" "}
            </Link>

          </span> */}
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDefaultLogin;
