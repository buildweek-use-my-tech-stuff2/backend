exports.up = function (knex) {
    return knex.schema
      .createTable("roles", tbl => {
        tbl.increments();
  
        tbl.string("name", 128).notNullable().unique();
      })
      .createTable("users", tbl => {
        tbl.increments();
  
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();
  
        tbl
          .integer("role")
          .unsigned()
          .references("roles.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      .createTable("items", tbl => {
        tbl.increments();
  
        tbl.string("name", 128).notNullable().unique();
        tbl.string("image_url", 256).notNullable();
        tbl.string("price", 256).notNullable();
        tbl.string("description", 256).notNullable();
        tbl.string("location", 256).notNullable();
        tbl.string("type", 256).notNullable();
        tbl.string("deposit", 256).notNullable();
        tbl
          .string("renter", 256).notNullable();
          
      });
      
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users").dropTableIfExists("roles").dropTableIfExists('items');
  };
  