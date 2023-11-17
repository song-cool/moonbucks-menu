export const popedListWithId = (list, id) => {
  const idx = list.findIndex((object) => {
    return object.id === id;
  });

  return [list.slice(0, idx), list.slice(idx + 1)];
};

export const hasValidationCheckPassed = (input) => {
  if (!input) return;
  if (typeof value === "string" && value.trim() === "") return;
  return true;
};

export const hasSameValueCheckPassed = (input, prevName) => {
  if (input === prevName) return;
  return true;
};
