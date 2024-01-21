

import clipboard from 'clipboardy';
import express from 'express';
const app = express();
const port = 6464;

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const data = req.body;
        clipboard.writeSync(data.data);
        res.status(200).send('Data received and copied to clipboard');
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
