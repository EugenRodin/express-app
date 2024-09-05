import express from 'express'
import router from './routes/index.mjs'

const port = 3000
const app = express()

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})