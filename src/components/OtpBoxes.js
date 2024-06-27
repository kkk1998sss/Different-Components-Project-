import React, { useState, useRef } from "react";

const OtpBoxes = ({ onOtpChange }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    setOtp(newOtp);
    onOtpChange(newOtp.join(""));
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      inputRefs.current[index - 1].focus();
      setOtp(newOtp);
      onOtpChange(newOtp.join(""));
    }
  };

  return (
    <div className="items-center justify-center text-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          className="text-center m-2 w-6 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
          type="text"
          maxLength={1}
          value={digit}
          autoFocus={index === 0}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default OtpBoxes;
