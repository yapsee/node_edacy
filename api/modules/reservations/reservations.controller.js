const Reservation = require("./reservations.schema")
const mongoose = require('mongoose');

module.exports.findAllReservations = async (req, res) => {
  const reservations = await Reservation.find().populate('productId');
  res.send(reservations)
  
}


module.exports.findOne = async (req, res) => {
  var valid = mongoose.Types.ObjectId.isValid(req.params.id);
  if(valid){
    let reservationId = req.params.id
    let result = await Reservation.findOne({_id: reservationId}).populate('productId')
    res.send(result)
  }
  else{ 
    res.send('Please check your reservation Id')
  }
 
}

module.exports.deleteOne = async (req, res) => {
  let reservationId = req.params.id
  await Reservation.findOneAndDelete({id: reservationId})
  res.send('Deleted')
}

module.exports.insertOne =  async (req, res) => {
  let user = req.user
  let reservation = req.body
  reservation.clientId = user
  const result = await Reservation.create(reservation)
  res.send(result)
}

module.exports.updateOne = async  (req, res) => {
  var valid = mongoose.Types.ObjectId.isValid(req.params.id);
  if(valid){
    let reservationId = req.params.id
    let result = await Reservation.findOneAndUpdate({_id: reservationId}, req.body).populate('productId')
    res.send(result)
  }
  else{ 
    res.send('Please check your reservation Id')
  }
    
}
