import menu_panel_category from 'constants/menu/menuManage';
import { NavLink } from 'react-router-dom';
import 'styles/constants/Sidebar.scss';

/**
 * MenuManagementList 컴포넌트
 * 관리할 item에 대한 네비게이션
 */

const MenuManagementList = ({ manage_mode }) => {
  return (
    <ul className="menu-management-grid">
      {menu_panel_category.map((item) => {
        return (
          <li className="menu-management-item" key={item.content_id}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `menu-management-item ${isActive ? 'active' : 'unactive'}`
              }
              end={item.url === manage_mode}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuManagementList;
