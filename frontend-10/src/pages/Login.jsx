import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router";
import auth from "../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, googleLogin,user} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;


     
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location.state);
      })
      .catch((error) => console.log(error));
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        navigate(location.state);
      })
      .catch((error) => console.log(error));
  };

  const handleForget=()=>[
    navigate(`/forget/${user?.email}`)
  ]

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} action="">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="pass"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a onClick={handleForget} className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <button
                  onClick={handleLoginWithGoogle}
                  className="btn btn-neutral mt-4"
                >
                  <FaGoogle />
                </button>
                <p className="my-3">
                  don't have a account?{" "}
                  <Link className="text-blue-500 font-bold" to={"/signup"}>
                    Register
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

export default Login;
