import './reset.css';
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "To the Moon",
  description: "This is the web page that serves information about the moon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
