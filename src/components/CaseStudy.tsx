"use client";

import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import {useState} from "react";
import CaseStudyWidget from "./custom/CaseStudyWidget";
import {motion} from "motion/react";

export default function CaseStudy() {
	const [isPandayOpen, setIsPandayOpen] = useState(false);

	return (
		<>
			<PageWrapper>
				<div className="w-full max-w-full flex flex-col items-center justify-center">
					<h2 className="relative top-20">Panday</h2>
					<button
						id="panday-button"
						onClick={() => setIsPandayOpen(true)}
						className="cursor-pointer outline-none"
					>
						<motion.div
							animate={{
								y: [0, -15, 0],
								filter: ["drop-shadow(0px 0px 0px rgba(220, 20, 60, 0))", "drop-shadow(0px 0px 30px rgba(220, 20, 60, 0.7))", "drop-shadow(0px 0px 0px rgba(220, 20, 60, 0))"],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="rounded-full"
						>
							<Image
								src={"/pandayber.svg"}
								alt="Panday Mascot Logo"
								width={500}
								height={500}
							/>
						</motion.div>
					</button>
				</div>
			</PageWrapper>

			<CaseStudyWidget
				isOpen={isPandayOpen}
				onClose={() => setIsPandayOpen(false)}
			/>
		</>
	);
}
