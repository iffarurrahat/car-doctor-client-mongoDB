import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../ui/Container";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;

                if (user) {
                    Swal.fire({
                        title: "Successful!",
                        text: "You are Successfully Create Account!",
                        icon: "success"
                    });
                }

                // update profile
                updateProfile(result.user, {
                    displayName: name,
                })
                    .then(() => {
                        console.log('Updated profile');
                    })
                    .catch()

                // reset from
                form.reset();

                // navigation after signup
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="font-inter">
            {/*<-!------signUp or register----->*/}
            <Container>
                <div className="md:flex justify-between md:h-screen items-center">
                    {/* <-!------image -----> */}
                    <div className="md:flex-1">
                        <img src="https://i.ibb.co/0GWgxFp/Frame.png" className="hidden md:block" alt="" />
                    </div>
                    <div className="card-body flex-1 border mt-[35%] md:mt-0">
                        <h1 className="text-3xl font-bold text-center mb-10">Sign Up</h1>
                        {/* <-!------ from -----> */}
                        <form onSubmit={handleSignUp} className="w-full md:w-4/5 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-primary text-white hover:text-primary hover:font-semibold cursor-pointer rounded" type="submit" value="Signup" />
                            </div>
                            {/* <p className="text-center my-6">Or Sign In with</p> */}
                        </form>
                        <p className='my-4 text-center'>Have an account ? <Link className='text-primary font-bold' to='/login'>Login</Link> </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;



