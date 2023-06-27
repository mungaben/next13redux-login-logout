import { Inter } from "next/font/google";
import "./globals.css";
import AppSelector from "@/Appselector/AppSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppSelector>{children}</AppSelector>
      </body>
    </html>
  );
}
