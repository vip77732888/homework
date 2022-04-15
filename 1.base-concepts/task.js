function solveEquation(a, b, c) {
    var D = b * b - 4 * a * c;
    var x1, x2;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return `D = ${D}; x1 = ${x1}; x2 = ${x2}`;
    } else if (D == 0) {
        x1 = -b / (2 * a);
        return `D = ${D}; x1 = ${x1}`;
    } else if (D < 0) return `Дискриминант(D)= ${D} Корней НЕТ!`;
}



function calculateTotalMortgage(percent, amount) {
    let totalAmount;
    totalAmount = amount - (amount / 100 * percent);
    return totalAmount;
}
console.log(calculateTotalMortgage(15, 12130))