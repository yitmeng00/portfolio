import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage.jsx";
import { AboutPage } from "./pages/About/AboutPage.jsx";
import { ExperiencePage } from "./pages/Experience/ExperiencePage.jsx";
import { ProjectPage } from "./pages/Project/ProjectPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<HomePage />} />
            <Route path="/portfolio/about" element={<AboutPage />} />
            <Route path="/portfolio/experiences" element={<ExperiencePage />} />
            <Route path="/portfolio/projects" element={<ProjectPage />} />
        </Routes>
    );
}

export default App;
