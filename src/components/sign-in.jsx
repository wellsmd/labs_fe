import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SigninForm() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleChangeUsername(e) {
    setUsername(e.target.value)
  }
  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSignin(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/api/auth/login", {username, password})
    .then(res => res.data)
    .then(data => {
      localStorage.setItem("token", data.accessToken);
      navigate("/dashboard");
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
      <form onSubmit={handleSignin} className="mr-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="username">Username</label>
          <input className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" type="text" id="username" name="username" value={username} onChange={handleChangeUsername} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">Password</label>
          <input className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" type="password" id="password" name="password" value={password} onChange={handleChangePassword} required />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" type="submit">Sign In</button>
      </form>
    </div>
    </>
  )
}

export default SigninForm
