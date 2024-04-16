import { useEffect, useState } from 'react'
import axios from 'axios';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css'
import SignupForm from './components/sign-up';
import SigninForm from './components/sign-in';
import Dashboard from './components/dashboard';
import Home from "./components/home";
import HomePrivate from './components/home-private';
import Submit from './components/submit';

function App() {
  const navigate = useNavigate();

  function createAssignment() {
    const newAssignment = {
    status: "Pending Submission", 
    number: 1, 
    githubUrl: "", 
    branch: "", 
    reviewVideoUrl: "", 
    userId: 1, 
    codeReviewerId: 1
    }

    const token = localStorage.getItem("token");

    const headers = {
      "Authorization": `Bearer ${token}`, 
      "Content-Type": "application/json"
    }

    axios.post("/api/api/assignments", newAssignment, {headers: headers})
    .then(res => res.data)
    .then(data => console.log(data))
    .catch(err => console.log(err))

  }

  function handleSignout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/sign-in");
  }

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
      <nav className="sticky-nav flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
        <ul className="flex">
          <li>
            <Link className="mx-2" to="/">Home</Link>
          </li>
          <li>
            <Link className="mx-2" to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link className="mx-2" to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div className="flex mx-auto py-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-private" element={<HomePrivate handleSignout={handleSignout} />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/dashboard" element={<Dashboard handleSignout={handleSignout} />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
