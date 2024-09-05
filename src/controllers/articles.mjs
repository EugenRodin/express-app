const getArticlesHandler = (req, res) => {
    res.send('GET Users route')}
const postArticlesHandler = (req, res) => {
    res.send('GET Users route')}

// Articles by id
const getArticleByIdHandler = (req, res) => {
    const {ArticleId} = req.params
    res.send(`GET Users route ${ArticleId}`)
}
const deleteArticleByIdHandler = (req, res) => {
    const {ArticleId} = req.params
    res.send(`DELETE Users by id route with id: ${ArticleId}`)
}
const putArticleByIdHandler = (req, res) => {
    const {ArticleId} = req.params
    res.send(`PUT Users by id route with id: ${ArticleId}`)
}

export {
    getArticlesHandler,
    postArticlesHandler,
    getArticleByIdHandler,
    deleteArticleByIdHandler,
    putArticleByIdHandler
}