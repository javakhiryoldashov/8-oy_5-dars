import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (confirm('Rostan chiqishni xohlaysizmi?')) {
      router.back();
    }
  };

  return (
    <button className="back-link" onClick={handleBack}>
      Back
    </button>
  );
};

export default BackButton;
