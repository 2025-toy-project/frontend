import MenuManagementPageContainer from 'pages/owner/menu/MenuManagementPageContainer';
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
        element: <MenuManagementPageContainer />,
      },
    ],
  },
];

export default owner;
