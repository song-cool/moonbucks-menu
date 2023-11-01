let list = document.getElementById("espresso-menu-list");
let form = document.querySelector("#espresso-menu-form");

// 폼 제출
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.espressoMenuName.value) {
    addlist(form.espressoMenuName.value);
    form.espressoMenuName.value = "";
  }
});

const updateCount = () => {
  document.querySelector(
    ".menu-count"
  ).innerText = `총 ${list.childElementCount}개`;
};

// 리스트 생성
export function addlist(name) {
  list.innerHTML += `<li class="menu-list-item d-flex items-center py-2" >
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

  updateCount();
}

// 이벤트 추가
list.addEventListener(
  "click",
  function (e) {
    // 수정 시
    if (e.target.name == "menu-edit-button") {
      let userInput = prompt("수정할 매뉴명을 입력해주세요");
      if (userInput) {
        e.target.closest(".menu-name").innerHTML = userInput;
      }
    }
    // 삭제 시
    if (e.target.name == "menu-remove-button") {
      let userConfirm = confirm("정말 삭제하시겠습니까?");
      if (userConfirm) {
        e.target.closest(".menu-list-item").remove();
        updateCount();
      }
    }
  },
  true
);
