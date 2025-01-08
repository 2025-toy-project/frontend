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
    ],
  },
];

export default owner;
