const ReservationRepository = require("./reservations.repository")

const reservations = [
    {
    id: 1,
    cliendId: 300,
    productId: 1,
    count: 1,
    amount: 600
  },
  {
    id: 2,
    cliendId: 3,
    productId: 3,
    count: 1,
    amount: 50
  },

]


module.exports.findAllReservations = (req, res) => {
  res.send(reservations.map((reservation) => new ReservationRepository(reservation)))
}

module.exports.findOne = (req, res) =>{

  let reservationId = req.params.id
  let reservation = reservations.find((reser) => reser.id == reservationId)
  res.send(new ReservationRepository(reservation))
}

module.exports.deleteOne = (req, res) =>{
  index = reservations.findIndex((reser) =>reser.id == req.params.id )
  reservations.splice(index, 1)
  res.send('Deleted')
}

module.exports.insertOne =  (req, res) => {
  let user = req.user
  let reservation = {...req.body, clientId: user.id}
  reservations.push(reservation);
  res.send(reservation)
}

module.exports.updateOne =  (req, res) => {
  index = reservations.findIndex((reser) =>reser.id == req.params.id )                    
  reservation = reservations[index]= {...reservations[index], ...req.body};
  res.send(reservation)
}
