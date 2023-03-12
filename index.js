import express from 'express';

const app = express();
app.use(express.json());

const reqItem = (req, res, next) => {
    console.log('reqItem');
    next();
}
app.use(reqItem)

app.get('/health', (req, res) => {
    return res.json({
        message: 'Server is started'
    });
});


app.post('/cartoon', (req, res) => {
    console.log('this is cartoon APIs ')
    return res.json({
        message: 'cartoon added successfully !'
    });
})

app.post('/feedBack', (req, res) => {
    return res.json({
        message: 'feedBack send successfully !'
    })
})
app.listen(5000, () => {
    console.log('server is listening  on port 5000 ');
})
