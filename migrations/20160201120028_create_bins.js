
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bins', function(table){
    table.increments();
    table.integer('venture_id');
    table.integer('user_id');
    table.text('title');
    table.text('description');
    table.text('advice');
    table.integer('experience');
    table.integer('upvote');
    table.text('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bins');
};
