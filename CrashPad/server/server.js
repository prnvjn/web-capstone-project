import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import CustomListingsRouter from './routes/CustomListingsRoutes.js';

dotenv.config()

const PORT = process.env.PORT || 5173;

const app = express()

app.use(express.json())
app.use(cors());


// Example route
// Custom Listings route
app.use('/api', CustomListingsRouter);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});