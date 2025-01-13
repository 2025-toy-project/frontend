import React, { useState } from 'react';
import 'styles/owner/menu/manage_category/Category.scss';

const detail_option_list = [
  { id: 1, name: '시럽 추가', soldOut: false },
  { id: 2, name: '토핑 추가', soldOut: true },
  { id: 3, name: '사이드 추가', soldOut: false },
  { id: 4, name: '음료 사이즈업', soldOut: false },
];

const DetailOption = () => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (id) => {
    setActiveOption(id);
  };

  return (
    <div className="category-container">
      <div className="category-title-box">
        <p className="category-title-text">세부옵션</p>
      </div>
      <div className="category-list-box">
        {detail_option_list.map((DetailOption) => (
          <React.Fragment key={DetailOption.id}>
            <li
              className={`category-list-item ${
                activeOption === DetailOption.id ? 'active' : ''
              }`}
              onClick={() => handleOptionClick(DetailOption.id)}
            >
              {DetailOption.name}
              {DetailOption.soldOut && (
                <div
                  className={`option-list-item-overlay ${
                    DetailOption.soldOut ? 'sold-out' : ''
                  }`}
                >
                  품절
                </div>
              )}
            </li>
          </React.Fragment>
        ))}
      </div>
      <button className="category-add-button">+ 세부옵션 추가</button>
    </div>
  );
};

export default DetailOption;
