exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('email');
    table.string('password');
    table.string('user_role');
    table.string('fb_id');
    table.string('username', 20);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
