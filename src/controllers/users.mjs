// Users
const getUsersHandler = (req, res) => {
    res.send('GET Users route')
}

const postUsersHandler = (req, res) => {
    res.send('POST Users route')
}

// Users by id
const getUserByIdHandler = (req, res) => {
    const {userId} = req.params
    res.send(`GET Users route ${userId}`)
}
const deleteUserByIdHandler = (req, res) => {
    const {userId} = req.params
    res.send(`DELETE Users by id route with id: ${userId}`)
}
const putUserByIdHandler = (req, res) => {
    const {userId} = req.params
    res.send(`PUT Users by id route with id: ${userId}`)
}

export {
    getUsersHandler,
    postUsersHandler,
    getUserByIdHandler,
    deleteUserByIdHandler,
    putUserByIdHandler
}