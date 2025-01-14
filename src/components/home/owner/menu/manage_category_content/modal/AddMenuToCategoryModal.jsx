import React, { useState } from 'react';
import 'styles/owner/menu/manage_category/content/modal/AddMenuToCategoryModal.scss';

const AddMenuToCategoryModal = ({
  menuList,
  selectedMenus,
  onClose,
  onSubmit,
}) => {
  const [tempSelectedMenus, setTempSelectedMenus] = useState(selectedMenus);

  const toggleMenuSelection = (menu) => {
    setTempSelectedMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((item) => item !== menu)
        : [...prev, menu]
    );
  };

  const handleSubmit = () => {
    onSubmit(tempSelectedMenus);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>메뉴 추가</h2>
          <button onClick={handleSubmit} className="modal-submit-button">
            저장
          </button>
        </div>

        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index} className="menu-item">
              <label className="menu-label">
                <input
                  type="checkbox"
                  checked={tempSelectedMenus.includes(menu)}
                  onChange={() => toggleMenuSelection(menu)}
                  className="menu-checkbox"
                />
                <span className="menu-name">{menu.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddMenuToCategoryModal;
