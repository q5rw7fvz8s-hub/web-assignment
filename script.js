function generateLotto() {
  const nums = new Set();
  while (nums.size < 6) {
    nums.add(Math.floor(Math.random() * 45) + 1);
  }
  return [...nums].sort((a, b) => a - b);
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const numbers = generateLotto();

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.classList.add("animate__animated", "animate__fadeIn");

  numbers.forEach(num => {
    const span = document.createElement("span");
    span.textContent = num;
    resultDiv.appendChild(span);
  });

  // 이전 기록 저장
  const history = document.getElementById("history");
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = numbers.join(", ");
  history.prepend(li);
});
