import React, { useState } from 'react';
import 'styles/register/Register.scss';
import logo_url from '../assets/logo/logo_blue_miri.png';
import RegisterStep1 from 'components/register/RegisterStep1';
import RegisterStep2 from 'components/register/RegisterStep2';
import RegisterStep3 from 'components/register/RegisterStep3';
import RegisterStep4 from 'components/register/RegisterStep4';

/**
 * RegisterPage 컴포넌트
 * - 회원가입 페이지의 기본 레이아웃 정의
 * - 단계에 맞춘 content 컴포넌트 호출
 */

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

    // 다음 단계로 이동하는 함수
    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
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

            <div className="register-content">{renderStepComponent()}</div>

            <div className="register-footer">
                {currentStep < 4 && (
                    <button className="register-next-btn" onClick={handleNextStep}>
                        다음
                    </button>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
