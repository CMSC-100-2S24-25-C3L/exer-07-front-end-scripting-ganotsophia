import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the "static files" folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('static files/index.html'));
});

app.listen(3000, () => {
    console.log('Server started at 3000');
});
