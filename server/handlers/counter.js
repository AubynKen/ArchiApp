const {DEFAULT_INCREASE} = require("../constants");

let count = 0; // global state
const handleIncrease = (req, res) => {
    const {value} = req.query;

    if (value === undefined) {
        count += DEFAULT_INCREASE;
        return res.send({
            code: 0,
            message: `Successfully incremented to ${count}`
        });
    }

    if (!Number.isInteger(+value)) {
        return res.send({
            code: -1,
            error: "Value is not an integer"
        });
    }

    count += parseInt(value);
    res.send({
        code: 0,
        message: `Successfully incremented to ${count}`
    });
}

module.exports = {
    handleIncrease,
}
