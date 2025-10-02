import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daly Games - Descubra jogos incríveis para se divertir.",
  description: "Mais de 10 mil jogos separados e organizados.",
  keywords:['games', 'jogos', 'steam'],
  openGraph:{
    images:[`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index:true,
    follow: true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
