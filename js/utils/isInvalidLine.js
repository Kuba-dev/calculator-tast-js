import { phraseIncorrectExpression, divisionByZeroPhrase } from "../const.js";

export function isInvalidLine(content) {
    if (content === phraseIncorrectExpression ||
    content === divisionByZeroPhrase) {
        return true;
    }
    return false;
}