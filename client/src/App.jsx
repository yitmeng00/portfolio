import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage.jsx";
import { AboutPage } from "./pages/About/AboutPage.jsx";
import { ExperiencePage } from "./pages/Experience/ExperiencePage.jsx";
import { ProjectPage } from "./pages/Project/ProjectPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experiences" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    );
}

export default App;
