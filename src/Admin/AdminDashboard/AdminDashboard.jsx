import { useState } from "react"
import AdminSidebar from "./AdminComponents/AdminSidebar"
import AdminDashboardCard from "./AdminComponents/AdminDashboardCard"
import AdminNavbar from "./AdminComponents/AdminNavbar"


const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100">

      <AdminNavbar toggleSidebar={() => setShowSidebar(!showSidebar)} />

      <div className="flex pt-16">

        <div className={`
          fixed md:static z-40
          ${showSidebar ? "block" : "hidden"}
          md:block
        `}>
          <AdminSidebar />
        </div>

        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-2">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mb-10">
            Manage hostel operations efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <AdminDashboardCard
              title="Manage Complaints"
              desc="View, assign and resolve student complaints."
              btnText="Review Complaints"
              link="/admin/Allcomplaints"
            />

            <AdminDashboardCard
              title="Reports"
              desc="Generate system & complaint reports."
              btnText="View Reports"
              primaryColor="bg-purple-500"
              link="/admin/reports"
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard