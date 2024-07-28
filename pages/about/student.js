import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';

const Student = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="teacher-student">Student Page</h1>
        <p>This is the Student page.</p>
        <BackButton />
      </div>
    </div>
  );
};

export default Student;
