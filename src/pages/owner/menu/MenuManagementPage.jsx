import React from 'react';
import MenuManagementList from 'components/home/owner/menu/MenuManagementList';
import 'styles/owner/menu/MenuManagementPage.scss';
import { useSearchParams } from 'react-router-dom';
import menu_panel_category from 'constants/menu/menuManage';
/**
 * MenuManagementPage (Presentational)
 * - 쿼리 파라미터로부터 받은 manageMode(현재 모드)를 props로 전달받아 적절한 UI를 표시
 * - manageMode에 따라 패널 영역과 컨텐츠 영역을 렌더링
 * - 패널에서 클릭한 아이템에 따라 manageItem을 쿼리 파라미터로 설정
 * - manageItem에 따라 컨텐츠 영역을 렌더링할 수 있음
 * - 이를 위해 React.cloneElement를 사용하여 props 전달함
 */
const MenuManagementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리 파라미터에서 mode 가져옴. 없으면 'category'를 기본값으로
  const manageMode = searchParams.get('mode') || 'category';
  const manageItem = searchParams.get('item') || '';
  // 모드 변경 시 쿼리 세팅
  const handleQuery = (newMode, newItem) => {
    setSearchParams({ mode: newMode, item: newItem });
  };

  // menu_panel_category에서 현재 모드에 맞는 컴포넌트를 찾아서 렌더링
  const selectedCategory = menu_panel_category.find(
    (category) => category.queryMode === manageMode
  );

  const renderPanelContent = selectedCategory?.panel ? (
    React.cloneElement(selectedCategory.panel, {
      onItemClick: (newItem) => handleQuery(manageMode, newItem), // 클릭 이벤트 전달
    })
  ) : (
    <div>Invalid mode</div>
  );

  const renderMainContent = selectedCategory?.content ? (
    React.cloneElement(selectedCategory.content, {
      manageItem,
    })
  ) : (
    <div>Content not found</div>
  );

  return (
    <div className="owner-page-container">
      {/* 패널 영역 */}
      <div className="panel-container">
        <MenuManagementList
          manageMode={manageMode}
          onChangeMode={handleQuery}
        />
        {renderPanelContent}
      </div>

      {/* 컨텐츠 영역 */}
      <div className="content-container">{renderMainContent}</div>
    </div>
  );
};

export default MenuManagementPage;
