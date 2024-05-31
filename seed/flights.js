
const db = require(`../db`)
const { Airport, Flight } = require(`../models`)


db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
  const DCA = await Airport.find({ name: 'Ronald Reagan Washington National' })
  const BWI = await Airport.find({ name: 'Baltimore Washington International' })
  const IAD = await Airport.find({ name: 'Dulles International' })
  const LAX = await Airport.find({ name: 'Los Angeles International' })

  const flights = [
    {
        airline: 'Spirit Airlines',
        flightNumber: 112233,
        price: 200,
        numberOfSeats: 150,
        departingAirport: LAX[0]._id,
        arrivalAirport: DCA[0]._id,
        departureDate: new Date("2024-04-05T16:00:00Z")
    },
    {
        airline: 'Delta Air Lines',
        flightNumber: 445566,
        price: 250,
        numberOfSeats: 180,
        departingAirport: DCA[0]._id,
        arrivalAirport: LAX[0]._id,
        departureDate: new Date("2024-04-10T12:30:00Z")
    },
    {
        airline: 'American Airlines',
        flightNumber: 778899,
        price: 300,
        numberOfSeats: 200,
        departingAirport: LAX[0]._id,
        arrivalAirport: IAD[0]._id,
        departureDate: new Date("2024-04-15T12:00:00Z") 
    },
    {
        airline: 'United Airlines',
        flightNumber: 112233,
        price: 280,
        numberOfSeats: 170,
        departingAirport: IAD[0]._id,
        arrivalAirport: LAX[0]._id,
        departureDate: new Date("2024-04-20T17:00:00Z") 
    },
    {
        airline: 'Southwest Airlines',
        flightNumber: 445566,
        price: 220,
        numberOfSeats: 160,
        departingAirport: BWI[0]._id,
        arrivalAirport: LAX[0]._id,
        departureDate: new Date("2024-04-25T18:30:00Z") 
    },
    {
        airline: 'JetBlue Airways',
        flightNumber: 778899,
        price: 270,
        numberOfSeats: 180,
        departingAirport: LAX[0]._id,
        arrivalAirport: DCA[0]._id,
        departureDate: new Date("2024-04-30T10:00:00Z")
    },
    {
        airline: 'Alaska Airlines',
        flightNumber: 112233,
        price: 290,
        numberOfSeats: 190,
        departingAirport: DCA[0]._id,
        arrivalAirport: LAX[0]._id,
        departureDate: new Date("2024-05-05T12:30:00Z")
    },
    {
        airline: 'Frontier Airlines',
        flightNumber: 445566,
        price: 230,
        numberOfSeats: 170,
        departingAirport: LAX[0]._id,
        arrivalAirport: BWI[0]._id,
        departureDate: new Date("2024-05-10T22:00:00Z")
    },
    {
        airline: 'Spirit Airlines',
        flightNumber: 778899,
        price: 310,
        numberOfSeats: 200,
        departingAirport: BWI[0]._id,
        arrivalAirport: LAX[0]._id,
        departureDate: new Date("2024-05-15T20:30:00Z")
    },
    {
        airline: 'American Airlines',
        flightNumber: 112233,
        price: 260,
        numberOfSeats: 180,
        departingAirport: IAD[0]._id,
        arrivalAirport: DCA[0]._id,
        departureDate: new Date("2024-05-20T13:00:00Z")
    },
    {
        airline: 'United Airlines',
        flightNumber: 445566,
        price: 240,
        numberOfSeats: 170,
        departingAirport: DCA[0]._id,
        arrivalAirport: IAD[0]._id,
        departureDate: new Date("2024-05-25T02:30:00Z") 
    }
]


await Flight.insertMany(flights)
console.log(`flights created!`)
}

const run = async () => {
await main()

db.close()
}

run()
