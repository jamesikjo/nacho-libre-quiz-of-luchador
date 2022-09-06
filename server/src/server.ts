import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import questionsRoute from './routes/Questions';
import answerRoute from './routes/Answer';

const router = express();

/** Connect to Mongo */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Mongo connected successfully');
        StartServer();
    })
    .catch((error) => {
        console.log(error);
    });

/** Only Start Server if Mongoose Connects */
const StartServer = () => {
    /** Log the request */
    router.use((req, res, next) => {
        /** Log the req */
        console.log(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            console.log(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    /** API Rules */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); //* means requests can come from anywhere
        //what headers allowed to use
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            //if we pass options to req, it returns options we can use inside the API
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

    /**Routes */
    router.use('/questions', questionsRoute);
    router.use('/answer', answerRoute);

    /** Error handling */
    //if request does not match any route, it will go here
    router.use((req, res, next) => {
        const error = new Error('Not found');
        console.log(error);

        res.status(404).json({
            message: error.message
        });
    });

    http.createServer(router).listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
};
