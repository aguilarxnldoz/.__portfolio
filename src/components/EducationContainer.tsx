import EducationPoint from "./custom/education/EducationPoint";
import ProgressPoint from "./custom/education/ProgressPoint";

export default function EducationContainer() {
    return (
        <>
            <div className="mx-auto my-20 sm:w-200">
                <EducationPoint
                    size={64}
                    school="British Columbia Institute of Technology"
                    year="2024 - 2026"
                    major="Diploma in Full-stack Web Development"
                    description="Covered technologies in web development such as node.js, react, and python"
                />
                <ProgressPoint size={64} />
                <EducationPoint
                    size={64}
                    school="British Columbia Institue of Technology"
                    year="Current - 2029"
                    major="Bachelor's asdApplied Computer Science (Network Security Applications Development)"
                    description="Learning cybersecurity practices and building secure applications"
                />
                <ProgressPoint size={64} />
                {/* <StopPoint size={64} /> */}
            </div>
        </>
    );
}
