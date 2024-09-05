import { Router } from 'express'
import { getArticlesHandler, postArticlesHandler, getArticleByIdHandler, putArticleByIdHandler, deleteArticleByIdHandler } from '../controllers/articles.mjs'

const articlesRouter = Router()

articlesRouter.route('/:ArticleId').get(getArticleByIdHandler).put(putArticleByIdHandler).delete(deleteArticleByIdHandler)
articlesRouter.route('/', ).get(getArticlesHandler).post(postArticlesHandler)

export default articlesRouter