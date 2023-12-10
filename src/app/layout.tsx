import "@mantine/core/styles.css";
import "~/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Mayur Karmakar - ReactJS Developer",
  description: "ReactJS Developer",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital@0;1&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TRPCReactProvider cookies={cookies().toString()}>
          <MantineProvider
            theme={{
              fontFamily: "Roboto sans-serif",
            }}
            defaultColorScheme="dark"
          >
            {children}
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
