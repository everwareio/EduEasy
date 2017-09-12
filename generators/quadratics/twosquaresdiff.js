/* Generates a difference to two squares question in the form a^2 * x^2 - b^2
 * with solutions in the form (ax - b)(ax + b)
 *
 * General form is the same as previous form */
module.exports = function() {
    let f = Math.floor(Math.random() * 20) + 1;
    let l = Math.floor(Math.random() * 20) + 1;
    let q = `${f*f}x^2 - ${l*l}`;
    let s = `(${f}x - ${l})(${f}x + ${l})`;
    return [q, s];
};

