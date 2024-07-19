import React from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import GoogleSvg from '../../assets/GoogleSvg'
import authService from '../../appwrite/authConfig'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login as authServiceLogin } from '../../features/authSlice'

function LoginForm() {

    const {register, setError, formState:{errors}, handleSubmit} = useForm();
    const dispatch = useDispatch();

    async function login(data) {
        try {
            const res = await authService.login(data);
            if(res.code == 401) {
                throw{code:401, message:"Invalid credentials!"}
            }
            console.log('session has been created',res);//as session is created so now get the userData
            const user = await authService.getCurrentUser();
            console.log(user);
            dispatch(authServiceLogin(user))
        } catch (error) {
            if(error.code == 401) {
                setError('root',{
                    type:'manual',
                    message:"Invalid credentials!"
                })
            }
            else{
                setError('root',{
                    type:'manual',
                    message:'An unexpected error occured,Please try again'
                })
            }
        }
    }
function handleGoogleLogin(){
    //
}
  return (
    <div className='mt-40 mb-40'>
            <div>
                <form onSubmit={handleSubmit(login)}>
                    <div className='flex flex-col gap-10 px-8 py-10 bg-gray-300'>
                        {errors.root && <p className=' text-red-500'>{errors.root.message}</p>}
                        <div className='flex flex-col gap-7'>
                            <Input 
                            label="Email"
                                type="email"
                                placeholder="E-mail"
                                {...register("email", {
                                    required: 'Please Enter Emial',
                                    validate: {
                                        matchPattern: (value)=> /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
                                        .test(value) || "Email not valid"
                                    }
                                })}
                            /> 
                            {errors.email && <p className=' text-red-500'>{errors.email.message}</p>}
                            <Input  
                            label="Password"
                                type="password"
                                placeholder='Password'
                                {...register("password", {
                                    required: 'Please enter Password',
                                    minLength: { value: 8, message: "Password must be at least 8 characters" }
                                })}
                            />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className='flex flex-col'>
                            <Button type='submit' className='w-[100%]'>Log In</Button>
                            <div className="flex items-center">
                            <button onClick={(e)=>handleGoogleLogin(e)} className="w-[100%] flex items-center bg-white dark:bg-gray-100 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-lg font-medium text-grey-900 hover:bg-gray-200 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <GoogleSvg/>
                            <span>Continue with Google</span>
                            </button>
                            </div>
                        </div>
                        <p>Don't have an account? <a to='/signup' className=' text-blue-400 hover:underline'>SignUp Here!</a></p>
                    </div>
                </form>
                {/* <button onClick={(e)=>handleGoogleLogin(e)}>LogIn with Google</button> */}
                
            </div>
            {/* {loggingIn && ( // Conditionally render overlay and loading indicator
                <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center z-50">
                    <div className="loader-container">
                        <ClipLoader color="#FF5959" loading={loggingIn} size={50} />
                    </div>
                </div>
            )} */}
        </div>
  )
}

export default LoginForm