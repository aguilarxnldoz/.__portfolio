import ShowStack from "./custom/ShowStack";

export default function TechStackContainer() {
    return (
        <>
            <div className="md:w-auto mx-auto p-3.5 mt-10 md:mt-20 xl:w-210 ">
                <div className="opacity-80 rounded-xl w-full lg:w-200 m-auto">
                    <div className="grid grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-5 m-auto lg:w-200 p-2">
                        <ShowStack
                            src="techstack-icons/typescript-icon.svg"
                            alt="TypeScript"
                            title="TypeScript"
                        />
                        <ShowStack
                            src="techstack-icons/react-icon.svg"
                            alt="React.js"
                            title="React"
                        />
                        <ShowStack
                            src="techstack-icons/next-icon.svg"
                            alt="Next.JS"
                            title="Next.JS"
                        />
                        <ShowStack
                            src="techstack-icons/tailwindcss-icon.svg"
                            alt="TailwindCSS"
                            title="TailwindCSS"
                        />

                        <ShowStack
                            src="techstack-icons/html-icon.svg"
                            alt="HTML5"
                            title="HTML"
                        />
                        <ShowStack
                            src="techstack-icons/css-icon.svg"
                            alt="CSS3"
                            title="CSS"
                        />
                        <ShowStack
                            src="techstack-icons/python-icon.svg"
                            alt="Python"
                            title="Python"
                        />
                        <ShowStack
                            src="techstack-icons/sql-icon.svg"
                            alt="MySQL"
                            title="SQL"
                            className="pt-2"
                        />
                        <ShowStack
                            src="techstack-icons/redis-icon.svg"
                            alt="Redis"
                            title="Redis"
                        />
                        <ShowStack
                            src="techstack-icons/docker-icon.svg"
                            alt="Docker"
                            title="Docker"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
