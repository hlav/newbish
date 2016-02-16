exports.up = function(knex, Promise) {
return knex.schema.table('bins', function (table) {
table.dropColumn('image');

})
};

exports.down = function(knex, Promise) {
return knex.schema.table('bins', function (table) {
  table.text('image');
})};
