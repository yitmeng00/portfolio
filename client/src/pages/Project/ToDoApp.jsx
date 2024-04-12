import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

export function ToDoApp() {
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
                    <p>To-Do App</p>
                </div>
                <div className="xl:px-40 lg:px-32 px-10 py-10">
                    <div className="flex flex-col items-center mb-3">
                        <img
                            src="/portfolio/assets/project/todo-app.png"
                            alt="To Do App"
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
                                I developed a To-Do App as part of my personal
                                project, with a focus on helping users organize
                                tasks and track progress efficiently. The app
                                offers a user-friendly interface to streamline
                                task management and enhance productivity.
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
                                <p>VanillaJS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
