import React, { useState } from 'react';
import techarion from '../../assets/techarion.png'
import fb from '../../assets/fb.png'

function Login({ setLogin }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState(null);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, otp }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (data.success) {
        setToken(data.access);
        setLogin(true) // store the access token in state
        console.log("User logged in  successfully");
        console.log("Token: ", data.access);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const fetchProductsList = async () => {
    try {
      const response = await fetch(
        "https://admin.gifinfinity.com/products/api/client/v1/products-list/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // pass the access token in the headers
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };


  return (
    <div className='flex justify-center items-center mt-28'>
    <div className='bg-white w-4/12 h-50 flex justify-center items-center rounded-xl'>
      <form className='py-10' onSubmit={handleLoginSubmit}>
      <img className='ml-36' src={techarion} />
        <div className='text-2xl font-montserrat my-2'>Welcome to Techarion</div>
        <div className='w-96'>Please sign-in to your account and start the adventure</div>
        <label className='flex flex-col w-80 my-4 text-gray-400'>
          Phone number
          <input className='border-2 p-2 rounded-md' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label className='flex flex-col w-80 text-gray-400'>
          OTP
          <input className='border-2 p-2 rounded-md' type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </label>
        <br />
        <button className='bg-green-900 py-2 w-80 rounded-md' type="submit">Login</button>
      <div>
      </div>
      </form>
      {/* <button onClick={fetchProductsList}>Fetch Products List</button> */}
    </div>
    </div>
  );
}

export default Login;
