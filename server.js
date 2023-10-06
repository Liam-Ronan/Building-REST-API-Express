import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express()
const PORT = 3000;

//Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
})

//BodyParser Setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Serving static files
app.use(express.static('public/images'))

routes(app);

app.get('/', (req, res) => {
    res.send(`node and express server is running on ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your Server is running on ${PORT}`);
})

