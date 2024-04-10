import { NavLink } from "react-router-dom";
import { PiArrowSquareOutLight } from "react-icons/pi";

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
                <div>
                    <div className="flex sm:flex-row flex-col sm:justify-between">
                        <div className="font-bold">
                            <h6>Aspen Spectra Sdn Bhd</h6>
                        </div>
                        <div className="font-light">
                            <h6>May 2022 - Present</h6>
                        </div>
                    </div>
                    <div>
                        <h6>Full Stack Software Engineer</h6>
                    </div>
                </div>
                <div>
                    <div className="flex sm:flex-row flex-col sm:justify-between">
                        <div className="font-bold">
                            <h6>IBM</h6>
                        </div>
                        <div className="font-light">
                            <h6>January 2022 - April 2022</h6>
                        </div>
                    </div>
                    <div>
                        <h6>Web Application Developer Intern</h6>
                    </div>
                </div>
                <div>
                    <div className="flex sm:flex-row flex-col sm:justify-between">
                        <div className="font-bold">
                            <h6>W. I. T. Solution</h6>
                        </div>
                        <div className="font-light">
                            <h6>September 2021 - December 2021</h6>
                        </div>
                    </div>
                    <div>
                        <h6>Full Stack Developer Intern</h6>
                    </div>
                </div>
                <div>
                    <div className="flex sm:flex-row flex-col sm:justify-between">
                        <div className="font-bold">
                            <h6>W. I. T. Solution</h6>
                        </div>
                        <div className="font-light">
                            <h6>July 2020 - April 2021</h6>
                        </div>
                    </div>
                    <div>
                        <h6>Part Time Web Developer</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}
