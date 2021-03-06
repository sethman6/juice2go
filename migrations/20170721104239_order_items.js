exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_items', function(table) {
        table.increment('id')
        table.integer('order_id').references('orders.id')
        table.string('type')
        table.integer('quantity')
        table.string('size')
    })
}
exports.down = function(knex, Promise) {
    return nex.schema.dropTable('order_items')
};