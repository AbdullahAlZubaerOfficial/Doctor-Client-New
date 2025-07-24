import React, { useContext } from 'react' 
import { Link, useNavigate } from 'react-router-dom' 
import useAxiosPublic from '../../hooks/useAxiosPublic' 
import { useForm } from 'react-hook-form'; 
import { AuthContext } from '../../providers/AuthProviders'; 
import Swal from 'sweetalert2'; 
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
 
const Login = () => { 
 
  const axiosPublic = useAxiosPublic(); 
  const {register, formState: {errors}, handleSubmit, reset} = useForm(); 
  const {createUser, updateUserProfile} = useContext(AuthContext); 
  const navigate = useNavigate(); 
 
  const onSubmit = (data) => { 
    console.log(data); 
    createUser(data.email, data.password) 
    .then(result => { 
      const loggedUser = result.user; 
      console.log("User created:", loggedUser); 
 
      updateUserProfile(data.name, data.photoUrl) 
      .then(() => {   {/* <-- এখানে result থেকে কিছু নিতে হবে না */} 
        console.log('User profile info updated'); 
 
        // create user entry in the database 
        const userInfo = { 
          name: data.name, 
          userName: data.userName, 
          email: data.email, 
          password: data.password, 
        } 
        axiosPublic.post('/users',userInfo) 
        .then(res => { 
          if(res.data.insertedId){ 
            console.log("User added to the database"); 
 
            reset(); 
            Swal.fire({ 
                 position: "top-end", 
              icon: "success", 
              title: "Sign Up Successfully", 
              showConfirmButton: false, 
              timer: 1500 
            }); 
            navigate('/'); 
 
          } 
        }) 
      }) 
      .catch(error => { 
        console.error("Profile update failed: ",error); 
      }); 
 
    }) 
    .catch(error => { 
      console.error("Error creating user: ", error); 
    }) 
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
 
            <label htmlFor="" >Full Name: </label> 
            <input {...register("name", {required: true})} type="text" className='input' placeholder='Name' /> 
            
            <label htmlFor="" > Userame: </label> 
            <input {...register("userName",{required: true})} type="text" className='input' placeholder='Name' /> 
 
          <label className="label">Email</label> 
          <input {...register("email", {required: true})} type="email" className="input" placeholder="Email" /> 
 
          <label className="label">Password</label> 
          <input {...register("password", {required: true})} type="password" className="input" placeholder="Password" /> 
 
          <div><a className="link link-hover">Forgot password?</a></div> 
          <button className="btn btn-neutral mt-4">Login</button> 
        </fieldset> 
      </form> 
 
      <span className='text-center mb-6'> 
        New Here! <Link to= "/login"> <span className='underline text-blue-500'> Login</span> </Link> 
      </span> 

      <SocialLogin></SocialLogin>
    </div> 
 
     
  </div> 
</div> 
  ) 
} 
 
export default Login
