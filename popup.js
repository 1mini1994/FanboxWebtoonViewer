function toWebtoonView(e) {
  chrome.runtime.sendMessage({ action: "toWebtoonView" });
}

function refresh(e) {
  chrome.runtime.sendMessage({ action: "refresh" });
}

document.addEventListener("DOMContentLoaded", function () {
  var btn01 = document.querySelector("#btnWebtoonView");
  btn01.addEventListener("click", toWebtoonView);
});

document.addEventListener("DOMContentLoaded", function () {
  var btn01 = document.querySelector("#btnRefresh");
  btn01.addEventListener("click", refresh);
});
