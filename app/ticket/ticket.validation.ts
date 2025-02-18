import { body, checkExact, param } from 'express-validator'
import { TicketStatus } from './ticket.dto'

export const createTicket = checkExact([
    body('creator').notEmpty(),
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('status').default(TicketStatus.OPEN),
    body('priority').optional(),
    body('category').optional(),
    body('assigned_to').optional(),
    body('due_date').optional().isDate(),
    body('attachments').optional(),
])

export const getTicketDetails = checkExact([param('id').notEmpty()])
