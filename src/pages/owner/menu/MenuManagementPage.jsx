import React from 'react';
import MenuManagementList from 'components/home/owner/menu/MenuManagementList';
import 'styles/owner/menu/MenuManagementPage.scss';
import { useSearchParams } from 'react-router-dom';
import menu_panel_category from 'constants/menu/menuManage';
/**
 * MenuManagementPage (Presentational)
 * - 쿼리 파라미터로부터 받은 manageMode(현재 모드)를 props로 전달받아 적절한 UI를 표시
 * - 상수로부터 전달받은 쿼리에 맞는 컴포넌트를 불러옴
 */
const MenuManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리 파라미터에서 mode 가져옴. 없으면 'category'를 기본값으로
  const manageMode = searchParams.get('mode') || 'category';

  // 모드 변경 시 쿼리 세팅
  const handleModeChange = (newMode) => {
    setSearchParams({ mode: newMode });
  };

  // menu_panel_category에서 현재 모드에 맞는 컴포넌트를 찾아서 렌더링
  const renderPanelContent = menu_panel_category.find(
    (category) => category.queryMode === manageMode
  ).component;

  return (
    <div className="order-page-container">
      {/* 패널 영역 */}
      <div className="panel-container">
        <MenuManagementList
          manageMode={manageMode}
          onChangeMode={handleModeChange}
        />
        {renderPanelContent}
      </div>

      {/* 컨텐츠 영역 */}
      <div className="order-content-container"></div>
    </div>
  );
};

export default MenuManagementPage;
