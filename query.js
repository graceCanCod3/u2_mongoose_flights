const db = require(`./db`)
const { Airport, Flight } = require(`./models`)

//Read
const readIndex = async () => {
    const flights = await Flight.find({})
  const airports = await Airport.find({})
  console.log(airports, flights)
}

//Create
const createFlights = async () => {
    const BWI = await Airport.find({ name: 'Baltimore Washington International' })
    const LAX = await Airport.find({ name: 'Los Angeles International' })
    const airport = await Airport.findOne()

 let newFlight = await Flight.create({
    airline: `United Airlines`,
    flightNumber: 889900,
    price: 450,
    numberOfSeats: 150,
    departingAirport: LAX[0]._id,
    arrivalAirport: BWI[0]._id,
    departureDate: new Date("2024-05-18T16:00:00Z"),
  })
  console.log(newFlight)
}
//Update
const updateFlight = async () => {
  const updated = await Flight.updateOne(
      { airline: 'American Airlines' },
      { flightNumber: 789789 }
  )
  console.log(updated)
}

//Delete
const deleteFlight = async () => {
  let deleted = await Flight.deleteOne({ flightNumber: 987987})
  console.log(deleted)
}

async function main() {
  try {
    await readIndex()
    await createFlights()
    await updateFlight()
    await deleteFlight()
   await findData()

  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()