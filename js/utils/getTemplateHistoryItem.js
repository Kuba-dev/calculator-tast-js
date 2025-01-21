export function getTemplateHistoryItem(expression, result) {
    return `<li class="history__list-item">${expression + ` = ` + result}</li>`
}