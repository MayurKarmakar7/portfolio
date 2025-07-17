import "@mantine/core/styles.css";
import "~/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import Head from "next/head";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
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
