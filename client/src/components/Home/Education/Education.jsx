import { NavLink } from "react-router-dom";
import { PiArrowSquareOutLight } from "react-icons/pi";
import { educations } from "../../../data/education";

export function Education() {
    return (
        <section className="mb-24 xl:px-96 lg:px-52 px-10">
            <div className="flex flex-row gap-3">
                <div>
                    <h2>EDUCATION</h2>
                </div>
                <div className="hover:text-primary-400 text-2xl relative group/item">
                    <NavLink to={"/portfolio/about"}>
                        <PiArrowSquareOutLight />
                    </NavLink>
                    <div className="absolute top-0 left-8 invisible group-hover/item:visible">
                        <p className="text-sm">more details</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                {educations.map((education) => (
                    <div key={education.id}>
                        <div className="flex sm:flex-row flex-col sm:justify-between">
                            <div className="font-bold">
                                <h6>{education.institution}</h6>
                            </div>
                            <div className="font-light">
                                <h6>{education.duration}</h6>
                            </div>
                        </div>
                        <div>
                            <h6>{education.degree}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
