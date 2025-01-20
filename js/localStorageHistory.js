import { historyList } from "./const.js";

if (document.querySelector('.history__list-item') == null) {
    const historyItems = JSON.parse(localStorage.getItem("history"));
    for (const key in historyItems) {
        if (historyItems.length === historyItems[key]) {
            break;
        } else if (historyList) {
            historyList.innerHTML += historyItems[key];
        }
    }
}

export function addLocalStorageHistory(elem) {
    let historyList = JSON.parse(localStorage.getItem("history"));
    if (historyList == null) {
        let historyObj = JSON.stringify({0: elem, "length": 1});
        localStorage.setItem("history", historyObj)
    } else {
        historyList[historyList.length] = elem;
        historyList.length += 1;
        localStorage.setItem("history", JSON.stringify(historyList));
    }
}


