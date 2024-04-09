import { NavLink } from "react-router-dom";
import { PiLinkedinLogoLight, PiGithubLogoLight } from "react-icons/pi";

export function Navbar() {
    return (
        <section className="fixed h-screen w-full bg-primary-300 z-10">
            <div className="flex flex-col gap-5 p-10">
            <div
                id="navbar__menu-item"
                className="flex flex-col gap-10 items-center text-6xl text-primary-600"
            >
                <div>
                    <NavLink to={"/"}>
                        <p>Home</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={"/about"}>
                        <p>About</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={"/experiences"}>
                        <p>Experiences</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={"/projects"}>
                        <p>Projects</p>
                    </NavLink>
                </div>
            </div>
            <div
                id="navbar__footer"
                className="flex flex-row gap-3 text-4xl justify-center"
            >
                <div>
                    <PiLinkedinLogoLight />
                </div>
                <div>
                    <PiGithubLogoLight />
                </div>
            </div>
            </div>
        </section>
    );
}
