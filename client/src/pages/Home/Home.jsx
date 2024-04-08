import { useState } from "react";
import { NavbarBtn } from "../../components";
import Navbar from "../../layouts/Navbar";

export function Home() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <section>
                <div>
                    <NavbarBtn toggleNavbar={toggleNavbar} />
                </div>
                {navbarOpen ? <Navbar /> : <div className="bg-gray-300 h-screen relative">Homepage</div>}
            </section>
        </>
    );
}
