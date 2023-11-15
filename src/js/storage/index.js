export const createLocalStorage = (item, mode) => {
  let storage = localStorage.getItem(mode)
    ? JSON.parse(localStorage.getItem(mode))
    : [];

  /**
   * 뭐가 문제이지??
   *
   */

  storage.push(item);
  localStorage.setItem(mode, JSON.stringify(storage));
};

export const updateLocalStorage = (prevItem, nextItem) => {
  const list = localStorage.getItem("espresso");
  append(list, nextItem);
  localStorage.setItem("espresso", JSON.stringify(list));
};

export const deleteLocalStorage = (mode, { id, name }) => {
  const storage = JSON.parse(localStorage.getItem(mode));
  // item 선택된 친구 (이름, 인텍스)
  // 어떻게 하려고 했엉??
  /** delete
   * 1. 타겟에 대한 item 넘겨주기
   * 2.
   * */

  for (item in stroage) {
  }

  localStorage.setItem(mode, JSON.stringify(newStorage));
};
