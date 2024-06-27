import React, { useState } from "react";
import OtpBoxes from "./../components/OtpBoxes";
import { useNavigate } from "react-router-dom";

const OtpLogin = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("request-otp");
  const navigate = useNavigate();
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const requestOtp = () => {
    console.log("Number: ", number);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number }),
    };

    fetch("http://localhost:8000/request-otp", requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        alert(`OTP sent successfully ${data.message}`);
        setStep("verify-otp");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Something went wrong");
      });
  };

  const verifyOtp = () => {
    console.log(number, otp);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number, otp }),
    };

    fetch("http://localhost:8000/verify-otp", requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Otp verified successfully") {
          alert("Login successful");
          navigate("/ProjectDisplay");
        } else {
          alert("Invalid OTP");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Something went wrong", error.message);
      });
  };

  return (
    <div className="p-4 w-1/2 flex flex-col m-auto border border-gray-400 gap-4 rounded-lg">
      <h1 className="text-center font-medium">Otp Login</h1>
      {step === "request-otp" ? (
        <>
          <input
            type="number"
            name="number"
            onChange={handleNumberChange}
            value={number}
            className="border border-green-400 p-2 rounded-lg"
            placeholder="Enter Your Phone No"
          />
          <button
            onClick={requestOtp}
            className="text-white border border-green-500 bg-green-600 rounded-lg p-2"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <OtpBoxes onOtpChange={handleOtpChange} />
          {/* <input
            type="number"
            name="otp"
            onChange={handleOtpChange}
            value={otp}
            className="border border-green-400 p-2 rounded-lg"
            placeholder="Enter OTP"
          /> */}
          <button
            onClick={verifyOtp}
            className="text-white border border-green-500 bg-green-600 rounded-lg p-2"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default OtpLogin;
