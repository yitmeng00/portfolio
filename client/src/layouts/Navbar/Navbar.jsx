import { NavLink } from "react-router-dom";
import { PiLinkedinLogoLight, PiGithubLogoLight } from "react-icons/pi";

export function Navbar() {
    return (
        <section className="fixed h-screen w-full bg-primary-300 z-10">
            <div className="flex flex-col lg:gap-20 gap-10 px-10 2xl:py-40 xl:30 py-20 h-full">
                <div
                    id="navbar__menu-item"
                    className="flex flex-col lg:gap-20 gap-10 items-center text-primary-600 navbar-heading font-medium"
                >
                    <div className="hover:text-primary-200 hover:underline hover:decoration-wavy hover:decoration-primary-500">
                        <NavLink to={"/portfolio"}>
                            <p>Home</p>
                        </NavLink>
                    </div>
                    <div className="hover:text-primary-200 hover:underline hover:decoration-wavy hover:decoration-primary-500">
                        <NavLink to={"/portfolio/about"}>
                            <p>About</p>
                        </NavLink>
                    </div>
                    <div className="hover:text-primary-200 hover:underline hover:decoration-wavy hover:decoration-primary-500">
                        <NavLink to={"/portfolio/experiences"}>
                            <p>Experiences</p>
                        </NavLink>
                    </div>
                    <div className="hover:text-primary-200 hover:underline hover:decoration-wavy hover:decoration-primary-500">
                        <NavLink to={"/portfolio/projects"}>
                            <p>Projects</p>
                        </NavLink>
                    </div>
                </div>
                <div
                    id="navbar__footer"
                    className="flex flex-row gap-3 text-4xl justify-center"
                >
                    <div className="hover:text-primary-200">
                        <NavLink
                            to={"https://www.linkedin.com/in/yitmengwong/"}
                        >
                            <PiLinkedinLogoLight />
                        </NavLink>
                    </div>
                    <div className="hover:text-primary-200">
                        <NavLink to={"https://github.com/yitmeng00"}>
                            <PiGithubLogoLight />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
