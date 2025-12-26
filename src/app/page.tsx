import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import MovingBars from "@/components/MovingBars";
import TechStackContainer from "@/components/TechStack";
import Ghost from "@/components/custom/Ghost";
import ProjectsContainer from "@/components/Projects";

export default function Home() {
    return (
        <>
            <PageWrapper>
                <div className="md:flex md:flex-row md:justify-center md:gap-20 md:my-50 md:pt-5">
                    <div className="flex flex-col-reverse items-center gap-5">
                        <Image
                            className="rounded-full sm:rounded-2xl"
                            src={"/naldouche.jpg"}
                            alt="Nald Ozem Aguilar"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div>
                        <div className="text-crimson text-center">
                            <h1 className="text-2xl text-dark mb-6 sm:mb-3 mt-2.5">Nald O. Aguilar</h1>
                            <div className="flex flex-row sm:space-x-5 ">
                                <Ghost className="w-14 sm:w-10 h-10" />
                                <h2>Full-stack Web Developer</h2>
                                <Ghost className="w-14 sm:w-10 h-10" />
                            </div>
                        </div>
                        <div className="text-center sm:w-100 mx-auto bg-platinum p-3 mt-5 rounded-2xl shadow-md">
                            <p>I am a 2nd year student in Computer Science that has an unhealthy addiction to tech. Using modern technologies, I build, deploy, and scale applications to industry standards.</p>
                        </div>
                    </div>
                </div>
            </PageWrapper>

            <MovingBars />

            <PageWrapper>
                <div className="flex flex-col items-center mt-20 md:mt-35">
                    <section
                        id="experience-section"
                        className="hidden w-full items-center m-auto"
                    >
                        <h2 id="experience">Experience</h2>
                    </section>

                    <section
                        id="projects-section"
                        className="w-full items-center"
                    >
                        <div className="flex flex-row gap-5 sm:gap-10">
                            <Ghost className="w-10 h-10 bottom-2.5" />
                            <h2 id="projects">Projects</h2>
                        </div>

                        <ProjectsContainer />
                    </section>

                    <section
                        id="techstack-section"
                        className="w-full items-center m-auto my-20"
                    >
                        <div className="flex flex-row gap-5 sm:gap-10">
                            <Ghost className="w-10 h-10 bottom-2.5" />
                            <h2 id="techstack">Tech Stack</h2>
                        </div>
                        <TechStackContainer />
                    </section>
                </div>
            </PageWrapper>
        </>
    );
}
