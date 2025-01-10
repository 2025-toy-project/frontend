import '../../styles/register/Register.scss';

const Register = () =>{
    return (
        <div className="register-container">
            <header className="register-header">
                <div className="register-header-logo">미리</div>
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

export default Register;