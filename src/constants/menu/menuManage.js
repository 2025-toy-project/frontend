/**
 * menuManagement 모듈
 * 메뉴관리 페이지의 관리 모드 쿼리 저장
 * menu_panel_category : id, queryMode, title 등
 */

const menu_panel_category = [
  {
    content_id: 1,
    queryMode: 'category',
    title: '메뉴 카테고리',
  },
  {
    content_id: 2,
    queryMode: 'list',
    title: '메뉴목록',
  },
  {
    content_id: 3,
    queryMode: 'option_category',
    title: '옵션 카테고리',
  },
  {
    content_id: 4,
    queryMode: 'detail_option',
    title: '세부옵션',
  },
];

export default menu_panel_category;
