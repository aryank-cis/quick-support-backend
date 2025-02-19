import { model, Schema } from 'mongoose'
import { ITicket, TicketPriority, TicketStatus } from '../../ticket/ticket.dto'

const ticketSchema = new Schema(
    {
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        status: {
            type: String,
            enum: TicketStatus,
        },
        priority: {
            type: String,
            enum: TicketPriority,
        },
        category: {
            type: String,
        },
        assigned_to: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        due_date: {
            type: Date,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
        attachments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Attachment',
            },
        ],
        audit_log: [
            {
                type: Schema.Types.ObjectId,
                ref: 'AuditLog',
            },
        ],
    },
    {
        timestamps: true,
    }
)

export const Ticket = model<ITicket>('Ticket', ticketSchema)
