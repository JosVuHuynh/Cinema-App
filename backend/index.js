import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import movieRoute from './routes/movies.js'
import listRoute from './routes/lists.js'
const app = express()

dotenv.config()
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// Connec to MongoDB
mongoose.connect('mongodb://localhost:27017/cinema', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => console.log("DB connection successful"))
    .catch((err) => console.log(err))

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)


app.listen(8800, () => {
    console.log("Backend server is running!")
})

