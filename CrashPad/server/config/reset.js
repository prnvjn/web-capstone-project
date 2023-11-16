import { pool } from './database.js'
import './dotenv.js'
import { apartmentsData } from './data/seed.js'
// import { fileURLToPath } from 'url'
// import path, { dirname } from 'path'
// import fs from 'fs'

// const currentPath = fileURLToPath(import.meta.url)
// const tripsFile = fs.readFileSync(path.join(dirname(currentPath), '../config/data/data.json'))
// const tripsData = JSON.parse(tripsFile)

// const createTripsTable = async () => {
//   const createTripsTableQuery = `
//     CREATE TABLE IF NOT EXISTS trips (
//       id serial PRIMARY KEY,
//       title varchar(100) NOT NULL,
//       description varchar(500) NOT NULL,
//       img_url text NOT NULL,
//       num_days integer NOT NULL,
//       start_date date NOT NULL,
//       end_date date NOT NULL,
//       total_cost money NOT NULL
//     );
//   `

//   try {
//     const res = await pool.query(createTripsTableQuery)
//     console.log('🎉 trips table created successfully')
//   }
//   catch (err) {
//     console.error('⚠️ error creating trips table', err)
//   }
// }

// const createDestinationsTable = async () => {
//   const createDestinationsTableQuery = `
//     CREATE TABLE IF NOT EXISTS destinations (
//       id serial PRIMARY KEY,
//       destination varchar(100) NOT NULL,
//       description varchar(500) NOT NULL,
//       city varchar(100) NOT NULL,
//       country varchar(100) NOT NULL,
//       img_url text NOT NULL,
//       flag_img_url text NOT NULL
//     );
//   `

//   try {
//     const res = await pool.query(createDestinationsTableQuery)
//     console.log('🎉 destinations table created successfully')
//   }
//   catch (err) {
//     console.error('⚠️ error creating destinations table', err)
//   }
// }

// const createActivitiesTable = async () => {
//   const createActivitiesTableQuery = `
//     CREATE TABLE IF NOT EXISTS activities (
//       id serial PRIMARY KEY,
//       trip_id int NOT NULL,
//       activity varchar(100) NOT NULL,
//       num_votes integer DEFAULT 0,
//       FOREIGN KEY(trip_id) REFERENCES trips(id)
//     );
//   `

//   try {
//     const res = await pool.query(createActivitiesTableQuery)
//     console.log('🎉 activities table created successfully')
//   }
//   catch (err) {
//     console.error('⚠️ error creating activities table', err)
//   }
// }

// const createTripsDestinationsTable = async () => {
//   const createTripsDestinationsTableQuery = `
//     CREATE TABLE IF NOT EXISTS trips_destinations (
//       trip_id int NOT NULL,
//       destination_id int NOT NULL,
//       PRIMARY KEY (trip_id, destination_id),
//       FOREIGN KEY (trip_id) REFERENCES trips(id) ON UPDATE CASCADE,
//       FOREIGN KEY (destination_id) REFERENCES destinations(id) ON UPDATE CASCADE
//     );
//   `

//   try {
//     const res = await pool.query(createTripsDestinationsTableQuery)
//     console.log('🎉 trips_destinations table created successfully')
//   }
//   catch (err) {
//     console.error('⚠️ error creating trips_destinations table', err)
//   }
// }

const createUsersTable = async () => {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id serial PRIMARY KEY,
      githubid integer NOT NULL,
      username varchar(100) NOT NULL,
      avatarurl varchar(500) NOT NULL,
      accesstoken varchar(500) NOT NULL
    );
  `

  try {
    const res = await pool.query(createUsersTableQuery)
    console.log('🎉 users table created successfully')
  }
  catch (error) {
    console.error('⚠️ error creating users table', err)
  }
}
const createUsersListing = async () => {
    const createUsersListingQuery = `
    DROP TABLE IF EXISTS listings;
    CREATE TABLE listings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) NOT NULL,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL,
        bedrooms INTEGER NOT NULL,
        bathrooms INTEGER NOT NULL,
        amenities TEXT[] NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255) NOT NULL,
        age_range INTEGER[] NOT NULL,
        gender VARCHAR(10) NOT NULL,
        smoking_allowed BOOLEAN NOT NULL,
        drinking_allowed BOOLEAN NOT NULL,
        vegan_friendly BOOLEAN NOT NULL,
        pets_allowed BOOLEAN NOT NULL
      );`
      try {
            const res = await pool.query(createUsersListingQuery)
            console.log('🎉 listing table created successfully')
          }
          catch (error) {
            console.error('⚠️ error creating userlisting table', error)
          }
}
const seedUserListingTable = async () => {
  await createUsersListing()

//   tripsData.forEach((trip) => {
//     const insertQuery = {
//       text: 'INSERT INTO trips (title, description, img_url, num_days, start_date, end_date, total_cost) VALUES ($1, $2, $3, $4, $5, $6, $7)'
//     }
  
//     const values = [
//       trip.title,
//       trip.description,
//       trip.img_url,
//       trip.num_days,
//       trip.start_date,
//       trip.end_date,
//       trip.total_cost
//     ]
  apartmentsData.forEach((apt)=>{
    const insertQuery = {
        text: 'INSERT INTO listings ( user_id, name, address, price, bedrooms, bathrooms, amenities, description, image, age_range, gender, smoking_allowed, drinking_allowed, vegan_friendly, pets_allowed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) '
    }
    const values = [
        apt.user_id,apt.name,apt.address,apt.price,apt.bedrooms, apt.bathrooms,apt.amenities,apt.description, apt.image, apt.roommatePreferences.ageRange,apt.roommatePreferences.gender,apt.roommatePreferences.smokingAllowed,apt.roommatePreferences.drinkingAllowed, apt.roommatePreferences.veganFriendly, apt.roommatePreferences.petsAllowed
    ]
  
  
    try {
      pool.query(insertQuery, values)
      console.log(`✅ ${apt.name} added successfully`)
    }
    catch (err) {
      console.error('⚠️ error inserting listing', err)
    }
  
  })}



// const createTripsUsersTable = async () => {
//   const createTripsUsersTableQuery = `
//     CREATE TABLE IF NOT EXISTS trips_users (
//       trip_id int NOT NULL,
//       user_id int NOT NULL,
//       PRIMARY KEY (trip_id, user_id),
//       FOREIGN KEY (trip_id) REFERENCES trips(id) ON UPDATE CASCADE,
//       FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
//     );
//   `

//   try {
//     const res = await pool.query(createTripsUsersTableQuery)
//     console.log('🎉 trips_users table created successfully')
//   }
//   catch (error) {
//     console.error('⚠️ error creating trips_users table', error)
//   }
// }

// const createUsersTripsTable = async () => {
//   const createUsersTripsTableQuery = `
//     CREATE TABLE IF NOT EXISTS users_trips (
//       id serial PRIMARY KEY,
//       trip_id int NOT NULL,
//       username text NOT NULL,
//       FOREIGN KEY (trip_id) REFERENCES trips(id)
//     );
//   `

//   try {
//       const res = await pool.query(createUsersTripsTableQuery)
//       console.log('🎉 users_trips table created successfully')
//   } catch (err) {
//       console.error('⚠️ error creating users_trips table', err)
//   }
// }



// seedTripsTable()
// createDestinationsTable()
// createActivitiesTable()
// createTripsDestinationsTable()
createUsersTable()
seedUserListingTable()
// createTripsUsersTable()
// createUsersTripsTable()
