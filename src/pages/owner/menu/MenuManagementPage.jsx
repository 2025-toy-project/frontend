// src/pages/owner/menu/MenuManagementPage.jsx

import React from 'react';
import MenuManagementList from 'components/home/owner/menu/MenuManagementList'; // 하위 Presentational
import 'styles/owner/menu/MenuManagementPage.scss';

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
      </div>

      {/* 컨텐츠 영역 */}
      <div className="order-content-container">
        {manageMode === 'category' && <div>메뉴 카테고리 관리 화면</div>}
        {manageMode === 'list' && <div>메뉴 목록 화면</div>}
        {manageMode === 'option_category' && <div>옵션 카테고리 화면</div>}
        {manageMode === 'detail_option' && <div>세부 옵션 화면</div>}
      </div>
    </div>
  );
};

export default MenuManagementPage;
