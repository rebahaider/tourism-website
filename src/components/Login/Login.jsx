import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate("/");
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (


        <div className="hero min-h-screen bg-base-200" >
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>

                        </div>
                    </form>
                    <p className="text-center font-bold">New To This Site? Please <Link to={"/register"}>
                        <button className="btn btn-link text-red-600 font-bold">Register</button>
                    </Link></p>


                    {/* Log in with Google */}
                    <p className="text-center mb-4">
                        <button onClick={handleSignInWithGoogle} className="btn btn-ghost btn-outline font-extrabold"><FaGoogle></FaGoogle> Log In Using Google Account</button>
                    </p>


                    {/* Login with Github */}
                    <p className="text-center">
                        <button onClick={handleSignInWithGithub} className="btn btn-ghost btn-outline font-extrabold"><FaGithub></FaGithub> Log In Using Github Account</button>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Login;