const db = require(`../db`)
const { Airport } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {

  const airports = [
    {
        name: 'Ronald Reagan Washington National',
        location: 'Arlington, VA',
        code: 'DCA'
    },
    {
        name: 'Baltimore Washington International',
        location: 'Baltimore, MD',
        code: 'BWI'

    },
    {
        name: 'Dulles International',
        location: 'Dulles, VA',
        code: 'IAD'

    },
    {
        name: 'Los Angeles International',
        location: 'Los Angeles, CA ',
        code: 'LAX'

    }
  ]

  await Airport.insertMany(airports)
  console.log(`Created airports!`)
}
const run = async () => {
  await main()
  db.close()
}

run()