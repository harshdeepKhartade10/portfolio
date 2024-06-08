

const express = require('express');
const fs = require('fs');
const path = require('path');
const { getCurrentTimeInIndianSystem } = require('./public/js/timeUtils'); // Import the time utility module
const app = express();

// Middleware to parse URL-encoded data from POST requests
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
// const checkpath = app.use(express.static(path.join(__dirname, 'public')));
// console.log(checkpath)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.post('/send-message', (req, res) => {
    const { fullName, email, mobileNumber, subject, message } = req.body;
    const time = getCurrentTimeInIndianSystem(); // Get current time
    const messageData = `\nFull Name: ${fullName}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nSubject: ${subject}\nMessage: ${message}\nTime: ${time}\n\n--------------------*************************-------------------------\n`;

    fs.appendFile('messages.txt', messageData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while saving your message. Please try again.');
        } else {
            res.send('<script>alert("Message sent successfully!"); window.location.href = "/";</script>');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();

// // Middleware to parse URL-encoded data from POST requests
// app.use(express.urlencoded({ extended: true }));

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index2.html'));
// });

// app.post('/send-message', (req, res) => {
//     const { fullName, email, mobileNumber, subject, message } = req.body;
//     const messageData = `Full Name: ${fullName}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nSubject: ${subject}\nMessage: ${message}\n\n--------------------*************************-------------------------\n`;

//     fs.appendFile('messages.txt', messageData, (err) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('An error occurred while saving your message. Please try again.');
//         } else {
//             res.send('<script>alert("Message sent successfully!"); window.location.href = "/";</script>');
//         }
//     });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });