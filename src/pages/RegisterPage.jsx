import React, { useState } from 'react';
import 'styles/register/Register.scss';
import logo_url from '../assets/logo/logo_blue_miri.png';
import RegisterStep1 from 'components/register/RegisterStep1';
import RegisterStep2 from 'components/register/RegisterStep2';
import RegisterStep3 from 'components/register/RegisterStep3';
import RegisterStep4 from 'components/register/RegisterStep4';

const RegisterPage = () => {
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계 관리

    // 단계별 컴포넌트 렌더링
    const renderStepComponent = () => {
        switch (currentStep) {
            case 1:
                return <RegisterStep1 />;
            case 2:
                return <RegisterStep2 />;
            case 3:
                return <RegisterStep3 />;
            case 4:
                return <RegisterStep4 />;
            default:
                return null;
        }
    };

    // 다음 단계로 이동
    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    // 이전 단계로 이동
    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

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
                <span className={`register-step ${currentStep === 1 ? 'active' : ''}`}>매장정보입력</span> &gt;
                <span className={`register-step ${currentStep === 2 || currentStep === 3 ? 'active' : ''}`}>사장님정보입력</span> &gt;
                <span className={`register-step ${currentStep === 4 ? 'active' : ''}`}>승인대기</span> &gt;
                <span className={`register-step ${currentStep >= 5 ? 'active' : ''}`}>가입완료</span>
            </nav>

            {/* 뒤로가기 버튼 */}
            {(currentStep > 1 && currentStep <= 3) && (
                <button className="register-back-btn" onClick={handlePrevStep}>
                    &#x276E; {/* HTML 코드로 '❮' */}
                </button>
            )}

            <div className="register-content">{renderStepComponent()}</div>

            <div className="register-footer">
                {currentStep <= 4 && (
                    <button
                        className={currentStep <= 2 ? "register-next-btn" : "register-active-btn"}
                        onClick={handleNextStep}
                    >
                        {currentStep <= 2 && "다음"}
                        {currentStep === 3 && "가입신청"}
                        {currentStep === 4 && "처음으로"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
