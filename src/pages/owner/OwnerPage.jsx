import Sidebar from 'commons/Sidebar';
import { Outlet } from 'react-router-dom';
import 'styles/owner/OwnerPage.scss';

/**
 * OwnerPage 컴포넌트
 * - 사장님 페이지의 기본 레이아웃 정의
 * - Sidebar와 Outlet을 포함하여 네비게이션과 컨텐츠 분리
 */

const OwnerPage = () => {
  const status = true; // 매장 영업 상태(true : 영업 중, false : 영업종료) - API 연동 예정

  return (
    <div className="owner-page-container">
      <Sidebar mode="owner" status={status} />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerPage;
