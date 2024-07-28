import Navbar from '../components/Navbar';

const Error = ({ statusCode }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Error</h1>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
