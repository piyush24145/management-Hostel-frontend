import { Menu, User } from "lucide-react"

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <div className="
      fixed top-0 left-0 right-0
      h-16 bg-white shadow
      flex items-center justify-between
      px-6 z-50
    ">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 md:hidden"
        >
          <Menu size={24} />
        </button>

        <h2 className="font-semibold text-lg">
          Admin Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <User size={18} />
          Admin Profile
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token")
            window.location.href = "/admin/login"
          }}
          className="text-red-500 font-semibold hover:text-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default AdminNavbar