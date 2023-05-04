import { Inter } from "@next/font/google";
import { Providers } from "./providers";

export const text = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});

export const metadata = {
  title: "Home",
  description: "next13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={text.className}>
      <body >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
