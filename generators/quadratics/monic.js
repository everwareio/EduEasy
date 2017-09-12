/* Generates a random monic quadratic question in the form x^2 + bx + c
 * and solutions in the form (x + a)(x + b)
 *
 * The basic form is x^2 + (a + b)x + ab where a and b are two randomly 
 * generated numbers to be roots */

module.exports = function() {
    let r = [Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1];
    let q = `x^2  + ${r[0] + r[1]}x + ${r[0] * r[1]} `;
    let s = `(x + ${r[0]})(x + ${r[1]})`;
    return [q, s];
};
