import React, { useState } from 'react';
const menu_list = [
  { id: 1, name: '추천 상품' },
  { id: 2, name: '음료' },
  { id: 3, name: '디저트' },
  { id: 4, name: '식사' },
  { id: 5, name: '사이드' },
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

      <div className="category-list-box">
        {menu_list.map((menu, index) => (
          <React.Fragment key={menu.id}>
            {index !== 0 && <hr className="category-divider" />}
            <li
              className={`category-list-item ${
                activeMenu === menu.id ? 'active' : ''
              }`}
              onClick={() => handleMenuClick(menu.id)}
            >
              {menu.name}
            </li>
          </React.Fragment>
        ))}
      </div>
      <button className="category-add-button">+ 메뉴 추가</button>
    </div>
  );
};
export default MenuList;
