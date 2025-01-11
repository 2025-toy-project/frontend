import React from 'react';
import MenuManagementList from 'components/home/owner/menu/MenuManagementList';
import 'styles/owner/menu/MenuManagementPage.scss';
import MenuCategory from 'components/home/owner/menu/manage_category/MenuCategory';

/**
 * MenuManagementPage (Presentational)
 * - 쿼리 파라미터로부터 받은 manageMode(현재 모드)를 이용해 UI를 표시
 * - 상태/로직은 없음. props로 주어진 onChangeMode 호출만 함
 */
const MenuManagementPage = ({ manageMode, onChangeMode }) => {
  return (
    <div className="order-page-container">
      {/* 패널 영역 */}
      <div className="panel-container">
        <MenuManagementList
          manageMode={manageMode}
          onChangeMode={onChangeMode}
        />
        <MenuCategory />
      </div>

      {/* 컨텐츠 영역 */}
      <div className="order-content-container"></div>
    </div>
  );
};

export default MenuManagementPage;
