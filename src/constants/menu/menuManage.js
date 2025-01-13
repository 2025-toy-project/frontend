/**
 * menuManagement 모듈
 * 메뉴관리 페이지의 관리 모드 쿼리 저장
 * menu_panel_category : id, queryMode, title 등
 * 해당 쿼리모드에 맞는 컴포넌트도 저장
 */

import DetailOptionContent from 'components/home/owner/menu/manage_category_content/DetailOptionContent';
import MenuCategoryContent from 'components/home/owner/menu/manage_category_content/MenuCategoryContent';
import MenuListContent from 'components/home/owner/menu/manage_category_content/MenuListContent';
import OptionCategoryContent from 'components/home/owner/menu/manage_category_content/OptionCategoryContent';
import DetailOption from 'components/home/owner/menu/manage_category_panel/DetailOption';
import MenuCategory from 'components/home/owner/menu/manage_category_panel/MenuCategory';
import MenuList from 'components/home/owner/menu/manage_category_panel/MenuList';
import OptionCategory from 'components/home/owner/menu/manage_category_panel/OptionCategory';

const menu_panel_category = [
  {
    content_id: 1,
    queryMode: 'category',
    title: '메뉴 카테고리',
    panel: <MenuCategory />,
    content: <MenuCategoryContent />,
  },
  {
    content_id: 2,
    queryMode: 'list',
    title: '메뉴목록',
    panel: <MenuList />,
    content: <MenuListContent />,
  },
  {
    content_id: 3,
    queryMode: 'option_category',
    title: '옵션 카테고리',
    panel: <OptionCategory />,
    content: <OptionCategoryContent />,
  },
  {
    content_id: 4,
    queryMode: 'detail_option',
    title: '세부옵션',
    panel: <DetailOption />,
    content: <DetailOptionContent />,
  },
];

export default menu_panel_category;
