import SortButton from 'commons/SortButton';
import React, { useState } from 'react';
import 'styles/owner/menu/manage_category/Category.scss';

const menu_category_list = [
  { id: 1, name: '추천 상품' },
  { id: 2, name: '음료' },
  { id: 3, name: '디저트' },
  { id: 4, name: '식사' },
  { id: 5, name: '사이드' },
];

const MenuCategory = ({ onItemClick }) => {
  const [activeCategory, setActiveCategory] = useState(null); // 활성화된 카테고리를 관리하는 상태

  const handleCategoryClick = (id) => {
    setActiveCategory(id); // 클릭된 카테고리를 활성화 상태로 설정
  };

  return (
    <div className="category-container">
      <div className="category-title-box">
        <p className="category-title-text">메뉴 카테고리</p>
        <SortButton className="category-sort-button"></SortButton>
      </div>
      <div className="category-list-box">
        {menu_category_list.map((category_list) => (
          <React.Fragment key={category_list.id}>
            <li
              className={`category-list-item ${
                activeCategory === category_list.id ? 'active' : ''
              }`}
              onClick={() => {
                handleCategoryClick(category_list.id);
                onItemClick(category_list.name);
              }}
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
