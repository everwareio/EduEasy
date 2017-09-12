/* Generates a differentiation question with in the form ax^b + c and solutions 
 * in the form ax^b
 *
 * The basic form is ax^b where a and b are a randomly generated coefficient
 * and index */

module.exports = function() {
    let c = Math.floor(Math.random() * 40) + 1;
    let i = Math.floor(Math.random() * 15) + 1;
    let p = Math.floor(Math.random() * 100) + 1;
    let q = `${c}x^${i} + ${p}`;
    let s = `${c*i}x^${i-1}`;
    return [q, s];
};

