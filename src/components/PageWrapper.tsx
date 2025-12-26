export default function PageWrapper({children}: {children: React.ReactNode}) {
    return (
        <>
            <main
                className="w-full px-5 sm:px-100"
                id="page-wrapper"
            >
                {children}
            </main>
        </>
    );
}
