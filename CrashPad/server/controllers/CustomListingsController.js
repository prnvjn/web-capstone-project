import { pool } from '../config/database.js';
import 'dotenv/config'

export const getCustomListings = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM listings');
        console.log(result.rows); 
      res.json(result.rows);
    } catch (error) {
      console.error(error);
        res.status(500).send('Server Error');
        res.status(500).send(error.message);
    }
};
  
export const getListingbyId = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM listings WHERE id = $1', [req.params.id]);
        console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
        res.status(500).send(error.message);
    }
};

export const deleteItem = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM listings WHERE id = $1', [req.params.id]);
        console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
        res.status(500).send(error.message);
    }
};

// INSERT INTO listings (user_id, name, address, price, bedrooms, bathrooms, amenities, description, image, gender, smoking_allowed, drinking_allowed, vegan_friendly, pets_allowed)

export const createListing = async (req, res) => {
    const {
        user_id, name, address, price, bedrooms, 
        bathrooms, amenities, description, image, 
        gender, smoking_allowed, drinking_allowed, 
        vegan_friendly, pets_allowed
    } = req.body;

    const query = `
        INSERT INTO listings (
            user_id, name, address, price, bedrooms, bathrooms, 
            amenities, description, image, gender, smoking_allowed, 
            drinking_allowed, vegan_friendly, pets_allowed
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *;
    `;

    const values = [
        user_id, name, address, price, bedrooms, 
        bathrooms, amenities, description, image, 
        gender, smoking_allowed, drinking_allowed, 
        vegan_friendly, pets_allowed
    ];

    try {
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const updateListing = async (req, res) => {
    const id = req.params.id; // Assuming the listing's ID is passed as a URL parameter
    const {
        name, address, price, bedrooms, 
        bathrooms, amenities, description, image, 
        gender, smoking_allowed, drinking_allowed, 
        vegan_friendly, pets_allowed
    } = req.body;

    const query = `
        UPDATE listings SET
            name = $1,
            address = $2,
            price = $3,
            bedrooms = $4,
            bathrooms = $5,
            amenities = $6,
            description = $7,
            image = $8,
            gender = $9,
            smoking_allowed = $10,
            drinking_allowed = $11,
            vegan_friendly = $12,
            pets_allowed = $13
        WHERE id = $14
        RETURNING *;
    `;

    const values = [
        name, address, price, bedrooms, 
        bathrooms, amenities, description, image, 
        gender, smoking_allowed, drinking_allowed, 
        vegan_friendly, pets_allowed, id
    ];

    try {
        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            return res.status(404).send('Listing not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};