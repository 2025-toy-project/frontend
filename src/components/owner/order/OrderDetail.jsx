import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cancelOrder, receiptOrder, receiveOrder } from 'services/owner/order';
import { changeStoreStatus } from 'services/owner/store';
import 'styles/owner/order/OrderDetail.scss';
import { parseDateToMdHm } from 'utils/dateFormat';

const OrderDetail = ({ orderDetail, orderMenus, storeInfo }) => {
  const navigate = useNavigate();
  const [ownerStatus, setOwnerStatus] = useState(
    storeInfo.curPickupTime / 10 - 1
  ); // 매장 상태 (0: 여유, 1: 보통, 2: 혼잡)

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // 첫 렌더링 이후 플래그 변경
      return;
    }

    const changeStatus = async () => {
      try {
        const res = await changeStoreStatus((ownerStatus + 1) * 10);
        alert('변경 완료!');
      } catch (e) {
        console.error(e);
      }
    };

    changeStatus();
  }, [ownerStatus]);

  const calculateTotalPrice = (menus) => {
    if (orderDetail.length === 0) return;

    return menus.reduce((total, menu) => {
      const menuBasePrice = menu.menuPrice * menu.menuQuantity;
      const menuOptionsPrice = menu.orderMenuOptions.reduce(
        (sum, option) => sum + option.optionPrice,
        0
      );
      return total + menuBasePrice + menuOptionsPrice * menu.menuQuantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice(orderMenus);

  const orderCancelHandler = async () => {
    try {
      const res = await cancelOrder(orderDetail.orderId);
      alert('취소 완료!');
      navigate('./');
    } catch (e) {
      console.error(e);
      alert('취소 실패!');
    }
  };

  const orderReceiptHandler = async () => {
    try {
      const res = await receiptOrder(orderDetail.orderId);
      alert('접수 완료!');
      navigate('./');
    } catch (e) {
      console.error(e);
      alert('접수 실패!');
    }
  };

  const orderReceiveHandler = async () => {
    try {
      const res = await receiveOrder(orderDetail.orderId);
      alert('수령 완료!');
      navigate('./');
    } catch (e) {
      console.error(e);
      alert('수령 실패!');
    }
  };

  return (
    <div className="order-detail-container">
      <div className="order-detail-header">
        <span className="owner-name">{storeInfo.storeName}</span>
        <div className="owner-status">
          <div className="status-title">
            <span className={`${ownerStatus === 0 && 'active'}`}>여유</span>
            <span className={`${ownerStatus === 1 && 'active'}`}>보통</span>
            <span className={`${ownerStatus === 2 && 'active'}`}>혼잡</span>
          </div>
          <div className="status-time">
            <button
              className={`${ownerStatus === 0 && 'active'}`}
              onClick={() => setOwnerStatus(0)}
            >
              10분
            </button>
            <button
              className={`${ownerStatus === 1 && 'active'}`}
              onClick={() => setOwnerStatus(1)}
            >
              20분
            </button>
            <button
              className={`${ownerStatus === 2 && 'active'}`}
              onClick={() => setOwnerStatus(2)}
            >
              30분
            </button>
          </div>
        </div>
      </div>
      {orderDetail.length !== 0 && (
        <>
          <div className="order-detail-manage">
            <div className="order-name">{orderDetail.userNickname}</div>
            <div className="order-manage-btn">
              {orderDetail.orderStatus < 2 && (
                <button className="order-cancel" onClick={orderCancelHandler}>
                  주문취소
                </button>
              )}
              {orderDetail.orderStatus === 0 && (
                <button className="order-receipt" onClick={orderReceiptHandler}>
                  주문접수
                </button>
              )}
              {orderDetail.orderStatus === 1 && (
                <button className="order-receipt" onClick={orderReceiveHandler}>
                  수령완료
                </button>
              )}
            </div>
          </div>

          <div className="order-detail-content">
            <div className="order-list">
              <div className="order-list-title">
                <span>주문내역</span>
                <a>주문전표 출력</a>
              </div>
              <div className="order-menu-list">
                {orderMenus.map((item, index) => (
                  <div key={index} className="menu">
                    <div className="menu-info">
                      <span className="menu-name">{item.menuName}</span>
                      <span className="menu-quantity">{item.menuQuantity}</span>
                      <span className="menu-price">{item.menuPrice}원</span>
                    </div>
                    <div className="menu-option-list">
                      {item.orderMenuOptions.map((option, index) => (
                        <div key={index} className="menu-option">
                          <span className="option">
                            {option.optionName}
                            {'('}
                            {option.optionPrice}원{')'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="menu-total">
                <span className="menu-total-title">합계</span>
                <span className="menu-total-quantity">{orderMenus.length}</span>
                <span className="menu-total-price">{totalPrice}원</span>
              </div>
            </div>

            <div className="order-side-detail">
              <div className="order-number-container">
                <div className="order-number">
                  <label>주문번호</label>
                  <span>{orderDetail.orderNumber}</span>
                </div>
                <div className="order-time">
                  <label>주문시간</label>
                  <span>{parseDateToMdHm(orderDetail.orderRequestTime)}</span>
                </div>
                <div className="accept-time">
                  <label>접수시간</label>
                  <span>{parseDateToMdHm(orderDetail.orderAcceptTime)}</span>
                </div>
              </div>
              <div className="order-request-container">
                <div className="order-request">
                  <label>요청사항</label>
                  <span>{orderDetail.orderRequest}</span>
                </div>
                <div className="customer-name">
                  <label>고객명</label>
                  <span>{orderDetail.userNickname}</span>
                </div>
                <div className="customer-phone">
                  <label>고객 연락처</label>
                  <span>{orderDetail.userTel}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetail;
