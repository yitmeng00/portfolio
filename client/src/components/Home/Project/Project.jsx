import { NavLink } from "react-router-dom";
import { PiArrowSquareOutLight } from "react-icons/pi";
import { projects } from "../../../data/project";

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
                {projects
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 3)
                    .map((project) => (
                        <div key={project.id}>
                            <NavLink to={`/portfolio/projects/${project.path}`}>
                                <div className="font-bold underline text-primary-600">
                                    <h6>{project.name}</h6>
                                </div>
                            </NavLink>
                            <div className="mb-2 text-justify">
                                <h6>{project.desc}</h6>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.skill.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="rounded border border-black px-2 py-1"
                                    >
                                        <p>{skill}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
