import { NavLink } from "react-router-dom";
import { PiArrowSquareOutLight } from "react-icons/pi";
import { experiences } from "../../../data/experience";

export function Experience() {
    return (
        <section className="mb-24 xl:px-96 lg:px-52 px-10">
            <div className="flex flex-row gap-3">
                <div>
                    <h2>EXPERIENCES</h2>
                </div>
                <div className="hover:text-primary-400 text-2xl relative group/item">
                    <NavLink to={"/portfolio/experiences"}>
                        <PiArrowSquareOutLight />
                    </NavLink>
                    <div className="absolute top-0 left-8 invisible group-hover/item:visible">
                        <p className="text-sm">more details</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                {experiences
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 3)
                    .map((experience) => (
                        <div key={experience.id}>
                            <div className="flex sm:flex-row flex-col sm:justify-between">
                                <div className="font-bold">
                                    <h6>{experience.company}</h6>
                                </div>
                                <div className="font-light">
                                    <h6>{experience.period}</h6>
                                </div>
                            </div>
                            <div>
                                <h6>{experience.title}</h6>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
