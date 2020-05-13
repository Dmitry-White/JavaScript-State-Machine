const clickButton = document.querySelector("#click-button");
const retryButton = document.querySelector("#retry-button");

clickButton.addEventListener("click", (event) =>
  machine.dispatch(TRANSITIONS.CLICK, event)
);
retryButton.addEventListener("click", (event) =>
  machine.dispatch(TRANSITIONS.RETRY, event)
);
