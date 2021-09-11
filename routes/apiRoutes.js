
module.exports = (app) => {

    app.post("/user", function(req, res) {
        res.send("Hit user route");
    });

    app.get('/', (req, res) => {
        res.send("Hit main route");
    });
    
}