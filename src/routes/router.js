import HomePage from 'pages/HomePage';
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
      ...owner,
    ],
  },
]);

export default router;
