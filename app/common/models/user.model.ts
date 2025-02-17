import { model, Schema } from 'mongoose'
import { IUser } from '../../user/user.dto'

const userSchema = new Schema(
    {
        email: { type: String, unique: true },
        password: { type: String, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String },
        role: { type: String },
        tickets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Ticket',
            },
        ],
    },
    {
        timestamps: true,
    }
)

export const User = model<IUser>('User', userSchema)
