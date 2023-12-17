const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
// ...

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'Front-end' folder

app.use(cors());
mongoose.connect('mongodb+srv://project:project@cluster0.kos1k7l.mongodb.net/portfolio1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const contactSchema = {
    name: String,
    email: String,
    message: String,
};
const Contact = mongoose.model('Contact', contactSchema);



app.post('/add', function (req, res) {
    let newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });
    newContact.save();
    res.json({ message: 'Form submitted successfully!' });
    res.redirect('/');
});

// Add a route to serve the CSS file

app.listen(3000, function () {
    console.log('App is running on http://localhost:3000');
});
