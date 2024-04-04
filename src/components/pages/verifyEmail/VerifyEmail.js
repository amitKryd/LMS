import React, { useEffect, useRef, useState } from 'react'
import NewPassword from '../password/NewPassword';

const VerifyEmail = (props) => {
    const [showNewPasswordCard, setShowNewPasswordCard] = useState(false)
    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
    };

    const handleNewPasswordCard = () => {
        setShowNewPasswordCard((data) => !data)
    }
    return (
        <div>
            {showNewPasswordCard === false ?
                <div>
                    <div
                        className="flex justify-end cursor-pointer"
                       onClick={() =>  {props.setShowLoginModal(false);props.setVerifyEmail(false) }}
                    >
                        <img src={process.env.PUBLIC_URL + "/images/x.png"} alt="cross" />
                    </div>
                    <div className="flex justify-center mt-[-12px]  items-center">
                        <h2 className="font-semibold text-gray-900 text-2xl">Verify your Email</h2>
                    </div>
                    <div className="flex justify-center my-5  flex-col items-center">
                        <img src={process.env.PUBLIC_URL + "/images/verifyEmail.png"} alt="cross" />
                        <div className='w-72  mt-2 px-2'>
                            <p className='block text-sm text-gray-900 font-semibold mb-4 text-center'>Please Enter the 6 digit verification code sent to name@gmail.com </p>
                        </div>
                    </div>
                    <OtpInput className='w-full' length={6} onOtpSubmit={onOtpSubmit} />
                    <div className='flex justify-center items-center mt-5 mb-6  '>
                        <p className='text-blue-600 underline text-base  font-semibold cursor-pointer'>Resend Code</p>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <button className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-3 rounded" onClick={handleNewPasswordCard}>
                            Verify Code
                        </button>
                    </div>
                </div>
                : <NewPassword setShowLoginModal={props.setShowLoginModal} setShowNewPasswordCard={setShowNewPasswordCard} />}
        </div>
    )
}

export default VerifyEmail








const OtpInput = ({ length = 6, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="flex justify-center items-center">
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    ref={(input) => (inputRefs.current[index] = input)}
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-10 m-2 bg-[#EAF0FE] rounded  focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-center text-xl border"
                />
            ))}
        </div>
    );
};


