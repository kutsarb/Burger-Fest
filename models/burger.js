var db = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    db.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    db.insertOne("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  updateOne: function(id, cb) {
    var condition = "id=" + id;
    db.updateOne("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
