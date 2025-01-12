import React from 'react';
import MenuManagementList from 'components/home/owner/menu/MenuManagementList';
import MenuCategory from 'components/home/owner/menu/manage_category/MenuCategory';
import OptionCategory from 'components/home/owner/menu/manage_category/OptionCategory';
import MenuList from 'components/home/owner/menu/manage_category/MenuList';
import DetailOption from 'components/home/owner/menu/manage_category/DetailOption';

import 'styles/owner/menu/MenuManagementPage.scss';
import { useSearchParams } from 'react-router-dom';
/**
 * MenuManagementPage (Presentational)
 * - 쿼리 파라미터로부터 받은 manageMode(현재 모드)를 props로 전달받아 적절한 UI를 표시
 * - 상태/로직은 없음. props로 주어진 onChangeMode 호출만 함
 */
const MenuManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리 파라미터에서 mode 가져옴. 없으면 'category'를 기본값으로
  const manageMode = searchParams.get('mode') || 'category';

  // 모드 변경 시 쿼리 세팅
  const handleModeChange = (newMode) => {
    setSearchParams({ mode: newMode });
  };
  const renderPanelContent = () => {
    switch (manageMode) {
      case 'list':
        return <MenuList />;
      case 'option_category':
        return <OptionCategory />;
      case 'detail_option':
        return <DetailOption />;
      default:
        return <MenuCategory />;
    }
  };
  return (
    <div className="order-page-container">
      {/* 패널 영역 */}
      <div className="panel-container">
        <MenuManagementList
          manageMode={manageMode}
          onChangeMode={handleModeChange}
        />
        {renderPanelContent()}
      </div>

      {/* 컨텐츠 영역 */}
      <div className="order-content-container"></div>
    </div>
  );
};

export default MenuManagementPage;
