import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminRegister() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAdminRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      // 🔗 Demo Admin Register API
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password , role: "admin" }
      );

      // Optional: token save
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Redirect to Admin Login
      navigate("/admin/login");

    } catch (err) {
      setError(
        err.response?.data?.message || "Admin registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-2xl font-bold text-center mb-6">
          Admin Register
        </h1>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <form onSubmit={handleAdminRegister} className="space-y-4">

          <input
            type="text"
            placeholder="Admin Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdminRegister;
