import Link from "next/link";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Link href={"/ACADEMY/ABOUT"}>ABOUT</Link>
        <Link href={"/ACADEMY/SCHEDULE"}>SCHEDULE</Link>
        <Link href={"/ACADEMY/PRICES"}>PRICES</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
