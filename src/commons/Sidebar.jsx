import owner_sidebar_contents, { owner_header } from 'constants/sidebar';
import { NavLink } from 'react-router-dom';
import 'styles/constants/Sidebar.scss';

/**
 * Sidebar 컴포넌트
 * 로고, 네비게이션바, 영업상태 관리
 * 사장님 및 관리자 공용 컴포넌트
 */

const Sidebar = (mode, status) => {
  const logo_url = owner_header.image_url; // 로고 url

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header-container">
          <img className="logo" src={logo_url} />
        </div>

        <div className="sidebar-content-container">
          <ul className="sidebar-list">
            {owner_sidebar_contents.map((item) => {
              return (
                <li className="sidebar-item" key={item.content_id}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `sidebar-item-link ${
                        isActive ? 'sidebar-item-active' : ''
                      }`
                    }
                    end={item.url === mode}
                  >
                    <div className="sidebar-item-icon-container">
                      {item.icon}
                      <div className="sidebar-item-overlay" />
                    </div>
                    <p className="sidebar-item-text">{item.title}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sidebar-footer-container">
          <div className="store-status-container">
            <p className="store-status">{status ? '영업중' : '영업종료'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
