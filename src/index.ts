import express from 'express';
import login from './routes/login';
import home from './routes/home';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(login)
app.use(home)

app.get('/ping', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});