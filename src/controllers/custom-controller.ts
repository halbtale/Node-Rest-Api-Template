import { RequestHandler } from 'express';

export const getStatus: RequestHandler = async (req, res) => {
    res.json({ alive: true })
}