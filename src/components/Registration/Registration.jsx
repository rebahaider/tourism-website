import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";




const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');

    const navigate = useNavigate();




    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const user = { name, email, photo, password };
        console.log(user);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or more');
            return;
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(password)) {
            setRegisterError('Your password should be have at least one lower case & one upper case');
            return;
        }
        // else if (!/A-Z/.test(password)) {
        //     setRegisterError('Your password should be have at least one upper case');
        //     return;
        // }


        setRegisterError("");
        setRegisterSuccess("");

        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                form.reset();
                navigate("/");
                setRegisterSuccess("User Created Successfully");
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200" >
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center font-bold">Already Have An Account? Please<Link to={"/login"}>
                        <button className="btn btn-link font-bold">Login</button>
                    </Link></p>
                    {
                        registerError && <p className="text-red-600 font-bold">{registerError}</p>

                    }
                    {
                        registerSuccess && <p>alert({registerSuccess})</p>
                    }
                </div>
            </div>
        </div >
    );
};

export default Registration;