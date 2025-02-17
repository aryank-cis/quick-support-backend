import { body, checkExact } from 'express-validator'

export const createUser = checkExact([
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({ min: 6 }),
    body('first_name').notEmpty(),
    body('last_name').optional(),
    body('role').optional(),
])

export const login = checkExact([
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({ min: 6 }),
])
