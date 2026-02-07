import { useNavigate } from "react-router-dom"

const AdminDashboardCard = ({
  title,
  desc,
  btnText,
  link,
  primaryColor = "bg-blue-500",
}) => {
  const navigate = useNavigate()

  return (
    <div className="
      bg-white/80 backdrop-blur
      p-6 rounded-2xl
      shadow-lg hover:shadow-2xl
      transition
      border
      flex flex-col
    ">

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-6">
        {desc}
      </p>

      <button
        onClick={() => navigate(link)}
        className={`mt-auto px-4 py-2 text-white rounded-lg ${primaryColor}`}
      >
        {btnText}
      </button>
    </div>
  )
}

export default AdminDashboardCard