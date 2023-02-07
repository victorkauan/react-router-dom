import { Outlet } from 'react-router-dom';

import './App.css';

export function App() {
  return (
    <div className='App'>
      <nav>Navigation Bar</nav>
      <h2>React Router</h2>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
