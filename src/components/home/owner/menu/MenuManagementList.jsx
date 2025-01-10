// src/components/home/owner/menu/MenuManagementList.jsx

import React from 'react';
import menu_panel_category from 'constants/menu/menuManage';
import 'styles/constants/Sidebar.scss';

/**
 * MenuManagementList (하위 Presentational)
 * - 메뉴 패널 목록을 그려주는 UI
 * - 클릭 시 onChangeMode를 호출해 상위(Container)로 모드 변경을 알림
 */
const MenuManagementList = ({ manageMode, onChangeMode }) => {
  return (
    <ul className="menu-management-grid">
      {menu_panel_category.map((item) => (
        <li className="menu-management-item" key={item.content_id}>
          <button
            type="button"
            // active/unactive 클래스 결정
            className={`menu-management-item ${
              manageMode === item.queryMode ? 'active' : ''
            }`}
            onClick={() => onChangeMode(item.queryMode)}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuManagementList;
