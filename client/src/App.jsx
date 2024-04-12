import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage.jsx";
import { AboutPage } from "./pages/About/AboutPage.jsx";
import { ExperiencePage } from "./pages/Experience/ExperiencePage.jsx";
import { ProjectPage } from "./pages/Project/ProjectPage.jsx";
import { ProjectMgmtSys } from "./pages/Project/ProjectMgmtSys.jsx";
import { GoTravel } from "./pages/Project/GoTravel.jsx";
import { EClaimSystem } from "./pages/Project/EClaimSystem.jsx";
import { IotMonitoringSystem } from "./pages/Project/IotMonitoringSystem.jsx";
import { AspenWebsite } from "./pages/Project/AspenWebsite.jsx";
import { InventoryMgmtSys } from "./pages/Project/InventoryMgmtSys.jsx";
import { WeatherApp } from "./pages/Project/WeatherApp.jsx";
import { ToDoApp } from "./pages/Project/ToDoApp.jsx";
import { Chatroom } from "./pages/Project/Chatroom.jsx";
import { Chatbot } from "./pages/Project/Chatbot.jsx";
import { Rentwise } from "./pages/Project/Rentwise.jsx";
import { Greaterstay } from "./pages/Project/Greaterstay.jsx";
import { Arkhalal } from "./pages/Project/Arkhalal.jsx";

function App() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<HomePage />} />
            <Route path="/portfolio/about" element={<AboutPage />} />
            <Route path="/portfolio/experiences" element={<ExperiencePage />} />
            <Route path="/portfolio/projects" element={<ProjectPage />} />
            <Route
                path="/portfolio/projects/project-mgmt-sys"
                element={<ProjectMgmtSys />}
            />
            <Route
                path="/portfolio/projects/e-claim-system"
                element={<EClaimSystem />}
            />
            <Route
                path="/portfolio/projects/iot-monitoring-system"
                element={<IotMonitoringSystem />}
            />
            <Route
                path="/portfolio/projects/aspen-website"
                element={<AspenWebsite />}
            />
            <Route
                path="/portfolio/projects/inventory-mgmt-sys"
                element={<InventoryMgmtSys />}
            />
            <Route
                path="/portfolio/projects/weather-app"
                element={<WeatherApp />}
            />
            <Route path="/portfolio/projects/chatroom" element={<Chatroom />} />
            <Route path="/portfolio/projects/todo-app" element={<ToDoApp />} />
            <Route path="/portfolio/projects/chatbot" element={<Chatbot />} />
            <Route path="/portfolio/projects/rentwise" element={<Rentwise />} />
            <Route
                path="/portfolio/projects/greaterstay"
                element={<Greaterstay />}
            />
            <Route path="/portfolio/projects/arkhalal" element={<Arkhalal />} />
            <Route
                path="/portfolio/projects/go-travel"
                element={<GoTravel />}
            />
        </Routes>
    );
}

export default App;
