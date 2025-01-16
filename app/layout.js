import { Geist, Geist_Mono, DM_Sans } from "next/font/google";

import "./globals.css";
import Mainheader from "@/components/Mainheader";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "IndianConstitution - Articles of Indian Constitution",
  description:
    "The Constitution of India is the supreme law of India that lays down the framework that defines the political principles, establishes the structure.",
  keywords:
    "Indian Constitution, Indian Constitution Articles, Articles of Indian Constitution, Constitution of India, Indian Constitution in English",
  openGraph: {
    title: "IndianConstitution - Articles of Indian Constitution",
    description:
      "The Constitution of India is the supreme law of India that lays down the framework that defines the political principles, establishes the structure.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${dmSans.variable} antialiased`}>
        <Mainheader />
        <div className="max-w-[1010px] w-[100%] mt-2 mx-auto">
          <ul className="flex items-center justify-between flex-wrap bg-black text-white rounded-md shadow-md overflow-hidden">
            {[
              { title: "Home", link: "/" },
              {
                title: "Top Articles",
                link: "#articles",
              },
              {
                title: "Parts",
                link: "#parts",
              },
              {
                title: "Privacy Policy",
                link: "/privacypolicy",
              },
              {
                title: "Contact Us",
                link: "/contactus",
              },
              {
                title: "Disclaimer",
                link: "/disclaimer",
              },
            ].map((navItem, index) => (
              <li
                key={index}
                className="flex-1 text-center py-3 hover:bg-[#54879d] transition-colors"
              >
                <Link href={navItem.link}>
                  <p className="text-white">{navItem.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {children}
        <footer className="bg-gray-200 text-center py-4">
          <p>
            &copy; {new Date().getFullYear()} IndianConstitution. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
