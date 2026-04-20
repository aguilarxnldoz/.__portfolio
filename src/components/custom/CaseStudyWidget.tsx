"use client";

import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {X} from "lucide-react";
import Image from "next/image";
import URLButtons from "./UrlButton";

interface CaseStudyWidgetProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CaseStudyWidget({isOpen, onClose}: CaseStudyWidgetProps) {
	const dialogRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") onClose();
		}

		if (isOpen) window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isOpen, onClose]);

	useEffect(() => {
		if (isOpen) dialogRef.current?.focus();
	}, [isOpen]);

	if (!isOpen) return null;

	const modalContent = (
		<div
			className="fixed inset-0 z-100 flex items-center justify-center"
			role="dialog"
			aria-modal="true"
			aria-label="Panday Case Study"
		>
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={onClose}
			/>

			<div
				ref={dialogRef}
				tabIndex={-1}
				className="relative w-[min(95%,1200px)] max-h-[95vh] overflow-y-auto bg-platinum rounded-2xl p-6 shadow-2xl border border-dark z-10 text-dark"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-start justify-between gap-4">
					<div className="flex items-center gap-4">
						<Image
							src="/panday-icon.svg"
							alt="Panday Logo"
							width={60}
							height={60}
						/>
						<div>
							<h1 className="text-3xl font-bold">Panday</h1>
							<h3 className="text-xl font-semibold">AI-Powered Career Roadmap for Skilled Trades</h3>
						</div>
					</div>
					<button
						className="p-2 rounded-md hover:bg-black/5"
						onClick={onClose}
						aria-label="Close dialog"
					>
						<X />
					</button>
				</div>

				<div className="mt-8 space-y-8">
					<section className="rounded-xl border border-dark bg-white p-4">
						<URLButtons
							githubUrl="https://github.com/panday-team/panday"
							applicationUrl="https://panday.app/roadmap"
						/>
					</section>

					<div className="space-y-8 text-neutral-800 leading-relaxed">
						<section>
							<h2 className="text-2xl font-bold mb-2">Role</h2>
							<p className="font-semibold text-lg">Full-Stack Developer (AI Integration & Frontend)</p>
							<p>Scope covered RAG pipeline design, chat API implementation, source-citation UX, and roadmap interaction behavior in the React Flow experience.</p>
							<ul className="list-disc pl-6 space-y-1 mt-3">
								<li>Designed retrieval logic that grounds responses in official SkilledTradesBC and career documentation</li>
								<li>Implemented streaming chat API behavior and citation payload handling in the Next.js stack</li>
								<li>Connected roadmap state with AI prompts so responses remain relevant to each learner stage</li>
								<li>Built source cards with snippet previews and direct links back to the related roadmap node</li>
							</ul>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Background & Problem</h2>
							<p className="mb-4">Electrical certification pathways in British Columbia require navigating foundation programs, apprenticeship levels, technical training blocks, and Red Seal requirements across fragmented resources.</p>
							<p className="mb-4">
								Research on existing resources identified high cognitive load from long pages, hidden expandable sections, and disconnected next steps. Panday was built to convert that complexity into a visual sequence with contextual
								AI support.
							</p>

							<div className="my-6 w-full rounded-xl overflow-hidden border border-dark">
								<Image
									src="/project-images/panday/panday_sample_1.png"
									alt="Panday interactive roadmap overview"
									width={1200}
									height={675}
									className="w-full h-auto object-cover"
								/>
							</div>

							<p className="mb-2">Core product capabilities:</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>Interactive node-based roadmap for each stage of progression</li>
								<li>Detailed requirements and checklists behind every milestone</li>
								<li>AI chat responses grounded in source-cited documents</li>
								<li>Progress tracking and persisted conversation history</li>
							</ul>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">The Challenge</h2>
							<p className="mb-4">Three recurring constraints shaped both the technical architecture and the user experience direction.</p>
							<div className="space-y-4">
								<div>
									<h3 className="font-bold text-lg">1. Accuracy Without Compromise</h3>
									<p>Career decisions depend on correct requirements. Answers could not rely on generic generation alone; every response needed grounding in verifiable source material.</p>
								</div>
								<div>
									<h3 className="font-bold text-lg">2. Complexity Made Understandable</h3>
									<p>The system includes embeddings, vector retrieval, streaming, and tool invocation, but the interface had to stay simple enough for non-technical users entering trades for the first time.</p>
								</div>
								<div>
									<h3 className="font-bold text-lg">3. Trust Through Transparency</h3>
									<p>AI guidance needed visible evidence. Users should be able to inspect where information came from, preview source snippets, and jump directly to the relevant roadmap node.</p>
								</div>
							</div>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">User Data, Research, and Visual Metrics</h2>
							<p className="mb-4">Discovery work combined interviews, survey signals, and usability teardown findings to define both product requirements and interaction priorities.</p>

							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
								<div className="rounded-xl border border-dark bg-white p-4">
									<p className="text-3xl font-extrabold">3</p>
									<p className="font-semibold">Trade interviews</p>
									<p className="text-sm text-neutral-700">Initial interviews with people in trades shaped pain-point definitions.</p>
								</div>
								<div className="rounded-xl border border-dark bg-white p-4">
									<p className="text-3xl font-extrabold">2</p>
									<p className="font-semibold">Survey channels</p>
									<p className="text-sm text-neutral-700">Survey outreach used BCIT trade students and Reddit communities.</p>
								</div>
								<div className="rounded-xl border border-dark bg-white p-4">
									<p className="text-3xl font-extrabold">3,200+</p>
									<p className="font-semibold">Source files extracted</p>
									<p className="text-sm text-neutral-700">SkilledTradesBC electrician pages were transformed into structured JSON for retrieval.</p>
								</div>
								<div className="rounded-xl border border-dark bg-white p-4">
									<p className="text-3xl font-extrabold">5,461px</p>
									<p className="font-semibold">Legacy page depth</p>
									<p className="text-sm text-neutral-700">Competitor usability review highlighted scroll-heavy information architecture.</p>
								</div>
							</div>

							<div className="my-6 w-full rounded-xl overflow-hidden border border-dark">
								<Image
									src="/project-images/panday/panday_sample_3.png"
									alt="Panday technical architecture and information flow"
									width={1200}
									height={675}
									className="w-full h-auto object-cover"
								/>
							</div>

							<p className="mb-2">Research methods applied:</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>User interviews to capture pain points around sequencing and requirements clarity</li>
								<li>Survey feedback to validate personas and update user-flow priorities</li>
								<li>Competitive teardown of incumbent pathways and information hierarchy</li>
								<li>Source corpus preparation for grounded RAG responses</li>
							</ul>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Competitive Analysis</h2>
							<p className="mb-4">The product direction came from evaluating common alternatives and targeting their weakest points.</p>
							<div className="overflow-x-auto rounded-xl border border-dark bg-white">
								<table className="min-w-full text-left text-sm">
									<thead className="bg-neutral-100 text-neutral-900">
										<tr>
											<th className="px-4 py-3 font-semibold">Alternative</th>
											<th className="px-4 py-3 font-semibold">Strength</th>
											<th className="px-4 py-3 font-semibold">Gap</th>
											<th className="px-4 py-3 font-semibold">Panday response</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-t border-neutral-200">
											<td className="px-4 py-3 align-top">Official SkilledTradesBC pages</td>
											<td className="px-4 py-3 align-top">Authoritative policy and requirements</td>
											<td className="px-4 py-3 align-top">Long pages, hidden sections, fragmented flow</td>
											<td className="px-4 py-3 align-top">Single roadmap with contextual node details</td>
										</tr>
										<tr className="border-t border-neutral-200">
											<td className="px-4 py-3 align-top">Static guides and PDF checklists</td>
											<td className="px-4 py-3 align-top">Clear content once discovered</td>
											<td className="px-4 py-3 align-top">No personalization, no interaction, weak progression visibility</td>
											<td className="px-4 py-3 align-top">Personalized path state with progress tracking</td>
										</tr>
										<tr className="border-t border-neutral-200">
											<td className="px-4 py-3 align-top">Generic AI chat assistants</td>
											<td className="px-4 py-3 align-top">Fast natural-language answers</td>
											<td className="px-4 py-3 align-top">No domain grounding and weak citation confidence</td>
											<td className="px-4 py-3 align-top">RAG-backed responses with source cards and node links</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">AI Tooling Decision: Gemini + Vercel AI SDK</h2>
							<p className="mb-4">
								Gemini was selected as the primary model in this project phase because the generous free tier supported sustained chat usage for demos, guest sessions, and rapid prompt iteration without immediate per-message cost
								pressure.
							</p>
							<ul className="list-disc pl-6 space-y-1 mb-4">
								<li>Lower cost barrier enabled broader testing while preserving a free user experience</li>
								<li>Vercel AI SDK kept chat streaming, tool calls, and provider wiring in one Next.js stack</li>
								<li>Provider abstraction supported quick comparison across Gemini, Claude, and GPT models</li>
								<li>Single-stack architecture reduced deployment complexity versus a separate Python inference service</li>
							</ul>
							<p>Model choice was treated as an operational decision as much as a quality decision: maintain accessibility first, then optimize model behavior with grounded retrieval and citation UX.</p>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Design Process: RAG Pipeline</h2>
							<p className="mb-4">Pipeline design was broken into four stages so each part could be validated independently and improved over time.</p>
							<div className="space-y-4">
								<div>
									<h3 className="font-semibold text-lg">Stage 1: Document Preparation</h3>
									<p>Official references were chunked into structured records and tagged to roadmap nodes, creating a direct link between source corpus and UI navigation.</p>
								</div>
								<div>
									<h3 className="font-semibold text-lg">Stage 2: Embedding Generation</h3>
									<p>Each chunk was converted into vectors so semantically related questions and content could match even when wording differed.</p>
								</div>
								<div>
									<h3 className="font-semibold text-lg">Stage 3: Query Retrieval</h3>
									<p>User queries were embedded and compared against the index to retrieve the highest-signal context for the response.</p>
								</div>
								<div>
									<h3 className="font-semibold text-lg">Stage 4: Context Injection and Citation Rendering</h3>
									<p>Retrieved context was injected into the model prompt and returned with source references, enabling inline citation cards in the chat interface.</p>
								</div>
							</div>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Iteration Timeline</h2>
							<p className="mb-4">The solution evolved across multiple design and implementation passes rather than a single launch.</p>
							<div className="grid gap-6">
								<article className="rounded-xl border border-dark bg-white p-4">
									<h3 className="font-bold text-lg mb-2">Iteration 1: Structure First</h3>
									<div className="rounded-lg overflow-hidden border border-neutral-200 mb-3">
										<Image
											src="/project-images/panday/panday_sample_5.png"
											alt="Panday early roadmap layout"
											width={800}
											height={450}
											className="w-full h-auto object-cover"
										/>
									</div>
									<ul className="list-disc pl-5 space-y-1 text-sm">
										<li>Focused on sequence clarity and keeping progress straight-forward</li>
										<li>Identified need for stronger context and personalization to each user's situation</li>
									</ul>
								</article>

								<article className="rounded-xl border border-dark bg-white p-4">
									<h3 className="font-bold text-lg mb-2">Iteration 2: Interactive Flow</h3>
									<div className="rounded-lg overflow-hidden border border-neutral-200 mb-3">
										<Image
											src="/project-images/panday/panday_sample_1.png"
											alt="Panday interactive node experience"
											width={800}
											height={450}
											className="w-full h-auto object-cover"
										/>
									</div>
									<ul className="list-disc pl-5 space-y-1 text-sm">
										<li>Added clickable milestones, checklists, and progress states</li>
										<li>Improved pan/zoom and node feedback for easier navigation</li>
									</ul>
								</article>

								<article className="rounded-xl border border-dark bg-white p-4">
									<h3 className="font-bold text-lg mb-2">Iteration 3: Trust Layer</h3>
									<div className="rounded-lg overflow-hidden border border-neutral-200 mb-3">
										<Image
											src="/project-images/panday/panday_sample_4.png"
											alt="Panday source citation cards in AI chat"
											width={800}
											height={450}
											className="w-full h-auto object-cover"
										/>
									</div>
									<ul className="list-disc pl-5 space-y-1 text-sm">
										<li>Introduced inline citations with snippet preview and node links</li>
										<li>Differentiated informational questions from action requests</li>
									</ul>
								</article>
							</div>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Final Solution and Technical Highlights</h2>
							<p className="mb-4">The final system combines a visual roadmap interface with a grounded AI assistant, designed for clarity, trust, and maintainability.</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Visual roadmap model:</strong> React Flow presents each milestone as a connected node with level-specific requirements, resources, and checklists.
								</li>
								<li>
									<strong>Grounded chat architecture:</strong> Retrieval-Augmented Generation with source chunking, semantic lookup, and citation rendering in the final response.
								</li>
								<li>
									<strong>Hybrid storage strategy:</strong> JSON-backed data path for lightweight operation and PostgreSQL vector support for scale-up scenarios.
								</li>
								<li>
									<strong>Streaming UX:</strong> Real-time answer streaming with conversational latency and clearer interaction flow.
								</li>
								<li>
									<strong>Safe action model:</strong> AI-created items are proposed first, then confirmed by the user before persistence.
								</li>
								<li>
									<strong>Context-aware responses:</strong> Prompt context includes roadmap state so &quot;next step&quot; guidance aligns to the user&apos;s current level.
								</li>
								<li>
									<strong>Reliability controls:</strong> Sliding-window rate limiting, input validation, and tested API paths to stabilize production behavior.
								</li>
							</ul>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Outcome</h2>
							<p className="mb-4">
								Panday turns a fragmented certification journey into a single guided interface where users can see next steps, ask contextual questions, and verify answers through transparent citations. The case study now reflects
								research evidence, competitive positioning, iteration history, and rationale for AI tooling decisions.
							</p>
						</section>
					</div>
				</div>

				<div className="mt-8 pt-4 border-t border-neutral-300 flex justify-end gap-3">
					<button
						onClick={onClose}
						className="px-4 py-2 rounded-md bg-transparent border border-dark font-medium hover:bg-neutral-100 transition-colors"
					>
						Close Case Study
					</button>
				</div>
			</div>
		</div>
	);

	if (typeof window === "undefined") return null;

	return createPortal(modalContent, document.body);
}
