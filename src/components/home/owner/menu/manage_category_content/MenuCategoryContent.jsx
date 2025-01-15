import { useState } from 'react';
import 'styles/owner/menu/manage_category/content/MenuCategoryContent.scss';
import AddMenuToCategoryModal from './modal/AddMenuToCategoryModal';
const menu_list = [
  { name: '치즈버거', price: 5000 },
  { name: '불고기버거', price: 5500 },
  { name: '감자튀김', price: 2500 },
  { name: '치킨너겟', price: 3000 },
  { name: '콜라', price: 1500 },
  { name: '사이다', price: 1500 },
  { name: '아메리카노', price: 3000 },
  { name: '카푸치노', price: 3500 },
  { name: '카페라떼', price: 4000 },
  { name: '초코케이크', price: 4500 },
  { name: '치즈케이크', price: 4800 },
  { name: '샐러드', price: 7000 },
  { name: '파스타', price: 12000 },
  { name: '스테이크', price: 25000 },
  { name: '피자', price: 18000 },
];
const MenuCategoryContent = ({ category }) => {
  const [isOpenedAddMenuModal, setIsOpenedAddMenuModal] = useState(false);
  const [selectedMenus, setSelectedMenus] = useState([]);

  const handleAddMenus = (selected) => {
    setSelectedMenus(selected);
    setIsOpenedAddMenuModal(false);
  };
  return (
    <div className="menu-category-container">
      <div className="menu-category-header">
        <span className="menu-category-header-title">메뉴 카테고리명</span>
        <div className="menu-category-action-box">
          <button className="menu-category-remove-button">삭제</button>
          <button className="menu-category-save-button">저장</button>
        </div>
      </div>
      <form className="menu-category-form">
        <input
          name="categoryName"
          placeholder="카테고리명 (최대 20자)"
          className="menu-category-form-title"
        ></input>
        <textarea
          name="categoryDescription"
          placeholder="간략한 카테고리 설명 (최대 50자)"
          className="menu-category-form-description"
        ></textarea>
      </form>
      <div className="menu-category-menu-container">
        <div className="menu-category-menu-header">
          <span className="menu-category-menu-title">현재 포함된 메뉴</span>
          <span className="menu-category-menu-count">{menu_list.length}</span>
          <button
            className="menu-category-menu-add-button"
            onClick={() => setIsOpenedAddMenuModal(true)}
          >
            추가하기
          </button>
        </div>
        <ul className="menu-category-menu-list">
          {menu_list.map((item) => (
            <div className="menu-category-menu-item-box">
              <span className="menu-category-menu-item-name"> {item.name}</span>
              <span className="menu-category-menu-item-price">
                {item.price}원
              </span>
              <button
                className="menu-category-menu-item-setting"
                onClick={() => {
                  console.log('hi');
                }}
              >
                <svg
                  width="27"
                  height="16"
                  viewBox="0 0 27 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.757812 1.02341C0.757812 0.486242 1.19327 0.0507812 1.73044 0.0507812H25.6677C26.2048 0.0507812 26.6403 0.486242 26.6403 1.02341C26.6403 1.56058 26.2048 1.99604 25.6677 1.99604H1.73044C1.19327 1.99604 0.757812 1.56058 0.757812 1.02341ZM0.757812 7.81553C0.757812 7.27836 1.19327 6.8429 1.73044 6.8429H25.6677C26.2048 6.8429 26.6403 7.27836 26.6403 7.81553C26.6403 8.35269 26.2048 8.78815 25.6677 8.78815H1.73044C1.19327 8.78815 0.757812 8.35269 0.757812 7.81553ZM0.757812 14.6076C0.757812 14.0705 1.19327 13.635 1.73044 13.635H25.6677C26.2048 13.635 26.6403 14.0705 26.6403 14.6076C26.6403 15.1448 26.2048 15.5803 25.6677 15.5803H1.73044C1.19327 15.5803 0.757812 15.1448 0.757812 14.6076Z"
                    fill="#898C9A"
                  />
                </svg>
              </button>
            </div>
          ))}
        </ul>
      </div>
      {isOpenedAddMenuModal && (
        <AddMenuToCategoryModal
          menuList={menu_list}
          selectedMenus={selectedMenus}
          onClose={() => setIsOpenedAddMenuModal(false)}
          onSubmit={handleAddMenus}
        />
      )}
    </div>
  );
};
export default MenuCategoryContent;
