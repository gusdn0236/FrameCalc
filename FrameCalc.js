const barBtn = document.getElementById("bar-btn");
const normalBtn = document.getElementById("normal-btn");
const calcContainer = document.getElementById("calc-container");

barBtn.addEventListener("click", () => {
  hideAllCalcBoxes();
  calcContainer.style.display = "block";
});

normalBtn.addEventListener("click", () => {
  alert("일반 후렘 계산기는 준비 중입니다.");
});

function hideAllCalcBoxes() {
  const calcBoxes = document.getElementsByClassName("calc-box");
  for (let i = 0; i < calcBoxes.length; i++) {
    calcBoxes[i].style.display = "none";
  }
}

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

aluminumBtn.addEventListener("click", () => {
  hideAllCalcBoxes();
  aluminumCalc.style.display = "block";
});

galvanizedBtn.addEventListener("click", () => {
  hideAllCalcBoxes();
  galvanizedCalc.style.display = "block";
});

aluminumCalcBtn.addEventListener("click", () => {
  const length = aluminumLengthInput.value;
  const price = 35000;
  const result = length * price;
  aluminumResult.textContent = `알미늄 후렘 가격: ${formatPrice(result)}원`;
});

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

function hideAllCalcBoxes() {
  aluminumCalc.style.display = "none";
  galvanizedCalc.style.display = "none";
}

// 엔터키 입력 이벤트 리스너 등록
aluminumLengthInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    aluminumCalcBtn.click();
  }
});

galvanizedLengthInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    galvanizedCalcBtn.click();
  }
});
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
