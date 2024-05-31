import {  Public_Sans } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const publicSans = Public_Sans({
  weight:["300","400","500","600","700","800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-publicSans"
 })

 export const metadata = {
  title: "Top Software Development Company USA & India - MultiQoS",
  description: "MultiQoS is a top software development company in USA & India. We offer cost-effective digital solutions to startups & enterprises across globe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
