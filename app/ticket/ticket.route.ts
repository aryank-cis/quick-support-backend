import { Router } from 'express'
import { catchError } from '../common/middleware/catch-error.middleware'
import * as ticketController from './ticket.controller'
import * as ticketValidator from './ticket.validation'
import { authenticate } from '../common/middleware/authenticate.middleware'

const router = Router()

router
    .post(
        '/',
        authenticate,
        ticketValidator.createTicket,
        catchError,
        ticketController.createTicket
    )
    .get('/', authenticate, ticketController.getAllTickets)
    .get(
        '/:id',
        authenticate,
        ticketValidator.getTicketDetails,
        catchError,
        ticketController.getTicketDetails
    )

export default router
