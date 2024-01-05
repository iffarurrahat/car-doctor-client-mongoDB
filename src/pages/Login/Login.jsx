import { Link } from "react-router-dom";
import Container from "../../ui/Container";

const Login = () => {

    const handleLogin = event => {
        event.preventdefault();
    }

    return (
        <div className="font-inter">
            {/*<-!------ login ----->*/}
            <Container>
                <div className="md:flex justify-between md:h-screen items-center">
                    {/* <-!------image -----> */}
                    <div className="md:flex-1">
                        <img src="https://i.ibb.co/0GWgxFp/Frame.png" className="hidden md:block" alt="" />
                    </div>
                    <div className="card-body flex-1 border mt-[40%] md:mt-0">
                        <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
                        {/* <-!------ from -----> */}
                        <form onSubmit={handleLogin} className="w-full md:w-4/5 mx-auto">
                            <div className="form-control mb-3">
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
                                <input className="btn bg-primary text-white hover:text-primary hover:font-semibold cursor-pointer rounded" type="submit" value="Submit" />
                            </div>
                            <p className="text-center my-6">Or Sign In with</p>
                            <div>

                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account ? <Link className='text-primary font-bold' to='/signup'>Sign Up</Link> </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;