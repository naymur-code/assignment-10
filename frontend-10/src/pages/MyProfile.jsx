import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user,setUser } = useContext(AuthContext);
  const { photoURL, displayName } = user;

  const handleOpenFrom = () => {
    setIsOpen(!isOpen);
  };

  console.log({...user,photoURL:'d'});
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const Photo = e.target.photoUrl.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: Photo,
    })
      .then(() => {
        setUser({...user,photoURl:photoURL,displayName:name})
        console.log('update..');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center flex-col items-center my-5">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={photoURL} />
        </div>
        <p>{displayName}</p>
      </div>
      <div className="flex flex-col w-76 my-4">
        <button className="btn btn-neutral mt-4" onClick={handleOpenFrom}>
          Update Profile
        </button>
        {isOpen && (
          <form onSubmit={handleUpdate} className="my-4" action="">
            <label className="label">display name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Email"
              defaultValue={displayName}
            />
            <label className="label">photoURL</label>
            <input
              name="photoUrl"
              type="photoUrl"
              className="input"
              placeholder="Password"
              defaultValue={photoURL}
            />
            <button className="btn btn-neutral mt-4">Update</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
