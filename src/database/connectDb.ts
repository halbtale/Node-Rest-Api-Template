import mongoose from 'mongoose';
const DB = process.env.DATABASE_URL;


export async function connect() {
    try {
        console.log('Connecting to database');

        await mongoose.connect(DB!, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log('Connected');
    } catch (error) {
        console.log(error);
    }
}
