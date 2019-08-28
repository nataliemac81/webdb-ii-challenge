
exports.seed = function(knex, Promise
  ) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Toyota', model:'Camry', mileage:'16379', vin:'54730264811198632', transmission:'AT', title:'clean'},
        {make: 'Toyota', model:'Prius', mileage:'34484', vin:'38492678420984631'},
        {make: 'Fiat', model:'500x', mileage:'22944', vin:'38303710139402777'},
      ]);
    });
};
