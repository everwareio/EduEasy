module.exports = function() {
    let r = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
    let q = `x^2  + ${r[0] + r[1]} + ${r[0] * r[1]} `;
    let s = `(x + ${r[0]})(x + ${r[1]})`;
    return [q, s];
};
