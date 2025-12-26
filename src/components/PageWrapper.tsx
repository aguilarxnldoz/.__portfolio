export default function PageWrapper({children}: {children: React.ReactNode}) {
    return (
        <>
            <main
                className="w-full px-5 sm:px-20"
                id="page-wrapper"
            >
                {children}
            </main>
        </>
    );
}
