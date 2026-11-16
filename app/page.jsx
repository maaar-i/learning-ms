import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Rattilee</h1>
      <p>This is rattilee's home page</p>

      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/courses/assignments">Assignment</Link></li>
          <li><Link href="/courses/attendance">Attendance</Link></li>
          <li><Link href="/courses/grades">Grades</Link></li>
          <li><Link href="/courses/courselibrary">Course Library</Link></li>
        </ul>
      </nav>
    </main>
  );
}
