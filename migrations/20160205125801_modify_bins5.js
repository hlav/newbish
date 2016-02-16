exports.up = function(knex, Promise) {
 return knex.schema.table('bins', function (table) {
   table.text('image').defaultTo('https://s3-us-west-2.amazonaws.com/testphotosnoobish/logo.png');
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('bins', function (table) {
 table.dropColumn('image');


 })};
