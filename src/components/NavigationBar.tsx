import { Link } from 'react-router-dom';

export function NavigationBar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      &nbsp;
      <Link to='/contact'>Contact</Link>
    </nav>
  );
}
