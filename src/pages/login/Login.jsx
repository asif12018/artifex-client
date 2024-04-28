import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from "../../components/provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    //password show state
    const [show, setShow] = useState(false);
    //react toaster alert
    const signInSuccess = () => toast("login successful!");
    //invalid password state
    const [wrong, setWrong] = useState(false);
    //context api data
    const { userLogin, setUser } = useContext(AuthContext);
    //login function
    const handleLogin = e => {
        setWrong(false);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //login function
        userLogin(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setUser(user);
                form.reset();
                signInSuccess()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setWrong(true);
                setTimeout(() => {
                    setWrong(false)
                }, 4000)
                form.reset();
            });
    }
    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleLogin} className="bg-white px-6 py-8 rounded shadow-md text-black w-full flex flex-col">
                        <h1 className="mb-8 text-3xl text-center">Sign In</h1>




                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" required />

                        <div className="relative">
                            <input
                                type={show ? 'text' : 'password'}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" required />
                            <div onClick={() => setShow(!show)} className="absolute top-4 right-4">
                                {
                                    show ? <FaEyeSlash /> : <FaEye />
                                }
                            </div>
                        </div>


                        <div>
                            {
                                wrong && <p className="text-red-500 font-bold text-center my-3">account not exist or invalid password or email</p>
                            }

                        </div>



                        <input type="submit" className="btn bg-[#2d8e82] text-white" value="sign in" />

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing , you agree to the 
                            <a className="no-underline border-b border-grey-dark text-grey-dark mx-1" href="#">
                                 Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark mx-1" href="#">
                                Privacy Policy
                            </a>
                        </div>

                    </form>



                    <div className="text-grey-dark mt-6">
                        Dont have an account?
                        <Link to={'/register'} className="btn bg-[#2d8e82] text-white mx-2">Sign Up</Link>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;