import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Experience } from "./pages/Experience/Experience.jsx";
import { Project } from "./pages/Project/Project.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/projects" element={<Project />} />
        </Routes>
    );
}

export default App;
