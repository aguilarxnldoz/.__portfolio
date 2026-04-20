"use client";

import {motion, useScroll, useTransform, useAnimation} from "motion/react";
import Ghost from "@/components/custom/Ghost";
import {Sparkle} from "lucide-react";
import {useEffect, useState} from "react";

const AmbientStarComponent = () => {
	const controls = useAnimation();

	useEffect(() => {
		let isMounted = true;
		const runAnimation = async () => {
			// Initial random delay
			await new Promise((r) => setTimeout(r, Math.random() * 5000));

			while (isMounted) {
				const top = `${Math.random() * 100}%`;
				const left = `${Math.random() * 100}%`;
				const baseScale = Math.random() * 0.7 + 0.4;
				const durationIn = Math.random() * 2 + 1.5;
				const durationOut = Math.random() * 2 + 1.5;
				const sleepDelay = Math.random() * 2000;

				controls.set({top, left, opacity: 0, scale: baseScale});

				if (!isMounted) break;

				await controls.start({
					opacity: Math.random() * 0.5 + 0.3,
					transition: {duration: durationIn, ease: "easeInOut"},
				});

				if (!isMounted) break;

				await controls.start({
					opacity: 0,
					transition: {duration: durationOut, ease: "easeInOut"},
				});

				if (!isMounted) break;
				await new Promise((r) => setTimeout(r, sleepDelay));
			}
		};
		runAnimation();
		return () => {
			isMounted = false;
			controls.stop();
		};
	}, [controls]);

	return (
		<motion.div
			className="absolute text-crimson"
			animate={controls}
			initial={{opacity: 0}}
		>
			<Sparkle className="fill-crimson w-4 h-4" />
		</motion.div>
	);
};

const ShootingStarComponent = () => {
	const controls = useAnimation();

	useEffect(() => {
		let isMounted = true;
		const runAnimation = async () => {
			await new Promise((r) => setTimeout(r, Math.random() * 10000));

			while (isMounted) {
				const top = `${Math.random() * 50 - 20}%`;
				const left = `${Math.random() * 80 + 20}%`;
				const distance = Math.random() * 400 + 300;
				const duration = Math.random() * 0.6 + 0.6;
				const sleepDelay = Math.random() * 8000 + 5000;
				const size = Math.random() * 0.5 + 0.7;

				controls.set({top, left, opacity: 0, x: 0, y: 0, scale: 0});
				if (!isMounted) break;

				await controls.start({
					opacity: [0, 1, 1, 0],
					x: -distance,
					y: distance,
					scale: [0, size, size, 0],
					transition: {duration, ease: "easeOut"},
				});
				if (!isMounted) break;

				await new Promise((r) => setTimeout(r, sleepDelay));
			}
		};
		runAnimation();
		return () => {
			isMounted = false;
			controls.stop();
		};
	}, [controls]);

	return (
		<motion.div
			className="absolute text-crimson flex items-center justify-center"
			animate={controls}
			initial={{opacity: 0}}
		>
			<div className="relative flex items-center justify-center -rotate-45 origin-center">
				<div className="absolute left-1/2 w-20 h-0.5 bg-linear-to-r from-crimson to-transparent blur-[1px]" />
				<Sparkle className="fill-crimson relative z-10 w-5 h-5" />
			</div>
		</motion.div>
	);
};

export default function HeroHeader() {
	const {scrollY} = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsClient(true), 0);
		return () => clearTimeout(timer);
	}, []);

	if (!isClient) {
		return <div className="min-h-[70vh]"></div>; // Prevent hydration mismatch
	}

	return (
		<motion.div
			style={{y: y1, opacity}}
			className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-5 pb-10 md:py-32 min-h-[70vh]"
		>
			{/* Starry Sky Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 rounded-3xl">
				{/* Ambient Twinkling Stars */}
				{Array.from({length: 40}).map((_, i) => (
					<AmbientStarComponent key={`ambient-${i}`} />
				))}

				{/* Shooting Stars */}
				{Array.from({length: 6}).map((_, i) => (
					<ShootingStarComponent key={`shooting-${i}`} />
				))}
			</div>

			<div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
				<motion.div
					initial={{opacity: 0, y: 30}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.2}}
					className="text-crimson"
				>
					<h1 className="text-4xl md:text-6xl font-bold text-dark mb-4 tracking-tight md:text-center">Nald O. Aguilar</h1>
					<div className="flex items-center justify-center md:justify-start gap-4 mb-6">
						<Ghost className="w-10 h-8 md:w-10 md:h-10 text-crimson animate-bounce" />
						<h2 className="text-xl md:text-2xl font-medium text-crimson/80">Full-stack Web Developer</h2>
						<Ghost className="w-10 h-8 md:w-10 md:h-10 text-crimson animate-bounce delay-200" />
					</div>
				</motion.div>

				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.4}}
					className="bg-platinum/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg border border-platinum max-w-lg"
				>
					<p className="text-base md:text-lg text-dark/90 leading-relaxed">
						I am a 2nd year student in Computer Science with an unhealthy addiction to tech. Using modern technologies, I build, deploy, and scale applications to industry standards.
					</p>
				</motion.div>
			</div>
		</motion.div>
	);
}
