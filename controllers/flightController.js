var modelFlight = require("../models/Flight");

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

exports.addFlight = (req, res) => {
    var body = req.body;
    var id =  Date.now();
    body.id =id;
    var model = modelFlight.exampleModel;
    model.push(body);
    console.log(model);
    res.send(body)
}

exports.allFlight = (req, res) => {
    var data = modelFlight.exampleModel;
    console.log(modelFlight.exampleModel);
    res.send(data)
}

exports.getFlight = (req, res) => {
    var id = req.params.id;
    var data = modelFlight.exampleModel;
    var objIndex = data.findIndex((obj => obj.id == id)); 
    res.send(data[objIndex])
}

exports.update = (req, res) => {
    var id = req.body.id;
    var data = modelFlight.exampleModel;
    var objIndex = data.findIndex((obj => obj.id == id));
    data.push(data[objIndex]); 
    res.send(data)
}

exports.delete = (req, res) => {
    var body = req.body;
    var data = modelFlight.exampleModel;
    data.remove(body);
    res.send(body)
}



