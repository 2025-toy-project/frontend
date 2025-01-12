import { useState } from 'react';
import 'styles/owner/OrderPage.scss';
/**
 * OrderPage 컴포넌트
 * - 주문접수 페이지의 기본 레이아웃 정의
 * - 주문상태를 나타내는 panel과 상세 내용을 나타내는 content로 구성
 */

const OrderPage = () => {
  const [panelState, setPanelState] = useState(0);

  const [newOrderList, setNewOrderList] = useState([
    { orderName: 'USER0001', orderCount: 5 },
    { orderName: 'USER0002', orderCount: 2 },
  ]);

  const [currentOrderList, currentNewOrderList] = useState([
    { orderName: 'USER0003', orderCount: 4 },
    { orderName: 'USER0004', orderCount: 1 },
    { orderName: 'USER0005', orderCount: 3 },
    { orderName: 'USER0003', orderCount: 4 },
    { orderName: 'USER0004', orderCount: 1 },
    { orderName: 'USER0005', orderCount: 3 },
    { orderName: 'USER0003', orderCount: 4 },
    { orderName: 'USER0004', orderCount: 1 },
    { orderName: 'USER0005', orderCount: 3 },
  ]);

  const nav_contents = ['진행중', '완료', '취소'];

  return (
    <div className="order-page-container">
      <div className="panel-container">
        <div className="panel-header-container">
          <div className="order-nav-container">
            {nav_contents.map((nav, index) => (
              <span
                key={index}
                className={panelState === index ? 'active' : ''}
                onClick={() => setPanelState(index)}
              >
                {nav}
              </span>
            ))}
          </div>
        </div>
        <div className="panel-content-container">
          <div className="new-order-container">
            <div className="new-order-header">
              <span className="new-order-title">신규 주문</span>
              <span className="new-order-count">2</span>
            </div>
            <div className="new-order-list">
              {newOrderList &&
                newOrderList.map((item) => (
                  <div className="new-order-item">
                    <span className="item-name">{item.orderName}</span>
                    <span className="item-count">메뉴 {item.orderCount}개</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="current-order-container">
            <div className="current-order-header">
              <span className="current-order-title">진행중인 주문</span>
              <span className="current-order-count">15</span>
            </div>
            <div className="current-order-list">
              {currentOrderList &&
                currentOrderList.map((item) => (
                  <div className="current-order-item">
                    <span className="item-name">{item.orderName}</span>
                    <span className="item-count">메뉴 {item.orderCount}개</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="order-content-container"></div>
    </div>
  );
};

export default OrderPage;
