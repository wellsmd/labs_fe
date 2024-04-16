import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Home({handleSignin}) {

    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);

    function handleSignin(e) {
        e.preventDefault();
        navigate("/sign-in");
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
  
        if (token) {
          navigate("/home-private");
        }
    
      }, [])

    return (
        <>
            <div className="relative">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">Welcome to the Bloom Coder Assignment App</h1>
                <div className="h-80 grid grid-cols-1 gap-4 content-around static bottom-0 left-0 justify-center">
                    <button className="bg-blue-500 text-white p-4 py-2 rounded-md hover:bg-blue-600" onClick={handleSignin}>Sign In</button>
                </div>
            </div>
        </>
    )
}