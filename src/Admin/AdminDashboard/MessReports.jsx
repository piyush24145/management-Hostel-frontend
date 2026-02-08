import { useEffect, useState } from "react";
import axios from "axios";

const MessReports = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchReports = async () => {
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
            setError(
                err.response?.data?.message || err.message || "Failed to fetch mess reports"
            );
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `http://localhost:5000/api/mess/issue/${id}/status`,
                { status },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchReports();
        } catch (err) {
            alert("Failed to update status");
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    // -------------------------
    // Group issues by issueType + mealType
    // =========================
    const groupedIssues = issues.reduce((acc, issue) => {
        const key = `${issue.issueType} • ${issue.mealType}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(issue.studentName);
        return acc;
    }, {});

    // Sort groups by most demanding (most complaints)
    const sortedGroups = Object.entries(groupedIssues).sort(
        (a, b) => b[1].length - a[1].length
    );

    if (loading) {
        return <p className="p-10 text-gray-500">Loading reports...</p>;
    }

    if (error) {
        return <p className="p-10 text-red-500">{error}</p>;
    }

    return (
        <div className="p-10 bg-slate-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6">📊 Mess Reports</h2>

            <p>Total Complaints: {issues.length}</p>
            <p>Resolved: {issues.filter((i) => i.status === "Resolved").length}</p>
            <p>Pending: {issues.filter((i) => i.status === "Pending").length}</p>

            <div className="mt-6 space-y-6">
                {sortedGroups.map(([group, students], index) => (
                    <div
                        key={group}
                        className={`p-5 rounded shadow space-y-2 ${index < 3
                            ? "bg-yellow-100 border-l-4 border-yellow-400" // Top 3 highlight
                            : "bg-white"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-lg">{group}</p>
                            {index < 3 && (
                                <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                                    🔥 Top {index + 1}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-600">
                            Most demanding students: {students.join(", ")}
                        </p>
                        <p className="text-xs text-gray-400">
                            Total Complaints: {students.length}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessReports;
