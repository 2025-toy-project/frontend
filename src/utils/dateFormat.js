export const parseDateToMdHm = (dateString) => {
  const date = new Date(dateString);

  // 달/일/시/분 한 자릿수일 때 앞에 0을 붙이도록 처리
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  // "MM/DD hh:mm" 포맷으로 반환
  return `${month}/${day} ${hour}:${minute}`;
};
