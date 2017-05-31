var canadianDollar = 0.91;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

module.exports = function canadianToUS(canadian) {
    return roundTwoDecimals(canadian * canadianDollar);
}
// 用module.exports 可以对外提供单个变量、函数或者对象。