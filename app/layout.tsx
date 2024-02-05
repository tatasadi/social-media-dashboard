import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./hooks/useTheme"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Socail Media Dashboard",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${inter.className} text-very-dark-blue dark:bg-very-dark-blue flex min-h-screen flex-col items-center justify-center bg-white dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
