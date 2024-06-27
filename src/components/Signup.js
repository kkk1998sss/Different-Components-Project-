import { useState } from "react";
import React from "react";

export default function Signup() {
  const [error, setError] = useState();
  const [errorpassword, setErrorpassword] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/.test(formData.email)
    ) {
      setError("Please enter a valid email");
    }
    if (
      !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$/.test(
        formData.password
      )
    ) {
      setErrorpassword("Please enter a valid password");
    }
    console.log(formData);
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-1/2 m-auto gap-4 border border-gray-400 p-6 rounded"
        >
          <div style={{ textAlign: "center" }}>
            <h1 className="font-medium">Signup</h1>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            className="p-2 rounded border border-gray-400"
          />
          <span style={{ color: "red" }}>{error}</span>
          <input
            type="password"
            name="password"
            //   required
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="p-2 rounded border border-gray-400"
          />
          <span style={{ color: "red" }}>{errorpassword}</span>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
