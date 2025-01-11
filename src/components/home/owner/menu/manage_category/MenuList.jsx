import React, { useState } from 'react';
import owner_logo from 'assets/logo/logo_white.png'; //이미지 임시용 로고 이미지 불러옴
const menu_list = [
  { id: 1, name: '시그니처 탕수육', price: 20000 },
  { id: 2, name: '고량주', price: 5000 },
  { id: 3, name: '짬뽕', price: 7000 },
  { id: 4, name: '팔보채', price: 28000 },
  { id: 5, name: '공기밥', price: 1000 },
];
const MenuList = () => {
  const [activeMenu, setActiveMenu] = useState(null); // 활성화된 카테고리를 관리하는 상태

  const handleMenuClick = (id) => {
    setActiveMenu(id); // 클릭된 카테고리를 활성화 상태로 설정
  };

  return (
    <div className="category-container">
      <div className="category-title-box">
        <p className="category-title-text">메뉴목록</p>
        <div className="category-count-info">{menu_list.length}</div>
      </div>

      <div className="menu-list-box">
        {menu_list.map((menu) => (
          <React.Fragment key={menu.id}>
            <li
              className={`menu-list-item-container ${
                activeMenu === menu.id ? 'active' : ''
              }`}
              onClick={() => handleMenuClick(menu.id)}
            >
              <img src={owner_logo} className="menu-list-item-img" />
              <div className="menu-list-item-info">
                <span className="menu-list-item-info-name">{menu.name}</span>
                <span className="menu-list-item-info-price">
                  {menu.price}원
                </span>
              </div>
            </li>
          </React.Fragment>
        ))}
      </div>
      <button className="category-add-button">+ 메뉴 추가</button>
    </div>
  );
};
export default MenuList;
