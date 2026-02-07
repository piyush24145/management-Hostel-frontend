import {
  Home,
  PenLine,
  ClipboardList,
  FilePlus,
  FileText,
  LogOut
} from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/student/login")
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
     ${
       isActive
         ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-md"
         : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
     }`

  return (
    <div
      className="
        w-64
        bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50
        text-gray-800
        rounded-r-3xl
        shadow-2xl
        p-6
        flex flex-col justify-between
        h-[calc(100vh-64px)]
        border-r border-gray-200
      "
    >
      {/* PROFILE */}
      <div>
        <div className="text-center mb-10">
          <img
            src="https://i.pravatar.cc/100"
            className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-blue-400 shadow-lg"
          />

          {/* Later yaha real name laga sakta hai */}
          <h3 className="font-bold text-xl text-gray-900">
            Rahul Sharma
          </h3>

          <p className="text-sm text-gray-500">Student</p>
        </div>

        {/* MENU */}
        <ul className="space-y-3">

          <li>
            <NavLink to="/student/dashboard" className={linkClass}>
              <Home size={18} />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/raise-complaint" className={linkClass}>
              <PenLine size={18} />
              Raise Complaint
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/my-complaints" className={linkClass}>
              <ClipboardList size={18} />
              My Complaints
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/Leaves" className={linkClass}>
              <FilePlus size={18} />
              Apply Leave
            </NavLink>
          </li>

          <li>
            <NavLink to="/student/myleave" className={linkClass}>
              <FileText size={18} />
              My Leaves
            </NavLink>
          </li>
           <li>
            <NavLink to="/student/messpage" className={linkClass}>
              <FileText size={18} />
              Mess
            </NavLink>
          </li>

        </ul>
      </div>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="
          flex items-center gap-3
          px-4 py-2
          rounded-lg
          text-red-600
          hover:bg-red-100
          transition
        "
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  )
}

export default Sidebar
