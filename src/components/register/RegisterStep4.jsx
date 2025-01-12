import 'styles/register/RegisterStep4.scss';
import { ReactComponent as CircleIcon } from 'assets/icons/circle_icon.svg';

/**
 * RegisterPage의 step4 컴포넌트
 * - 가입 신청 완료 포스터 정의
 */
const RegisterStep4 = () => {
  return (
    <div className="register-step4-container">
      <div className="icon-container">
        <CircleIcon className="circle-icon" />
      </div>
      <h1 className="title">가입 신청이 완료되었습니다!</h1>
      <p className="description">
        관리자 승인 후, 아이디는 개별 문자로 안내되며<br />
        관리자 승인은 최대 n일까지 소요 될 수 있습니다.
      </p>
    </div>
  );
};

export default RegisterStep4;
