import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "carNova",
  description: "Your Gateway to Premium Cars",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-white.png" sizes="any" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}> 
        <Header />
        <main className="min-h-screen px-4 md:px-12 py-6">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 py-8 text-white">
          <div className="container mx-auto text-center">
            <p className="text-lg font-medium">carNova - Driving Dreams Forward 🚗</p>
            <p className="text-sm mt-2">@2025</p>
          </div>
        </footer>
      </body>
    </html>
       
    </ClerkProvider>
  );
}