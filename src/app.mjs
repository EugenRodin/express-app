import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'
import path from 'path'
import { fileURLToPath } from 'url'
import ejs from 'ejs'

const PORT = 3000
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.engine('html', ejs.renderFile)

app.set('view engine', 'html')


app.use(express.json())
app.use(router)
app.use(errors())
app.use(express.static(path.join(__dirname, 'public')))

app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: 'error',
      message: err.message || 'Internal server error'
    })
  } else {
    next(err)
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})