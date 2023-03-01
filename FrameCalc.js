// 바 후렘 계산기 요소
const barBtn = document.getElementById("bar-btn");
const barContainer = document.getElementById("bar-container");
const aluminumBtn = document.getElementById("aluminum-btn");
const galvanizedBtn = document.getElementById("galvanized-btn");
const aluminumCalc = document.getElementById("aluminum-calc");
const galvanizedCalc = document.getElementById("galvanized-calc");
const aluminumLengthInput = document.getElementById("aluminum-length");
const galvanizedHeightSelect = document.getElementById("galvanized-height");
const galvanizedLengthInput = document.getElementById("galvanized-length");
const aluminumCalcBtn = document.getElementById("aluminum-calc-btn");
const galvanizedCalcBtn = document.getElementById("galvanized-calc-btn");
const aluminumResult = document.getElementById("aluminum-result");
const galvanizedResult = document.getElementById("galvanized-result");

// 일반 후렘 계산기 요소
const normalBtn = document.getElementById("normal-btn");
const normalContainer = document.getElementById("normal-container");
const normalWidthInput = document.getElementById("normal-width");
const normalHeightInput = document.getElementById("normal-height");
const normalCalcBtn = document.getElementById("normal-calc-btn");
const normalResult = document.getElementById("normal-result");

// 모든 계산기 요소
const calcBoxes = document.getElementsByClassName("calc-box");
const allButtons = document.querySelectorAll("#button-container button");

// 초기 화면 설정
barContainer.style.display = "none";
normalContainer.style.display = "none";

// 모든 버튼에 대한 클릭 이벤트 추가
allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllCalcBoxes();
    if (button.id === "bar-btn") {
      barContainer.style.display = "block";
    } else if (button.id === "normal-btn") {
      normalContainer.style.display = "block";
    }
  });
});

// 알미늄 후렘 버튼 클릭 시
aluminumBtn.addEventListener("click", () => {
  hideAllCalcBoxes();
  aluminumCalc.style.display = "block";
});

// 갈바 후렘 버튼 클릭 시
galvanizedBtn.addEventListener("click", () => {
  hideAllCalcBoxes();
  galvanizedCalc.style.display = "block";
});

// 바 후렘 계산 버튼 클릭 시
aluminumCalcBtn.addEventListener("click", () => {
  const length = aluminumLengthInput.value;
  const price = 35000;
  const result = length * price;
  aluminumResult.textContent = `알미늄 후렘 가격: ${formatPrice(result)}원`;
});

// 갈바 후렘 계산 버튼 클릭 시
galvanizedCalcBtn.addEventListener("click", () => {
  const height = galvanizedHeightSelect.value;
  const length = galvanizedLengthInput.value;
  let price;
  if (height === "200") {
    price = 45000;
  } else if (height === "300") {
    price = 50000;
  } else {
    price = 60000;
  }
  const result = length * price;
  galvanizedResult.textContent = `갈바 후렘 가격: ${formatPrice(result)}원`;
});
// 일반 후렘 계산 버튼 클릭 시
normalCalcBtn.addEventListener("click", () => {
  const width = normalWidthInput.value;
  const height = normalHeightInput.value;
  const result = ((width * height) / 1000000) * 120000;
  normalResult.textContent = `일반 후렘 가격: ${formatPrice(result)}원`;
});

// 모든 계산기 숨기는 함수
function hideAllCalcBoxes() {
  for (let i = 0; i < calcBoxes.length; i++) {
    calcBoxes[i].style.display = "none";
  }
}

// 가격 포맷 함수
function formatPrice(price) {
  return new Intl.NumberFormat("ko-KR", { maximumSignificantDigits: 3 }).format(price);
}
