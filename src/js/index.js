function addlist(name) {
  document.getElementById(
    "espresso-menu-list"
  ).innerHTML += `<li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name">${name}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    수정
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    삭제
  </button>
</li>`;
}

// submit 함수
document.querySelector("#espresso-menu-form").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    if (this.espressoMenuName.value) {
      addlist(this.espressoMenuName.value);
      this.espressoMenuName.value = "";
    }
  },
  false
);
