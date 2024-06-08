import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "./components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Serkan Safran Portfolio",
  icons: {
    icon: "/Nestopia2.png",
    appleIcon: "/profile.jpg",
    msIcon: "/profile.jpg",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
