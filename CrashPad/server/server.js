import express from 'express'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import { GitHub } from './config/auth.js'
import authRoutes from './routes/auth.js'
const app = express()
app.use(express.json())
app.use(cors())

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
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> Crash Pad</h1>')
})
app.get('/welcome', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> Crash Pad </h1>')
})
app.get('/error',(req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> something went wrong</h1>')
})

app.use('/auth', authRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})
