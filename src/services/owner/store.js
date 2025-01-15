import { STORE_BASE_URL } from 'constants/api';
import { apiInterface } from 'services/axiosForm';

export const changeStoreStatus = async (currentPickupTime) => {
  const res = await apiInterface(
    'patch',
    `/${STORE_BASE_URL}/current-pickup-time`,
    {},
    { currentPickupTime }
  );
  return res;
};

export const getStorePickUpStatus = async () => {
  const res = await apiInterface(
    'get',
    `/${STORE_BASE_URL}/pickup-time`,
    {},
    {}
  );
  return res;
};
