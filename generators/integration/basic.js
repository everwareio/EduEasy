/* Generates a basic integration question in the form x^a with a solution
 * in the form x^a/b
 *
 * General form is x^a with solutions in the form x^(a+1)/(a+1) where a is
 * a randomly generated index */

module.exports = function() {
    let i = Math.floor(Math.random() * 40) + 1;
    let q = `x^${i}`;
    let s = `x^${i+1}/${i+1}`;
    return [q, s];
};
