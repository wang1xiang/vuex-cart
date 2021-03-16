const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const _products = [
  { id: 1, title: 'iPad Pro', price: 500.01 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99 }
]

app.use(express.json())

// res.json({ username: 'xiao' })
// 接受一个对象或数组，并在发送之前将其转换为JSON
app.get('/products', (req, res) => {
  res.status(200).json(_products)
})

app.get('/checkout', (req, res) => {
  res.status(200).json({
    success: Math.random() > 0.5
  })
})

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000/`)
})