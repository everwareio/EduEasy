/* Generates a basic integration question in the form ax^b with a solution
 * in the form ax^b/c
 *
 * General form is ax^b with solutions in the form ax^(b+1)/(b+1) where a is
 * a randomly generated index */

module.exports = function() {
    let i = Math.floor(Math.random() * 40) + 1;
    let c = Math.floor(Math.random() * 20) + 1;
    let q = `${c}x^${i}`;
    let s = `${c}x^${i+1}/${i+1} + C`;
    return [q, s];
};

