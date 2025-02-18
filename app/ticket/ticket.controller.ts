import { Request, Response } from 'express'
import { createResponse } from '../common/helper/response.helper'
import asyncHandler from 'express-async-handler'
import * as ticketService from './ticket.service'

export const createTicket = asyncHandler(
    async (req: Request, res: Response) => {
        const result = await ticketService.createTicket(req.body)
        res.send(createResponse(result, 'Ticket created successfully'))
    }
)

export const getAllTickets = asyncHandler(
    async (req: Request, res: Response) => {
        const result = await ticketService.getAllTickets()
        res.send(createResponse(result))
    }
)

export const getTicketDetails = asyncHandler(
    async (req: Request, res: Response) => {
        const result = await ticketService.getTicketDetails(req.params.id)
        res.send(createResponse(result))
    }
)
