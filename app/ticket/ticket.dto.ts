import { Document, Schema } from 'mongoose'
import { BaseSchema } from '../common/dto/base.dto'

export interface ITicket extends BaseSchema, Document {
    creator: Schema.Types.ObjectId
    title: string
    description: string
    status: string
    priority: string
    category: string
    assigned_to: Schema.Types.ObjectId
    due_date: Date
    comments: Schema.Types.ObjectId[]
    attachments: Schema.Types.ObjectId[]
    audit_log: Schema.Types.ObjectId[]
}
