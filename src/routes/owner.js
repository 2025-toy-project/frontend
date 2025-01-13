import MenuManagementPage from 'pages/owner/menu/MenuManagementPage';
import OrderPage from 'pages/owner/OrderPage';
import OwnerPage from 'pages/owner/OwnerPage';

const owner = [
  {
    path: 'owner',
    element: <OwnerPage />,
    children: [
      {
        index: true,
        element: <OrderPage />,
      },
      {
        path: 'menu',
        element: <MenuManagementPage />,
      },
    ],
  },
];

export default owner;
