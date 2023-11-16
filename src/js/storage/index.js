export const createLocalStorage = (item, mode) => {
  let storage = localStorage.getItem(mode)
    ? JSON.parse(localStorage.getItem(mode))
    : [];

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

  const idx = storage.findIndex((object) => {
    return object.id === id;
  });
  const prevList = storage.slice(0, idx);
  const foreList = storage.slice(idx + 1);

  const newStorage = [...prevList, ...foreList];

  localStorage.setItem(mode, JSON.stringify(newStorage));
};
