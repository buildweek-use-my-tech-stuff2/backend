const db = require('../database/dbConfig.js');


module.exports = {
find,
findById,
add,
update,
remove

}

function find() {
    return db("items")
}

function findById(id) {
  return db('items').where({ id })
}

function add(itemData) {
    return db('items').insert(itemData);
}


function update(changes, id) {
    return db("items").where({ id }).update(changes);
}


function remove(id) {
    return db('items').where({ id }).del()
}