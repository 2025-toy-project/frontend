import 'styles/register/RegisterStep1.scss';

/**
 * RegisterPage의 step1 컴포넌트
 * - 매장정보입력 폼 정의
 */

const RegisterStep1 = () =>{
    return (
        <div className="register-step1-container">
            {/* 매장명 (상호명) */}
            <div className="form-group">
                <label htmlFor="store-name">매장명(상호명)</label>
                <input
                    type="text"
                    id="store-name"
                    placeholder="매장명"
                    className="form-control"
                />
            </div>

            {/* 매장 연락처 */}
            <div className="form-group">
                <label htmlFor="store-phone">매장 연락처</label>
                <input
                    type="text"
                    id="store-phone"
                    placeholder="'-' 빼고 숫자만 입력"
                    className="form-control"
                />
            </div>

            {/* 매장 주소 */}
            <div className="form-group">
                <label htmlFor="store-address">매장 주소</label>
                <div className="address-group">
                    <input
                        type="text"
                        id="store-address"
                        placeholder="매장주소 입력"
                        className="form-control"
                    />
                    <button type="button" className="btn btn-search">
                        검색
                    </button>
                </div>
                <input
                    type="text"
                    id="store-detail-address"
                    placeholder="상세주소 입력"
                    className="form-control"
                />
            </div>
        </div>
    );
};

export default RegisterStep1;