"use client";

import ExperienceCard from "./custom/ExperienceCard";

export default function ExperienceContainer() {
    return (
        <>
            <div className="items-center flex flex-col my-15">
                <ExperienceCard
                    companyName="Vero Ventures - InsurFlow"
                    jobType="internship"
                    role="Software Engineer"
                    workTerm="January 2026 - Present"
                    description="Developed a v2 build for greenfield insurtech application with AI integration. Specifically built the calculation engine to provide 20,000+ life insurance advisors in the United States a fast way to calculate insurance for clients. Technologies Used: NextJS, pgneon + Drizzle ORM, shadcn, openai, docker"
                />
            </div>
        </>
    );
}
