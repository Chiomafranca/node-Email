const express = require("express");
const sendEmail = require("./mail");

const app = express();

app.app(express.json());

app.post('/send-Email', async(req, res) =>{
    const {name, email} = req.body;
    const subject =  "Welcome to our website";
    const message =  "In summary, this code sets while keeping sensitive information secure through environment variables.";
    const recipients =`${name} ${email}`

    try {
        await sendEmail({subject, message, recipients});
        res.status(200).json({success: true, message: "Email sent successfully."})
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }

})