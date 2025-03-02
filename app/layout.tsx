import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Premium Website Creation Services",
    description: "We offer professional website creation services to help your business succeed online. Contact us today!",
    openGraph: {
        title: "Premium Website Creation Services",
        description: "Boost your online presence with custom website design and development solutions tailored to your needs.",
        url: "https://landing-zeta-ashy.vercel.app/", // Replace with your actual domain
        siteName: "Your Website Creation Service",
        images: [
            {
                url: "https://landing-zeta-ashy.vercel.app/public/seo_image.png", // Replace with your image URL
                width: 1200,
                height: 630,
                alt: "Premium Website Creation Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Premium Website Creation Services",
        description: "Boost your online presence with custom website design and development solutions tailored to your needs.",
        images: ["https://landing-zeta-ashy.vercel.app/public/seo_image.png"], // Replace with your image URL
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
