import { useState } from 'react';
import 'styles/owner/OrderPenal.scss';
/**
 * OrderPage 컴포넌트
 * - 주문접수 페이지의 기본 레이아웃 정의
 * - 주문상태를 나타내는 panel과 상세 내용을 나타내는 content로 구성
 */
[];
const OrderPenal = ({ panelState, setPanelState }) => {
  const navList = ['진행중', '완료', '취소'];
  const orderTitleList = ['진행중인 주문', '완료된 주문', '취소된 주문'];

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

  return (
    <div className="panel-container">
      <div className="panel-header-container">
        {/* 네비게이션 바 */}
        <div className="order-nav-container">
          {navList.map((nav, index) => (
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
        {/* 신규 주문 */}
        {panelState === 0 && (
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
        )}

        {/* 진행중, 완료된, 취소된 주문 */}
        <div className="order-container">
          <div className="order-header">
            <span className="order-title">{orderTitleList[panelState]}</span>
            <span className="order-count">15</span>
          </div>
          <div className="order-list">
            {currentOrderList &&
              currentOrderList.map((item) => (
                <div className="order-item">
                  <span className="item-name">{item.orderName}</span>
                  <span className="item-count">메뉴 {item.orderCount}개</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPenal;
