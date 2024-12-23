import { Caveat, Jost } from "next/font/google";
import "./globals.css";

const jostFont = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});
const caveatFont = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata = {
  title: "IT Agency",
  description: "IT Agency Tiger team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jostFont.variable} ${caveatFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
