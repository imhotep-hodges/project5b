import mongoose from 'mongoose';
import cors from 'cors';
import express, { json } from 'express';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);
app.use(json());
app.use(cors());

const CONNECTION_URL = "mongodb+srv://larryhadmin:Bingo2021@cluster0.iihlr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);