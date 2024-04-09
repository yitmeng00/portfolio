import { NavLink } from "react-router-dom";
import { PiLinkedinLogoLight, PiGithubLogoLight } from "react-icons/pi";

export function Header() {
    return (
        <header className="bg-primary-200 mb-24">
            <div className="h-screen p-10">
                <div className="flex flex-row gap-10 items-center h-full">
                    <div className="lg:ps-32 xl:ps-60">
                        <h1>
                            Hello, my name is{" "}
                            <span className="font-extrabold text-primary-600">
                                Ivan
                            </span>
                            .
                        </h1>
                        <h4 className="w-4/5">
                            I am a full-stack software engineer focused on
                            developing impactful and scalable system, software,
                            and web application.
                        </h4>
                        <div className="flex flex-row gap-3 text-4xl">
                            <div className="hover:text-primary-300">
                                <NavLink
                                    to={
                                        "https://www.linkedin.com/in/yitmengwong/"
                                    }
                                >
                                    <PiLinkedinLogoLight />
                                </NavLink>
                            </div>
                            <div className="hover:text-primary-300">
                                <NavLink to={"https://github.com/yitmeng00"}>
                                    <PiGithubLogoLight />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            src="src/assets/home/code-typing-illustration.png"
                            alt="header-img"
                            className="size-2/3"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
