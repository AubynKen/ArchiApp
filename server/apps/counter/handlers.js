let count = 0; // global state

const handleQuery = (req, res) => {
    let {v: value} = req.query;

    if (value == null) {
        res.send({
            code: 0,
            message: `Current count is ${count}`
        })
        return;
    }

    if (!Number.isInteger(+value)) {
        res.send({
            code: -1,
            error: "Value is not an integer"
        });
        return;
    }

    count += parseInt(value);
    res.send({
        code: 0,
        message: `Successfully incremented to ${count}`
    });
}

const handleIncrease = (req, res) => {
    const {value} = req.query;

    if (value === undefined) {
        count += 1; // default increase
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



module.exports = {handleIncrease, handleQuery}
