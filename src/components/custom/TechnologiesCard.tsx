type TechnologiesCardProps = {
    technology: string;
};

export default function TechnologiesCard({technology}: TechnologiesCardProps) {
    return (
        <>
            <button className="cursor-pointer uppercase bg-white px-4 py-2 hover:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#DC143C,-0.5rem_-0.5rem_#333333] transition">{technology}</button>
        </>
    );
}
