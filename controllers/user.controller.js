import { users } from '../data/users.js'

export function getUsers(req, res) {
    res.json(users)
}