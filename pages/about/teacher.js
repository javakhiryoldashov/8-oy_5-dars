import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';

const Teacher = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="teacher-student">Teacher Page</h1>
        <p>This is the Teacher page.</p>
        <BackButton />
      </div>
    </div>
  );
};

export default Teacher;
