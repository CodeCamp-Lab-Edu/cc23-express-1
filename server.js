import express from "express";
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

const app = express();
const PORT = 3000

app.use(express.json())

app.get("/", (req, res)=> {
    res.end("Welcome Api")
})

app.use("/users", userRoutes)
app.use("/products", productRoutes)

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})