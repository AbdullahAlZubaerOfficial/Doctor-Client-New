import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { register, formState: { errors }, handleSubmit, reset, watch } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);

  const checkUsernameAvailability = async () => {
    const username = watch('userName');
    if (!username) return;

    setIsCheckingUsername(true);
    try {
      const res = await axiosPublic.get(`/users/username/${username}`);
      if (res.data) {
        setUsernameError("Username already exists");
      } else {
        setUsernameError("");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Username not found (available)
        setUsernameError("");
      } else {
        setUsernameError("Error checking username availability");
      }
    } finally {
      setIsCheckingUsername(false);
    }
  };

  const onSubmit = (data) => {
    if (usernameError) {
      return Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: "Please choose a different username",
      });
    }

    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log("User created:", loggedUser);

        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            console.log('User profile info updated');

            // create user entry in the database
            const userInfo = {
              name: data.name,
              userName: data.userName,
              email: data.email,
            }
            
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log("User added to the database");
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Up Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })
          })
          .catch(error => {
            console.error("Profile update failed: ", error);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: error.message,
            });
          });
      })
      .catch(error => {
        console.error("Error creating user: ", error);
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message,
        });
      });
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label htmlFor="">Full Name: </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className='input'
                placeholder='Name'
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <label htmlFor="">Username: </label>
              <input
                {...register("userName", {
                  required: "Username is required",
                  onBlur: checkUsernameAvailability
                })}
                type="text"
                className='input'
                placeholder='Username'
              />
              {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
              {isCheckingUsername && <p className="text-gray-500 text-sm">Checking username...</p>}
              {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}

              <label className="label">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

              <button
                className="btn btn-neutral mt-4"
                disabled={!!usernameError || isCheckingUsername}
              >
                Sign Up
              </button>
            </fieldset>
          </form>

          <span className='text-center mb-6'>
            Already have an account? <Link to="/login"> <span className='underline text-blue-500'> Login</span> </Link>
          </span>

          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  )
}

export default SignUp;