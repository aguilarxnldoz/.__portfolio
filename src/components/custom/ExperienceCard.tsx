"use client";
import {Divide} from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";

type JobType = "internship" | "full-time" | "freelance" | "part-time";

interface IExperience {
    companyName: string;
    jobType: JobType;
    role: string;
    workTerm: string;
    description: string;
}

export default function ExperienceCard({companyName, jobType, role, workTerm, description}: IExperience) {
    return (
        <div className="p-6 rounded-2xl shadow-crimson shadow-xs border-dark border  overflow-hidden bg-platinum w-full cursor-default">
            <div className="flex flex-col gap-1.5 mb-2.5">
                <h3>{companyName}</h3>
                <h4>
                    {role} - {jobType}
                </h4>
                <h4>{workTerm}</h4>
            </div>
            <div className="w-full max-w-full xl:w-250">
                <p>{description}</p>
            </div>
        </div>
    );
}
