import { Document, Schema } from 'mongoose'
import { BaseSchema } from '../common/dto/base.dto'

export enum TicketStatus {
    OPEN = 'OPEN',
    ASSIGNED = 'ASSIGNED',
    IN_PROGRESS = 'IN-PROGRESS',
    ON_HOLD = 'ON-HOLD',
    PARTIALLY_RESOLVED = 'PARTIALLY_RESOLVED',
    CLOSED = 'CLOSED',
}

export enum TicketPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL',
}

export interface ITicket extends BaseSchema, Document {
    creator: Schema.Types.ObjectId
    title: string
    description: string
    status: TicketStatus
    priority?: TicketPriority
    category?: string
    assigned_to?: Schema.Types.ObjectId
    due_date?: Date
    comments?: Schema.Types.ObjectId[]
    attachments?: Schema.Types.ObjectId[]
    audit_log?: Schema.Types.ObjectId[]
}
