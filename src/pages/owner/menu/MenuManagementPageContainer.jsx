import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuManagementPage from './MenuManagementPage'; // Presentational 컴포넌트

/**
 * MenuManagementPageContainer
 * - 현재 URL(혹은 원하는 로직)에 따라 manageMode를 바꿔주는 등
 *   '상태'와 '비즈니스 로직'을 담당하는 컨테이너 역할
 */
const MenuManagementPageContainer = () => {
  const [manageMode, setManageMode] = useState('/owner/menu'); // 초기 모드는 '/owner/menu'로 시작함
  const location = useLocation();
  useEffect(() => {
    setManageMode(location.pathname);
  }, [location]);

  return (
    <MenuManagementPage manageMode={manageMode} setManageMode={setManageMode} />
  );
};

export default MenuManagementPageContainer;
