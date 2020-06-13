export default class extends Error {
    constructor(message: string, public statusCode: number = 500) {
        super(message);
    }
}
