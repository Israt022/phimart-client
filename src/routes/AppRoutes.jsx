import { Route, Routes } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";

const AppRoutes = () => {
    return (
        <Routes>
            
            {/* Public Routes  */}
            <Route element={<MainLayout/>} >
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
               
            </Route>

            {/* Private Routes  */}
            <Route 
                path="dashboard" 
                element={
                    <PrivateRoute>
                        <DashboardLayout/>
                    </PrivateRoute> 
                }
            >
                <Route 
                    index
                    element = {<Dashboard/>}
                />
                <Route 
                    path="profile"
                    element = {<Profile/>}
                />
            </Route>
            
        </Routes>
    );
};

export default AppRoutes;