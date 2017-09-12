/* Generates a non-monic quadratic question in the form ax^2 + bx + c
 * with solutions in the form (ax + b)(x + c).
 *
 * Basic form is ax^2 + (ac + b)x + bc where a, b and c are randomly generated
 * numbers as roots */

module.exports = function() {
    let r = [Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 10) + 1];
    let q = `${r[0]}x^2 + ${r[0]*r[2]+r[1]}x + ${r[1]*r[2]}`;
    let s = `(${r[0]}x + ${r[1]})(x + ${r[2]})`;
    return [q, s];
};
