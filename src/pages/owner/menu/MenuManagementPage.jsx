import React from 'react';
import MenuManagementList from 'components/home/owner/menu/MenuManagementList';
import 'styles/owner/menu/MenuManagementPage.scss';

/**
 * MenuManagementPage (Presentational)
 * - UI 렌더링에 집중: 패널, 컨텐츠 레이아웃 배치
 * - 모드는 props만 받음
 */
const MenuManagementPage = ({ manageMode, setManageMode }) => {
  console.log('manageMode:', manageMode);
  return (
    <div className="order-page-container">
      {/* 패널 영역 */}
      <div className="panel-container">
        <MenuManagementList
          manage_mode={manageMode}
          setManageMode={setManageMode}
        />
        {manageMode === '/owner/menu' && <div>메뉴 카테고리 관리 화면</div>}
        {manageMode === '/owner/menu/list' && <div>메뉴 목록 화면</div>}
        {manageMode === '/owner/menu/option_category' && (
          <div>옵션 카테고리 화면</div>
        )}
        {manageMode === '/owner/menu/detail_option' && (
          <div>세부 옵션 화면</div>
        )}
      </div>

      <div className="order-content-container"></div>
    </div>
  );
};

export default MenuManagementPage;
