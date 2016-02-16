
exports.up = function(knex, Promise) {
  return knex.schema.table('kits', function (table) {
    table.text('url');
    table.string('asin');
    table.text('image')
    table.string('price')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('kits', function (table) {
  table.dropColumn('url');
  table.dropColumn('asin');
  table.dropColumn('image');
  table.dropColumn('price');
  })
};
