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
import HeroHeader from "@/components/HeroHeader";

export default function Home() {
	return (
		<>
			<PageWrapper>
				<HeroHeader />
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
					{/* <section */}
					{/* 	id="case-study-section" */}
					{/* 	className="w-full items-center m-auto my-10" */}
					{/* > */}
					{/* 	<div className="flex flex-row gap-5 sm:gap-10 justify-center"> */}
					{/* 		<Ghost className="w-10 h-10 bottom-2.5" /> */}
					{/* 		<h2 id="case-study">Case Study</h2> */}
					{/* 		<Ghost className="w-10 h-10 bottom-2.5" /> */}
					{/* 	</div> */}
					{/**/}
					{/* 	<CaseStudy /> */}
					{/* </section> */}
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
