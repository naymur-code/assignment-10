import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { registerWithEmailAndPass, setUser, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    const name = e.target.name.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (pass.length < 6) {
      return alert("6+ password");
    }
    if (!uppercase.test(pass)) {
      return alert("need uppercse");
    }
    if (!lowercase.test(pass)) {
      return alert("need lowercase");
    }

    registerWithEmailAndPass(email, pass)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser(result.user);
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
    console.log("ff");
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Full Name"
                />
                <label className="label">PhotoURL</label>
                <input
                  name="photoURL"
                  type="text"
                  className="input"
                  placeholder="Enter Your Photo URL"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  onClick={handleLoginWithGoogle}
                  className="btn btn-neutral mt-4"
                >
                  <FaGoogle />
                </button>

                <button className="btn btn-neutral mt-4">Login</button>
                <p className="my-3">
                  Already have a account?{" "}
                  <Link className="text-blue-600 font-bold" to={"/login"}>
                    Login
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
