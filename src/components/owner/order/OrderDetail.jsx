import 'styles/owner/order/OrderDetail.scss';

const orderDetail = {
  orderDetail: {
    orderId: 91,
    orderRequest: '임시 주문 요청사항 입니다.',
    userNickname: '유저 44',
    userTel: '01067975910',
    orderNumber: 'store7orderuser44',
    orderRequestTime: '2023-10-06T10:46:15.000+00:00',
    orderAcceptTime: '2025-01-12T14:01:38.000+00:00',
    orderStatus: 1,
  },
  orderMenus: [
    {
      orderMenuId: 275,
      menuName: '메뉴 84',
      menuQuantity: 1,
      menuPrice: 3000,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 277',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 244',
          optionPrice: 1500,
        },
        {
          optionName: '상세 옵션 264',
          optionPrice: 500,
        },
      ],
    },
    {
      orderMenuId: 276,
      menuName: '메뉴 76',
      menuQuantity: 1,
      menuPrice: 1800,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 271',
          optionPrice: 500,
        },
        {
          optionName: '상세 옵션 245',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 272',
          optionPrice: 500,
        },
      ],
    },
    {
      orderMenuId: 277,
      menuName: '메뉴 78',
      menuQuantity: 2,
      menuPrice: 1500,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 256',
          optionPrice: 2000,
        },
        {
          optionName: '상세 옵션 276',
          optionPrice: 2000,
        },
        {
          optionName: '상세 옵션 249',
          optionPrice: 1000,
        },
      ],
    },
    {
      orderMenuId: 278,
      menuName: '메뉴 79',
      menuQuantity: 1,
      menuPrice: 2100,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 258',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 259',
          optionPrice: 1500,
        },
        {
          optionName: '상세 옵션 276',
          optionPrice: 2000,
        },
      ],
    },
    {
      orderMenuId: 278,
      menuName: '메뉴 79',
      menuQuantity: 1,
      menuPrice: 2100,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 258',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 259',
          optionPrice: 1500,
        },
        {
          optionName: '상세 옵션 276',
          optionPrice: 2000,
        },
      ],
    },
    {
      orderMenuId: 278,
      menuName: '메뉴 79',
      menuQuantity: 1,
      menuPrice: 2100,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 258',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 259',
          optionPrice: 1500,
        },
        {
          optionName: '상세 옵션 276',
          optionPrice: 2000,
        },
      ],
    },
    {
      orderMenuId: 278,
      menuName: '메뉴 79',
      menuQuantity: 1,
      menuPrice: 2100,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 258',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 259',
          optionPrice: 1500,
        },
        {
          optionName: '상세 옵션 276',
          optionPrice: 2000,
        },
      ],
    },
    {
      orderMenuId: 278,
      menuName: '메뉴 79',
      menuQuantity: 1,
      menuPrice: 2100,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 258',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 259',
          optionPrice: 1500,
        },
        {
          optionName: '상세 옵션 276',
          optionPrice: 2000,
        },
      ],
    },
    {
      orderMenuId: 278,
      menuName: '메뉴 79',
      menuQuantity: 1,
      menuPrice: 2100,
      orderMenuOptions: [
        {
          optionName: '상세 옵션 258',
          optionPrice: 1000,
        },
        {
          optionName: '상세 옵션 259',
          optionPrice: 1500,
        },
        {
          optionName: '상세 옵션 276',
          optionPrice: 2000,
        },
      ],
    },
  ],
};
const OrderDetail = () => {
  const calculateTotalPrice = (menus) => {
    return menus.reduce((total, menu) => {
      const menuBasePrice = menu.menuPrice * menu.menuQuantity;
      const menuOptionsPrice = menu.orderMenuOptions.reduce(
        (sum, option) => sum + option.optionPrice,
        0
      );
      return total + menuBasePrice + menuOptionsPrice * menu.menuQuantity;
    }, 0);
  };
  const totalPrice = calculateTotalPrice(orderDetail.orderMenus);
  return (
    <div className="order-detail-container">
      <div className="order-detail-header">
        <span className="owner-name">비둘기는멍청해보여</span>
        <div className="owner-status">
          <div className="status-title">
            <span className="active">여유</span>
            <span>보통</span>
            <span>혼잡</span>
          </div>
          <div className="status-time">
            <button className="active">10분</button>
            <button>20분</button>
            <button>30분</button>
          </div>
        </div>
      </div>

      <div className="order-detail-manage">
        <div className="order-name">USER0007</div>
        <div className="order-manage-btn">
          <button className="order-cancel">주문취소</button>
          <button className="order-receipt">주문접수</button>
        </div>
      </div>

      <div className="order-detail-content">
        <div className="order-list">
          <div className="order-list-title">
            <span>주문내역</span>
            <a>주문전표 출력</a>
          </div>
          <div className="order-menu-list">
            {orderDetail &&
              orderDetail.orderMenus.map((item) => (
                <div className="menu">
                  <div className="menu-info">
                    <span className="menu-name">{item.menuName}</span>
                    <span className="menu-quantity">{item.menuQuantity}</span>
                    <span className="menu-price">{item.menuPrice}원</span>
                  </div>
                  <div className="menu-option-list">
                    {item.orderMenuOptions.map((option) => (
                      <div className="menu-option">
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
            <span className="menu-total-quantity">
              {orderDetail && orderDetail.orderMenus.length}
            </span>
            <span className="menu-total-price">{totalPrice}원</span>
          </div>
        </div>

        <div className="order-side-detail">
          <div className="order-number-container">
            <div className="order-number">
              <label>주문번호</label>
              <span>{orderDetail.orderDetail.orderNumber}</span>
            </div>
            <div className="order-time">
              <label>주문시간</label>
              <span>{orderDetail.orderDetail.orderRequestTime}</span>
            </div>
            <div className="accept-time">
              <label>접수시간</label>
              <span>{orderDetail.orderDetail.orderAcceptTime}</span>
            </div>
          </div>
          <div className="order-request-container">
            <div className="order-request">
              <label>요청사항</label>
              <span>{orderDetail.orderDetail.orderRequest}</span>
            </div>
            <div className="customer-name">
              <label>고객명</label>
              <span>{orderDetail.orderDetail.userNickname}</span>
            </div>
            <div className="customer-phone">
              <label>고객 연락처</label>
              <span>{orderDetail.orderDetail.userTel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
