import { ORDER_BASE_URL } from 'constants/api';
import { apiInterface } from 'services/axiosForm';

export const getOrderList = async (status) => {
  const res = await apiInterface(
    'get',
    `/${ORDER_BASE_URL}/minimal`,
    {},
    { status }
  );
  return res;
};

export const getOrderDetail = async (orderId) => {
  const res = await apiInterface(
    'get',
    `/${ORDER_BASE_URL}/history`,
    {},
    { orderId }
  );
  return res;
};

export const cancelOrder = async (orderId) => {
  const res = await apiInterface(
    'post',
    `/${ORDER_BASE_URL}/cancel`,
    {},
    { orderId }
  );
  return res;
};

export const receiptOrder = async (orderId) => {
  const res = await apiInterface(
    'post',
    `/${ORDER_BASE_URL}/accept`,
    {},
    { orderId }
  );
  return res;
};

export const receiveOrder = async (orderId) => {
  const res = await apiInterface(
    'post',
    `/${ORDER_BASE_URL}/receive`,
    {},
    { orderId }
  );
  return res;
};
