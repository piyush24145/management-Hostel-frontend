import { useEffect, useState } from "react"
import axios from "axios"

const MyMessIssues = () => {
    const [issues, setIssues] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/mess/my", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => setIssues(res.data))
    }, [])

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-6">My Mess Complaints</h2>

            {issues.map(i => (
                <div key={i._id} className="bg-white p-4 mb-4 rounded shadow">
                    <p className="font-semibold">
                        {i.issueType} ({i.mealType})
                    </p>
                    <p className="text-sm text-gray-600">{i.description}</p>
                    <span className="text-yellow-600 font-medium">{i.status}</span>
                </div>
            ))}
        </div>
    )
}

export default MyMessIssues
