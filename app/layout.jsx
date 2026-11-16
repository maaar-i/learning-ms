// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body >

        <nav >
          <Link href="/">Home</Link>{" "}
          <Link href="/login">Login</Link>{" "}
          <Link href="/courses/assignments">Assignments</Link>{" "}
          <Link href="/courses/attendance">Attendance</Link>{" "}
          <Link href="/courses/grades">Grades</Link>{" "}
          <Link href="/courses/courselibrary">Library</Link>{" "}
        </nav>

        {children}
      </body>
    </html>
  );
}
