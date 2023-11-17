import { popedListWithId } from "../utils/index.js";

export const createLocalStorage = (item, mode) => {
  let storage = localStorage.getItem(mode)
    ? JSON.parse(localStorage.getItem(mode))
    : [];

  storage.push(item);
  localStorage.setItem(mode, JSON.stringify(storage));
};

export const updateLocalStorage = (mode, { id, name }, newName) => {
  const storage = JSON.parse(localStorage.getItem(mode));

  const [prev, fore] = popedListWithId(storage, id);
  const newStorage = [...prev, { id, name: newName }, ...fore];

  localStorage.setItem("espresso", JSON.stringify(newStorage));
};

export const deleteLocalStorage = (mode, { id, name }) => {
  const storage = JSON.parse(localStorage.getItem(mode));

  const index = storage.findIndex((object) => object.id === id);

  const newStorage = [...storage.slice(0, index), ...storage.slice(index + 1)];

  localStorage.setItem(mode, JSON.stringify(newStorage));
};
