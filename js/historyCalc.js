import { historyList } from "./const.js";
import { addLocalStorageHistory } from "./localStorageHistory.js";
import { callModal } from "./modalHistory.js";
import { isInvalidLine } from "./utils/isInvalidLine.js";

export function addHistory(content, result) {
    if (isInvalidLine(content) || isInvalidLine(result)) {
    return;
    } else if (+content === result) {
        return;
    } else {
        const historyItem = `<li class="history__list-item">${content + ` = ` + result}</li>`
        historyList.innerHTML += historyItem;
        addLocalStorageHistory(historyItem);
        return;
    }
}

export function clearHistory() {
    localStorage.removeItem('history');
    callModal();
    return;
}