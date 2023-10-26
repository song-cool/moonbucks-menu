// 리스트 생성
export function addlist(name) {
  let id = uniqueId();
  document.getElementById(
    "espresso-menu-list"
  ).innerHTML += `<li class="menu-list-item d-flex items-center py-2" id="${id}">
  <span class="w-100 pl-2 menu-name" id="label${id}">${name}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    id="edit${id}"
    >
    수정
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
    id="delete${id}"
  >
    삭제
  </button>
</li>`;

  //수정 기능 추가

  let editButton = document.querySelector("#edit" + id);
  editButton.addEventListener("click", function () {
    // Display the prompt when the button is clicked
    const userInput = prompt("수정할 매뉴명을 입력해주세요");
    editInnerText(id, userInput);
  });

  //삭제 기능 추가
  let deleteButton = document.querySelector("#delete" + id);
  deleteButton.addEventListener("click", function () {
    // Display the prompt when the button is clicked
    const userConfirm = confirm("정말 삭제하시겠습니까?");
    if (userConfirm) document.querySelector("#" + id).remove();
  });
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

const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

// 텍스트 수정
function editInnerText(id, userInput) {
  document.querySelector("#label" + id).innerHTML = userInput;
}
