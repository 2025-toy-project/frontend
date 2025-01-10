import 'styles/register/RegisterStep3.scss';

const RegisterStep3 = () => {
  return (
    <div className="register-step3-container">
      {/* 매장 정보 */}
      <div className="info-section">
        <div className="info-group">
          <div className="form-group">
            <label htmlFor="store-name">매장명(상호명)</label>
            <input
              type="text"
              id="store-name"
              value="매장명입니다."
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="store-phone">매장 연락처</label>
            <input
              type="text"
              id="store-phone"
              value="0701231234"
              className="form-control"
              disabled
            />
          </div>
        </div>
        <div className="info-group">
          <div className="form-group">
            <label htmlFor="store-address">매장 주소</label>
            <input
              type="text"
              id="store-address"
              value="경상북도 경산시 대학로 271"
              className="form-control"
              disabled
            />
            <input
              type="text"
              id="store-detail-address"
              value="2층"
              className="form-control"
              disabled
            />
          </div>
        </div>
      </div>

      {/* 사장님 정보 */}
      <div className="info-section">
        <div className="info-group">
            <div className="info-group-horizontal">
                <div className="form-group">
                    <label htmlFor="owner-name">사장님 성명</label>
                    <input
                    type="text"
                    id="owner-name"
                    value="홍길동"
                    className="form-control"
                    disabled
                    />
                </div>
                <div className="form-group">
                <label htmlFor="representative-name">대표자 성명</label>
                <input
                type="text"
                id="representative-name"
                value="홍길동"
                className="form-control"
                disabled
                />
            </div>
        </div>


        <div className="form-group">
                <label htmlFor="business-number">사업자등록번호</label>
                <input
                type="text"
                id="business-number"
                value="1234567890"
                className="form-control"
                disabled
                />
            </div>
            <div className="form-group">
                <label htmlFor="account-info">입금 계좌번호</label>
                <div className="input-with-button">
                <button type="button" className="btn" disabled>
                    NH농협
                </button>
                <input
                    type="text"
                    id="account-info"
                    value="031080478851"
                    className="form-control"
                    disabled
                />
                </div>
            </div>
        </div>
        <div className="info-group">
          <div className="form-group">
            <label htmlFor="owner-phone">사장님 연락처</label>
            <input
              type="text"
              id="owner-phone"
              value="01012341234"
              className="form-control"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="text"
              id="password"
              value="비밀번호입니다."
              className="form-control"
              disabled
            />
          </div>
        </div>
      </div>

      {/* 하단 메시지 */}
      <div className="message">
        정확한 정보가 입력되었는지 다시 한 번 확인해주세요.
      </div>
    </div>
  );
};

export default RegisterStep3;
