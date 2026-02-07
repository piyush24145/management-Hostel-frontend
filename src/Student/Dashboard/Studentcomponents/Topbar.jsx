import { Menu, User } from "lucide-react";

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="
      fixed top-0 left-0 right-0
      h-16 bg-blue backdrop-blur-md shadow-md
      flex items-center justify-between
      px-6 z-50
    ">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* MOBILE TOGGLE */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 md:hidden transition"
        >
          <Menu size={24} />
        </button>
        <h2 className="font-semibold text-lg text-gray-800">Student Dashboard</h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => alert("Profile clicked")}
          className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-600 transition"
        >
          <User size={18} />
          My Profile
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/student/login";
          }}
          className="text-red-500 font-semibold hover:text-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
