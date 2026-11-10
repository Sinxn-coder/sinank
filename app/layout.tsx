import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinan K | Freelance Web & App Developer in Perambra, Kozhikode",
  description: "I'm Sinan K, a freelance web developer and software architect based in Perambra, Kozhikode. I build scalable SaaS products and fast mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
