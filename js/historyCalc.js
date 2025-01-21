import { historyList } from "./const.js";
import { addLocalStorageHistory } from "./localStorageHistory.js";
import { callModal } from "./modalHistory.js";
import { getTemplateHistoryItem } from "./utils/getTemplateHistoryItem.js";
import { isInvalidLine } from "./utils/isInvalidLine.js";

export function addHistory(content, result) {
    if (isInvalidLine(content) || isInvalidLine(result)) {
    return;
    } else if (Number(content) === result) {
        return;
    } else {
        historyList.innerHTML += getTemplateHistoryItem(content, result);
        addLocalStorageHistory(content, result);
        return;
    }
}

export function clearHistory() {
    localStorage.removeItem('history');
    callModal();
    return;
}