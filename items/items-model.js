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

async function add(itemData) {
    try {
      const [id] = await db("items").insert(itemData, "id");
  
      return findById(id);
    } catch (error) {
      throw error;
    }
  }

function update(changes, id) {
    return db("items").where({ id }).update(changes);
}


function remove(id) {
    return db('items').where({ id }).del()
}