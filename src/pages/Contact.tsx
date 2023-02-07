import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <p>
        <Link to='0'>Contact 00</Link>
      </p>
      <p>
        <Link to='1'>Contact 01</Link>
      </p>
      <p>
        <Link to='2'>Contact 02</Link>
      </p>
    </div>
  );
}
