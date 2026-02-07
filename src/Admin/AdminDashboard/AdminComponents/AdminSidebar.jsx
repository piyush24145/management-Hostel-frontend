import { NavLink } from "react-router-dom"
import { LayoutDashboard, Wrench, FileBarChart } from "lucide-react"

const AdminSidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition
     ${
       isActive
         ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow"
         : "text-gray-700 hover:bg-gray-100"
     }`

  return (
    <div className="
      w-64
      bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50
      rounded-r-3xl
      shadow-2xl
      p-6
      h-[calc(100vh-64px)]
    ">

      <div className="text-center mb-10">
        <img
          src="https://i.pravatar.cc/100?img=65"
          className="w-24 h-24 rounded-full mx-auto mb-3"
        />
        <h3 className="font-bold text-xl">Rajesh Kumar</h3>
        <p className="text-sm text-gray-500">Admin</p>
      </div>

      <ul className="space-y-3">

        <li>
          <NavLink to="/admin/dashboard" className={linkClass}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/Allcomplaints" className={linkClass}>
            <Wrench size={18} />
            Manage Complaints
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/reports" className={linkClass}>
            <FileBarChart size={18} />
            Reports
          </NavLink>
        </li>
          <li>
          <NavLink to="/admin/Leaves" className={linkClass}>
            <FileBarChart size={18} />
            Adminleaves
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default AdminSidebar
