import { useState } from "react";
import { useNavigate } from "react-router-dom";
import otpImg from "../../images/otp.png";

const Validation = () => {
  const OTPArray = new Array(5).fill("");
  const [otp, setOtp] = useState(OTPArray);
  const navigate = useNavigate();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className='my-12 text-gray-900 px-6'>
      <h1 className='text-3xl sm:text-5xl font-bold mt-24 text-center'>
        OTP Verification
      </h1>
      <div className='w-5/6 max-w-3xl sm:p-20 mx-auto'>
        <form
          className='flex flex-col items-center justify-center'
          onSubmit={(e) => e.preventDefault()}
        >
          <img src={otpImg} className='w-44' alt='otp' />
          <p className='text-sm my-4 text-center'>
            Please, enter the 5 digit code sent to your email for verification.
            Open Email App
          </p>
          <div className='grid grid-cols-5 gap-4'>
            {OTPArray.map((cont, i) => {
              return (
                <input
                  className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
                  type='number'
                  inputMode='numeric'
                  autoComplete='one-time-code'
                  name=''
                  id=''
                  key={i}
                  maxLength={1}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => handleChange(e.target, i)}
                />
              );
            })}

            {/* 
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
              maxLength={1}
            />
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
              maxLength={1}
            />
            <input
              className='bg-gray-200 w-10 h-10 rounded-md text-center font-bold text-xl'
              type='text'
              inputMode='numeric'
              autoComplete='one-time-code'
              name=''
              id=''
              maxLength={1}
            /> */}
          </div>
          <input
            className='block bg-[#7805A7] rounded-md text-purple-100  py-4 my-4 text-sm md:text-xl w-fit px-6 capitalize'
            type='submit'
            value='Proceed to Dashboard'
            onClick={() => navigate("/dashboard")}
          />
        </form>
      </div>
    </div>
  );
};

export default Validation;
