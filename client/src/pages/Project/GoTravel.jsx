import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { NavLink } from "react-router-dom";

export function GoTravel() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <NavbarBtn toggleNavbar={toggleNavbar} />
            {navbarOpen ? <Navbar /> : null}
            <div className="relative">
                <div className="bg-primary-200 px-10 py-24 text-center sm:text-7xl text-5xl text-primary-600 font-bold">
                    <p>SMART TOURISM GUIDE APP, GO.TRAVEL</p>
                </div>
                <div className="xl:px-40 lg:px-32 px-10 py-10">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 place-items-center mb-16">
                        <img
                            src="/portfolio/assets/project/fyp-homepage.png"
                            alt="Go.Travel Homepage"
                            className="max-h-projectimg w-auto"
                        />
                        <img
                            src="/portfolio/assets/project/fyp-nearby-restaurant.png"
                            alt="Go.Travel Nearby Restaurant"
                            className="max-h-projectimg w-auto"
                        />
                        <img
                            src="/portfolio/assets/project/fyp-google-map.jpg"
                            alt="Go.Travel Google Maps"
                            className="max-h-projectimg w-auto"
                        />
                    </div>
                    <div className="mb-8">
                        <div className="flex flex-row gap-3">
                            <div>
                                <h3>ABOUT THIS PROJECT</h3>
                            </div>
                            <div>
                                <p className="px-2 py-1 rounded-full bg-green-200 text-sm">
                                    Completed
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 text-justify">
                            <h6>
                                Go.Travel is a Smart Tourism Guide application
                                developed using Java for my final year project,
                                it is designed to enhance the travel experience
                                for travelers. The project was initiated as a
                                mobile application to address the challenges
                                faced by travelers in discovering nearby
                                attractions, finding suitable accommodations,
                                and staying informed about travel-related news.
                            </h6>
                            <h6>
                                The primary challenge I faced during the
                                development of Go.Travel was that it was my
                                first mobile project for my FYP. I undertook
                                extensive learning through tutorials and courses
                                to master the intricacies of mobile app
                                development and successfully implement the
                                desired features.
                            </h6>
                            <h6>
                                My journal article on this project was published
                                by the Journal of Advances in Artificial Life
                                Robotics in October 2022 —{" "}
                                <NavLink
                                    to={
                                        "https://www.jstage.jst.go.jp/article/jaalr/3/2/3_7/_article"
                                    }
                                >
                                    <span className="text-primary-600 underline font-semibold">
                                        Publication
                                    </span>
                                </NavLink>
                            </h6>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div>
                            <h5>Key Features</h5>
                        </div>
                        <div className="text-justify">
                            <ul className="list-disc">
                                <li>
                                    <p>
                                        <span className="font-bold">
                                            Location-Based Services:
                                        </span>{" "}
                                        Utilizing the Google Maps Location API,
                                        Go.Travel can pinpoint the user's
                                        current location in real time. This
                                        feature enables the app to suggest
                                        nearby places of interest, including
                                        restaurants, hotels, educational sites,
                                        leisure spots, and attractions.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">
                                            Google Maps Integration:
                                        </span>{" "}
                                        Seamless integration with the Google
                                        Maps API allows users to access detailed
                                        maps directly within the application.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">
                                            Travel Forum:
                                        </span>{" "}
                                        Go.Travel includes a travel forum where
                                        users can share their travel
                                        experiences, exchange valuable tips, and
                                        connect with fellow travelers. This
                                        community-driven feature adds a social
                                        dimension to the app, fostering a sense
                                        of belonging among users.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">
                                            Favorites Management:
                                        </span>{" "}
                                        Users can personalize their travel
                                        experiences by saving their favorite
                                        places within the app. This feature
                                        facilitates quick access to preferred
                                        locations and helps users plan their
                                        trips more efficiently.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">
                                            Review and Rating:
                                        </span>{" "}
                                        Go.Travel empowers users to contribute
                                        to the community by allowing them to
                                        review and rate the places they visit.
                                        This feedback mechanism not only helps
                                        other travelers make informed decisions
                                        but also enriches the overall user
                                        experience.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-bold">
                                            Latest Travel News:
                                        </span>{" "}
                                        Stay updated with the latest
                                        travel-related news through Go.Travel's
                                        integration with a News API. Users can
                                        access curated news articles directly
                                        from the app, keeping them informed and
                                        engaged.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>TECH STACK</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="rounded border border-black px-2 py-1">
                                <p>Java</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Firebase</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Google Location API</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Google Maps API</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>News API</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Android Studio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
