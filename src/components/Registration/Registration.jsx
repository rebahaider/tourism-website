import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Registration = () => {

    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const user = { name, email, photo, password };
        console.log(user);

        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200" >
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already Registerd? Please <Link to={"/login"}>
                        <button className="btn btn-link">Login</button>
                    </Link></p>
                </div>
            </div>
        </div >
    );
};

export default Registration;