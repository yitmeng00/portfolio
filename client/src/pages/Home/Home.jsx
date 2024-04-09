import { useState } from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { NavbarBtn } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Skill } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Education } from "../../components/Education";
import { Project } from "../../components/Project";

export function Home() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <section>
                <NavbarBtn toggleNavbar={toggleNavbar} />
                {navbarOpen ? <Navbar /> : null}
                <div className="relative">
                    <Header />
                    <About />
                    <Experience />
                    <Education />
                    <Project />
                    <Footer />
                </div>
            </section>
        </>
    );
}
