import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function HomePrivate({handleDashboard, handleSignout}) {

    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);

    function handleDashboard(e) {
        e.preventDefault();
        navigate("/dashboard");
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
  
        if (!token) {
          navigate("/");
        }
    
      }, [])

    return (
        <>
        <div class="relative">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">Welcome to the Bloom Coder Assignment App</h1>
            <div className="h-80 grid grid-cols-2 gap-4 content-around static bottom-0 left-0 justify-center">
                <button className="bg-blue-500 text-white p-4 py-2 rounded-md hover:bg-blue-600" onClick={handleDashboard}>Dashboard</button>
                <button className="bg-blue-500 text-white p-4 py-2 rounded-md hover:bg-blue-600" onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
        </>
    )
}