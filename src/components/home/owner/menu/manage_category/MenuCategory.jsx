import React, { useState } from 'react';
import 'styles/owner/menu/manage_category/Category.scss';

const menu_category_list = [
  { id: 1, name: '추천 상품' },
  { id: 2, name: '음료' },
  { id: 3, name: '디저트' },
  { id: 4, name: '식사' },
  { id: 5, name: '사이드' },
];

const MenuCategory = () => {
  const [activeCategory, setActiveCategory] = useState(null); // 활성화된 카테고리를 관리하는 상태

  const handleCategoryClick = (id) => {
    setActiveCategory(id); // 클릭된 카테고리를 활성화 상태로 설정
  };

  return (
    <div className="category-container">
      <div className="category-title-box">
        <p className="category-title-text">메뉴 카테고리</p>
        <button className="category-sort-button">
          <svg
            width="51"
            height="25"
            viewBox="0 0 51 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.02344"
              y="0.720703"
              width="49"
              height="23"
              rx="11.5"
              fill="#E6E9EE"
              stroke="#D3D5DE"
            />
            <path
              d="M32.1875 7.04102V12.7344H31.3389V10.2314H29.416V9.5332H31.3389V7.04102H32.1875ZM24.3135 11.9717C25.7314 11.4614 26.7412 10.167 26.7412 8.80273V8.44824H24.582V7.73926H29.7275V8.44824H27.5898V8.79199C27.5898 10.0381 28.5459 11.2251 29.9424 11.7031L29.502 12.3799C28.4331 11.9932 27.6006 11.1875 27.187 10.2046C26.7788 11.3218 25.8926 12.2134 24.7539 12.6484L24.3135 11.9717ZM25.8174 14.8076C25.812 13.6851 27.0312 13.0298 29.0186 13.0352C31.0005 13.0298 32.2197 13.6851 32.2197 14.8076C32.2197 15.9355 31.0005 16.5801 29.0186 16.5908C27.0312 16.5801 25.812 15.9355 25.8174 14.8076ZM26.6553 14.8076C26.6499 15.5005 27.5522 15.9194 29.0186 15.9141C30.4795 15.9194 31.3818 15.5005 31.3818 14.8076C31.3818 14.1094 30.4795 13.6904 29.0186 13.6904C27.5522 13.6904 26.6499 14.1094 26.6553 14.8076ZM38.3105 7.51367V9.89844H35.0234V11.0586C36.4199 11.0693 37.5156 11.0371 38.8691 10.833L38.9336 11.499C37.4995 11.7085 36.3662 11.7461 34.8623 11.7461H34.1855V9.24316H37.4727V8.16895H34.1641V7.51367H38.3105ZM35.4424 13.1963V12.541H41.6943V14.7861H36.3018V15.8496H42.0703V16.5156H35.4639V14.1523H40.8564V13.1963H35.4424ZM38.9443 10.6182V9.91992H40.8457V8.91016H38.9443V8.22266H40.8457V7.04102H41.6943V12.0791H40.8457V10.6182H38.9443Z"
              fill="black"
            />
            <path
              d="M10.1719 9.56602C10.1719 9.35589 10.3422 9.18555 10.5523 9.18555H19.1589C19.3691 9.18555 19.5394 9.35589 19.5394 9.56602C19.5394 9.77615 19.3691 9.94649 19.1589 9.94649H10.5523C10.3422 9.94649 10.1719 9.77615 10.1719 9.56602ZM10.1719 12.2229C10.1719 12.0128 10.3422 11.8425 10.5523 11.8425H19.1589C19.3691 11.8425 19.5394 12.0128 19.5394 12.2229C19.5394 12.4331 19.3691 12.6034 19.1589 12.6034H10.5523C10.3422 12.6034 10.1719 12.4331 10.1719 12.2229ZM10.1719 14.8799C10.1719 14.6697 10.3422 14.4994 10.5523 14.4994H19.1589C19.3691 14.4994 19.5394 14.6697 19.5394 14.8799C19.5394 15.09 19.3691 15.2603 19.1589 15.2603H10.5523C10.3422 15.2603 10.1719 15.09 10.1719 14.8799Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="category-list-box">
        {menu_category_list.map((category_list, index) => (
          <React.Fragment key={category_list.id}>
            {index !== 0 && <hr className="category-divider" />}
            <li
              className={`category-list-item ${
                activeCategory === category_list.id ? 'active' : ''
              }`}
              onClick={() => handleCategoryClick(category_list.id)}
            >
              {category_list.name}
            </li>
          </React.Fragment>
        ))}
      </div>
      <button className="category-add-button">+ 메뉴 카테고리 추가</button>
    </div>
  );
};

export default MenuCategory;
