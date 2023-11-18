import express from 'express'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import { GitHub } from './config/auth.js'
import authRoutes from './routes/auth.js'
import listingRoutes from './routes/listingRoutes.js'
const app = express()
app.use(express.json())
app.use(cors())
const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'https://?????.up.railway.app' : 'http://localhost:3000'
app.use(session({
  secret: 'codepath',
  resave: false,
  saveUninitialized: true
}))
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE,PATCH',
  credentials: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(GitHub)
passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})


app.get('/', (req, res) => {
  res.redirect('http://localhost:5173')
})

app.get('/error',(req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> something went wrong</h1>')
})

app.use('/auth', authRoutes)

app.use('/api/listings',listingRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})
// Fazeel
// import express from 'express';
// import dotenv from 'dotenv'
// import cors from 'cors';
// import CustomListingsRouter from './routes/CustomListingsRoutes.js';

// dotenv.config()

// const PORT = process.env.PORT || 5173;

// const app = express()

// app.use(express.json())
// app.use(cors());


// // Example route
// // Custom Listings route
// app.use('/api', CustomListingsRouter);



// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });