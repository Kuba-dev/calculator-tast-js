import { divisionIntoNumbers, presenceDots } from "../const.js";

export function doubleDotsCheck(content, key) {
    if (key === ".") {
        const lastNumber = content.split(divisionIntoNumbers);
        return (presenceDots).test(lastNumber[lastNumber.length - 1])
    }
    return false;
}
