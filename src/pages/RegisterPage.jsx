import 'styles/register/Register.scss';
import logo_url from '../assets/logo/logo_blue_miri.png';

/**
 * RegisterPage 컴포넌트
 * - 회원가입입 페이지의 기본 레이아웃 정의
 * - 단계에 맞춘 content 컴포넌트 호출
 */

const ReigsterPage = () =>{

    return (
        <div className="register-page-container">
            <header className="register-header">
                <div className="register-header-logo">
                    <img src={logo_url} alt="미리 로고" />
                </div>
                <div className="register-header-phone">010-1234-1234</div>
            </header>
            <h1 className="register-title">회원가입</h1>
            <nav className="register-steps">
                <span className="register-step active">매장정보입력 </span> &gt;
                <span className="register-step">사장님정보입력</span> &gt;
                <span className="register-step">승인대기</span> &gt;
                <span className="register-step">가입완료</span>
            </nav>

            <div className="register-content"></div>

            <div className="register-footer">
                <button className="register-next-btn">다음</button>
            </div>
        </div>
    );
};

export default ReigsterPage;