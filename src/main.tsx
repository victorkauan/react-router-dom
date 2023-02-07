import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import './index.css';
import { App } from './App';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { ContactDetails } from './pages/ContactDetails';
import { Error } from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'contact/:id',
        element: <ContactDetails />,
      },
      {
        path: 'oldcontact',
        element: <Navigate to='/contact' />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
