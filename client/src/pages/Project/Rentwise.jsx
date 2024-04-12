import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { NavLink } from "react-router-dom";
import { PiArrowSquareOutLight } from "react-icons/pi";

export function Rentwise() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <NavbarBtn toggleNavbar={toggleNavbar} />
            {navbarOpen ? <Navbar /> : null}
            <div className="relative">
                <div className="bg-primary-200 px-10 py-24 text-center sm:text-7xl text-5xl text-primary-600 font-bold">
                    <p>Rentwise</p>
                </div>
                <div className="xl:px-40 lg:px-32 px-10 py-10">
                    <div className="flex flex-col items-center mb-8">
                        <img
                            src="/portfolio/assets/project/rentwise.png"
                            alt="Rentwise"
                            className="size-3/4"
                        />
                        <NavLink to={"https://www.rentwise.com/"}>
                            <div className="flex flex-row gap-3 px-3 py-2 bg-primary-100 rounded items-center hover:bg-primary-200">
                                <div>
                                    <h6>Visit Website</h6>
                                </div>
                                <div>
                                    <PiArrowSquareOutLight />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="mb-8">
                        <div className="flex flex-row gap-3">
                            <div>
                                <h3>ABOUT THIS PROJECT</h3>
                            </div>
                            <div>
                                <p className="px-2 py-1 rounded-full bg-green-200 text-sm">
                                    Completed and Deployed
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 text-justify">
                            <h6>
                                Rentwise is a green IT company that provides
                                rental, resale & IT asset disposition solutions.
                            </h6>
                            <h6>
                                As the web developer for this project, my
                                responsibilities included customizing and
                                developing the WordPress theme to precisely
                                match the client's requirements, managing web
                                hosting, and overseeing the overall development
                                process.
                            </h6>
                            <h6>
                                The website is designed to be responsive and
                                compatible with different screen sizes across
                                different devices. SEO strategies are
                                implemented to boost the website's ranking,
                                while caching techniques are utilized to
                                optimize and enhance the website's performance.
                            </h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>TECH STACK</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="rounded border border-black px-2 py-1">
                                <p>WordPress</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>HTML</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>CSS</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>JavaScript</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>jQuery</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Web Hosting</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>SEO</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Caching</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
