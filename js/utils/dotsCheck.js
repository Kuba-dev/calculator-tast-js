import { bracketsOnTheKeyboard, signOnTheKeyboard } from "../const.js";

export function dotsCheck(content, key) {
    if (key === "." && (signOnTheKeyboard.includes(content[content.length - 1]) || bracketsOnTheKeyboard.includes(content[content.length - 1]))) {
        return true;
    }
    return false;
}