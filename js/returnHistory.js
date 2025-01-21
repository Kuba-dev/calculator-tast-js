import { historyList, display } from "./const.js";

export function returnHistory(event) {
  if (
    event.target.classList[0] ===
    historyList.classList[0]
  )
    return;
  display.textContent = event.target.textContent.split("=")[0].trim();
}
