import express from 'express'
import listingController from '../controllers/listingController.js'

const router = express.Router()

router.get('/',listingController.getAllListings)
router.get('/user/:userId',listingController.getListingbyuserID)

export default router