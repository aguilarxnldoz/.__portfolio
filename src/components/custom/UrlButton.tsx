import Link from "next/link";
import {Github, Globe} from "lucide-react";

interface IURLButtonProps {
    githubUrl: string;
    applicationUrl: string;
}

export default function URLButtons({githubUrl, applicationUrl}: IURLButtonProps) {
    return (
        <section
            id="url-buttons-section"
            className="w-full mt-10 flex justify-center gap-3"
        >
            <Link
                href={githubUrl}
                target="_blank"
                className="peer/github animate-float flex items-center gap-2 px-6 hover:px-30 py-3 bg-platinum text-dark hover:text-white rounded-md shadow-lg hover:shadow-2xl transition-all duration-1500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-dark/10 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r hover:from-[var(--dark)] hover:to-[var(--crimson)] peer-hover/web:-translate-x-4"
            >
                <Github className="w-5 h-5 group-hover:text-white transition-colors duration-100" />
                <span className="font-medium whitespace-nowrap">GitHub</span>
            </Link>

            <Link
                href={applicationUrl}
                target="_blank"
                className="peer/web animate-float flex items-center gap-2 px-6 hover:px-30 py-3 bg-platinum text-dark hover:text-white rounded-md shadow-lg hover:shadow-2xl transition-all duration-1500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-dark/10 hover:-translate-y-2 hover:scale-110 hover:bg-gradient-to-r hover:from-[var(--dark)] hover:to-[var(--crimson)] peer-hover/github:translate-x-4"
                style={{animationDelay: "1.5s"}}
            >
                <Globe className="w-5 h-5 group-hover:text-white transition-colors duration-100" />
                <span className="font-medium whitespace-nowrap">Web App</span>
            </Link>
        </section>
    );
}
