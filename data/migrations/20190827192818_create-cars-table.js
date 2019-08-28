
exports.up = function(knex, Promise) {
	return knex.schema.createTable('cars', tbl => {
		tbl.increments()
		tbl.text('make')
		tbl.text('vin', 17)
			.unique()
			.notNullable()
		tbl.text('model')
			.notNullable()	
		tbl.text('mileage')
			.notNullable()
		tbl.text('transmission')
		tbl.text('title')
	})
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars')
};
