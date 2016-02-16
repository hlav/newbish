
exports.up = function(knex, Promise) {
return knex.schema.table('ventures', function (table) {
  table.string('image');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('ventures', function (table) {
  table.dropColumn('image');
  })
};
