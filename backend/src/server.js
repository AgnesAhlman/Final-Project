import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import posterRouter from './routes/posters.routes';
import registerRouter from './routes/register.routes';
import loginRouter from './routes/login.routes';
import cartRouter from './routes/cart.routes';
import { authenticateUser } from './middleware/auth';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/final-project';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/posters', posterRouter);

app.use('/register', registerRouter);

app.use('/login', loginRouter);

app.use('/cart', authenticateUser, cartRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});