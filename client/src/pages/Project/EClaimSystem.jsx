import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

export function EClaimSystem() {
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
                    <p>E-CLAIM SYSTEM</p>
                </div>
                <div className="xl:px-40 lg:px-32 px-10 py-10">
                    <div className="flex flex-col items-center mb-3">
                        <img
                            src="/portfolio/assets/project/e-claim-system.png"
                            alt="E-Claim System"
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
                                    Completed and Deployed
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 text-justify">
                            <h6>
                                I led the development of this E-Claim System
                                designed for internal employees, aimed to
                                streamline claim submission and approval
                                processes. This project emerged from a need to
                                address the challenges posed by traditional
                                claim procedures, paving the way for a more
                                efficient and streamlined workflow.
                            </h6>
                            <h6>
                                As a lead full-stack developer for this project, I am involved in
                                the entire development lifecycle within an Agile
                                environment. My responsibilities include
                                planning the timeline for the project, assigning
                                and managing all tasks, holding daily scrum
                                meetings for progress updates, and developing
                                the project.
                            </h6>
                            <h6>
                                The key feature of the e-claim system including
                                claim submission, status tracking, multilevel
                                approval, and report generation.
                            </h6>
                            <h6>
                                Upon successful development, the E-Claim System
                                was deployed on a cloud server. The impact of
                                this system was reducing the claim process time
                                by 75%, from a lengthy 4-week process to a mere
                                1-week turnaround.
                            </h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>TECH STACK</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="rounded border border-black px-2 py-1">
                                <p>HTML</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>CSS</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Bootstrap</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>JavaScript</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>jQuery</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>AJAX</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>PHP</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>MySQL</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Google Maps API</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
