import OrderPenal from 'components/owner/order/OrderPenal';
import { useState } from 'react';
import 'styles/owner/OrderPage.scss';
/**
 * OrderPage 컴포넌트
 * - 주문접수 페이지의 기본 레이아웃 정의
 * - 주문상태를 나타내는 panel과 상세 내용을 나타내는 content로 구성
 */

const OrderPage = () => {
  const [panelState, setPanelState] = useState(0);

  return (
    <div className="order-page-container">
      <OrderPenal panelState={panelState} setPanelState={setPanelState} />
      <div className="order-content-container"></div>
    </div>
  );
};

export default OrderPage;
