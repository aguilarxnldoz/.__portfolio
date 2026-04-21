"use client";

import ExperienceCard from "./custom/ExperienceCard";

export default function ExperienceContainer() {
	return (
		<>
			<div className="items-center flex flex-col gap-4 my-15">
				<ExperienceCard
					companyName="Vero Ventures - InsurFlow"
					jobType="internship"
					role="Software Engineer"
					workTerm="January 2026 - April 2026"
					description="Developed a build for greenfield insurtech application with AI integration. Specifically built the calculation engine to provide 20,000+ life insurance advisors in the United States a fast way to calculate insurance for clients. Technologies Used: NextJS,  + drizzle orm, shadcn, openai, docker"
				/>
				<ExperienceCard
					companyName="Vince Villanueva Real Estate"
					jobType="freelance"
					role="Full-stack Developer"
					workTerm="March 2026 - current"
					description="Built a Full-stack lead-generation website for a Realtor in the Greater Vancouver & Fraser Valley area to increase client-base and improve professional branding. Application integrates automation for emails, and filling Excel sheets "
				/>
			</div>
		</>
	);
}
