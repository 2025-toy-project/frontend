import SortButton from 'commons/SortButton';
import React, { useState } from 'react';
import 'styles/owner/menu/manage_category/Category.scss';

const option_category_list = [
  { id: 1, name: '시럽' },
  { id: 2, name: '토핑' },
  { id: 3, name: '디저트' },
  { id: 5, name: '사이드' },
];

const OptionCategory = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className="category-container">
      <div className="category-title-box">
        <p className="category-title-text">옵션 카테고리</p>
        <SortButton className="category-sort-button"></SortButton>
      </div>
      <div className="category-list-box">
        {option_category_list.map((category_list, index) => (
          <React.Fragment key={category_list.id}>
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
      <button className="category-add-button">+ 옵션 카테고리 추가</button>
    </div>
  );
};

export default OptionCategory;
