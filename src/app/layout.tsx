import type { Metadata } from "next";
import { Cormorant_SC, Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";


const cormorantSC = Cormorant_SC({
  variable: "--font-cormorant-sc", 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});


const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colina1898",
  description: "Um e-commerce de produtos do time de futebol Vasco da Gama. A sua história com a Colina começa aqui. Descubra produtos exclusivos que celebram a paixão e a tradição do Gigante da Colina desde 1898.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${cormorantSC.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
