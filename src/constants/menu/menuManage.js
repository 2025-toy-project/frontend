/**
 * menuManagement 모듈
 * 메뉴관리 페이지의 관리 모드 쿼리 저장
 * menu_panel_category : id, queryMode, title 등
 * 해당 쿼리모드에 맞는 컴포넌트도 저장
 */

import DetailOption from 'components/home/owner/menu/manage_category/DetailOption';
import MenuCategory from 'components/home/owner/menu/manage_category/MenuCategory';
import MenuList from 'components/home/owner/menu/manage_category/MenuList';
import OptionCategory from 'components/home/owner/menu/manage_category/OptionCategory';

const menu_panel_category = [
  {
    content_id: 1,
    queryMode: 'category',
    title: '메뉴 카테고리',
    component: <MenuCategory />,
  },
  {
    content_id: 2,
    queryMode: 'list',
    title: '메뉴목록',
    component: <MenuList />,
  },
  {
    content_id: 3,
    queryMode: 'option_category',
    title: '옵션 카테고리',
    component: <OptionCategory />,
  },
  {
    content_id: 4,
    queryMode: 'detail_option',
    title: '세부옵션',
    component: <DetailOption />,
  },
];

export default menu_panel_category;
