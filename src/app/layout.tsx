import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import {Analytics} from "@vercel/analytics/next";
import Footer from "@/components/Footer";

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nald Aguilar | 👺",
    description: "Personal Web-portfolio",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
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
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
