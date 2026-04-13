// 시간별 인삿말
const greet = document.querySelector(".greeting__title");
const hour = new Date().getHours();
if (hour >= 5 && hour < 11) {
  greet.textContent = "좋은 아침이에요";
} else if (hour < 14) {
  greet.textContent = "점심 시간이네요";
} else {
  greet.textContent = "야근 중이시군요";
}
