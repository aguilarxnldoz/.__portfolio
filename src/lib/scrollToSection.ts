export function scrollToSection(sectionId: string, extraOffset = 24): void {
	if (typeof window === "undefined") return;

	const section = document.getElementById(sectionId);
	if (!section) return;

	const desktopNavbar = document.getElementById("navigation-bar");
	const desktopNavbarHeight = desktopNavbar?.getBoundingClientRect().height ?? 0;
	const scrollOffset = desktopNavbarHeight + extraOffset;

	const sectionTop = section.getBoundingClientRect().top + window.scrollY;
	const scrollTop = Math.max(sectionTop - scrollOffset, 0);

	window.scrollTo({top: scrollTop, behavior: "smooth"});

	window.history.replaceState(
		null,
		"",
		`${window.location.pathname}${window.location.search}`,
	);
}
