import { Outlet } from 'react-router-dom';

import './App.css';
import { NavigationBar } from './components/NavigationBar';

export function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <h2>React Router</h2>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
