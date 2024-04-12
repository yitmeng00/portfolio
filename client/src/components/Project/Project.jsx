import { useState } from "react";
import { NavLink } from "react-router-dom";
import projects from "../../data/project.json";

export function Project() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const filteredProjects =
        selectedCategory === "ALL"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    return (
        <>
            <div className="bg-primary-200 px-10 py-24 text-center sm:text-7xl text-5xl text-primary-600 font-bold">
                <p>PROJECTS</p>
            </div>
            <div className="px-10 pt-10 flex flex-row gap-10 justify-center">
                <div
                    onClick={() => setSelectedCategory("ALL")}
                    className={`cursor-pointer ${
                        selectedCategory === "ALL"
                            ? "text-primary-600 font-bold underline"
                            : "text-black hover:text-primary-600 hover:font-bold hover:underline"
                    }`}
                >
                    <p>ALL</p>
                </div>
                <div
                    onClick={() => setSelectedCategory("PERSONAL")}
                    className={`cursor-pointer ${
                        selectedCategory === "PERSONAL"
                            ? "text-primary-600 font-bold underline"
                            : "text-black hover:text-primary-600 hover:font-bold hover:underline"
                    }`}
                >
                    <p>PERSONAL</p>
                </div>
                <div
                    onClick={() => setSelectedCategory("COMPANY")}
                    className={`cursor-pointer ${
                        selectedCategory === "COMPANY"
                            ? "text-primary-600 font-bold underline"
                            : "text-black hover:text-primary-600 hover:font-bold hover:underline"
                    }`}
                >
                    <p>COMPANY</p>
                </div>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="shadow-lg hover:scale-105 transition duration-150"
                    >
                        <NavLink to={`/portfolio/projects/${project.path}`}>
                            <div className="p-10">
                                <div className="mb-3">
                                    <img
                                        src={project.src}
                                        alt={project.name}
                                        className="w-full max-h-52 object-cover"
                                    />
                                </div>
                                <div className="text-sm font-bold">
                                    <p>{project.name}</p>
                                </div>
                                <div className="text-sm mb-3">
                                    <p>{project.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {project.skill.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="rounded border border-black px-2 py-1 text-sm"
                                        >
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </>
    );
}
