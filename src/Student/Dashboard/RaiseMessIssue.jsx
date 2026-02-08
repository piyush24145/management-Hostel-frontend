import { useState } from "react"
import axios from "axios"

const RaiseMessIssue = () => {
    const [form, setForm] = useState({
        issueType: "",
        mealType: "",
        description: ""
    })

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await axios.post(
                "http://localhost:5000/api/mess/issue/create",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )

            alert("Mess complaint submitted")

            setForm({
                issueType: "",
                mealType: "",
                description: ""
            })
        } catch (err) {
            console.error(err)
            alert("Failed to submit complaint")
        }
    }

    return (
        <div className="p-10">
            <form onSubmit={handleSubmit} className="p-10 max-w-xl mx-auto bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6">🍽 Raise Mess Issue</h2>

                <select
                    value={form.issueType}
                    onChange={e => setForm({ ...form, issueType: e.target.value })}
                    className="w-full p-2 border mb-3 rounded"
                    required
                >
                    <option value="">Issue Type</option>
                    <option value="Food Quality">Food Quality</option>
                    <option value="Hygiene">Hygiene</option>
                    <option value="Menu Issue">Menu Issue</option>
                </select>

                <select
                    value={form.mealType}
                    onChange={e => setForm({ ...form, mealType: e.target.value })}
                    className="w-full p-2 border mb-3 rounded"
                    required
                >
                    <option value="">Meal</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>

                <textarea
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    placeholder="Describe issue"
                    className="w-full p-2 border mb-4 rounded"
                    required
                />

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default RaiseMessIssue
