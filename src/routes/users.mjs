import express from 'express'
import {getUsersHandler, postUsersHandler, getUserByIdHandler, putUserByIdHandler, deleteUserByIdHandler} from '../controllers/users.mjs'
import {validateUserPost, validateUserPut} from "../validarors/userValidator.mjs";

const usersRouter = express.Router()

usersRouter.route('/', ).get(getUsersHandler).post(validateUserPost, postUsersHandler)

usersRouter.route('/:userId').get(getUserByIdHandler).put(validateUserPut, putUserByIdHandler).delete(deleteUserByIdHandler)

export default usersRouter