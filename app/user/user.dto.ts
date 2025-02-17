import { Document } from 'mongoose'
import { BaseSchema } from '../common/dto/base.dto'

export interface IUser extends BaseSchema, Document {
    email: string
    password: string
    first_name: string
    last_name?: string
    role?: string
}
