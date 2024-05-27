import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import LogOut from "../lib/components/logOut";
import ShoppingCart from "../lib/components/cart";
import img from "../lib/img/Horizon_Jiu_Jitsu.svg";
import DropdownMenu from "../lib/components/Dropdown";

const Ubuntu_ = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Horizon Jiu-jitsu",
  description: "Horizon jiu-jitsu är en BJJ kampsport klubb i Stockholm",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={Ubuntu_.className}>
        <div className="wrapper">
          <header>
            <Link href={"/"} className="logo">
              <Image src={img} width={0} height={0} alt="club logo" />
            </Link>
            <nav className="header__nav">
              <DropdownMenu />
              <Link href={"/SHOP"}>BUTIK</Link>
              {!!session && <Link href={"/EVENTS"}>EVENTS</Link>}
            </nav>
            <section className="header__cart">
              {!!session && <LogOut />}
              {!session && <Link href={"/LOGIN"}>LOGGA IN</Link>}
              <ShoppingCart />
            </section>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
