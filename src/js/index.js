// let editprompt = prompt("수정할 매뉴명을 입력해주세요!");

export function addlist(name) {
  let id = uniqueId();
  document.getElementById(
    "espresso-menu-list"
  ).innerHTML += `<li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name" id="${id}">${name}</span>
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
  >
    삭제
  </button>
</li>`;

  //방금 생성한 친구를 선택해야함

  const button = document.querySelector("#edit" + id);

  // Add an event listener to the button that listens for the click event
  button.addEventListener("click", function () {
    // Display the prompt when the button is clicked
    const userInput = prompt("수정할 매뉴명을 입력해주세요");
    console.log(userInput);
    editInnerText(id, userInput);
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

function editInnerText(id, userInput) {
  document.querySelector("#" + id).innerHTML = userInput;
}
