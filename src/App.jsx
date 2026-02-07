import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Home/components/Navbar";
import StudentLogin from "./Student/Login";
import StudentRegister from "./Student/Register";
import AdminLogin from "./Admin/Login";
import AdminRegister from "./Admin/Register";
import StudentDashboard from "./Student/Dashboard/StudentDashboard";
import RaiseComplaint from "./Student/Dashboard/RaiseComplaint";
import MyComplaints from "./Student/Dashboard/MyComplaints";
import ApplyLeave from "./Student/Dashboard/ApplyLeave";
import MyLeaves from "./Student/Dashboard/MyLeaves";
import MessPage from "./Student/Dashboard/MessPage";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import AllComplaints from "./Admin/AdminDashboard/AllComplaints";
import ViewReports from "./Admin/AdminDashboard/ViewReports";
import AdminLeaves from "./Admin/AdminDashboard/AdminLeaves";
import CreateMenu from "./Admin/AdminDashboard/MessCreate";
import MessAnalytics from "./Admin/AdminDashboard/MessAnalytics";


function App() {

  const location = useLocation();

  // Jahan Navbar hide karna ho
  const hideNavbarRoutes = [
    "/student/dashboard", "/admin/dashboard"
  ];
  

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />

        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/register" element={<AdminRegister/>} />

        <Route path="/student/dashboard" element={<StudentDashboard/>} />
                <Route path="/student/raise-complaint" element={<RaiseComplaint/>} />
        <Route path="/student/my-complaints" element={<MyComplaints />} />
                <Route path="/student/Leaves" element={<ApplyLeave/>} />
                <Route path="/student/myleave" element={<MyLeaves/>} />
                <Route path="/student/messpage" element={<MessPage/>} />


        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/Allcomplaints" element={<AllComplaints/>} />
        <Route path="/admin/reports" element={<ViewReports/>} />
        <Route path="/admin/Leaves" element={<AdminLeaves/>} />
        <Route path="/admin/createmenu" element={<CreateMenu/>} />
        <Route path="/admin/messAnalytics" element={<MessAnalytics/>} />


      </Routes>
    </>
  );
}

export default App;
