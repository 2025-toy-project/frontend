/**
 * menuManagement 모듈
 * 메뉴관리 페이지의 네비게이션 정보 저장
 * menu_panel_category : id, url, title 등
 */

const menu_panel_category = [
  {
    content_id: 1,
    url: '/owner/menu',
    title: '메뉴 카테고리',
  },
  {
    content_id: 2,
    url: '/owner/menu/list',
    title: '메뉴목록',
  },
  {
    content_id: 3,
    url: '/owner/menu/option_category',
    title: '옵션 카테고리',
  },
  {
    content_id: 4,
    url: '/owner/menu/detail_option',
    title: '세부옵션',
  },
];

export default menu_panel_category;
