import { minusBeforeBraketsRegex } from "../const.js";

export function replacingMinusBeforeBrakets(expression) {
    return expression.replace(minusBeforeBraketsRegex, "((-1)*(");
}
