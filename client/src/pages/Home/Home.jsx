import { useState } from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { NavbarBtn } from "../../components/Navbar";
import { Header } from "../../components/Home/Header";
import { About } from "../../components/Home/About";
import { Experience } from "../../components/Home/Experience";
import { Education } from "../../components/Home/Education";
import { Project } from "../../components/Home/Project";

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
                    <Education />
                    <Experience />
                    <Project />
                    <Footer />
                </div>
            </section>
        </>
    );
}
