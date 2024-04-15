import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

export function ProjectMgmtSys() {
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
                    <p>PROJECT MANAGEMENT SYSTEM</p>
                </div>
                <div className="xl:px-40 lg:px-32 px-10 py-10">
                    <div className="flex flex-col items-center mb-3">
                        <img
                            src="/portfolio/assets/project/project-mgmt-sys.png"
                            alt="Project Management System"
                            className="size-3/4"
                        />
                    </div>
                    <div className="mb-8">
                        <div className="flex flex-row gap-3">
                            <div>
                                <h3>ABOUT THIS PROJECT</h3>
                            </div>
                            <div>
                                <p className="px-2 py-1 rounded-full bg-green-200 text-sm">
                                    Completed for 1st release
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 text-justify">
                            <h6>
                                Project Management System is developed for
                                internal employee use, designed to enhance
                                project planning, task management, and progress
                                tracking within my organization.
                            </h6>
                            <h6>
                                As a full-stack developer for this project, I involved in the
                                entire development lifecycle within an Agile
                                environment. The key features of the project
                                management system include tracking project
                                health, assigning tasks, providing progress
                                updates, monitoring deadlines, tracking project
                                claims, and generating project health reports.
                            </h6>
                            <h6>
                                For the 1st release, the system was deployed on
                                an internal server with LAN connectivity.
                            </h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>TECH STACK</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="rounded border border-black px-2 py-1">
                                <p>React</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Redux</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>JavaScript</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>HTML</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>CSS</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Tailwind</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Node.js</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Express</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Sequelize</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>MySQL</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>REST</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Redis</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Docker</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
