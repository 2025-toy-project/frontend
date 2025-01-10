import HomePage from 'pages/HomePage';
import ReigsterPage from 'pages/RegisterPage';
import { createBrowserRouter } from 'react-router-dom';
import owner from 'routes/owner';

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
      },
      ...owner,
    ],
  },
]);

export default router;
