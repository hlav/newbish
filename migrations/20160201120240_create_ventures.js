exports.up = function(knex, Promise) {
  return knex.schema.createTable('ventures', function(table){
    table.increments();
    table.string('venture');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ventures');
};
