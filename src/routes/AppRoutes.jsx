import { Route, Routes } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>} >
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;