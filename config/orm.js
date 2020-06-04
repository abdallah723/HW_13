const connection = require('../config/connection');

function questionMarks(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function translateSql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf (" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        const dbQuery = 'SELECT * FROM ' + table + ' ; ';
        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        const dbQuery = 'INSER INTO ' + table + ' ( ' + cols.toString() + ' ) ' + ' VALUES ( ' + questionMarks(vals.length) + ' ) ';

        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        const dbQuery = 'UPDATE ' + table + ' SET ' + translateSql(objColVals) + ' WHERE ' + condition; 

        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: function (table, condition, cb) {
        const dbQuery = 'DELETE FROM ' + table + ' WHERE ' + condition;

        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
}

module.exports = orm;