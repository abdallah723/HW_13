const orm = require("../config/orm.js");

const burgers = {
    getAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res)

        });
    },
  

  create: function (cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function (res) {
      cb(res);

    });
  },


  update: function (objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function (res) {
      cb(res)

    });
  },


  deleteOne: function (condition, cb) {
    orm.deleteOne("burger", condition, function (res) {
      cb(res);

    });
  }
}

module.exports = burgers;