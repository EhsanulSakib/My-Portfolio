import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins( {weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Ehsanul | Portfolio",
  description: "Kazi Ehsanul Haque Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
