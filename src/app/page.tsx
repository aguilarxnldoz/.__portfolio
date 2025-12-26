import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import MovingBars from "@/components/MovingBars";
import TechStackContainer from "@/components/TechStack";
import Ghost from "@/components/custom/Ghost";

export default function Home() {
    return (
        <>
            <PageWrapper>
                <div className="md:flex md:flex-row md:justify-center md:gap-20 ">
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
                            <h1 className="text-2xl text-dark">Nald O. Aguilar</h1>
                            <h2>Full-stack Web Developer</h2>
                        </div>
                        <div className="text-center sm:w-100 mx-auto bg-platinum p-3 mt-5 rounded-2xl shadow-md">
                            <p>I am a 2nd year student in Computer Science that has an unhealthy addiction to tech. Using modern technologies, I build, deploy, and scale applications to industry standards.</p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
            <MovingBars />

            <PageWrapper>
                <div className="flex flex-col items-center">
                    <section
                        id="experience-section"
                        className="hidden w-full items-center m-auto"
                    >
                        <h2>Experience</h2>
                    </section>

                    <section
                        id="projects-section"
                        className="w-full items-center m-auto"
                    >
                        <div className="flex flex-row gap-20 sm:gap-10">
                            <h2>Projects</h2>
                            <Ghost className="w-10 h-10" />
                        </div>
                    </section>

                    <section
                        id="techstack-section"
                        className="w-full items-center m-auto"
                    >
                        <div className="flex flex-row gap-20 sm:gap-10">
                            <h2 className="">Tech Stack</h2>
                            <Ghost className="w-10 h-10" />
                        </div>
                        <TechStackContainer />
                    </section>
                </div>
            </PageWrapper>
        </>
    );
}
