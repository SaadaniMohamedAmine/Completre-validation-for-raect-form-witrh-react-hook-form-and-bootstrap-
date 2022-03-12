import React, { useContext } from "react";
import AuthContext from "../hooks/authContext";
import HomeReturn from "./HomeReturn";

const Profile = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className="container py-5 my-5">
      <h1 className="text-center pb-0 pt-3 ">
        I am the personal profile Mr {localStorage.getItem("email")}
      </h1>
      <p className="text-center">
        Here you will find your personal information
      </p>
      <div className=" text-center py-3">
        <button className="btn btn-danger" onClick={authContext.loggedOut}>
          Log Out
        </button>
      </div>
      <HomeReturn />
    </div>
  );
};

export default Profile;
