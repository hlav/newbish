exports.up = function(knex, Promise) {
  return knex.schema.createTable('kits', function(table){
    table.increments();
    table.text('item');
    table.integer('bin_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kits');
};
