import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nald Aguilar | 👺",
    description: "Personal Web-portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jetBrainsMono.className} min-h-screen antialiased`}>
                <NavigationBar />
                {children}
            </body>
        </html>
    );
}
