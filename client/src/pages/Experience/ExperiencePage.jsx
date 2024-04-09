import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";

export function ExperiencePage() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <section>
                <NavbarBtn toggleNavbar={toggleNavbar} />
                {navbarOpen ? <Navbar /> : null}
                <div className="relative">Experience</div>
            </section>
        </>
    );
}
