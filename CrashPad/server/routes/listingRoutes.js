import express from 'express'
import listingController from '../controllers/listingController.js'

const router = express.Router()

router.get('/',listingController.getAllListings)
router.get('/user/:userId',listingController.getListingbyuserID)
router.get('/:id',listingController.getListingbyId)
router.post('/add-listing', listingController.createListing);
router.put('/edit-listing/:id', listingController.updateListing);

router.delete('/delete/:id', listingController.deleteItem);
export default router