import axios from 'axios';

const { SERVER_IP, JWT_AT } = require('constants/api');

const instance = axios.create({
  baseURL: SERVER_IP,
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    // JWT_AT : 임시 토큰 발급
    const accessToken = JWT_AT;

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization-Access'] = `${accessToken}`;
    return config;
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      window.location.href = '/';
    }

    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // 토큰 갱신 함수
      const accessToken = JWT_AT;
      error.config.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      // 토큰 갱신 후 재요청
      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  }
);

/**
 * API 인터페이스 함수
 * @param {string} method - HTTP 메서드 ('GET', 'POST', 'PUT', 'DELETE', etc.)
 * @param {string} url - 요청할 엔드포인트 URL
 * @param {object} [data] - 요청 본문 데이터 (POST, PUT 등에서 사용)
 * @param {object} [params] - URL 파라미터 (GET 요청 등에서 사용)
 * @returns {Promise} - API 응답 Promise
 */
export const apiInterface = async (method, url, data = {}, params = {}) => {
  try {
    const response = await instance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
};
