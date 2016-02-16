exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', function(table){
    table.increments();
    table.text('res_name');
    table.text('res_link');
    table.integer('bin_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
