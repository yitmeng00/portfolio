import { NavLink } from "react-router-dom";
import { PiArrowSquareOutLight } from "react-icons/pi";

export function Project() {
    return (
        <section className="mb-24 xl:px-96 lg:px-52 px-10">
            <div className="flex flex-row gap-3">
                <div>
                    <h2>PROJECTS</h2>
                </div>
                <div className="hover:text-primary-400 text-2xl relative group/item">
                    <NavLink to={"/portfolio/projects"}>
                        <PiArrowSquareOutLight />
                    </NavLink>
                    <div className="absolute top-0 left-8 invisible group-hover/item:visible">
                        <p className="text-sm">more details</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div>
                    <NavLink to={"/portfolio/projects/project-mgmt-sys"}>
                        <div className="font-bold underline text-primary-600">
                            <h6>Project Management System</h6>
                        </div>
                    </NavLink>
                    <div className="mb-2 text-justify">
                        <h6>
                            A system developed to streamline project planning,
                            task management, and progress tracking.
                        </h6>
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
                <div>
                    <NavLink to={"/portfolio/projects/e-claim-system"}>
                        <div className="font-bold underline text-primary-600">
                            <h6>E-Claim System</h6>
                        </div>
                    </NavLink>
                    <div className="mb-2 text-justify">
                        <h6>
                            A system developed to streamline claim submission
                            and approval processes. Claimants can track the
                            status of claims, providing transparency and
                            reducing processing times.
                        </h6>
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
                <div>
                    <NavLink to={"/portfolio/projects/iot-monitoring-system"}>
                        <div className="font-bold underline text-primary-600">
                            <h6>IoT Monitoring System</h6>
                        </div>
                    </NavLink>
                    <div className="mb-2 text-justify">
                        <h6>
                            A platform developed to monitor and manage IoT
                            devices. It offers real-time data analytics, device
                            health monitoring, and capabilities for abnormal
                            data alerts.
                        </h6>
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
        </section>
    );
}
