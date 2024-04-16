import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Dashboard({handleSignout}) {

    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/sign-in");
      }
  
      const headers = {
        "Authorization": `Bearer ${token}`, 
        "Content-Type": "application/json"
      }
  
      axios.get("http://localhost:8080/api/assignments", {headers: headers})
      .then(res => res.data)
      .then(data => setAssignments(data))
      .catch(err => console.log(err))
  
    }, [])
    return (
        <>
        <div class="relative">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">Dashboard</h1>
            <div className="h-80 grid grid-cols-1 gap-4 content-around static bottom-0 left-0 justify-center">
                <button className="bg-blue-500 text-white p-4 py-2 rounded-md hover:bg-blue-600" onClick={handleSignout}>Sign Out</button>
            </div>
        </div>

        <div>
          {assignments.map(assignment => (<div key={assignment.id}><h1>{assignment.status}</h1></div>))}
        </div>
        </>
    )
}