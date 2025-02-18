import express from 'express'
import userRoutes from './user/user.route'
import ticketRoutes from './ticket/ticket.route'

// routes
const router = express.Router()

router.use('/users', userRoutes)
router.use('/tickets', ticketRoutes)

export default router
