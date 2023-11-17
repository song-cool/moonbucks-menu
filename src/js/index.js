import { updateCount } from "./updateCount.js";
import { createLocalStorage } from "./storage/index.js";
import { onClickList } from "./controller/index.js";

/*

  그럼 00을 00으로 변경
  00을 삭제?
  00을 추가

  1. 로드시 불러오기 
  3. 삭제시 로컬 스토리지 삭제
  4. 수정시 로컬 스토리지 수정
초기화
  {
    id: `category_[now Date time]`,
    name: 입력받은 텍스트,
    soldOut: false
  }
  
*/

let mode = "espresso";

const list = document.getElementById("espresso-menu-list");
const form = document.querySelector("#espresso-menu-form");
const navBar = document.querySelector("#nav-bar");

const addList = ({ id, name }) => {
  list.innerHTML += `<li class="menu-list-item d-flex items-center py-2" id=${id} >
  <span class="w-100 pl-2 menu-name" >${name}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    name="menu-edit-button"
    >
    수정
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
    name="menu-remove-button"
  >
    삭제
  </button>
</li>`;
};

if (localStorage.getItem("espresso")) {
  reloadStorage("espresso");
  updateCount(list);
}

const reloadStorage = (key) => {
  const storage = JSON.parse(localStorage.getItem(key));
  storage.forEach((item) => addList(item));
};

// 폼 제출
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.espressoMenuName.value) {
    const newItem = {
      id: `${mode}_${Date.now()}`,
      name: form.espressoMenuName.value,
      // soldOut: false,
    };

    createLocalStorage(newItem, mode);

    addList(newItem);

    updateCount(list);
    form.espressoMenuName.value = "";
  }
});

// 이벤트 추가
list.addEventListener("click", (event) => onClickList(event, mode, list), true);

navBar.addaddEventListener(
  "click",
  (event) => onClickNavBar(event, mode),
  true
);
