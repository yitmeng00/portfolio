import { Skill } from "./Skill";

export function About() {
    return (
        <section className="mb-24 xl:px-96 lg:px-52 px-10">
            <div className="mb-12">
                <div>
                    <h2>ABOUT</h2>
                </div>
                <div className="mb-4 text-justify">
                    <h6>
                        I'm a Full-Stack Developer with a strong passion in
                        database architecture and optimization. I've designed
                        and implemented end-to-end applications, integrating
                        solutions across the entire software stack, and
                        successfully reduced an average 45% in query execution
                        time through database optimization. My focus on
                        continual learning drives me to deliver impactful and
                        scalable software solutions.
                    </h6>
                </div>
                <div className="text-justify">
                    <h6>
                        Outside of my job, I'm really into photography. I enjoy
                        capturing landscapes, people, and animals, which allows
                        me to express my creativity and attention to detail in a
                        different way. In addition to photography, I have a
                        passion for both indoor and outdoor sports such as
                        badminton, tennis, jogging, swimming, and hiking.
                    </h6>
                </div>
            </div>
            <Skill />
        </section>
    );
}
