import bcrypt from 'bcryptjs'
import { IUser } from './user.dto'
import { User } from '../common/models/user.model'

export const createUser = async (data: IUser) => {
    const saltRounds = 10
    const password = data.password
    const hashedPassword = bcrypt.hashSync(password, saltRounds)
    data.password = hashedPassword

    const result = await User.create(data)

    return result
}

export const getUserByEmail = async (email: string) => {
    const result = await User.findOne({ email })

    return result
}

export const getUserById = async (id: string) => {
    const result = await User.findById(id)
    return result
}
