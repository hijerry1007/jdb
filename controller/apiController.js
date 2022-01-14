const apiController = {
    getData: (req, res) => {
        res.writeHeader(200, { "Content-Type": "text/plain" });
        res.end(JSON.stringify({"data": "成功"}));
    }
};

module.exports = apiController;