
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'renter',
          password: 'password',
          role: 1
      
        },
        {
          id: 2,
          username: 'lender',
          password: 'password',
          role: 2
        }

      ]);
    });
};
