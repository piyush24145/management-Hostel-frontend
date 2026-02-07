import { useNavigate } from "react-router-dom"

const DashboardCard = ({
  title,
  desc,
  btnText,
  secondaryBtn,
  image,
  primaryColor = "bg-blue-500",
  link, // 👈 NEW
}) => {
  const navigate = useNavigate()

  return (
    <div className="
      bg-white/80 backdrop-blur-md
      p-6 rounded-2xl
      shadow-lg hover:shadow-2xl
      transition-all duration-300
      border border-gray-200
      flex flex-col items-start
    ">

      {image && (
        <img
          src={image}
          alt={title}
          className="w-20 h-20 mb-4 rounded-lg object-cover shadow"
        />
      )}

      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 mb-6">{desc}</p>

      <div className="flex gap-4 mt-auto w-full">
        <button
          onClick={() => link && navigate(link)} 
          className={`px-4 py-2 rounded-lg text-white font-medium shadow ${primaryColor} hover:brightness-110 transition`}
        >
          {btnText}
        </button>

        {secondaryBtn && (
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            {secondaryBtn}
          </button>
        )}
      </div>
    </div>
  )
}

export default DashboardCard