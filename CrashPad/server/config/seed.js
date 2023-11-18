// import {pool} from './database.js'
// import '../config/dotenv.js';

// const createTables = async () => {
//     const dropTables = `
//         DROP TABLE IF EXISTS listings CASCADE;
//         DROP TABLE IF EXISTS preferences CASCADE;
//         DROP TABLE IF EXISTS users CASCADE;
//     `;

//     const userTable = `
//         CREATE TABLE IF NOT EXISTS users (
//             id SERIAL PRIMARY KEY,
//             githubid INTEGER NOT NULL,
//             username VARCHAR(100) NOT NULL,
//             avatarurl VARCHAR(500) NOT NULL,
//             accesstoken VARCHAR(500) NOT NULL
//         );
//     `;

//     const listingsTable = `
//         CREATE TABLE IF NOT EXISTS listings (
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER REFERENCES users(id) NOT NULL,
//             name VARCHAR(255) NOT NULL,
//             address VARCHAR(255) NOT NULL,
//             price INTEGER NOT NULL,
//             bedrooms INTEGER NOT NULL,
//             bathrooms INTEGER NOT NULL,
//             amenities TEXT[],
//             description TEXT NOT NULL,
//             image VARCHAR(255) ,
//             gender VARCHAR(10),
//             smoking_allowed BOOLEAN,
//             drinking_allowed BOOLEAN,
//             vegan_friendly BOOLEAN ,
//             pets_allowed BOOLEAN 
//         );
//     `;

//     const addListings = `
//     INSERT INTO listings (user_id, name, address, price, bedrooms, bathrooms, amenities, description, image, gender, smoking_allowed, drinking_allowed, vegan_friendly, pets_allowed)
// VALUES
// (1, 'Sunny Apartment in Downtown', '123 Main St, Cityville', 1200, 2, 1, '{"Wi-Fi", "Parking"}', 'A beautiful sunny apartment in the heart of downtown.', 'https://example.com/image1.jpg', 'Any', false, true, false, true),
// (1, 'Cozy Studio Near Campus', '456 College Ave, University Town', 800, 1, 1, '{"Laundry", "Air Conditioning"}', 'Perfect for students - a cozy studio close to campus and amenities.', 'https://example.com/image2.jpg', 'Female', true, false, true, false),
// (1, 'Spacious 2 Bedroom Flat', '789 Suburb Ln, Quietville', 1000, 2, 2, '{"Gym", "Pool"}', 'Spacious and quiet - ideal for families or professionals.', 'https://example.com/image3.jpg', 'Male', false, false, false, true);
//     `;

//     try {
//         // await pool.query(dropTables);
//         // await pool.query(userTable);
//         // await pool.query(listingsTable);
//         // await pool.query(addListings);
//         console.log("Tables dropped and recreated successfully.");
//     } catch (err) {
//         console.error("Error creating tables:", err);
//     } finally {
//         await pool.end();
//     }
// };

// createTables();