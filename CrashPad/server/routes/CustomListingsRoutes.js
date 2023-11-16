import express from 'express';
import * as CustomListingsController from '../controllers/CustomListingsController.js';

const router = express.Router();

router.get('/view-listings', CustomListingsController.getCustomListings);
router.get('/listings/:id', CustomListingsController.getListingbyId);
router.put('/edit-listing/:id', CustomListingsController.updateListing);
router.delete('/listings/:id', CustomListingsController.deleteItem);
router.post('/add-listing', CustomListingsController.createListing);

export default router;