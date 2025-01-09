/**
 * MenuManagementPage 컴포넌트
 * - 메뉴관리 페이지의 기본 레이아웃 정의
 * - 메뉴 카테고리, 메뉴 목록, 옵션 카테고리, 세부옵션 관리할 대상 선택이 가능한 패널과
 * 그에 해당하는 동작을 수행할 수 있는 content로 구성되어 있음
 */

import MenuManagementList from 'components/home/owner/menu/MenuManagementList';
import 'styles/owner/menu/MenuManagementPage.scss';

const MenuManagementPage = () => {
  return (
    <div className="order-page-container">
      {/* 패널 영역임*/}
      <div className="panel-container">
        <MenuManagementList manage_mode="/owner/menu" />
      </div>

      {/* 동작할 컨텐츠 영역임 */}
      <div className="order-content-container"></div>
    </div>
  );
};

export default MenuManagementPage;
