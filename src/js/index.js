import { updateCount } from "./updateCount.js";
import {
  createLocalStorage,
  updateLocalStorage,
  deleteLocalStorage,
} from "./storage/index.js";

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

if (localStorage.getItem(mode)) {
  const storage = JSON.parse(localStorage.getItem(mode));
  storage.forEach((item) => addList(item));
  updateCount(list);
}

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
list.addEventListener(
  "click",
  function (e) {
    // 수정 시
    if (e.target.name === "menu-edit-button") {
      let userInput = prompt("수정할 매뉴명을 입력해주세요");
      if (userInput) {
        e.target.closest(".menu-name").innerHTML = userInput;
        // 로컬스토리지 수정함수
        // 선택된 아이템 이름을 얻는 방법.
      }
    }
    // 삭제 시
    if (e.target.name === "menu-remove-button") {
      let userConfirm = confirm("정말 삭제하시겠습니까?");
      if (userConfirm) {
        // 로컬스트로지 지우기 함수

        const item = {
          id: e.target.parentNode.id,
          name: e.target.parentNode.querySelector(".menu-name").textContent,
        };

        deleteLocalStorage(mode, item);
        e.target.closest(".menu-list-item").remove();
        updateCount(list);
      }
    }
  },
  true
);

/*
const controlLocalStorage = () => {
  // 구조 분해 할당(Destructuring assignment)을 이용한 메소드 호출
  const { setItem, getItem, removeItem, clear, length, key } = localStorage;

  // 로컬 스토리지 저장1 - 키(key)와 값(value)을 기반으로 저장합니다.(값을 문자열로 저장)
  localStorage.setItem('userId', 'adjh54');

  // 로컬 스토리지 저장2 - 키(key)와 값(value)을 기반으로 저장합니다.(값을 Object로 저장)
  const userInfoObj = {
      userId: 'adjh54',
      userAge: 30,
  };
  localStorage.setItem('userInfoObj', JSON.stringify(userInfoObj));

  // 로컬 스토리지 저장3 - 키(key)와 값(value)을 기반으로 저장합니다.(값을 Array로 저장)
  const userAddr = ['Seoul', 'Dongjak-gu'];
  localStorage.setItem('userInfoArr', JSON.stringify(userAddr));

  // 로컬 스토리지 불러오기1 - 키(key) 값을 기반으로 값(value)을 불러옵니다.(String -> String)
  localStorage.getItem('userId');

  // 로컬 스토리지 불러오기2 - 키(key) 값을 기반으로 값(value)을 불러옵니다.(String -> Object)
  JSON.parse(localStorage.getItem('userInfoObj'));

  // 로컬 스토리지 불러오기3 - 키(key) 값을 기반으로 값(value)을 불러옵니다.(String -> Array)
  JSON.parse(localStorage.getItem('userInfoObj'));

  // 로컬 스토리지 불러오기 - 인덱스 값을 기반으로 값(value)을 불러옵니다.
  localStorage.key(0);

  // 로컬 스토리지 삭제 - 키(key) 값을 기반으로 해당 로컬 스토리지를 제거합니다.
  localStorage.removeItem('userId');

  // 로컬 스토리지 초기화
  localStorage.clear();

  // 로컬 스토리지에 저장된 데이터 개수를 반환 받습니다.
  localStorage.length;
};
출처: https://adjh54.tistory.com/56#1) 웹 스토리지(Web Storage)란 무엇인가%3F-1 [Contributor9:티스토리]

 */
