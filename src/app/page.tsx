// import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import MovingBars from "@/components/MovingBars";
import TechStackContainer from "@/components/TechStack";
import Ghost from "@/components/custom/Ghost";
import ProjectsContainer from "@/components/Projects";
import EmailForm from "@/components/EmailForm";
import ExperienceContainer from "@/components/Experience";
import EducationContainer from "@/components/EducationContainer";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
	return (
		<>
			<PageWrapper>
				<div className="md:flex md:flex-row md:justify-center md:gap-20 md:my-50">
					{/* <div className="flex flex-col-reverse items-center gap-5">
                        <Image
                            className="rounded-full sm:rounded-2xl"
                            src={"/naldouche.jpg"}
                            alt="Nald Ozem Aguilar"
                            width={300}
                            height={300}
                        />
                    </div> */}
					<div>
						<div className="text-crimson text-center">
							<h1 className="text-2xl text-dark mb-6 sm:mb-3 mt-2.5 w-full">Nald O. Aguilar</h1>
							<div className="flex flex-row sm:space-x-5 ">
								<Ghost className="w-14 sm:w-10 h-10" />
								<h2>Full-stack Web Developer</h2>
								<Ghost className="w-14 sm:w-10 h-10" />
							</div>
						</div>
						<div className="text-center sm:w-100 mx-auto bg-platinum p-3 mt-5 rounded-2xl shadow-md">
							<p>I am a 2nd year student in Computer Science with an unhealthy addiction to tech. Using modern technologies, I build, deploy, and scale applications to industry standards.</p>
						</div>
					</div>
				</div>
			</PageWrapper>

			<MovingBars />

			<PageWrapper>
				<div className="flex flex-col items-center mt-20 md:mt-35">
					<section
						id="experience-section"
						className="w-full items-center m-auto my-10"
					>
						<div className="flex flex-row gap-5 sm:gap-10">
							<Ghost className="w-10 h-10 bottom-2.5" />
							<h2
								id="experience"
								tabIndex={-1}
							>
								Experience
							</h2>
						</div>
						<ExperienceContainer />
					</section>
					{/* 🍔 🍔 🔥 REMEMBER TO TAKE THIS OUT AFTER THE SEMESTER ENDS !!!!! */}
					{/* 🍔 🍔 🔥 REMEMBER TO TAKE THIS OUT AFTER THE SEMESTER ENDS !!!!! */}
					{/* 🍔 🍔 🔥 REMEMBER TO TAKE THIS OUT AFTER THE SEMESTER ENDS !!!!! */}
					{/* 🍔 🍔 🔥 REMEMBER TO TAKE THIS OUT AFTER THE SEMESTER ENDS !!!!! */}
					<section
						id="case-study-section"
						className="w-full items-center m-auto my-10"
					>
						<div className="flex flex-row gap-5 sm:gap-10 justify-center">
							<Ghost className="w-10 h-10 bottom-2.5" />
							<h2 id="case-study">Case Study</h2>
							<Ghost className="w-10 h-10 bottom-2.5" />
						</div>

						<CaseStudy />
					</section>
					<section
						id="projects-section"
						className="w-full items-center m-auto my-10"
					>
						<div className="flex flex-row gap-5 sm:gap-10">
							<Ghost className="w-10 h-10 bottom-2.5" />
							<h2
								id="projects"
								tabIndex={-1}
							>
								Projects
							</h2>
						</div>

						<ProjectsContainer />
					</section>
					<section
						id="techstack-section"
						className="w-full items-center m-auto my-10"
					>
						<div className="flex flex-row gap-5 sm:gap-10 w-auto">
							<Ghost className="w-10 h-10 bottom-2.5" />
							<h2
								id="techstack"
								tabIndex={-1}
							>
								Tech Stack
							</h2>
						</div>
						<TechStackContainer />
					</section>
					<section
						id="education-section"
						className="w-full items-center m-auto my-10"
					>
						<div className="flex flex-row gap-5 sm:gap-10 w-auto">
							<Ghost className="w-10 h-10 bottom-2.5" />
							<h2
								id="education"
								tabIndex={-1}
							>
								Education
							</h2>
						</div>
						<EducationContainer />
					</section>
					<section
						id="contact-section"
						className="w-full items-center m-auto my-10"
					>
						<div className="flex flex-row gap-5 sm:gap-10">
							<Ghost className="w-10 h-10 bottom-2.5" />
							<h2 id="contact">Send me a Message!</h2>
						</div>
						<EmailForm />
					</section>
				</div>
			</PageWrapper>
		</>
	);
}
