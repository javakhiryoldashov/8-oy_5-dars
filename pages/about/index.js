import Navbar from '../../components/Navbar';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>About Page</h1>
        <div>
          <Link href="/about/teacher" className="link">Teacher</Link>
          <Link href="/about/student" className="link">Student</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
