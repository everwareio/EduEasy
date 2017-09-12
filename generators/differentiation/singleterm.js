/* Generates a differentiation question with a single term in the form
 * ax^b and solutions in the same form
 *
 * The basic form is ax^b where a and b are a randomly generated coefficient
 * and index */

module.exports = function() {
    let c = Math.floor(Math.random() * 40) + 1;
    let i = Math.floor(Math.random() * 15) + 1;
    let q = `${c}x^${i}`;
    let s = `${c*i}x^${i-1}`;
    return [q, s];
};
