module.exports = function() {
    let v = (Math.floor(Math.random() * 9) + 1)/10;
    let t = Math.floor(Math.random() * 31) + 1;
    let q = `The rest lifetime of some particle is ${t} days. The paricle is moving at ${v}c, how long will the particle exist relative to an exteral observer?`;
    let calculatedt = t / Math.sqrt(1-Math.pow(v, 2));
    let s = `The measured lifetime is ${calculatedt.toFixed(2)} days`;
    return [q, s];
};

