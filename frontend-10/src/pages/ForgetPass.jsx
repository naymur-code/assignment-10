import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router";

const ForgetPass = () => {
    const {email}=useParams()
  const handleForget = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email reset");
        window.open("https://mail.google.com/mail/u/0/");
        // ..
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };
  return (
    <div className="px-80 p-28">
      <form onSubmit={handleForget} className="fieldset">
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          defaultValue={email}
          className="input"
          placeholder="Email"
        />
        <div>
          <button className="btn btn-neutral mt-4">Update</button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPass;
