import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

export function IotMonitoringSystem() {
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
                    <p>IoT Monitoring System</p>
                </div>
                <div className="xl:px-40 lg:px-32 px-10 py-10">
                    <div className="flex flex-col items-center mb-3">
                        <img
                            src="/portfolio/assets/project/iot-monitoring-system.png"
                            alt="IoT Monitoring System"
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
                                    Completed
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 text-justify">
                            <h6>
                                IoT Monitoring System is developed to monitor
                                and manage IoT devices, with an emphasis on
                                environmental conditions such as humidity
                                levels, soil moisture, pH values, and more.
                            </h6>
                            <h6>
                                As a front-end developer for this project, I am
                                involved in the entire development lifecycle
                                within an Agile environment. My responsibilities
                                include developing the UI based on the
                                prototype, and implementing WebSocket to get
                                real-time data.
                            </h6>
                            <h6>
                                The key feature of the IoT monitoring system
                                including real-time data analytics, device
                                health monitoring, and abnormal data alerts.
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
                                <p>SortableJS</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>WebSocket</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>PHP</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>MySQL</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>MongoDB</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Weather API</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
