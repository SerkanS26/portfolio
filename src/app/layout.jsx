import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "./components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Serkan Safran Portfolio",
  description: "Serkan Safran Portfolio",
  icons: {
    icon: "/profile.jpg",
    appleIcon: "/profile.jpg",
    msIcon: "/profile.jpg",
  },
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
