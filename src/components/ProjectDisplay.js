import React from "react";
import { Link } from "react-router-dom";

const ProjectDisplay = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">Project Display</h1>
        <div>
          <Link to="/Folders">
            <button className="rounded-xl text-white box-border p-2 h-32 w-32  border-2 m-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Foolder
            </button>
          </Link>
          <Link to="/Signup">
            <button className="rounded-xl text-white box-border p-2 h-32 w-32  border-2 m-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Signup
            </button>
          </Link>
          <Link to="/">
            <button className="rounded-xl text-white box-border p-2 h-32 w-32  border-2 m-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Otp Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
