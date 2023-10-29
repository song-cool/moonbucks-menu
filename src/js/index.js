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

// edit label
const editListLabel = (id, userInput) => {
  document.querySelector("#label" + id).innerHTML = userInput;
};

// 리스트 생성
export function addlist(name) {
  let id = uniqueId();
  let nextListItem = `<li class="menu-list-item d-flex items-center py-2" id="${id}">
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

  //DOM에 추가
  list.appendChild(createElementFromHTML(nextListItem));

  updateCount();

  //수정 기능 추가
  let editButton = document.querySelector("#edit" + id);
  editButton.addEventListener("click", function (e) {
    // console.log(e);
    // Display the prompt when the button is clicked
    let userInput = prompt("수정할 매뉴명을 입력해주세요");
    if (userInput) editListLabel(id, userInput);
  });

  //삭제 기능 추가
  let deleteButton = document.querySelector("#delete" + id);
  deleteButton.addEventListener("click", function (e) {
    // Display the prompt when the button is clicked
    let userConfirm = confirm("정말 삭제하시겠습니까?");
    if (userConfirm) document.querySelector("#" + id).remove();
    updateCount();
  });
}

// ---------- Utils ----------

// gen unique ID
const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

// html text를 html node로 만들어줌
const createElementFromHTML = (htmlString) => {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  return div.firstChild;
};
