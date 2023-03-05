const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 4000;
const app = express();

app.use(cors())

connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@tracker-mern.hhckawj.mongodb.net/?retryWrites=true&w=majority')
            .then(() => { console.log("MongoDB connection is successful") })

    } catch (error) {
        console.log(error)
    }

}

connectDatabase();

app.get('/', (req, res) => {
    res.send("asdasd")
})

app.listen(PORT, () => {
    console.log('Server is running!')
})
