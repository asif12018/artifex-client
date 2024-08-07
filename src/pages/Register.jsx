/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../components/firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Register = () => {
    const navigate = useNavigate()
    //password show state
    const [show, setShow] = useState(false);
    //wrong password state
    const [isRight, setIsRight] = useState(null);
    //toaster alert
    const signUpSuccess = () => toast("register successfull");
    //data from context api
    const { createUser, setUser, user, userLogin, googleLogin, githubLogin } = useContext(AuthContext)
    // console.log(user.displayName)
    // console.log(user.photoURL)
    //registration function
    const handleRegister = e => {
        e.preventDefault();
        setIsRight(null)
        const form = e.target;
        const name = form.fullname.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        form.reset();
        //checking password validation
        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password)) {
            setIsRight(1);
            setTimeout(() => {
                setIsRight(null)
            }, 4000)
        }

        if (password !== confirm_password) {
            setIsRight(2);
            setTimeout(() => {
                setIsRight(null)
            }, 4000)
        }

        //create new user function start here
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);

                // ...
                //add user name and photo
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    console.log('profile and name set')
                    setUser(auth.currentUser)
                    signUpSuccess();
                    // setTimeout(() => {
                    //     window.location.reload();
                    // }, 2000)
                    //login user after successful registration
                    userLogin(email, password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user);
                            setUser(user);
                            form.reset();
                            //auto navigate
                            setTimeout(() => {

                               navigate('/')

                            }, 3000)

                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorMessage)


                        });
                    // ...
                }).catch((error) => {
                    // An error occurred
                    console.log(error);

                    // ...
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setIsRight(3)
                setTimeout(() => {
                    setIsRight(null)
                }, 4000)
                // ..
            });



    }

    //google login function
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                setUser(user);
                console.log(user)
                signUpSuccess();
                //auto navigate
                setTimeout(()=>{
                   
                    navigate('/')
                    
                 },3000)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ...
            });
    }

    //github login
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {



                const user = result.user;
                setUser(user);
                console.log(user)
                signUpSuccess();
                //auto navigate
                setTimeout(()=>{
                   
                    navigate('/')
                    
                 },3000)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(error)
                // ...
            });
    }
    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleRegister} className="bg-white px-6 py-8 rounded shadow-md text-black w-full flex flex-col">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" required />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="photo"
                            placeholder="photo url" required />

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
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" required />

                        <div>
                            {
                                isRight == 1 ? <p className="text-red-500 font-bold text-center my-3">Invalid password! password must contain 6 character and one capital letter and small letter and a special sign</p> : isRight == 2 ? <p className="text-red-500 font-bold text-center my-3">password and confirm password don't match</p> : isRight == 3 && <p className="text-red-500 font-bold text-center my-3">this account is already registered</p>
                            }

                        </div>



                        <input type="submit" className="btn bg-[#2d8e82] text-white" value="create account" />

                        <button onClick={handleGoogleLogin} className="btn bg-[#d35811] text-white"> signup using google  <FaGoogle /></button>

                        <button onClick={handleGithubLogin} className="btn bg-[#0f1a4b] text-white"> signup using github  <IoLogoGithub /></button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>

                    </form>



                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link to={'/login'} className="btn bg-[#2d8e82] text-white mx-2">log in</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;