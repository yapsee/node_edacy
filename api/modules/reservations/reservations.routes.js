module.exports = function(app){

  const Ctrl = require('./reservations.controller')

  app.route('/reservations')
  .get(Ctrl.findAllReservations)
  .post(Ctrl.insertOne);

 app.route('/reservations/:id')
  .put(Ctrl.updateOne)
  .get(Ctrl.findOne)
  .delete(Ctrl.deleteOne)
}