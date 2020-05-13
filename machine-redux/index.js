const clickButton = document.querySelector("#click-button");
const retryButton = document.querySelector("#retry-button");

clickButton.addEventListener("click", () => machine.dispatch("click"));
retryButton.addEventListener("click", () => machine.dispatch("retry"));
