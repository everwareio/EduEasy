module.exports = function() {
    let v = (Math.floor(Math.random() * 9) + 1)/10;
    let m = Math.floor(Math.random() * 8000) + 1;
    let q = `The mass of some particle is ${m/1000}kg. If the particle were moving at ${v}c, what would its apparent mass be measured to be, relative to an exernal entity`; 
    let calculatedm = m / Math.sqrt(1-Math.pow(v, 2));
    let s = `The measured mass of the particle is ${calculatedm.toFixed(2)}g`;
    return [q, s];
};


