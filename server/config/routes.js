var mongoose = require('mongoose'),
    //User = mongoose.model('User'),
    gidgets = require('../controllers/gidgets.js'),
    path = require('path');

    module.export = (app) => {
        
        app.get('/gidget', gidgets.index);

        app.get('/gidget/:id', gidgets.show);

        app.post('/gidget', gidgets.create);

        app.put('/gidget/:id', gidgets.update);

        app.delete('/gidget/:id', gidgets.destroy);

        app.all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
    }
