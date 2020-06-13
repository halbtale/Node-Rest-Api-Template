import app from './app';

app().then(app => {
    app.listen(process.env.PORT, () => {
        console.log(`App running on port ${process.env.PORT}...`);
    });
})
