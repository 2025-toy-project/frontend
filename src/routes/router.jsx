import HomePage from 'pages/HomePage';
import ReigsterPage from 'pages/RegisterPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'register',
        element: <ReigsterPage />,
      }
    ],
  },
]);

export default router;
