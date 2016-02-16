
exports.up = function(knex, Promise) {
 return knex.schema.table('bins', function (table) {
 table.dropColumn('upvote');

 })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('bins', function (table) {
   table.integer('upvote')
 })};
