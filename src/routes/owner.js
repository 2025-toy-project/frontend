import OrderPage, { loader as orderLoader } from 'pages/owner/OrderPage';
import OwnerPage from 'pages/owner/OwnerPage';
import MenuManagementPage from 'pages/owner/menu/MenuManagementPage';

const owner = [
  {
    path: 'owner',
    element: <OwnerPage />,
    children: [
      {
        index: true,
        element: <OrderPage />,
        loader: orderLoader,
      },
      {
        path: 'menu',
        element: <MenuManagementPage />,
      },
    ],
  },
];

export default owner;
