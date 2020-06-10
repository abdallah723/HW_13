const express = require ("express");
const router = express.Router();
const burger = require ("../models/burger.js");

router.get('/', function (req, res) {
    burger.getAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create ([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json({id:insertId});
    });
});

router.put("/api/burger/:id", function (req, res) {
    const condition = `id =  ${req.params.id}`;
    
    console.log("Condition: ", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function (req, res) {
    const condition = `id =  ${req.params.id}`;

    burger.delete(condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();

        }
    });
});

module.exports = router;