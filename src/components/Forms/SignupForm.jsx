
import React from 'react'
import { useForm } from 'react-hook-form';
import authService from '../../appwrite/authConfig';
import dbConfig from '../../appwrite/dbConfig'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { login as authServiceLogin } from '../../features/authSlice'

function SignupForm() {

    const { register,handleSubmit, formState:{errors, isSubmitting}, setError } = useForm();
    const dispatch = useDispatch();

    async function createAccount(data){
        console.log(data);
        try {
            const res = await authService.createAccount(data);
            if (res.code === 409) {
                throw { code: 409, message: 'Email already exists!'};
            }
            console.log('account created')
            
            const loginRes = await authService.login({Email:data.email,Password:data.password});
            if(loginRes) {
                console.log(loginRes);
                const userData = await authService.getCurrentUser();
                if(userData) {
                    console.log(userData);
                    dispatch(authServiceLogin(userData));
                }
                else {
                    console.error('Unable to get userData')//if unable to get userData then navigate to /login
                }
            }
            else {
                console.error('Failed to auto login. Try manually');
            }
        }
        catch (error) {
            if(error.code == 409) {
                console.error('409 error, email exists!');
                setError('email',{
                    type: 'manual',
                    message: 'Email already exists!'
                });
            }
            else {
                console.error('Unexpected error occured')
                setError('root',{
                    type: 'manual',
                    message: 'An unexpected error occured'
                })
            }
        }
    }

  return (
    <div className='mt-40 mb-40'>
            <div>
                <form onSubmit={handleSubmit(createAccount)} className=' bg-gray-300 flex flex-col gap-5 px-8 py-10'>
                {/* {error ? <p className='text-red-500'>{error}</p> : ''} */}
                    <div className='flex flex-col gap-10 '>
                        <div className='flex flex-col gap-7'>
                            <div>
                                <Input
                                label="Name"
                                type="text"
                                placeholder='Full name'
                                {...register("name", { required: "Username cannot be empty" })}
                            />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div>
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                <Input
                                label="Email"
                                    type="text"
                                    placeholder='E-mail'
                                    {...register("email", {
                                        required: "Email cannot be empty",
                                        validate: {
                                            matchPattern: (value) => /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value) || "Email not valid"
                                        }
                                    })}
                                />  
                            </div>
                                    
                            <div>
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                <Input
                                label="Password"
                                    type="password"
                                    placeholder='Password'
                                    {...register("password", {
                                        required: "Password cannot be empty",
                                        minLength: { value: 8, message: "Password must be at least 8 characters" }
                                    })}
                                />
                            </div> 
                        </div>
                        
                        <Button type='submit' disabled={isSubmitting}>Sign Up & LogIn</Button>
                        <p>Have an account? <Link to='/' className='text-blue-400 hover:underline'>Login here!</Link></p>
                    </div>
                </form>
            </div>

            {/* {loggingIn && (
                <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center z-50">
                    <div className="loader-container">
                        <ClipLoader color="#FF5959" loading={loggingIn} size={50} />
                    </div>
                </div>
            )} */}
        </div>
  )
}

export default SignupForm