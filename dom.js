let cursorTimeout;

run();

function run() {
  document
    .querySelector(".TwoColumnLayout__Wrapper-sc-rd992x-0.hHQIGr")
    .classList.remove("hHQIGr"); // 이미지를 축소시키는 식별자 삭제 시키는 코드
  document.querySelector(".Header__Wrapper-sc-60utt6-0.cplgnZ").style.display =
    "none"; // 화면 최상단 네비게이션 삭제 시키는 코드
  document.querySelector(
    "[class='styled__FullWidthWrapper-sc-1vjtieq-1 ccHLHk']"
  ).style.backgroundColor = "#f5f5f5"; // 이미지 영역 뒤에 여백 배경색을 pixiv vertical viewer와 동일한 색상 값으로 변경하는 코드

  const elem = document.documentElement; // 전체 문서 또는 특정 요소
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE/Edge
    elem.msRequestFullscreen();
  }

  // var style = document.createElement("style");

  // 생성한 스타일에 CSS 코드 추가
  // style.textContent = `
  //   /* Webkit 브라우저의 스크롤바를 숨김 */
  //   ::-webkit-scrollbar {
  //     width: 0; /* 너비를 0으로 설정하여 숨김 */
  //   }
  // `;

  // 문서의 head에 생성한 스타일 추가
  // document.head.appendChild(style);
  // setAutoHideCursor();
}

function setAutoHideCursor() {
  document.addEventListener("mousemove", () => {
    // 마우스가 움직이면 기존에 설정된 타이머를 클리어합니다.
    clearTimeout(cursorTimeout);

    // 3초 후에 마우스 커서를 숨깁니다.
    document.body.style.cursor = "default"; // 이 줄을 사용하면 기본 커서로 변경됩니다. 'none'을 사용하면 숨깁니다.
    cursorTimeout = setTimeout(() => {
      document.body.style.cursor = "none";
    }, 3000);
  });
}
