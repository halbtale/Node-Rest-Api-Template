import express from 'express';
import * as db from './database/connectDb';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import helmet from 'helmet';
import compression from 'compression';
import customRouter from './routes/custom-router'
import { notFoundHandler } from './controllers/not-found-handler'
import { errorHandler } from './controllers/error-handler'

export default async () => {
    // Connect Database
    await db.connect();

    // Initializate express app
    const app = express();

    // Compression
    app.use(compression());

    // Helmet Headers
    app.use(helmet());

    // Serve Static Files
    app.use(express.static(process.cwd() + '/static'));

    // Bearer token parser (optional)
    // app.use(
    //     bearerToken({
    //         cookie: {
    //             signed: true,
    //             secret: process.env.ENCRYPTION_SECRET || '',
    //             key: 'access_token',
    //         },
    //     })
    // );

    // Cors (optional)
    // app.use(cors())

    // Cors + credentials (optional)
    // app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

    // Cookie parser (optional)
    // app.use(cookieParser(process.env.ENCRYPTION_SECRET));

    // Body parser
    app.use(express.json());

    // Xss Sanitizer
    app.use(xss());

    // MongoDB Sanitizer
    app.use(mongoSanitize());

    // Csrf Protection (optional)
    // app.use(csrf({ cookie: true }));

    // Csrf Get Token Route (optional)
    // app.get(`${process.env.API_PATH}/csrftoken`, (req, res) => {
    //     return res.json({ data: req.csrfToken() });
    // });

    // Api routers
    app.use(`${process.env.API_PATH}/test`, customRouter);

    // Not found
    app.use(`${process.env.API_PATH}/`, notFoundHandler);

    // Error Handler
    app.use(errorHandler);

    // Serve SPA index.html (optional)
    // app.get('*', (req, res) => {
    //     res.sendFile(process.cwd() + '/static/index.html');
    // });

    return app;
}