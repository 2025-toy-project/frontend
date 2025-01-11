import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuManagementPage from './MenuManagementPage'; // Presentational

/**
 * MenuManagementPageContainer
 * - 쿼리 파라미터로 manageMode를 관리
 * - 비즈니스 로직/상태 처리 후, Presentational(Page)에게 props로 넘긴다
 * - Presentational(Page)에서는 props로 받은 데이터를 화면에 렌더링한다
 * - Presentational(Page)에서 발생하는 이벤트(함수)를 props로 받아 처리한다
 */
const MenuManagementPageContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리 파라미터에서 mode 가져옴. 없으면 'category'를 기본값으로
  const manageMode = searchParams.get('mode') || 'category';

  // 모드 변경 시 쿼리 세팅
  const handleModeChange = (newMode) => {
    setSearchParams({ mode: newMode });
  };

  return (
    <MenuManagementPage
      manageMode={manageMode}
      onChangeMode={handleModeChange}
    />
  );
};

export default MenuManagementPageContainer;
