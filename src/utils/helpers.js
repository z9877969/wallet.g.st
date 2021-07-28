export const setToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLS = (key) => {
  const dataFromLS = localStorage.getItem(key);
  const dataParse = JSON.parse(dataFromLS);
  return dataParse;
};
