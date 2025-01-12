const RegisterNextButton = ({ currentStep, handleNextStep }) => {
    // 버튼 클래스 이름 결정
    const getButtonClassName = () =>
      currentStep <= 2 ? 'register-next-btn' : 'register-active-btn';
  
    // 버튼 내용 결정
    const getButtonLabel = () => {
      if (currentStep <= 2) return '다음';
      if (currentStep === 3) return '가입신청';
      if (currentStep === 4) return '처음으로';
      return '';
    };
  
    return (
      <button className={getButtonClassName()} onClick={handleNextStep}>
        {getButtonLabel()}
      </button>
    );
  };
  
  export default RegisterNextButton;