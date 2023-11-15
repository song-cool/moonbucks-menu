export const updateCount = (list) => {
  document.querySelector(
    ".menu-count"
  ).innerText = `총 ${list.childElementCount}개`;
};
