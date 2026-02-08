import { useEffect, useState } from "react";
import axios from "axios";

const ReviewMessIssues = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch all issues (admin)
    useEffect(() => {
        fetchIssues();
    }, []);

    const fetchIssues = async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:5000/api/mess", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            setIssues(res.data);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || err.message || "Failed to load mess complaints");
        } finally {
            setLoading(false);
        }
    };

    // Change status of a complaint
    const changeStatus = async (id, status) => {
        try {
            await axios.put(
                `http://localhost:5000/api/mess/${id}/status`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            // Update local state immediately
            setIssues((prev) =>
                prev.map((i) => (i._id === id ? { ...i, status } : i))
            );
        } catch (err) {
            console.error(err);
            alert(
                err.response?.data?.message || err.message || "Status update failed"
            );
        }
    };

    if (loading) {
        return <p className="p-10 text-gray-500">Loading complaints...</p>;
    }

    if (error) {
        return <p className="p-10 text-red-500">{error}</p>;
    }

    return (
        <div className="p-10 bg-slate-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6">🍽 Review Mess Complaints</h2>

            {issues.length === 0 && (
                <p className="text-gray-500">No mess complaints found.</p>
            )}

            <div className="space-y-4">
                {issues.map((i) => (
                    <div
                        key={i._id}
                        className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
                    >
                        <div>
                            {/* Student Name */}
                            <p className="font-semibold text-lg">{i.studentName}</p>

                            {/* Issue type and meal type */}
                            <p className="text-sm text-gray-600">
                                {i.issueType} • {i.mealType}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-gray-700 mt-1">{i.description}</p>

                            {/* Current status */}
                            <p className="text-xs text-gray-400 mt-1">Status: {i.status}</p>
                        </div>

                        {/* Status dropdown */}
                        <div>
                            <select
                                value={i.status}
                                onChange={(e) => changeStatus(i._id, e.target.value)}
                                className="border rounded p-2 text-sm focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewMessIssues;
