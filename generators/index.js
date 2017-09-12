// will load and export all generators
module.exports = {
    "monic": require("./quadratics/monic"),
    "nonmonic": require("./quadratics/nonmonic"),
    "singleterm": require("./differentiation/singleterm"),
    "constantterm": require("./differentiation/constant"),
    "twosquaresdiff": require("./quadratics/twosquaresdiff"),
    "integrationbasic": require("./integration/basic"),
    "integrationcoeff": require("./integration/coefficient")
};
