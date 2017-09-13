module.exports = function() {
    let v = (Math.floor(Math.random() * 9) + 1)/10;
    let l = Math.floor(Math.random() * 100) + 1;
    let q = `The velocity of some particle moving through space is ${v}c. While stationary its measured length is ${l} meters. If an observer external to the particle were to measure its apprent length at this speed, how long would he measure it be?`;
    let calculatedl = l * Math.sqrt(1-Math.pow(v, 2));
    let s = `The measured length is ${calculatedl.toFixed(2)}m`;
    return [q, s];
};
