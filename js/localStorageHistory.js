import { historyList } from "./const.js";
import { getTemplateHistoryItem } from "./utils/getTemplateHistoryItem.js";

if (document.querySelector('.history__list-item') == null && document.querySelector('.history__list')) {
    const historyItems = JSON.parse(localStorage.getItem("history"));
    if (historyItems) {
        for (let elem of historyItems) {
            historyList.innerHTML += getTemplateHistoryItem(elem.expression, elem.result);
        }
    }
}

export function addLocalStorageHistory(expression, result) {
    const historyList = JSON.parse(localStorage.getItem("history"));
    if (historyList == null) {
        const historyObj = JSON.stringify([{"expression": expression, "result": result}]);
        localStorage.setItem("history", historyObj)
    } else {
        historyList.push({"expression": expression, "result": result})
        localStorage.setItem("history", JSON.stringify(historyList));
    }
}


