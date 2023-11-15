import express from 'express'
import listingController from '../controllers/listingController.js'

const router = express.Router()

router.get('/',listingController.getAllListings)

export default router