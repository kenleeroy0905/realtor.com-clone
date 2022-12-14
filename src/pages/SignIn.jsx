import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

const SignIn = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  };

  const toggle = () => {
      setShowPassword((prevState) => !prevState)
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);

      if(userCredentials.user){
        toast.success('Signed in successfully');
        navigate('/');
      }
    } catch (error) {
      toast.error('User does not exist!');
    }
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="home" 
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input type="email" 
                   className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
                   id='email' 
                   value={email} 
                   onChange={onChange} 
                   placeholder='Email Address' />
          <div className='relative mb-6'>
            <input type={showPassword ? 'text' : 'password'} 
                  className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
                  id='password' 
                  value={password} 
                  onChange={onChange} 
                  placeholder='Password' />
            {showPassword ? (<AiFillEyeInvisible onClick={toggle} className='absolute right-3 top-3 cursor-pointer text-xl'/>) : (<AiFillEye onClick={toggle} className='absolute right-3 top-3 cursor-pointer text-xl'/>)}
          </div>
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p className='mb-6'>Don't have an account? 
              <Link to='/sign-up' 
              className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'> 
              Register.</Link>
            </p>
            <p>
              <Link to='/forgot-password' 
              className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Forgot Password?</Link>
            </p>
          </div>
          <button type='submit'
                  className='w-full bg-blue-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>
                   Sign In
          </button>
          <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn