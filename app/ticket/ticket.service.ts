import { ITicket } from './ticket.dto'
import { Ticket } from '../common/models/ticket.model'

export const createTicket = async (data: ITicket) => {
    const result = await Ticket.create(data)
    return result
}

export const getAllTickets = async () => {
    const result = await Ticket.find({})
    return result
}

export const getTicketDetails = async (id: string) => {
    const result = await Ticket.findById(id)
    return result
}
