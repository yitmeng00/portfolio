import { experiences } from "../../data/experience";

export function Experience() {
    return (
        <>
            <div className="bg-primary-200 px-10 py-24 text-center sm:text-7xl text-5xl text-primary-600 font-bold">
                <p>EXPERIENCES</p>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10 flex flex-col gap-10">
                {experiences
                    .sort((a, b) => b.id - a.id)
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
                            <div className="mb-2">
                                <h6>{experience.title}</h6>
                            </div>
                            <div>
                                <ul className="list-disc">
                                    {experience.responsibilities.map(
                                        (responsibility, i) => (
                                            <li key={i}>
                                                <p>{responsibility}</p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
