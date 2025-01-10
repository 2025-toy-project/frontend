import React, { useState } from 'react';
import 'styles/register/RegisterStep2.scss';

const RegisterStep2 = () => {
  const [isVerificationActive, setVerificationActive] = useState(false);

  const handleVerificationClick = () => {
    setVerificationActive(true);
  };

  return (
    <div className="register-step2-container">
      {/* 왼쪽 열 */}
      <div className="left-column">
        <div className="form-group">
          <label htmlFor="owner-name">사장님 성명</label>
          <input
            type="text"
            id="owner-name"
            placeholder="사장님 성명 입력"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="representative-name">대표자 성명</label>
          <input
            type="text"
            id="representative-name"
            placeholder="대표자 성명 입력"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="business-number">사업자등록번호</label>
          <input
            type="text"
            id="business-number"
            placeholder="‘-’빼고 숫자만 입력"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="account-number">입금 계좌번호</label>
          <div className="input-with-button">
            <button type="button" className="btn">은행 선택</button>
            <input
              type="text"
              id="account-number"
              placeholder="‘-’빼고 숫자만 입력"
              className="form-control"
            />
          </div>
        </div>
      </div>

      {/* 오른쪽 열 */}
      <div className="right-column">
        <div className="form-group">
          <label htmlFor="owner-phone">사장님 연락처</label>
          <div className="input-with-button">
            <input
              type="text"
              id="owner-phone"
              placeholder="‘-’빼고 숫자만 입력"
              className="form-control"
            />
            <button
              type="button"
              className="btn"
              onClick={handleVerificationClick}
            >
              {isVerificationActive ? "재인증 요청" : "인증번호 받기"}
            </button>
          </div>
          <input
            type="text"
            id="verification-code"
            placeholder="인증번호 6자리 입력"
            className="form-control"
            disabled={!isVerificationActive}
          />
          {isVerificationActive && (
            <small className="form-text">
              인증번호가 오지 않으면 '-이 포함되었는지, 전화번호가 정확히 입력되었는지 확인해주세요.
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            className="form-control"
          />
          <small className="form-text">
            8~16자리 영문(대문자/소문자), 숫자, 특수문자 포함
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirm-password"
            placeholder="비밀번호 다시 입력"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterStep2;
