import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

// Initialisation Express
const app = express();

dotenv.config()

// Prise en charge du JSON.
app.use(bodyParser.json({ limit: '30mb', extended: true }));
// Prise en charge des formulaires HTML.
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Initialisation du middleware CORS
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// const CONNECTION_URL =
// 	'mongodb+srv://prestaverse:prestaverse123@cluster0.cnad8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.REACT_APP_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
