import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Dashboard({handleSignout}) {

    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/submit");
    }

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/sign-in");
      }
  
      const headers = {
        "Authorization": `Bearer ${token}`, 
        "Content-Type": "application/json"
      }
  
      axios.get("/api/api/assignments", {headers: headers})
      .then(res => res.data)
      .then(data => {
        setAssignments(data);
        console.log(data);
        })
      .catch(err => console.log(err))
  
    }, [])
    return (
        <>
        <div className="relative">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">Dashboard</h1>
            <div><h2>&nbsp;</h2></div>
            <div>
                <h3 className="scroll-m-20 font-extrabold tracking-tight text-center">Current assignments: 
                    {assignments.map(assignment => (<div key={assignment.id}><h3>{assignment.status}</h3></div>))}
                </h3>
            </div>
            <div className="h-80 grid grid-cols-1 gap-4 content-around static bottom-0 left-0 justify-center">
                <button className="bg-blue-500 text-white p-4 py-2 rounded-md hover:bg-blue-600" onClick={handleSubmit}>Submit Assignment</button>
                <button className="bg-blue-500 text-white p-4 py-2 rounded-md hover:bg-blue-600" onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
        </>
    )
}