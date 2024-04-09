import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { About } from "../../components/About";

export function AboutPage() {
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
                    <About />
                    <Footer />
                </div>
            </section>
        </>
    );
}
