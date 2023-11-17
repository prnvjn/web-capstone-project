import { pool } from "../config/database.js";

const getAllListings = async (req,res) =>{
    try {
        const results = await pool.query('SELECT * FROM listings ORDER BY id DESC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
      }
}
  
 const getListingbyuserID = async (req, res) => {

    try {
        const result = await pool.query('SELECT * FROM listings WHERE user_id = $1', [req.params.userId]);
        // console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
        res.status(500).send(error.message);
    }
};




export default {
    getAllListings,getListingbyuserID
}