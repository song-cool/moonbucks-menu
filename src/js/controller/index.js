import { updateLocalStorage, deleteLocalStorage } from "../storage/index.js";
import { updateCount } from "../updateCount.js";
import { hasValidationCheckPassed } from "../utils/index.js";

export const onClickList = (e, mode, list) => {
  /**
   * TODO:
   * [x] : 입력받음
   * [x] :확인 눌렸다면
   * [x] : 벨리데이션 체크
   * [x] : 빈값
   * [x] : 동일값
   * - 그외.. 너무 많은 입력?
   * - 코드인젝션?
   * [x] : 4. 체크 통과시 값 반영
   * [ ] : 5. 반영된 값 로컬스토리지에 반영
   * [x] : 리스트를 불러오기
   * [x] : 리스트 안에서 원래 값 위치 찾기
   * [x] : 리스트 원래값을 기준으로 앞과 뒤로 자르기
   * [x : 앞 리스트와 뒤 리스트 사이에 새로운 값 입력하기(아이디 값을 동일하게 유지)
   */
  const storage = {
    update(mode, item) {
      let userInput = prompt("수정할 매뉴명을 입력해주세요");
      if (!hasValidationCheckPassed(userInput, item.name)) return;

      updateLocalStorage(mode, item, userInput);
      e.target.parentNode.querySelector(".menu-name").innerHTML = userInput;
    },

    delete(mode, item) {
      let userConfirm = confirm("정말 삭제하시겠습니까?");
      if (!userConfirm) return;
      // 로컬스트로지 지우기 함수

      deleteLocalStorage(mode, item);
      e.target.closest(".menu-list-item").remove();
      updateCount(list);
    },
  };

  const item = {
    id: e.target.parentNode.id,
    name: e.target.parentNode.querySelector(".menu-name").textContent,
  };

  switch (e.target.name) {
    case "menu-edit-button":
      return storage.update(mode, item);
    case "menu-remove-button":
      return storage.delete(mode, item);
    default:
      return;
  }
};

export const onClickNavBar = (e, mode) => {
  /**
   * TODO:TODO: 변경될 부분들을 확인한다. 투두를 작성한다. 순서대로 작성한다.
   * TODO:
   * [ ] : 리펙토링 : 현재 선택 상태(mode)를 DOM에서 가져오기
   *
   *
   * [ ] : 선택하면 실행
   * [ ] : 어떤 친구 선택했는지 버블링 캡쳐링으로 확인 ( data-category-name))
   * [ ] : 모드를 변경
   * [ ] : 모드 변경 후, 데이터 리로드 랜더링
   * - 제목 : 00 메뉴 관리
   * - 인풋 : 00 메뉴 이름
   * - 카운트
   * - 리스트
   */
  get();
};
