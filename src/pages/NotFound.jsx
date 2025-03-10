
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <div>Sorry, the page you're looking for doesn't exist.</div>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default NotFound;