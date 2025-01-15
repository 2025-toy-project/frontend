import OrderDetail from 'components/owner/order/OrderDetail';
import OrderPenal from 'components/owner/order/OrderPenal';
import { redirect, useLoaderData, useSearchParams } from 'react-router-dom';
import { getOrderDetail, getOrderList } from 'services/owner/order';
import { getStorePickUpStatus } from 'services/owner/store';
import 'styles/owner/OrderPage.scss';
/**
 * OrderPage 컴포넌트
 * - 주문접수 페이지의 기본 레이아웃 정의
 * - 주문상태를 나타내는 panel과 상세 내용을 나타내는 content로 구성
 */

const OrderPage = () => {
  const { newOrderList, orderList, orderDetail, orderMenus, storeInfo } =
    useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const panelState = searchParams.get('panelState');

  const params = new URLSearchParams(searchParams);
  const setPanelState = (id) => {
    params.set('panelState', id);
    setSearchParams(params);
  };

  const setOrderId = (id) => {
    params.set('orderId', id);
    setSearchParams(params);
  };

  return (
    <div className="order-page-container">
      <OrderPenal
        panelState={panelState}
        setPanelState={setPanelState}
        setOrderID={setOrderId}
        newOrderList={newOrderList}
        orderList={orderList}
      />
      <div className="order-content-container">
        <OrderDetail
          orderDetail={orderDetail}
          orderMenus={orderMenus}
          storeInfo={storeInfo}
        />
      </div>
    </div>
  );
};

export default OrderPage;

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const panelState = url.searchParams.get('panelState');
  const orderId = url.searchParams.get('orderId');

  if (panelState === null) {
    return redirect(`./?panelState=0&orderId=None`);
  }

  let newOrderList = [];
  let orderList = [];

  if (panelState == 0) {
    newOrderList = await getOrderList(panelState);
  }
  orderList = await getOrderList(Number(panelState) + 1);

  let orderDetail = [];
  let orderMenus = [];
  if (orderId !== 'None') {
    orderDetail = await getOrderDetail(orderId);
    orderMenus = orderDetail.orderMenus;
    orderDetail = orderDetail.orderDetail;
  }

  const storeInfo = await getStorePickUpStatus();
  return { newOrderList, orderList, orderDetail, orderMenus, storeInfo };
};
